import codecs
import os
import sys
import json
import time
import base64
import hashlib
from datetime import datetime
from typing import Union, List, Dict, Any, Optional
from fastapi import FastAPI, Request, Response, HTTPException, status
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from ecdsa import VerifyingKey, BadSignatureError
from ecdsa.util import sigdecode_der, sigdecode_string
from ecies import encrypt as ecies_encrypt
import uvicorn
import asyncio
import platform
import psutil
import aiohttp
import socket
import subprocess
import shlex
from fastapi import BackgroundTasks
from croniter import croniter
from collections import deque
from contextlib import asynccontextmanager
from pydantic import BaseModel, Field, RootModel, ConfigDict
from fastapi import Body, Depends, Query
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

class SResponse(BaseModel):
    status: str = Field(codecs.decode('\\u006f\\u006b', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')])

class CountResponse(SResponse):
    count: int = Field(..., examples=[0])

class BaseInfoResponse(BaseModel):
    arch: str = Field(..., description=codecs.decode('\\u0043\\u0050\\u0055\\u67b6\\u6784', 'unicode_escape'), examples=[codecs.decode('\\u0078\\u0038\\u0036\\u005f\\u0036\\u0034', 'unicode_escape')])
    cpu_cores: int = Field(..., description=codecs.decode('\\u0043\\u0050\\u0055\\u6838\\u5fc3\\u6570', 'unicode_escape'), examples=[4])
    cpu_name: str = Field(..., description=codecs.decode('\\u0043\\u0050\\u0055\\u578b\\u53f7', 'unicode_escape'), examples=[codecs.decode('\\u0049\\u006e\\u0074\\u0065\\u006c\\u0028\\u0052\\u0029\\u0020\\u0058\\u0065\\u006f\\u006e\\u0028\\u0052\\u0029\\u0020\\u0043\\u0050\\u0055\\u0020\\u0040\\u0020\\u0032\\u002e\\u0032\\u0030\\u0047\\u0048\\u007a', 'unicode_escape')])
    disk_total: int = Field(..., description=codecs.decode('\\u78c1\\u76d8\\u603b\\u5bb9\\u91cf\\u0028\\u5b57\\u8282\\u0029', 'unicode_escape'), examples=[48360738816])
    gpu_name: str = Field(codecs.decode('', 'unicode_escape'), description=codecs.decode('\\u0047\\u0050\\u0055\\u578b\\u53f7', 'unicode_escape'), examples=[codecs.decode('\\u004e\\u0056\\u0049\\u0044\\u0049\\u0041\\u0020\\u0047\\u0065\\u0046\\u006f\\u0072\\u0063\\u0065\\u0020\\u0052\\u0054\\u0058\\u0020\\u0033\\u0030\\u0039\\u0030', 'unicode_escape')])
    ipv4: Optional[str] = Field(None, description=codecs.decode('\\u0049\\u0050\\u0076\\u0034\\u5730\\u5740', 'unicode_escape'), examples=[codecs.decode('\\u0031\\u0039\\u0032\\u002e\\u0031\\u0036\\u0038\\u002e\\u0031\\u002e\\u0031\\u0030\\u0030', 'unicode_escape')])
    ipv6: Optional[str] = Field(None, description=codecs.decode('\\u0049\\u0050\\u0076\\u0036\\u5730\\u5740', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0030\\u0031\\u003a\\u0064\\u0062\\u0038\\u003a\\u003a\\u0031', 'unicode_escape')])
    mem_total: int = Field(..., description=codecs.decode('\\u5185\\u5b58\\u603b\\u91cf\\u0028\\u5b57\\u8282\\u0029', 'unicode_escape'), examples=[8589934592])
    os: str = Field(..., description=codecs.decode('\\u64cd\\u4f5c\\u7cfb\\u7edf\\u540d\\u79f0', 'unicode_escape'), examples=[codecs.decode('\\u0055\\u0062\\u0075\\u006e\\u0074\\u0075\\u0020\\u0032\\u0032\\u002e\\u0030\\u0034', 'unicode_escape')])
    kernel_version: str = Field(..., description=codecs.decode('\\u5185\\u6838\\u7248\\u672c', 'unicode_escape'), examples=[codecs.decode('\\u0035\\u002e\\u0031\\u0035\\u002e\\u0030\\u002d\\u0037\\u0036\\u002d\\u0067\\u0065\\u006e\\u0065\\u0072\\u0069\\u0063', 'unicode_escape')])
    swap_total: int = Field(..., description=codecs.decode('\\u4ea4\\u6362\\u5206\\u533a\\u603b\\u91cf\\u0028\\u5b57\\u8282\\u0029', 'unicode_escape'), examples=[0])
    version: str = Field(..., description=codecs.decode('\\u4ee3\\u7406\\u7248\\u672c', 'unicode_escape'), examples=[codecs.decode('\\u0030\\u002e\\u0030\\u002e\\u0031', 'unicode_escape')])
    virtualization: str = Field(..., description=codecs.decode('\\u865a\\u62df\\u5316\\u73af\\u5883', 'unicode_escape'), examples=[codecs.decode('\\u004e\\u006f\\u006e\\u0065', 'unicode_escape')])
    session_key: bytes = Field(..., description=codecs.decode('\\u672c\\u6b21\\u4f1a\\u8bdd\\u7684\\u52a8\\u6001\\u0020\\u0041\\u0045\\u0053\\u002d\\u0032\\u0035\\u0036\\u0020\\u5bc6\\u94a5\\u0020\\u0028\\u660e\\u6587\\uff0c\\u7531\\u4e2d\\u95f4\\u4ef6\\u8d1f\\u8d23\\u52a0\\u5bc6\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u006b\\u0037\\u0042\\u0076\\u0039\\u002e\\u002e\\u002e\\u0033\\u0032\\u4f4d\\u5bc6\\u94a5\\u5b57\\u7b26\\u4e32\\u6216\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape')])

class StatusResponse(BaseModel):
    cpu: Dict[str, float] = Field(..., description=codecs.decode('\\u0043\\u0050\\u0055\\u4f7f\\u7528\\u7387', 'unicode_escape'), examples=[{codecs.decode('\\u0075\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): 12.5}])
    ram: Dict[str, int] = Field(..., description=codecs.decode('\\u5185\\u5b58\\u4fe1\\u606f', 'unicode_escape'), examples=[{codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 8589934592, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 4000000000}])
    swap: Dict[str, int] = Field(..., description=codecs.decode('\\u4ea4\\u6362\\u5206\\u533a\\u4fe1\\u606f', 'unicode_escape'), examples=[{codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}])
    load: Dict[str, float] = Field(..., description=codecs.decode('\\u7cfb\\u7edf\\u8d1f\\u8f7d', 'unicode_escape'), examples=[{codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031', 'unicode_escape'): 0.5, codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0035', 'unicode_escape'): 0.4, codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031\\u0035', 'unicode_escape'): 0.3}])
    disk: Dict[str, int] = Field(..., description=codecs.decode('\\u78c1\\u76d8\\u4fe1\\u606f', 'unicode_escape'), examples=[{codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 48360738816, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 30000000000}])
    network: Dict[str, int] = Field(..., description=codecs.decode('\\u7f51\\u7edc\\u7edf\\u8ba1', 'unicode_escape'), examples=[{codecs.decode('\\u0075\\u0070', 'unicode_escape'): 1024, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 2048, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0055\\u0070', 'unicode_escape'): 1000000, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0044\\u006f\\u0077\\u006e', 'unicode_escape'): 2000000}])
    connections: Dict[str, int] = Field(..., description=codecs.decode('\\u8fde\\u63a5\\u6570', 'unicode_escape'), examples=[{codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'): 20, codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape'): 5}])
    uptime: int = Field(..., description=codecs.decode('\\u8fd0\\u884c\\u65f6\\u95f4\\u0028\\u79d2\\u0029', 'unicode_escape'), examples=[3600])
    process: int = Field(..., description=codecs.decode('\\u8fdb\\u7a0b\\u6570\\u91cf', 'unicode_escape'), examples=[150])
    message: str = Field(codecs.decode('', 'unicode_escape'), description=codecs.decode('\\u9644\\u52a0\\u6d88\\u606f', 'unicode_escape'), examples=[codecs.decode('', 'unicode_escape')])

class ExecResponse(BaseModel):
    result: str = Field(..., description=codecs.decode('\\u547d\\u4ee4\\u8f93\\u51fa\\u0028\\u0073\\u0074\\u0064\\u006f\\u0075\\u0074\\u002b\\u0073\\u0074\\u0064\\u0065\\u0072\\u0072\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0020\\u0034\\u000a\\u0064\\u0072\\u0077\\u0078\\u0072\\u002d\\u0078\\u0072\\u002d\\u0078\\u002e\\u002e\\u002e', 'unicode_escape')])
    exitcode: int = Field(..., description=codecs.decode('\\u9000\\u51fa\\u7801\\u0020\\u0028\\u0030\\u003d\\u6210\\u529f\\u002c\\u0020\\u0031\\u0032\\u0034\\u003d\\u8d85\\u65f6\\u002c\\u0020\\u0031\\u0032\\u0037\\u003d\\u672a\\u627e\\u5230\\u0029', 'unicode_escape'), examples=[0])
    timeout: bool = Field(..., description=codecs.decode('\\u662f\\u5426\\u56e0\\u8d85\\u65f6\\u88ab\\u7ec8\\u6b62', 'unicode_escape'), examples=[False])
    cmd: str = Field(..., description=codecs.decode('\\u5b9e\\u9645\\u6267\\u884c\\u7684\\u547d\\u4ee4', 'unicode_escape'), examples=[codecs.decode('\\u006c\\u0073\\u0020\\u002d\\u006c\\u0061\\u0020\\u002f\\u0074\\u006d\\u0070', 'unicode_escape')])

class ExecRequestJSON(BaseModel):
    cmd: str = Field(..., description=codecs.decode('\\u8981\\u6267\\u884c\\u7684\\u547d\\u4ee4', 'unicode_escape'), examples=[codecs.decode('\\u006c\\u0073\\u0020\\u002d\\u006c\\u0061\\u0020\\u002f\\u0074\\u006d\\u0070', 'unicode_escape'), codecs.decode('\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e\\u0020\\u002d\\u002d\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')])
    cwd: Optional[str] = Field(None, description=codecs.decode('\\u5de5\\u4f5c\\u76ee\\u5f55', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070', 'unicode_escape'), codecs.decode('\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u006f\\u0067', 'unicode_escape')])
    env: Optional[Dict[str, str]] = Field(None, description=codecs.decode('\\u989d\\u5916\\u73af\\u5883\\u53d8\\u91cf', 'unicode_escape'), examples=[{codecs.decode('\\u0050\\u0041\\u0054\\u0048', 'unicode_escape'): codecs.decode('\\u002f\\u0075\\u0073\\u0072\\u002f\\u0062\\u0069\\u006e', 'unicode_escape'), codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'): codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')}])

class FileListRequest(BaseModel):
    path: str = Field(codecs.decode('\\u002e', 'unicode_escape'), description=codecs.decode('\\u8981\\u5217\\u51fa\\u7684\\u76ee\\u5f55\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070', 'unicode_escape'), codecs.decode('\\u002e', 'unicode_escape'), codecs.decode('\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u006f\\u0067', 'unicode_escape')])
    recursive: bool = Field(False, description=codecs.decode('\\u662f\\u5426\\u9012\\u5f52\\u5217\\u51fa\\u5b50\\u76ee\\u5f55', 'unicode_escape'), examples=[True, False])

class FileInfo(BaseModel):
    name: str
    path: str
    type: str
    size: int
    mtime: str
    mode: str
    mode_octal: str
    owner: str

class FileListResponse(CountResponse):
    files: List[FileInfo]

class AuthorityQueryRequest(BaseModel):
    paths: List[str] = Field(..., description=codecs.decode('\\u8981\\u67e5\\u8be2\\u6743\\u9650\\u7684\\u6587\\u4ef6\\u002f\\u76ee\\u5f55\\u8def\\u5f84\\u5217\\u8868', 'unicode_escape'), examples=[[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0074\\u0065\\u0073\\u0074\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'), codecs.decode('\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u006f\\u0067', 'unicode_escape')]])

class AuthorityInfo(BaseModel):
    path: str
    name: str
    mode: str
    mode_octal: str
    type: str
    readable: bool
    writable: bool
    executable: bool

class AuthorityQueryResponse(SResponse):
    files: List[AuthorityInfo]

class AuthoritySetRequest(BaseModel):
    permissions: Dict[str, str] = Field(..., description=codecs.decode('\\u8def\\u5f84\\u5230\\u6743\\u9650\\u6a21\\u5f0f\\u7684\\u6620\\u5c04', 'unicode_escape'), examples=[{codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0074\\u0065\\u0073\\u0074\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u0036\\u0034\\u0034', 'unicode_escape'), codecs.decode('\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073', 'unicode_escape'): codecs.decode('\\u0037\\u0035\\u0035', 'unicode_escape')}])
    recursive: bool = Field(False, description=codecs.decode('\\u662f\\u5426\\u9012\\u5f52\\u5e94\\u7528\\u5230\\u5b50\\u76ee\\u5f55', 'unicode_escape'), examples=[True, False])

class AuthorityResult(BaseModel):
    path: str
    requested: str
    applied: str
    mode_octal: str
    status: str

class AuthoritySetResponse(SResponse):
    total: int
    success: int
    results: List[AuthorityResult]

class FileCatRequest(BaseModel):
    path: str = Field(..., description=codecs.decode('\\u8981\\u67e5\\u770b\\u7684\\u6587\\u4ef6\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u002e\\u006a\\u0073\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u002f\\u0076\\u0061\\u0072\\u002f\\u006c\\u006f\\u0067\\u002f\\u0073\\u0079\\u0073\\u006c\\u006f\\u0067', 'unicode_escape')])

class FileCatResponse(SResponse):
    path: str
    content: str
    encoding: str
    is_binary: bool
    size: int

class FileUploadRequest(BaseModel):
    path: str = Field(..., description=codecs.decode('\\u4e0a\\u4f20\\u76ee\\u6807\\u76ee\\u5f55\\u6216\\u6587\\u4ef6\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u0073', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006e\\u0065\\u0077\\u0066\\u0069\\u006c\\u0065\\u002e\\u0074\\u0078\\u0074', 'unicode_escape')])
    filename: Optional[str] = Field(None, description=codecs.decode('\\u6587\\u4ef6\\u540d\\u0020\\u0028\\u5f53\\u0070\\u0061\\u0074\\u0068\\u662f\\u76ee\\u5f55\\u65f6\\u5fc5\\u586b\\u0029', 'unicode_escape'), examples=[codecs.decode('\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002e\\u0074\\u0061\\u0072\\u002e\\u0067\\u007a', 'unicode_escape')])
    content: str = Field(..., description=codecs.decode('\\u6587\\u4ef6\\u5185\\u5bb9\\u7684\\u0042\\u0061\\u0073\\u0065\\u0036\\u0034\\u7f16\\u7801', 'unicode_escape'), examples=[codecs.decode('\\u0053\\u0047\\u0056\\u0073\\u0062\\u0047\\u0038\\u0067\\u0056\\u0032\\u0039\\u0079\\u0062\\u0047\\u0051\\u0068', 'unicode_escape')])
    chunk_id: Optional[int] = Field(None, description=codecs.decode('\\u5206\\u5757\\u7d22\\u5f15\\u0020\\u0028\\u0030\\u002d\\u0062\\u0061\\u0073\\u0065\\u0064\\u0029', 'unicode_escape'), examples=[0])
    total_chunks: Optional[int] = Field(None, description=codecs.decode('\\u603b\\u5206\\u5757\\u6570', 'unicode_escape'), examples=[3])

class FileUploadResponse(SResponse):
    path: Optional[str] = None
    received: Optional[int] = None
    total: Optional[int] = None
    chunked: Optional[bool] = None

class FileDownloadRequest(BaseModel):
    path: str = Field(..., description=codecs.decode('\\u8981\\u4e0b\\u8f7d\\u7684\\u6587\\u4ef6\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002e\\u0074\\u0061\\u0072\\u002e\\u0067\\u007a', 'unicode_escape')])

class FileDeleteRequest(BaseModel):
    paths: List[str] = Field(..., description=codecs.decode('\\u8981\\u5220\\u9664\\u7684\\u6587\\u4ef6\\u002f\\u76ee\\u5f55\\u8def\\u5f84\\u5217\\u8868', 'unicode_escape'), examples=[[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u006c\\u006f\\u0067', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u0063\\u0061\\u0063\\u0068\\u0065', 'unicode_escape')]])
    path: Optional[str] = Field(None, exclude=True)
    path2: Optional[str] = Field(None, exclude=True)

class FileDeleteResult(BaseModel):
    path: str
    status: str

class FileDeleteResponse(BaseModel):
    status: str
    results: List[FileDeleteResult]

class FileMoveRequest(BaseModel):
    move_map: Dict[str, str] = Field(..., description=codecs.decode('\\u6e90\\u8def\\u5f84\\u5230\\u76ee\\u6807\\u8def\\u5f84\\u7684\\u6620\\u5c04', 'unicode_escape'), examples=[{codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape')}])
    path: Optional[str] = Field(None, exclude=True)
    mvpath: Optional[str] = Field(None, exclude=True)

class FileMoveResult(BaseModel):
    from_field: str = Field(..., alias=codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'))
    to: str
    status: str
    model_config = ConfigDict(populate_by_name=True)

class FileMoveResponse(BaseModel):
    status: str
    total: int
    success: int
    results: List[Dict[str, str]]

class FileMkdirRequest(BaseModel):
    path: str = Field(..., description=codecs.decode('\\u8981\\u521b\\u5efa\\u7684\\u65b0\\u76ee\\u5f55\\u8def\\u5f84', 'unicode_escape'), examples=[codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006e\\u0065\\u0077\\u002f\\u0070\\u0072\\u006f\\u006a\\u0065\\u0063\\u0074\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape')])

class FileMkdirResponse(BaseModel):
    status: str
    path: str

class OneTimeTaskGetResponse(BaseModel):
    status: str = Field(codecs.decode('\\u006f\\u006b', 'unicode_escape'), description=codecs.decode('\\u8bf7\\u6c42\\u72b6\\u6001', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    count: int = Field(..., description=codecs.decode('\\u5f85\\u6267\\u884c\\u4efb\\u52a1\\u7684\\u6570\\u91cf', 'unicode_escape'), examples=[2])
    tasks: List[str] = Field(..., description=codecs.decode('\\u5f85\\u6267\\u884c\\u7684\\u4efb\\u52a1\\u547d\\u4ee4\\u5217\\u8868', 'unicode_escape'), examples=[[codecs.decode('\\u0065\\u0063\\u0068\\u006f\\u0020\\u0027\\u0069\\u006e\\u0069\\u0074\\u0027', 'unicode_escape'), codecs.decode('\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0073\\u0065\\u0074\\u0075\\u0070\\u002e\\u0073\\u0068', 'unicode_escape')]])

class OneTimeTaskRequest(RootModel):
    root: List[str]

class OneTimeTaskResponse(CountResponse):
    tasks: List[str]
    executed: Optional[List[Any]] = None

class CronTasksResponse(CountResponse):
    tasks: Dict[str, str] = Field(..., description=codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u8868\\u8fbe\\u5f0f\\u4e0e\\u547d\\u4ee4\\u7684\\u6620\\u5c04\\u5b57\\u5178', 'unicode_escape'), examples=[{codecs.decode('\\u002a\\u002f\\u0031\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a', 'unicode_escape'): codecs.decode('\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e\\u0020\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068\\u005f\\u0063\\u0068\\u0065\\u0063\\u006b\\u002e\\u0070\\u0079', 'unicode_escape')}])

class BaseLogEntry(BaseModel):
    ts: str = Field(..., description=codecs.decode('\\u6267\\u884c\\u65f6\\u95f4\\u6233', 'unicode_escape'), examples=[codecs.decode('\\u0032\\u0030\\u0032\\u0034\\u002d\\u0030\\u0031\\u002d\\u0031\\u0035\\u0054\\u0031\\u0030\\u003a\\u0033\\u0030\\u003a\\u0034\\u0035\\u005a', 'unicode_escape')])
    cmd: str = Field(..., description=codecs.decode('\\u6267\\u884c\\u7684\\u547d\\u4ee4', 'unicode_escape'))
    output: str = Field(..., description=codecs.decode('\\u547d\\u4ee4\\u8f93\\u51fa\\u5185\\u5bb9', 'unicode_escape'))
    exitcode: int = Field(..., description=codecs.decode('\\u9000\\u51fa\\u7801', 'unicode_escape'))
    type: str = Field(..., description=codecs.decode('\\u65e5\\u5fd7\\u7c7b\\u578b', 'unicode_escape'))
    formatted: Optional[str] = Field(None, description=codecs.decode('\\u683c\\u5f0f\\u5316\\u540e\\u7684\\u6458\\u8981', 'unicode_escape'))

class CronLogEntry(BaseLogEntry):
    cron: str = Field(..., description=codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u0020\\u8868\\u8fbe\\u5f0f', 'unicode_escape'), examples=[codecs.decode('\\u002a\\u002f\\u0035\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a', 'unicode_escape')])

class TaskLogResponse(CountResponse):
    logs: List[Any]

class LogClearResponse(SResponse):
    cleared: str = Field(..., description=codecs.decode('\\u88ab\\u6e05\\u7a7a\\u7684\\u65e5\\u5fd7\\u7c7b\\u578b', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape')])

class LogStats(BaseModel):
    total_logged: int
    max_capacity: int
    recent_success: int
    recent_failed: int

class LogSummaryResponse(BaseModel):
    onetime: LogStats
    cron: LogStats

class OnetimeStatus(BaseModel):
    pending: bool = Field(..., description=codecs.decode('\\u662f\\u5426\\u6709\\u5f85\\u6267\\u884c\\u7684\\u4efb\\u52a1', 'unicode_escape'), examples=[False])
    count: int = Field(..., description=codecs.decode('\\u5f85\\u6267\\u884c\\u4efb\\u52a1\\u6570\\u91cf', 'unicode_escape'), examples=[3])

class CronStatus(BaseModel):
    active: bool = Field(..., description=codecs.decode('\\u5b9a\\u65f6\\u4efb\\u52a1\\u8c03\\u5ea6\\u5668\\u662f\\u5426\\u5904\\u4e8e\\u6d3b\\u8dc3\\u72b6\\u6001', 'unicode_escape'), examples=[True])
    count: int = Field(..., description=codecs.decode('\\u5f53\\u524d\\u914d\\u7f6e\\u7684\\u5b9a\\u65f6\\u4efb\\u52a1\\u6570\\u91cf', 'unicode_escape'), examples=[2])
    check_interval: int = Field(..., description=codecs.decode('\\u68c0\\u67e5\\u95f4\\u9694\\u0028\\u79d2\\u0029', 'unicode_escape'), examples=[30])

class TaskStatusResponse(BaseModel):
    onetime: OnetimeStatus
    cron: CronStatus

class OnetimeExecuteResponse(BaseModel):
    status: str = Field(codecs.decode('\\u006f\\u006b', 'unicode_escape'), examples=[codecs.decode('\\u006f\\u006b', 'unicode_escape')])
    message: Optional[str] = Field(None, description=codecs.decode('\\u72b6\\u6001\\u8bf4\\u660e', 'unicode_escape'))
    executed: int = Field(..., description=codecs.decode('\\u6210\\u529f\\u89e6\\u53d1\\u7684\\u4efb\\u52a1\\u6570\\u91cf', 'unicode_escape'), examples=[2])
    results: List[Dict[str, Any]] = Field(..., description=codecs.decode('\\u6bcf\\u4e2a\\u4efb\\u52a1\\u7684\\u8be6\\u7ec6\\u6267\\u884c\\u7ed3\\u679c', 'unicode_escape'), examples=[[{codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): codecs.decode('\\u0065\\u0063\\u0068\\u006f\\u0020\\u0027\\u0068\\u0065\\u006c\\u006c\\u006f\\u0027', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0074\\u0064\\u006f\\u0075\\u0074', 'unicode_escape'): codecs.decode('\\u0068\\u0065\\u006c\\u006c\\u006f\\u000a', 'unicode_escape'), codecs.decode('\\u0073\\u0074\\u0064\\u0065\\u0072\\u0072', 'unicode_escape'): codecs.decode('', 'unicode_escape')}]])
_BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def _get_config_value(key: str, default: str=codecs.decode('', 'unicode_escape'), file_path: str=None) -> str:
    env_value = os.getenv(key)
    if env_value is not None:
        return env_value.strip()
    if file_path:
        full_path = os.path.join(_BASE_DIR, file_path)
        if os.path.exists(full_path):
            try:
                with open(full_path, codecs.decode('\\u0072', 'unicode_escape'), encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) as f:
                    file_value = f.read().strip()
                    if file_value:
                        return file_value
            except Exception:
                pass
    return default.strip() if default else codecs.decode('', 'unicode_escape')

class Config:
    Rtimeout = int(os.getenv(codecs.decode('\\u0045\\u0058\\u0045\\u0043\\u005f\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054', 'unicode_escape'), codecs.decode('\\u0033\\u0030', 'unicode_escape')))
    EXEC_SHELL_MODE = os.getenv(codecs.decode('\\u0045\\u0058\\u0045\\u0043\\u005f\\u0053\\u0048\\u0045\\u004c\\u004c', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
    DEBUG = os.getenv(codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
    TIMESTAMP_WINDOW = int(os.getenv(codecs.decode('\\u0054\\u0049\\u004d\\u0045\\u0053\\u0054\\u0041\\u004d\\u0050\\u005f\\u0057\\u0049\\u004e\\u0044\\u004f\\u0057', 'unicode_escape'), codecs.decode('\\u0033\\u0030', 'unicode_escape')))
    ECDSA_PUBLIC_KEY_PEM = _get_config_value(key=codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059', 'unicode_escape'), file_path=codecs.decode('\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u002e\\u0070\\u0065\\u006d', 'unicode_escape')) or codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u516c\\u94a5\\u5185\\u5bb9', 'unicode_escape')
    ECIES_PUBLIC_KEY_PEM = _get_config_value(key=codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059', 'unicode_escape'), file_path=codecs.decode('\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u002e\\u0062\\u0036\\u0034', 'unicode_escape')) or codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u516c\\u94a5\\u5185\\u5bb9', 'unicode_escape')
    _raw_key = get_random_bytes(32)
    SESSION_KEY = base64.b64encode(_raw_key).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
    FILE_ROOT = os.getenv(codecs.decode('\\u0046\\u0049\\u004c\\u0045\\u005f\\u0052\\u004f\\u004f\\u0054', 'unicode_escape'), os.path.expanduser(codecs.decode('\\u007e', 'unicode_escape')))
    MAX_UPLOAD_SIZE = int(os.getenv(codecs.decode('\\u004d\\u0041\\u0058\\u005f\\u0055\\u0050\\u004c\\u004f\\u0041\\u0044\\u005f\\u0053\\u0049\\u005a\\u0045', 'unicode_escape'), codecs.decode('\\u0031\\u0030\\u0034\\u0038\\u0035\\u0037\\u0036\\u0030\\u0030', 'unicode_escape')))
    FOLLOW_SYMLINKS = os.getenv(codecs.decode('\\u0046\\u004f\\u004c\\u004c\\u004f\\u0057\\u005f\\u0053\\u0059\\u004d\\u004c\\u0049\\u004e\\u004b\\u0053', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
    FILE_AUDIT_LOG = os.getenv(codecs.decode('\\u0046\\u0049\\u004c\\u0045\\u005f\\u0041\\u0055\\u0044\\u0049\\u0054\\u005f\\u004c\\u004f\\u0047', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
    InitTask: bool = True
    onetasks: List[str] = []
    crontasks: Dict[str, str] = {}
    cronloop: bool = False
    TASK_TIMEOUT = int(os.getenv(codecs.decode('\\u0054\\u0041\\u0053\\u004b\\u005f\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054', 'unicode_escape'), codecs.decode('\\u0033\\u0030\\u0030', 'unicode_escape')))
    CRON_CHECK_INTERVAL = int(os.getenv(codecs.decode('\\u0043\\u0052\\u004f\\u004e\\u005f\\u0049\\u004e\\u0054\\u0045\\u0052\\u0056\\u0041\\u004c', 'unicode_escape'), codecs.decode('\\u0033\\u0030', 'unicode_escape')))
    onetimetasks_log: List[Dict[str, Any]] = []
    crontasks_log: List[Dict[str, Any]] = []
    MAX_TASK_LOG_SIZE = int(os.getenv(codecs.decode('\\u004d\\u0041\\u0058\\u005f\\u0054\\u0041\\u0053\\u004b\\u005f\\u004c\\u004f\\u0047', 'unicode_escape'), codecs.decode('\\u0031\\u0030\\u0030', 'unicode_escape')))
    HOST = os.getenv(codecs.decode('\\u0048\\u004f\\u0053\\u0054', 'unicode_escape'), codecs.decode('\\u0030\\u002e\\u0030\\u002e\\u0030\\u002e\\u0030', 'unicode_escape'))
    PORT = int(os.getenv(codecs.decode('\\u0050\\u004f\\u0052\\u0054', 'unicode_escape')) or os.environ.get(codecs.decode('\\u0053\\u0045\\u0052\\u0056\\u0045\\u0052\\u005f\\u0050\\u004f\\u0052\\u0054', 'unicode_escape')) or 8002)
    AGENT_VERSION = os.getenv(codecs.decode('\\u0041\\u0047\\u0045\\u004e\\u0054\\u005f\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e', 'unicode_escape'), codecs.decode('\\u0030\\u002e\\u0030\\u002e\\u0031\\u002d\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e', 'unicode_escape'))

    @classmethod
    def fn_1(cls):
        if not cls.DEBUG:
            errors = []
            if not cls.ECDSA_PUBLIC_KEY_PEM:
                errors.append(codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003a\\u0020\\u672a\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u4e14\\u6587\\u4ef6\\u0020\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0064\\u0073\\u0061\\u005f\\u0070\\u0075\\u0062\\u002e\\u0070\\u0065\\u006d\\u0020\\u4e0d\\u5b58\\u5728', 'unicode_escape'))
            else:
                try:
                    CryptoManager._load_ecdsa_pubkey(cls.ECDSA_PUBLIC_KEY_PEM)
                except Exception as e:
                    errors.append(codecs.decode('\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
            if not cls.ECIES_PUBLIC_KEY_PEM:
                errors.append(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003a\\u0020\\u672a\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u4e14\\u6587\\u4ef6\\u0020\\u006b\\u0065\\u0079\\u0073\\u002f\\u0061\\u0067\\u0065\\u006e\\u0074\\u005f\\u0065\\u0063\\u0069\\u0065\\u0073\\u005f\\u0070\\u0075\\u0062\\u002e\\u0062\\u0036\\u0034\\u0020\\u4e0d\\u5b58\\u5728', 'unicode_escape'))
            else:
                try:
                    CryptoManager.fn_7(cls.ECIES_PUBLIC_KEY_PEM)
                except Exception as e:
                    errors.append(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u0020\\u0069\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))
            if errors:
                Logger.fn_6(codecs.decode('\\u274c\\u0020\\u914d\\u7f6e\\u6821\\u9a8c\\u5931\\u8d25\\u0020\\u0028\\u975e\\u0044\\u0045\\u0042\\u0055\\u0047\\u6a21\\u5f0f\\u5fc5\\u987b\\u914d\\u7f6e\\u5bc6\\u94a5\\u0029\\u003a', 'unicode_escape'))
                for err in errors:
                    Logger.fn_6(codecs.decode('\\u0020\\u0020\\u0020\\u2022\\u0020', 'unicode_escape') + str(err))
                Logger.fn_4(codecs.decode('\\u000a\\U0001f4a1\\u0020\\u89e3\\u51b3\\u65b9\\u6cd5\\u003a', 'unicode_escape'))
                Logger.fn_4(codecs.decode('\\u0020\\u0020\\u0020\\u0031\\u002e\\u0020\\u8bbe\\u7f6e\\u73af\\u5883\\u53d8\\u91cf\\u003a\\u0020\\u0065\\u0078\\u0070\\u006f\\u0072\\u0074\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u005f\\u0050\\u0055\\u0042\\u004b\\u0045\\u0059\\u003d\\u0027\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u002e\\u002e\\u002e\\u0027', 'unicode_escape'))
                Logger.fn_4(codecs.decode('\\u0020\\u0020\\u0020\\u0032\\u002e\\u0020\\u6216\\u5c06\\u5bc6\\u94a5\\u6587\\u4ef6\\u653e\\u5165\\u0020\\u002e\\u002f\\u006b\\u0065\\u0079\\u0073\\u002f\\u0020\\u76ee\\u5f55\\u0020\\u0028\\u8fd0\\u884c\\u0020\\u0067\\u0065\\u006e\\u0065\\u0072\\u0061\\u0074\\u0065\\u005f\\u006b\\u0065\\u0079\\u0073\\u002e\\u0070\\u0079\\u0020\\u751f\\u6210\\u0029', 'unicode_escape'))
                sys.exit(1)

class Logger:
    if Config.DEBUG:
        _log_level = 1
    else:
        _log_level = 0

    @classmethod
    def fn_2(cls, level: int):
        cls._log_level = level

    @classmethod
    def _log(cls, message: str, level: str=codecs.decode('\\u0049\\u004e\\u0046\\u004f', 'unicode_escape')):
        if cls._log_level == 0 and level != codecs.decode('\\u0045\\u0052\\u0052\\u004f\\u0052', 'unicode_escape'):
            return
        timestamp = datetime.now().strftime(codecs.decode('\\u0025\\u0059\\u002d\\u0025\\u006d\\u002d\\u0025\\u0064\\u0020\\u0025\\u0048\\u003a\\u0025\\u004d\\u003a\\u0025\\u0053', 'unicode_escape'))
        log_message = codecs.decode('\\u005b', 'unicode_escape') + str(timestamp) + codecs.decode('\\u005d\\u0020\\u005b', 'unicode_escape') + str(level) + codecs.decode('\\u005d\\u0020', 'unicode_escape') + str(message)
        if level == codecs.decode('\\u0045\\u0052\\u0052\\u004f\\u0052', 'unicode_escape'):
            print(log_message, file=sys.stderr)
        else:
            print(log_message)

    @classmethod
    def fn_3(cls, message: str, debug_level: int=1):
        if cls._log_level == debug_level:
            cls._log(message, codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'))

    @classmethod
    def fn_4(cls, message: str):
        cls._log(message, codecs.decode('\\u0049\\u004e\\u0046\\u004f', 'unicode_escape'))

    @classmethod
    def fn_5(cls, message: str):
        cls._log(message, codecs.decode('\\u0057\\u0041\\u0052\\u004e\\u0049\\u004e\\u0047', 'unicode_escape'))

    @classmethod
    def fn_6(cls, message: str):
        cls._log(message, codecs.decode('\\u0045\\u0052\\u0052\\u004f\\u0052', 'unicode_escape'))

class CryptoManager:

    def __init__(self, ecdsa_pubkey_pem: str, ecies_pubkey_b64: str):
        self.ecdsa_vk = self._load_ecdsa_pubkey(ecdsa_pubkey_pem)
        self.ecies_pubkey = None
        if ecies_pubkey_b64 and ecies_pubkey_b64.strip():
            raw = ecies_pubkey_b64.strip()
            try:
                if len(raw) > 32 and (not all((c in codecs.decode('\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046', 'unicode_escape') for c in raw))):
                    self.ecies_pubkey = base64.b64decode(raw)
                else:
                    self.ecies_pubkey = bytes.fromhex(raw)
            except Exception:
                self.ecies_pubkey = raw.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')) if isinstance(raw, str) else raw
            if len(self.ecies_pubkey) not in (33, 65):
                Logger.fn_5(codecs.decode('\\u26a0\\ufe0f\\u0020\\u0020\\u8b66\\u544a\\u003a\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u516c\\u94a5\\u957f\\u5ea6\\u5f02\\u5e38\\u0020\\u0028', 'unicode_escape') + str(len(self.ecies_pubkey)) + codecs.decode('\\u5b57\\u8282\\u0029\\u002c\\u0020\\u52a0\\u5bc6\\u53ef\\u80fd\\u5931\\u8d25', 'unicode_escape'))

    @staticmethod
    def _load_ecdsa_pubkey(pem_or_der: str) -> VerifyingKey:
        import binascii
        pubkey_str = pem_or_der.strip()
        if codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d', 'unicode_escape') in pubkey_str:
            try:
                return VerifyingKey.from_pem(pubkey_str)
            except Exception as e:
                raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0050\\u0045\\u004d\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        if codecs.decode('\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e', 'unicode_escape') not in pubkey_str:
            try:
                der_str = codecs.decode('', 'unicode_escape').join(pubkey_str.split())
                der_bytes = base64.b64decode(der_str, validate=True)
                return VerifyingKey.from_der(der_bytes)
            except (binascii.Error, ValueError):
                pass
            except Exception as e:
                raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0044\\u0045\\u0052\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0028\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0029\\u003a\\u0020', 'unicode_escape') + str(e))
        try:
            return VerifyingKey.from_der(pubkey_str.encode(codecs.decode('\\u006c\\u0061\\u0074\\u0069\\u006e\\u0031', 'unicode_escape')))
        except Exception:
            pass
        raise ValueError(codecs.decode('\\u0046\\u0061\\u0069\\u006c\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u006c\\u006f\\u0061\\u0064\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u002e\\u0020\\u0050\\u006c\\u0065\\u0061\\u0073\\u0065\\u0020\\u0063\\u0068\\u0065\\u0063\\u006b\\u003a\\u000a\\u0031\\u002e\\u0020\\u004b\\u0065\\u0079\\u0020\\u006d\\u0075\\u0073\\u0074\\u0020\\u0062\\u0065\\u0020\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0044\\u0053\\u0041\\u0020\\u0028\\u0050\\u002d\\u0032\\u0035\\u0036\\u002f\\u004e\\u0049\\u0053\\u0054\\u0032\\u0035\\u0036\\u0070\\u0020\\u0072\\u0065\\u0063\\u006f\\u006d\\u006d\\u0065\\u006e\\u0064\\u0065\\u0064\\u0029\\u000a\\u0032\\u002e\\u0020\\u0050\\u0045\\u004d\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u0020\\u0073\\u0068\\u006f\\u0075\\u006c\\u0064\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0020\\u0077\\u0069\\u0074\\u0068\\u0020\\u0027\\u002d\\u002d\\u002d\\u002d\\u002d\\u0042\\u0045\\u0047\\u0049\\u004e\\u0020\\u0050\\u0055\\u0042\\u004c\\u0049\\u0043\\u0020\\u004b\\u0045\\u0059\\u002d\\u002d\\u002d\\u002d\\u002d\\u0027\\u000a\\u0033\\u002e\\u0020\\u004f\\u0072\\u0020\\u0070\\u0072\\u006f\\u0076\\u0069\\u0064\\u0065\\u0020\\u0072\\u0061\\u0077\\u0020\\u0044\\u0045\\u0052\\u0020\\u0061\\u0073\\u0020\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067\\u000a\\u0050\\u0072\\u006f\\u0076\\u0069\\u0064\\u0065\\u0064\\u0020\\u006b\\u0065\\u0079\\u0020\\u0070\\u0072\\u0065\\u0076\\u0069\\u0065\\u0077\\u003a\\u0020', 'unicode_escape') + str(pubkey_str[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))

    @staticmethod
    def fn_7(pubkey_b64: str) -> bytes:
        if not pubkey_b64 or not pubkey_b64.strip():
            raise ValueError(codecs.decode('\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u0069\\u0073\\u0020\\u0065\\u006d\\u0070\\u0074\\u0079', 'unicode_escape'))
        raw = pubkey_b64.strip()
        try:
            if len(raw) > 32 and (not all((c in codecs.decode('\\u0030\\u0031\\u0032\\u0033\\u0034\\u0035\\u0036\\u0037\\u0038\\u0039\\u0061\\u0062\\u0063\\u0064\\u0065\\u0066\\u0041\\u0042\\u0043\\u0044\\u0045\\u0046', 'unicode_escape') for c in raw))):
                candidate = codecs.decode('', 'unicode_escape').join(raw.split())
                key_bytes = base64.b64decode(candidate, validate=True)
            else:
                key_bytes = bytes.fromhex(raw)
        except Exception as e:
            raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u003a\\u0020', 'unicode_escape') + str(e))
        if len(key_bytes) not in (33, 65):
            raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0045\\u0043\\u0049\\u0045\\u0053\\u0020\\u0070\\u0075\\u0062\\u006c\\u0069\\u0063\\u0020\\u006b\\u0065\\u0079\\u0020\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068\\u0020', 'unicode_escape') + str(len(key_bytes)) + codecs.decode('\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073\\u003b\\u0020\\u0065\\u0078\\u0070\\u0065\\u0063\\u0074\\u0065\\u0064\\u0020\\u0033\\u0033\\u0020\\u006f\\u0072\\u0020\\u0036\\u0035\\u0020\\u0062\\u0079\\u0074\\u0065\\u0073', 'unicode_escape'))
        return key_bytes

    def fn_8(self, nonce: str, timestamp: str, auth_token: str) -> bool:
        try:
            ts = int(timestamp)
            now = int(time.time())
            if abs(now - ts) > Config.TIMESTAMP_WINDOW:
                raise ValueError(codecs.decode('\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u0020\\u0065\\u0078\\u0070\\u0069\\u0072\\u0065\\u0064\\u003a\\u0020\\u0064\\u0069\\u0066\\u0066\\u003d', 'unicode_escape') + str(abs(now - ts)) + codecs.decode('\\u0073\\u0020\\u003e\\u0020', 'unicode_escape') + str(Config.TIMESTAMP_WINDOW) + codecs.decode('\\u0073', 'unicode_escape'))
        except ValueError as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        message = (str(nonce) + str(timestamp)).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        hash_obj = hashlib.sha256(message)
        Logger.fn_3(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065\\u003a\\u0020', 'unicode_escape') + str(nonce) + str(timestamp))
        Logger.fn_3(codecs.decode('\\u005b\\u0042\\u0061\\u0063\\u006b\\u0065\\u006e\\u0064\\u005d\\u0020\\u0053\\u0048\\u0041\\u0032\\u0035\\u0036\\u003a\\u0020', 'unicode_escape') + str(hash_obj.hexdigest()))
        try:
            signature = base64.b64decode(auth_token)
            sig_length = len(signature)
            if sig_length == 64:
                decode_method = sigdecode_string
                Logger.fn_3(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u4fa6\\u6d4b\\u5230\\u0020\\u0052\\u0061\\u0077\\u0020\\u683c\\u5f0f\\u7b7e\\u540d', 'unicode_escape'))
            elif sig_length > 64 and signature[0] == 48:
                decode_method = sigdecode_der
                Logger.fn_3(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u005d\\u0020\\u4fa6\\u6d4b\\u5230\\u0020\\u0044\\u0045\\u0052\\u0020\\u683c\\u5f0f\\u7b7e\\u540d', 'unicode_escape'))
            else:
                decode_method = sigdecode_der
            self.ecdsa_vk.verify(signature, message, hashfunc=hashlib.sha256, sigdecode=decode_method)
        except BadSignatureError:
            Logger.fn_6(codecs.decode('\\u274c\\u0020\\u7b7e\\u540d\\u9a8c\\u8bc1\\u5931\\u8d25\\u003a\\u0020\\u574f\\u7b7e\\u540d', 'unicode_escape'))
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020\\u0062\\u0061\\u0064\\u0020\\u0073\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065', 'unicode_escape'))
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020', 'unicode_escape') + str(str(e)))
        return True

    def fn_9(self, data: Dict[str, Any]) -> str:
        if Config.DEBUG or not self.ecies_pubkey:
            return json.dumps(data, ensure_ascii=False, default=str)
        try:
            plaintext = json.dumps(data, ensure_ascii=False, default=str).encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
            ciphertext = ecies_encrypt(self.ecies_pubkey, plaintext)
            return base64.b64encode(ciphertext).decode(codecs.decode('\\u0061\\u0073\\u0063\\u0069\\u0069', 'unicode_escape'))
        except Exception as e:
            error_data = {codecs.decode('\\u005f\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u005f\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e), codecs.decode('\\u005f\\u0072\\u0061\\u0077', 'unicode_escape'): data if Config.DEBUG else None}
            return json.dumps(error_data, ensure_ascii=False, default=str)

    def fn_10(combined_payload: str, key: bytes):
        try:
            raw_data = json.loads(base64.b64decode(combined_payload).decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
            nonce = base64.b64decode(raw_data[codecs.decode('\\u006e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape')])
            tag = base64.b64decode(raw_data[codecs.decode('\\u0074\\u0061\\u0067', 'unicode_escape')])
            ciphertext = base64.b64decode(raw_data[codecs.decode('\\u0063\\u0069\\u0070\\u0068\\u0065\\u0072\\u0074\\u0065\\u0078\\u0074', 'unicode_escape')])
            cipher = AES.new(key, AES.MODE_GCM, nonce=nonce)
            plaintext = cipher.decrypt_and_verify(ciphertext, tag)
            return plaintext.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
        except ValueError:
            Logger.fn_6(codecs.decode('\\u274c\\u0020\\u89e3\\u5bc6\\u5931\\u8d25\\uff1a\\u6570\\u636e\\u53ef\\u80fd\\u88ab\\u7be1\\u6539\\u6216\\u5bc6\\u94a5\\u9519\\u8bef', 'unicode_escape'))
            return None
        except Exception as e:
            Logger.fn_6(codecs.decode('\\u274c\\u0020\\u5f02\\u5e38\\u003a\\u0020', 'unicode_escape') + str(e))
            return None
crypto = None

def fn_11():
    global crypto
    if crypto is None:
        crypto = CryptoManager(Config.ECDSA_PUBLIC_KEY_PEM, Config.ECIES_PUBLIC_KEY_PEM)
    return crypto

class AuthEncryptMiddleware(BaseHTTPMiddleware):

    async def dispatch(self, request: Request, call_next):
        headers = request.headers
        if not Config.DEBUG and request.method not in [codecs.decode('\\u004f\\u0050\\u0054\\u0049\\u004f\\u004e\\u0053', 'unicode_escape'), codecs.decode('\\u0048\\u0045\\u0041\\u0044', 'unicode_escape')]:
            nonce = headers.get(codecs.decode('\\u0058\\u002d\\u004e\\u006f\\u006e\\u0063\\u0065', 'unicode_escape'))
            timestamp = headers.get(codecs.decode('\\u0058\\u002d\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'))
            auth_token = headers.get(codecs.decode('\\u0058\\u002d\\u0041\\u0075\\u0074\\u0068\\u002d\\u0054\\u006f\\u006b\\u0065\\u006e', 'unicode_escape'))
            Logger.fn_3(codecs.decode('\\u003d', 'unicode_escape') * 50)
            Logger.fn_3(codecs.decode('\\u005b\\u0041\\u0075\\u0074\\u0068\\u0020\\u0044\\u0065\\u0062\\u0075\\u0067\\u005d\\u0020', 'unicode_escape') + str(request.method) + codecs.decode('\\u0020', 'unicode_escape') + str(request.url.path))
            Logger.fn_3(codecs.decode('\\u0058\\u002d\\u004e\\u006f\\u006e\\u0063\\u0065\\u0020\\u0020\\u0020\\u0020\\u0020\\u003a\\u0020', 'unicode_escape') + str(nonce))
            Logger.fn_3(codecs.decode('\\u0058\\u002d\\u0054\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070\\u0020\\u003a\\u0020', 'unicode_escape') + str(timestamp))
            Logger.fn_3(codecs.decode('\\u0058\\u002d\\u0041\\u0075\\u0074\\u0068\\u002d\\u0054\\u006f\\u006b\\u0065\\u006e\\u003a\\u0020', 'unicode_escape') + str(auth_token[:30] if auth_token else 'MISSING') + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
            Logger.fn_3(codecs.decode('\\u0041\\u006c\\u006c\\u0020\\u0048\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073\\u0020\\u003a\\u0020', 'unicode_escape') + str(dict(headers)))
            Logger.fn_3(codecs.decode('\\u003d', 'unicode_escape') * 50)
            if not all([nonce, timestamp, auth_token]):
                return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004d\\u0069\\u0073\\u0073\\u0069\\u006e\\u0067\\u0020\\u0061\\u0075\\u0074\\u0068\\u0020\\u0068\\u0065\\u0061\\u0064\\u0065\\u0072\\u0073', 'unicode_escape')})
            try:
                crypto.fn_8(nonce, timestamp, auth_token)
            except Exception as e:
                return JSONResponse(status_code=status.HTTP_401_UNAUTHORIZED, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u0069\\u0067\\u006e\\u0061\\u0074\\u0075\\u0072\\u0065\\u0020\\u0076\\u0065\\u0072\\u0069\\u0066\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e))})
        decrypted_body_bytes = None
        if headers.get(codecs.decode('\\u0058\\u002d\\u0041\\u0045\\u0053\\u002d\\u0045\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')) == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'):
            original_body = await request.body()
            Logger.fn_3(original_body)
            if original_body:
                try:
                    encrypted_str = original_body.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                    decrypted_json_str = CryptoManager.fn_10(encrypted_str, Config._raw_key)
                    if Config.DEBUG:
                        Logger.fn_3(codecs.decode('\\u0020\\u005b\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u005d\\u0020\\u0053\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073\\u003a\\u0020', 'unicode_escape') + str(decrypted_json_str[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
                    json.loads(decrypted_json_str)
                    decrypted_body_bytes = decrypted_json_str.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                    request._body = decrypted_body_bytes
                except Exception as e:
                    Logger.fn_6(codecs.decode('\\U0001f4a5\\u0020\\u005b\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u005d\\u0020\\u0046\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e)))
                    return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0045\\u0053\\u0020\\u0044\\u0065\\u0063\\u0072\\u0079\\u0070\\u0074\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(str(e))})
        original_receive = request.receive
        has_returned_body = False

        async def fn_12():
            nonlocal has_returned_body
            if decrypted_body_bytes is not None:
                if not has_returned_body:
                    has_returned_body = True
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): decrypted_body_bytes, codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
                else:
                    return {codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u002e\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074', 'unicode_escape'), codecs.decode('\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): b'', codecs.decode('\\u006d\\u006f\\u0072\\u0065\\u005f\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'): False}
            else:
                return await original_receive()
        request._receive = fn_12
        try:
            response = await call_next(request)
        except Exception as exc:
            raise exc
        if response.headers.get(codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).startswith(codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006a\\u0073\\u006f\\u006e', 'unicode_escape')):
            body_parts = []
            async for chunk in response.body_iterator:
                body_parts.append(chunk)
            original_body = b''.join(body_parts)
            try:
                original_data = json.loads(original_body.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')))
                encrypted_content = crypto.fn_9(original_data)
                encoded = encrypted_content.encode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'))
                response.body_iterator = self._async_iter([encoded])
                response.headers[codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u002d\\u006c\\u0065\\u006e\\u0067\\u0074\\u0068', 'unicode_escape')] = str(len(encoded))
                if not Config.DEBUG:
                    response.headers[codecs.decode('\\u0058\\u002d\\u0045\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')] = codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')
                    response.headers[codecs.decode('\\u0058\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074\\u002d\\u0056\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape')] = Config.AGENT_VERSION
            except json.JSONDecodeError:
                pass
            except Exception:
                if Config.DEBUG:
                    raise
        return response

    @staticmethod
    async def _async_iter(items):
        for item in items:
            yield item

class SystemInfoCollector:
    VERSION = codecs.decode('\\u0030\\u002e\\u0030\\u002e\\u0031', 'unicode_escape')

    def __init__(self):
        self.last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): 0, codecs.decode('\\u0074\\u0078', 'unicode_escape'): 0}
        self.total_network_up = 0
        self.total_network_down = 0
        self.last_network_time = time.time()
        self._cpu_initialized = False
        self._cpu_init_lock = asyncio.Lock()

    async def fn_13(self) -> Dict[str, Any]:
        dist_info = self._get_linux_distribution()
        ipv4, ipv6 = await asyncio.gather(self._get_public_ip_v4(), self._get_public_ip_v6(), return_exceptions=True)
        ipv4 = ipv4 if not isinstance(ipv4, Exception) else None
        ipv6 = ipv6 if not isinstance(ipv6, Exception) else None
        if isinstance(ipv4, Exception):
            Logger.fn_3(codecs.decode('\\u83b7\\u53d6\\u0020\\u0049\\u0050\\u0076\\u0034\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ipv4), 1)
            ipv4 = None
        if isinstance(ipv6, Exception):
            Logger.fn_3(codecs.decode('\\u83b7\\u53d6\\u0020\\u0049\\u0050\\u0076\\u0036\\u0020\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(ipv6), 1)
            ipv6 = None
        os_name = str(dist_info['name']) + codecs.decode('\\u0020', 'unicode_escape') + str(dist_info['version']) if dist_info[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')] != codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape') else platform.system()
        info = {codecs.decode('\\u0061\\u0072\\u0063\\u0068', 'unicode_escape'): platform.machine(), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u0063\\u006f\\u0072\\u0065\\u0073', 'unicode_escape'): psutil.cpu_count(), codecs.decode('\\u0063\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): self._get_cpu_name(), codecs.decode('\\u0064\\u0069\\u0073\\u006b\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): await self._get_disk_total(), codecs.decode('\\u0067\\u0070\\u0075\\u005f\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0069\\u0070\\u0076\\u0034', 'unicode_escape'): ipv4, codecs.decode('\\u0069\\u0070\\u0076\\u0036', 'unicode_escape'): ipv6, codecs.decode('\\u006d\\u0065\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): psutil.virtual_memory().total, codecs.decode('\\u006f\\u0073', 'unicode_escape'): os_name, codecs.decode('\\u006b\\u0065\\u0072\\u006e\\u0065\\u006c\\u005f\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): platform.release(), codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): psutil.swap_memory().total, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): self.VERSION, codecs.decode('\\u0076\\u0069\\u0072\\u0074\\u0075\\u0061\\u006c\\u0069\\u007a\\u0061\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): self._get_virtualization()}
        Logger.fn_3(codecs.decode('\\u57fa\\u7840\\u4fe1\\u606f\\u6570\\u636e\\u003a\\u0020', 'unicode_escape') + str(json.dumps(info, indent=2)), 1)
        return info

    async def fn_14(self) -> Dict[str, Any]:
        cpu_usage = await self._get_cpu_usage()
        network_stats = await self._get_network_stats()
        memory_info = await self._get_memory_info()
        disk_info = await self._get_disk_info()
        try:
            process_count = len(psutil.pids())
        except Exception as e:
            process_count = 0
            Logger.fn_3(codecs.decode('\\u83b7\\u53d6\\u8fdb\\u7a0b\\u6570\\u5931\\u8d25\\uff1a', 'unicode_escape') + str(e), 1)
        info = {codecs.decode('\\u0063\\u0070\\u0075', 'unicode_escape'): {codecs.decode('\\u0075\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): cpu_usage}, codecs.decode('\\u0072\\u0061\\u006d', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): memory_info[codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): memory_info[codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u0073\\u0077\\u0061\\u0070', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): memory_info[codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): memory_info[codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'): {codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031', 'unicode_escape'): round(psutil.getloadavg()[0] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2), codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0035', 'unicode_escape'): round(psutil.getloadavg()[1] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2), codecs.decode('\\u006c\\u006f\\u0061\\u0064\\u0031\\u0035', 'unicode_escape'): round(psutil.getloadavg()[2] if hasattr(psutil, codecs.decode('\\u0067\\u0065\\u0074\\u006c\\u006f\\u0061\\u0064\\u0061\\u0076\\u0067', 'unicode_escape')) and psutil.getloadavg() else 0, 2)}, codecs.decode('\\u0064\\u0069\\u0073\\u006b', 'unicode_escape'): {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): disk_info[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')], codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): disk_info[codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape')]}, codecs.decode('\\u006e\\u0065\\u0074\\u0077\\u006f\\u0072\\u006b', 'unicode_escape'): {codecs.decode('\\u0075\\u0070', 'unicode_escape'): network_stats[codecs.decode('\\u0075\\u0070', 'unicode_escape')], codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): network_stats[codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape')], codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0055\\u0070', 'unicode_escape'): network_stats[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape')], codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u0044\\u006f\\u0077\\u006e', 'unicode_escape'): network_stats[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape')]}, codecs.decode('\\u0063\\u006f\\u006e\\u006e\\u0065\\u0063\\u0074\\u0069\\u006f\\u006e\\u0073', 'unicode_escape'): {codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'): await self._get_tcp_connections(), codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape'): await self._get_udp_connections()}, codecs.decode('\\u0075\\u0070\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): int(time.time() - psutil.boot_time()), codecs.decode('\\u0070\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): process_count, codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('', 'unicode_escape')}
        Logger.fn_3(codecs.decode('\\u5b9e\\u65f6\\u76d1\\u63a7\\u6570\\u636e\\u003a\\u0020', 'unicode_escape') + str(json.dumps(info, indent=2)), 2)
        return info

    def _get_cpu_name(self) -> str:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                import winreg
                key = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, codecs.decode('\\u0048\\u0041\\u0052\\u0044\\u0057\\u0041\\u0052\\u0045\\u005c\\u0044\\u0045\\u0053\\u0043\\u0052\\u0049\\u0050\\u0054\\u0049\\u004f\\u004e\\u005c\\u0053\\u0079\\u0073\\u0074\\u0065\\u006d\\u005c\\u0043\\u0065\\u006e\\u0074\\u0072\\u0061\\u006c\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u006f\\u0072\\u005c\\u0030', 'unicode_escape'))
                cpu_name = winreg.QueryValueEx(key, codecs.decode('\\u0050\\u0072\\u006f\\u0063\\u0065\\u0073\\u0073\\u006f\\u0072\\u004e\\u0061\\u006d\\u0065\\u0053\\u0074\\u0072\\u0069\\u006e\\u0067', 'unicode_escape'))[0]
                winreg.CloseKey(key)
                return cpu_name.strip()
            else:
                with open(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as f:
                    for line in f:
                        if line.strip().startswith(codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u006c\\u0020\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')):
                            return line.split(codecs.decode('\\u003a', 'unicode_escape'))[1].strip()
        except Exception as e:
            Logger.fn_3(codecs.decode('\\u83b7\\u53d6\\u0043\\u0050\\u0055\\u540d\\u79f0\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 1)
        return codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e\\u0020\\u0043\\u0050\\u0055', 'unicode_escape')

    async def _get_cpu_usage(self) -> float:
        async with self._cpu_init_lock:
            if not self._cpu_initialized:
                psutil.cpu_percent(interval=0.1)
                self._cpu_initialized = True
                return 0.0
        try:
            usage = psutil.cpu_percent(interval=None)
            return round(max(0, min(100, usage)), 2)
        except Exception as e:
            Logger.fn_3(codecs.decode('\\u83b7\\u53d6\\u0043\\u0050\\u0055\\u4f7f\\u7528\\u7387\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return 0.0

    async def _get_memory_info(self) -> Dict[str, int]:
        try:
            virtual_memory = psutil.virtual_memory()
            swap_memory = psutil.swap_memory()
            return {codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): virtual_memory.total, codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): virtual_memory.used, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): swap_memory.total, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): swap_memory.used}
        except Exception as e:
            Logger.fn_3(codecs.decode('\\u83b7\\u53d6\\u5185\\u5b58\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return {codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0061\\u006d\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0077\\u0061\\u0070\\u005f\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    def _get_physical_disk_device(self, device_path: str) -> Optional[str]:
        if platform.system() != codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape'):
            return device_path
        import re
        dev_name = device_path.replace(codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape'), codecs.decode('', 'unicode_escape'))
        if not dev_name:
            return None
        if re.match(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0041\\u002d\\u005a\\u0030\\u002d\\u0039\\u005c\\u002e\\u005c\\u002d\\u005f\\u005d\\u002b\\u003a', 'unicode_escape'), dev_name) or dev_name.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
            Logger.fn_3(codecs.decode('\\u68c0\\u6d4b\\u5230\\u8fdc\\u7a0b\\u5b58\\u50a8\\uff08\\u004e\\u0046\\u0053\\u002f\\u0043\\u0049\\u0046\\u0053\\uff09\\u003a\\u0020', 'unicode_escape') + str(device_path) + codecs.decode('\\uff0c\\u89c6\\u4e3a\\u6709\\u6548\\u78c1\\u76d8', 'unicode_escape'), 5)
            return device_path
        DEVICE_PATTERNS = [codecs.decode('\\u005e\\u0028\\u006d\\u0064\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0029\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0073\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u0078\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0029\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u006d\\u006d\\u0063\\u0062\\u006c\\u006b\\u005c\\u0064\\u002b\\u0029\\u0070\\u003f\\u005c\\u0064\\u002a\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u0028\\u006e\\u0076\\u006d\\u0065\\u005c\\u0064\\u002b\\u006e\\u005c\\u0064\\u002b\\u0029\\u0070\\u003f\\u005c\\u0064\\u002a\\u0024', 'unicode_escape')]
        for pattern in DEVICE_PATTERNS:
            m = re.match(pattern, dev_name)
            if m:
                return codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(m.group(1))
        if not re.search(codecs.decode('\\u005c\\u0064', 'unicode_escape'), dev_name):
            return device_path
        sys_block_path = codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0062\\u006c\\u006f\\u0063\\u006b\\u002f', 'unicode_escape') + str(dev_name)
        if os.path.exists(sys_block_path):
            real_parent = os.path.realpath(os.path.dirname(sys_block_path))
            real_path = os.path.realpath(sys_block_path)
            if not os.path.isdir(real_path):
                real_grandparent = os.path.dirname(real_parent)
                if real_grandparent.endswith(codecs.decode('\\u002f\\u0073\\u0079\\u0073\\u002f\\u0062\\u006c\\u006f\\u0063\\u006b', 'unicode_escape')):
                    physical_name = os.path.basename(real_parent)
                    if self._is_physical_disk(codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(physical_name)):
                        return codecs.decode('\\u002f\\u0064\\u0065\\u0076\\u002f', 'unicode_escape') + str(physical_name)
        return None

    async def _get_disk_info(self) -> Dict[str, int]:
        try:
            total_bytes = 0
            used_bytes = 0
            seen_physical_devices = set()
            partitions = psutil.disk_partitions(all=True)
            Logger.fn_3(codecs.decode('\\u83b7\\u53d6\\u5230\\u0020', 'unicode_escape') + str(len(partitions)) + codecs.decode('\\u0020\\u4e2a\\u5206\\u533a', 'unicode_escape'), 5)
            for partition in partitions:
                device = partition.device
                mountpoint = partition.mountpoint
                fstype = partition.fstype
                if fstype in {codecs.decode('\\u0074\\u006d\\u0070\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0076\\u0074\\u006d\\u0070\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u006f\\u0076\\u0065\\u0072\\u006c\\u0061\\u0079', 'unicode_escape'), codecs.decode('\\u0073\\u0071\\u0075\\u0061\\u0073\\u0068\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0070\\u0072\\u006f\\u0063', 'unicode_escape'), codecs.decode('\\u0073\\u0079\\u0073\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape'), codecs.decode('\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070\\u0032', 'unicode_escape'), codecs.decode('\\u0070\\u0073\\u0074\\u006f\\u0072\\u0065', 'unicode_escape'), codecs.decode('\\u0062\\u0070\\u0066', 'unicode_escape'), codecs.decode('\\u0074\\u0072\\u0061\\u0063\\u0065\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0073\\u0065\\u0063\\u0075\\u0072\\u0069\\u0074\\u0079\\u0066\\u0073', 'unicode_escape'), codecs.decode('\\u0065\\u0066\\u0069\\u0076\\u0061\\u0072\\u0066\\u0073', 'unicode_escape')}:
                    Logger.fn_3(codecs.decode('\\u8df3\\u8fc7\\u865a\\u62df\\u6587\\u4ef6\\u7cfb\\u7edf\\u003a\\u0020', 'unicode_escape') + str(fstype) + codecs.decode('\\u0020\\u0028\\u8bbe\\u5907\\u003a\\u0020', 'unicode_escape') + str(device) + codecs.decode('\\u002c\\u0020\\u6302\\u8f7d\\u70b9\\u003a\\u0020', 'unicode_escape') + str(mountpoint) + codecs.decode('\\u0029', 'unicode_escape'), 5)
                    continue
                physical_device = self._get_physical_disk_device(device)
                if not physical_device:
                    Logger.fn_3(codecs.decode('\\u65e0\\u6cd5\\u89e3\\u6790\\u7269\\u7406\\u78c1\\u76d8\\u8bbe\\u5907\\u540d\\uff0c\\u8df3\\u8fc7\\u5206\\u533a\\u003a\\u0020', 'unicode_escape') + str(device) + codecs.decode('\\u0020\\u0028\\u6302\\u8f7d\\u70b9\\u003a\\u0020', 'unicode_escape') + str(mountpoint) + codecs.decode('\\u0029', 'unicode_escape'), 5)
                    continue
                if physical_device in seen_physical_devices:
                    Logger.fn_3(codecs.decode('\\u7269\\u7406\\u78c1\\u76d8\\u0020', 'unicode_escape') + str(physical_device) + codecs.decode('\\u0020\\u5df2\\u5904\\u7406\\uff0c\\u8df3\\u8fc7\\u5206\\u533a\\u003a\\u0020', 'unicode_escape') + str(device) + codecs.decode('\\u0020\\u0028\\u6302\\u8f7d\\u70b9\\u003a\\u0020', 'unicode_escape') + str(mountpoint) + codecs.decode('\\u0029', 'unicode_escape'), 5)
                    continue
                if not self._is_physical_disk(physical_device):
                    Logger.fn_3(codecs.decode('\\u8bbe\\u5907\\u0020', 'unicode_escape') + str(physical_device) + codecs.decode('\\u0020\\u0028\\u6765\\u81ea\\u5206\\u533a\\u0020', 'unicode_escape') + str(device) + codecs.decode('\\u0029\\u0020\\u4e0d\\u662f\\u7269\\u7406\\u78c1\\u76d8\\uff0c\\u8df3\\u8fc7', 'unicode_escape'), 5)
                    continue
                try:
                    usage = psutil.disk_usage(mountpoint)
                    Logger.fn_3(codecs.decode('\\u7edf\\u8ba1\\u7269\\u7406\\u78c1\\u76d8\\u0020', 'unicode_escape') + str(physical_device) + codecs.decode('\\u0020\\u0028\\u6765\\u81ea\\u5206\\u533a\\u0020', 'unicode_escape') + str(device) + codecs.decode('\\u0029\\u003a\\u0020\\u6302\\u8f7d\\u70b9\\u003d', 'unicode_escape') + str(mountpoint) + codecs.decode('\\u002c\\u0020\\u603b\\u7a7a\\u95f4\\u003d', 'unicode_escape') + str(usage.total) + codecs.decode('\\u0020\\u5b57\\u8282\\u002c\\u0020\\u5df2\\u7528\\u003d', 'unicode_escape') + str(usage.used) + codecs.decode('\\u0020\\u5b57\\u8282\\u002c\\u0020\\u53ef\\u7528\\u003d', 'unicode_escape') + str(usage.free) + codecs.decode('\\u0020\\u5b57\\u8282\\u002c\\u0020\\u4f7f\\u7528\\u7387\\u003d', 'unicode_escape') + format(str(usage.percent), codecs.decode('\\u002e\\u0032\\u0066', 'unicode_escape')) + codecs.decode('\\u0025', 'unicode_escape'), 5)
                    total_bytes += usage.total
                    used_bytes += usage.used
                    Logger.fn_3(codecs.decode('\\u5f53\\u524d\\u7d2f\\u8ba1\\u7edf\\u8ba1\\u91cf\\u003a\\u0020\\u603b\\u7a7a\\u95f4\\u003d', 'unicode_escape') + str(total_bytes) + codecs.decode('\\u0020\\u5b57\\u8282\\u002c\\u0020\\u5df2\\u7528\\u003d', 'unicode_escape') + str(used_bytes) + codecs.decode('\\u0020\\u5b57\\u8282', 'unicode_escape'), 5)
                    seen_physical_devices.add(physical_device)
                except (PermissionError, OSError) as e:
                    Logger.fn_3(codecs.decode('\\u8df3\\u8fc7\\u5206\\u533a\\u0020', 'unicode_escape') + str(device) + codecs.decode('\\uff08\\u6302\\u8f7d\\u70b9\\u003a\\u0020', 'unicode_escape') + str(mountpoint) + codecs.decode('\\u002c\\u0020\\u7269\\u7406\\u78c1\\u76d8\\u003a\\u0020', 'unicode_escape') + str(physical_device) + codecs.decode('\\uff09\\u003a\\u0020', 'unicode_escape') + str(e), 5)
                    continue
            Logger.fn_3(codecs.decode('\\u78c1\\u76d8\\u7edf\\u8ba1\\u5b8c\\u6210\\u0020\\u0028\\u6309\\u7269\\u7406\\u78c1\\u76d8\\u53bb\\u91cd\\u0029\\u003a\\u0020\\u603b\\u7a7a\\u95f4\\u003d', 'unicode_escape') + str(total_bytes) + codecs.decode('\\u0020\\u5b57\\u8282\\u002c\\u0020\\u5df2\\u7528\\u003d', 'unicode_escape') + str(used_bytes) + codecs.decode('\\u0020\\u5b57\\u8282', 'unicode_escape'), 5)
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total_bytes, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): used_bytes}
        except Exception as e:
            Logger.fn_3(codecs.decode('\\u83b7\\u53d6\\u78c1\\u76d8\\u4fe1\\u606f\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 5)
            return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0075\\u0073\\u0065\\u0064', 'unicode_escape'): 0}

    async def _get_disk_total(self) -> int:
        disk_info = await self._get_disk_info()
        return disk_info[codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape')]

    def _is_physical_disk(self, device: str) -> bool:
        if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
            return any((device.lower().startswith(drive) for drive in [codecs.decode('\\u0063\\u003a', 'unicode_escape'), codecs.decode('\\u0064\\u003a', 'unicode_escape'), codecs.decode('\\u0065\\u003a', 'unicode_escape'), codecs.decode('\\u0066\\u003a', 'unicode_escape'), codecs.decode('\\u0067\\u003a', 'unicode_escape'), codecs.decode('\\u0068\\u003a', 'unicode_escape')]))
        else:
            import re
            if re.match(codecs.decode('\\u005e\\u005b\\u0061\\u002d\\u007a\\u0041\\u002d\\u005a\\u0030\\u002d\\u0039\\u005c\\u002e\\u005c\\u002d\\u005f\\u005d\\u002b\\u003a', 'unicode_escape'), device) or device.startswith(codecs.decode('\\u002f\\u002f', 'unicode_escape')):
                return True
            physical_patterns = [codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0073\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u0078\\u0076\\u0064\\u005b\\u0061\\u002d\\u007a\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006e\\u0076\\u006d\\u0065\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u006e\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006d\\u006d\\u0063\\u0062\\u006c\\u006b\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u002f\\u0064\\u0065\\u0076\\u002f\\u006d\\u0064\\u005b\\u0030\\u002d\\u0039\\u005d\\u002b\\u0024', 'unicode_escape'), codecs.decode('\\u005e\\u007a\\u0072\\u006f\\u006f\\u0074\\u002f\\u002e\\u002a\\u0024', 'unicode_escape')]
            is_physical_device = any((re.match(pattern, device) for pattern in physical_patterns))
            return is_physical_device

    async def _get_network_stats(self) -> Dict[str, int]:
        try:
            net_io = psutil.net_io_counters(pernic=True)
            current_time = time.time()
            total_current_rx = 0
            total_current_tx = 0
            exclude_patterns = [codecs.decode('\\u006c\\u006f', 'unicode_escape'), codecs.decode('\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0062\\u0072\\u002d', 'unicode_escape'), codecs.decode('\\u0074\\u0075\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0069\\u0072\\u0062\\u0072', 'unicode_escape')]
            for interface, stats in net_io.items():
                if any((pattern in interface for pattern in exclude_patterns)):
                    Logger.fn_3(codecs.decode('\\u6392\\u9664\\u865a\\u62df\\u7f51\\u5361\\u003a\\u0020', 'unicode_escape') + str(interface), 4)
                    continue
                Logger.fn_3(codecs.decode('\\u7edf\\u8ba1\\u7269\\u7406\\u7f51\\u5361\\u0020', 'unicode_escape') + str(interface) + codecs.decode('\\u003a\\u0020\\u0052\\u0058\\u003d', 'unicode_escape') + str(stats.bytes_recv) + codecs.decode('\\u002c\\u0020\\u0054\\u0058\\u003d', 'unicode_escape') + str(stats.bytes_sent), 4)
                total_current_rx += stats.bytes_recv
                total_current_tx += stats.bytes_sent
            if self.last_network_stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')] == 0:
                Logger.fn_3(codecs.decode('\\u7b2c\\u4e00\\u6b21\\u7f51\\u7edc\\u7edf\\u8ba1\\u0028\\u0070\\u0073\\u0075\\u0074\\u0069\\u006c\\u6309\\u7f51\\u5361\\u0029\\uff0c\\u521d\\u59cb\\u5316\\u603b\\u6d41\\u91cf\\u003a\\u0020\\u4e0b\\u8f7d\\u003d', 'unicode_escape') + str(total_current_rx) + codecs.decode('\\u002c\\u0020\\u4e0a\\u4f20\\u003d', 'unicode_escape') + str(total_current_tx), 4)
                self.total_network_down = total_current_rx
                self.total_network_up = total_current_tx
                self.last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): total_current_rx, codecs.decode('\\u0074\\u0078', 'unicode_escape'): total_current_tx}
                self.last_network_time = current_time
                return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): self.total_network_up, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): self.total_network_down}
            time_diff = current_time - self.last_network_time
            if time_diff > 0:
                down_speed = (total_current_rx - self.last_network_stats[codecs.decode('\\u0072\\u0078', 'unicode_escape')]) / time_diff
                up_speed = (total_current_tx - self.last_network_stats[codecs.decode('\\u0074\\u0078', 'unicode_escape')]) / time_diff
                down_speed = max(0, down_speed)
                up_speed = max(0, up_speed)
                self.total_network_down = total_current_rx
                self.total_network_up = total_current_tx
                Logger.fn_3(codecs.decode('\\u7f51\\u7edc\\u7edf\\u8ba1\\u0028\\u0070\\u0073\\u0075\\u0074\\u0069\\u006c\\u6309\\u7f51\\u5361\\u0029\\u003a\\u0020\\u4e0b\\u8f7d\\u901f\\u5ea6\\u003d', 'unicode_escape') + str(int(down_speed)) + codecs.decode('\\u0020\\u0042\\u002f\\u0073\\u002c\\u0020\\u4e0a\\u4f20\\u901f\\u5ea6\\u003d', 'unicode_escape') + str(int(up_speed)) + codecs.decode('\\u0020\\u0042\\u002f\\u0073\\u002c\\u0020\\u603b\\u4e0b\\u8f7d\\u003d', 'unicode_escape') + str(self.total_network_down) + codecs.decode('\\u002c\\u0020\\u603b\\u4e0a\\u4f20\\u003d', 'unicode_escape') + str(self.total_network_up), 4)
            self.last_network_stats = {codecs.decode('\\u0072\\u0078', 'unicode_escape'): total_current_rx, codecs.decode('\\u0074\\u0078', 'unicode_escape'): total_current_tx}
            self.last_network_time = current_time
            return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): int(up_speed), codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): int(down_speed), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): self.total_network_up, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): self.total_network_down}
        except Exception as e:
            Logger.fn_3(codecs.decode('\\u0070\\u0073\\u0075\\u0074\\u0069\\u006c\\u0020\\u6309\\u7f51\\u5361\\u7edf\\u8ba1\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 4)
            return {codecs.decode('\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0075\\u0070', 'unicode_escape'): 0, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u0064\\u006f\\u0077\\u006e', 'unicode_escape'): 0}

    async def _get_tcp_connections(self) -> int:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                result = subprocess.run([codecs.decode('\\u006e\\u0065\\u0074\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u006e', 'unicode_escape'), codecs.decode('\\u002d\\u0070', 'unicode_escape'), codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape')], capture_output=True, text=True, timeout=5)
                count = len([line for line in result.stdout.split(codecs.decode('\\u000a', 'unicode_escape')) if codecs.decode('\\u0045\\u0053\\u0054\\u0041\\u0042\\u004c\\u0049\\u0053\\u0048\\u0045\\u0044', 'unicode_escape') in line])
                return count
            else:
                connections = psutil.net_connections(kind=codecs.decode('\\u0074\\u0063\\u0070', 'unicode_escape'))
                return len([conn for conn in connections if conn.status == codecs.decode('\\u0045\\u0053\\u0054\\u0041\\u0042\\u004c\\u0049\\u0053\\u0048\\u0045\\u0044', 'unicode_escape')])
        except Exception as e:
            Logger.fn_3(codecs.decode('\\u83b7\\u53d6\\u0054\\u0043\\u0050\\u8fde\\u63a5\\u6570\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return 0

    async def _get_udp_connections(self) -> int:
        try:
            if platform.system() == codecs.decode('\\u0057\\u0069\\u006e\\u0064\\u006f\\u0077\\u0073', 'unicode_escape'):
                result = subprocess.run([codecs.decode('\\u006e\\u0065\\u0074\\u0073\\u0074\\u0061\\u0074', 'unicode_escape'), codecs.decode('\\u002d\\u006e', 'unicode_escape'), codecs.decode('\\u002d\\u0070', 'unicode_escape'), codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape')], capture_output=True, text=True, timeout=5)
                count = len([line for line in result.stdout.split(codecs.decode('\\u000a', 'unicode_escape')) if codecs.decode('\\u0055\\u0044\\u0050', 'unicode_escape') in line and line.strip()])
                return count
            else:
                connections = psutil.net_connections(kind=codecs.decode('\\u0075\\u0064\\u0070', 'unicode_escape'))
                return len(connections)
        except Exception as e:
            Logger.fn_3(codecs.decode('\\u83b7\\u53d6\\u0055\\u0044\\u0050\\u8fde\\u63a5\\u6570\\u5931\\u8d25\\u003a\\u0020', 'unicode_escape') + str(e), 2)
            return 0

    def _get_linux_distribution(self) -> Dict[str, str]:
        try:
            if platform.system() == codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape'):
                if os.path.exists(codecs.decode('\\u002f\\u0065\\u0074\\u0063\\u002f\\u006f\\u0073\\u002d\\u0072\\u0065\\u006c\\u0065\\u0061\\u0073\\u0065', 'unicode_escape')):
                    with open(codecs.decode('\\u002f\\u0065\\u0074\\u0063\\u002f\\u006f\\u0073\\u002d\\u0072\\u0065\\u006c\\u0065\\u0061\\u0073\\u0065', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as f:
                        content = f.read()
                    name = codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')
                    version = codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')
                    for line in content.split(codecs.decode('\\u000a', 'unicode_escape')):
                        if line.startswith(codecs.decode('\\u0049\\u0044\\u003d', 'unicode_escape')):
                            name = line.replace(codecs.decode('\\u0049\\u0044\\u003d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
                        elif line.startswith(codecs.decode('\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e\\u005f\\u0049\\u0044\\u003d', 'unicode_escape')):
                            version = line.replace(codecs.decode('\\u0056\\u0045\\u0052\\u0053\\u0049\\u004f\\u004e\\u005f\\u0049\\u0044\\u003d', 'unicode_escape'), codecs.decode('', 'unicode_escape')).replace(codecs.decode('\\u0022', 'unicode_escape'), codecs.decode('', 'unicode_escape')).strip()
                    return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): name, codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): version}
        except Exception:
            pass
        return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): codecs.decode('\\u0055\\u006e\\u006b\\u006e\\u006f\\u0077\\u006e', 'unicode_escape')}

    def _get_virtualization(self) -> str:
        try:
            if platform.system() == codecs.decode('\\u004c\\u0069\\u006e\\u0075\\u0078', 'unicode_escape'):
                if os.path.exists(codecs.decode('\\u002f\\u002e\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072\\u0065\\u006e\\u0076', 'unicode_escape')):
                    return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
                if os.path.exists(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0031\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape')):
                    with open(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0031\\u002f\\u0063\\u0067\\u0072\\u006f\\u0075\\u0070', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as f:
                        content = f.read()
                        if codecs.decode('\\u0064\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape') in content:
                            return codecs.decode('\\u0044\\u006f\\u0063\\u006b\\u0065\\u0072', 'unicode_escape')
                        elif codecs.decode('\\u006c\\u0078\\u0063', 'unicode_escape') in content:
                            return codecs.decode('\\u004c\\u0058\\u0043', 'unicode_escape')
                if os.path.exists(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape')):
                    with open(codecs.decode('\\u002f\\u0070\\u0072\\u006f\\u0063\\u002f\\u0063\\u0070\\u0075\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), codecs.decode('\\u0072', 'unicode_escape')) as f:
                        content = f.read()
                        if codecs.decode('\\u0051\\u0045\\u004d\\u0055', 'unicode_escape') in content or codecs.decode('\\u004b\\u0056\\u004d', 'unicode_escape') in content:
                            return codecs.decode('\\u0051\\u0045\\u004d\\u0055', 'unicode_escape')
        except Exception:
            Logger.fn_6(codecs.decode('\\u274c\\u0020\\u83b7\\u53d6\\u865a\\u62df\\u5316\\u4fe1\\u606f\\u5931\\u8d25', 'unicode_escape'))
            pass
        return codecs.decode('\\u004e\\u006f\\u006e\\u0065', 'unicode_escape')

    async def _get_public_ip_v4(self) -> Optional[str]:
        services = [codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u002e\\u0069\\u0070\\u0069\\u0066\\u0079\\u002e\\u006f\\u0072\\u0067', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0063\\u0061\\u006e\\u0068\\u0061\\u007a\\u0069\\u0070\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0063\\u0068\\u0065\\u0063\\u006b\\u0069\\u0070\\u002e\\u0061\\u006d\\u0061\\u007a\\u006f\\u006e\\u0061\\u0077\\u0073\\u002e\\u0063\\u006f\\u006d', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0066\\u0063\\u006f\\u006e\\u0066\\u0069\\u0067\\u002e\\u006d\\u0065\\u002f\\u0069\\u0070', 'unicode_escape')]
        for service in services:
            try:
                ip = await self._fetch_ip(service)
                if ip and self._is_valid_ipv4(ip):
                    return ip
            except Exception:
                continue
        return None

    async def _get_public_ip_v6(self) -> Optional[str]:
        services = [codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0061\\u0070\\u0069\\u0036\\u002e\\u0069\\u0070\\u0069\\u0066\\u0079\\u002e\\u006f\\u0072\\u0067', 'unicode_escape'), codecs.decode('\\u0068\\u0074\\u0074\\u0070\\u0073\\u003a\\u002f\\u002f\\u0069\\u0063\\u0061\\u006e\\u0068\\u0061\\u007a\\u0069\\u0070\\u002e\\u0063\\u006f\\u006d', 'unicode_escape')]
        for service in services:
            try:
                ip = await self._fetch_ip(service)
                if ip and self._is_valid_ipv6(ip):
                    return ip
            except Exception:
                continue
        return None

    async def _fetch_ip(self, url: str) -> str:
        timeout = aiohttp.ClientTimeout(total=5)
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(url, headers={codecs.decode('\\u0055\\u0073\\u0065\\u0072\\u002d\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'): self.VERSION}) as response:
                if response.status == 200:
                    return (await response.text()).strip()
                else:
                    raise Exception(codecs.decode('\\u0048\\u0054\\u0054\\u0050\\u0020', 'unicode_escape') + str(response.status))

    def _is_valid_ipv4(self, ip: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET, ip)
            return True
        except socket.fn_6:
            return False

    def _is_valid_ipv6(self, ip: str) -> bool:
        try:
            socket.inet_pton(socket.AF_INET6, ip)
            return True
        except socket.fn_6:
            return False
import os
import shutil
import stat
import hashlib
import mimetypes
import base64
import json
from pathlib import Path
from datetime import datetime
from typing import List, Dict, Optional, Union
from fastapi import HTTPException, status, UploadFile
from croniter import croniter

class FileManager:

    def __init__(self, root: str, max_upload: int=104857600, chunk_size: int=20971520, audit: bool=True):
        self.root = Path(root).resolve()
        self.max_upload = max_upload
        self.chunk_size = chunk_size
        self.audit = audit
        self.chunk_dir = self.root / codecs.decode('\\u002e\\u0070\\u0072\\u006f\\u0078\\u0079\\u005f\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape')
        self.chunk_dir.mkdir(exist_ok=True)

    def _audit(self, action: str, path: str, result: str, meta: dict=None):
        if self.audit:
            entry = {codecs.decode('\\u0074\\u0073', 'unicode_escape'): datetime.utcnow().isoformat(), codecs.decode('\\u0061\\u0063\\u0074\\u0069\\u006f\\u006e', 'unicode_escape'): action, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): path, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): result, **(meta or {})}
            if os.getenv(codecs.decode('\\u0044\\u0045\\u0042\\u0055\\u0047', 'unicode_escape'), codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape')).lower() == codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape'):
                Logger.fn_3(codecs.decode('\\U0001f4dd\\u0020\\u005b\\u0041\\u0055\\u0044\\u0049\\u0054\\u005d\\u0020', 'unicode_escape') + str(json.dumps(entry, ensure_ascii=False)))

    def _safe_path(self, user_path: str) -> Path:
        user_path = (user_path or codecs.decode('\\u002e', 'unicode_escape')).strip()
        target = Path(user_path)
        if not target.is_absolute():
            target = self.root / target
        target = target.resolve()
        try:
            target.relative_to(self.root)
        except ValueError:
            raise HTTPException(status_code=403, detail=codecs.decode('\\u0041\\u0063\\u0063\\u0065\\u0073\\u0073\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064\\u003a\\u0020\\u0027', 'unicode_escape') + str(user_path) + codecs.decode('\\u0027\\u0020\\u006f\\u0075\\u0074\\u0073\\u0069\\u0064\\u0065\\u0020\\u0072\\u006f\\u006f\\u0074\\u0020\\u0027', 'unicode_escape') + str(self.root) + codecs.decode('\\u0027', 'unicode_escape'))
        return target

    def _format_info(self, path: Path) -> dict:
        try:
            st = path.lstat() if path.is_symlink() else path.stat()
            return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): path.name, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(path.relative_to(self.root)), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): codecs.decode('\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape') if path.is_dir() else codecs.decode('\\u0073\\u0079\\u006d\\u006c\\u0069\\u006e\\u006b', 'unicode_escape') if path.is_symlink() else codecs.decode('\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): st.st_size, codecs.decode('\\u006d\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): datetime.fromtimestamp(st.st_mtime).isoformat(), codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): stat.filemode(st.st_mode), codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): oct(stat.S_IMODE(st.st_mode)), codecs.decode('\\u006f\\u0077\\u006e\\u0065\\u0072', 'unicode_escape'): str(st.st_uid) + codecs.decode('\\u003a', 'unicode_escape') + str(st.st_gid)}
        except Exception as e:
            return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): path.name, codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(path), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)}

    def fn_15(self, base_path: str, recursive: bool=False) -> dict:
        target = self._safe_path(base_path)
        if not target.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(base_path))
        if not target.is_dir():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u003a\\u0020', 'unicode_escape') + str(base_path))
        files = []
        try:
            items = target.rglob(codecs.decode('\\u002a', 'unicode_escape')) if recursive else target.iterdir()
            for item in items:
                if not recursive and item.parent != target:
                    continue
                files.append(self._format_info(item))
        except PermissionError:
            raise HTTPException(403, codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(base_path))
        files.sort(key=lambda x: (x.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')) != codecs.decode('\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079', 'unicode_escape'), x.get(codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'), codecs.decode('', 'unicode_escape')).lower()))
        self._audit(codecs.decode('\\u006c\\u0069\\u0073\\u0074', 'unicode_escape'), base_path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(files)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(files), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): files}

    def fn_16(self, paths: List[str]) -> dict:
        results = []
        for p in paths:
            try:
                target = self._safe_path(p)
                if not target.exists():
                    results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): p, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                info = self._format_info(target)
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): info[codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape')], codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): info[codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape')], codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): info.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape')), codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): info.get(codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape')), codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): info.get(codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape')), codecs.decode('\\u0072\\u0065\\u0061\\u0064\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(target, os.R_OK), codecs.decode('\\u0077\\u0072\\u0069\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(target, os.W_OK), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0061\\u0062\\u006c\\u0065', 'unicode_escape'): os.access(target, os.X_OK)})
            except HTTPException as e:
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): p, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): p, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        self._audit(codecs.decode('\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), str(paths), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0071\\u0075\\u0065\\u0072\\u0069\\u0065\\u0064', 'unicode_escape'): len(paths)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): results}

    def fn_17(self, file_path: str, max_size: int=1048576) -> dict:
        target = self._safe_path(file_path)
        if not target.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if not target.is_file():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if target.stat().st_size > max_size:
            raise HTTPException(413, codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065\\u0020\\u0066\\u006f\\u0072\\u0020\\u0063\\u0061\\u0074\\u0020\\u0028\\u003e\\u0031\\u004d\\u0042\\u0029\\u003a\\u0020', 'unicode_escape') + str(file_path))
        try:
            content = target.read_text(encoding=codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
            encoding = codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')
            is_binary = False
        except:
            content = base64.b64encode(target.read_bytes()).decode()
            encoding = codecs.decode('\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034', 'unicode_escape')
            is_binary = True
        self._audit(codecs.decode('\\u0063\\u0061\\u0074', 'unicode_escape'), file_path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): target.stat().st_size, codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): encoding})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(target.relative_to(self.root)), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'): content, codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): encoding, codecs.decode('\\u0069\\u0073\\u005f\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079', 'unicode_escape'): is_binary, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): target.stat().st_size}

    def fn_18(self, file_content: bytes, target_path: str, filename: str=None, chunk_id: str=None, total_chunks: int=None) -> dict:
        target = self._safe_path(target_path)
        if target.is_dir():
            if not filename:
                raise HTTPException(400, codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u006e\\u0061\\u006d\\u0065\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064\\u0020\\u0066\\u006f\\u0072\\u0020\\u0064\\u0069\\u0072\\u0065\\u0063\\u0074\\u006f\\u0072\\u0079\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
            target = target / filename
        if len(file_content) > self.max_upload and chunk_id is None:
            raise HTTPException(413, codecs.decode('\\u0046\\u0069\\u006c\\u0065\\u0020\\u0074\\u006f\\u006f\\u0020\\u006c\\u0061\\u0072\\u0067\\u0065\\u003a\\u0020\\u0075\\u0073\\u0065\\u0020\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064\\u0020\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
        try:
            target.parent.mkdir(parents=True, exist_ok=True)
            if chunk_id is not None and total_chunks is not None:
                chunk_file = self.chunk_dir / (str(target.as_posix()) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e', 'unicode_escape') + str(chunk_id))
                with open(chunk_file, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as f:
                    f.write(file_content)
                received = list(self.chunk_dir.glob(str(target.as_posix()) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e\\u002a', 'unicode_escape')))
                if len(received) == total_chunks:
                    with open(target, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as outf:
                        for i in range(total_chunks):
                            cf = self.chunk_dir / (str(target.as_posix()) + codecs.decode('\\u002e\\u0063\\u0068\\u0075\\u006e\\u006b\\u002e', 'unicode_escape') + str(i))
                            with open(cf, codecs.decode('\\u0072\\u0062', 'unicode_escape')) as inf:
                                outf.write(inf.read())
                            cf.unlink()
                    self._audit(codecs.decode('\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064\\u005f\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'), str(target), codecs.decode('\\u006d\\u0065\\u0072\\u0067\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0073', 'unicode_escape'): total_chunks, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): target.stat().st_size})
                    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(target.relative_to(self.root)), codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): True}
                else:
                    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): len(received), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): total_chunks}
            else:
                with open(target, codecs.decode('\\u0077\\u0062', 'unicode_escape')) as f:
                    f.write(file_content)
                self._audit(codecs.decode('\\u0075\\u0070\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'), str(target), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): len(file_content)})
                return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(target.relative_to(self.root))}
        except PermissionError:
            raise HTTPException(403, codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape'))
        except Exception as e:
            raise HTTPException(500, codecs.decode('\\u0055\\u0070\\u006c\\u006f\\u0061\\u0064\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))

    def fn_19(self, file_path: str) -> tuple:
        target = self._safe_path(file_path)
        if not target.exists():
            raise HTTPException(404, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064\\u003a\\u0020', 'unicode_escape') + str(file_path))
        if not target.is_file():
            raise HTTPException(400, codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0061\\u0020\\u0066\\u0069\\u006c\\u0065\\u003a\\u0020', 'unicode_escape') + str(file_path))
        mime, _ = mimetypes.guess_type(str(target))
        self._audit(codecs.decode('\\u0064\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'), str(target), codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): target.stat().st_size})
        return (target, mime or codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0063\\u0061\\u0074\\u0069\\u006f\\u006e\\u002f\\u006f\\u0063\\u0074\\u0065\\u0074\\u002d\\u0073\\u0074\\u0072\\u0065\\u0061\\u006d', 'unicode_escape'), target.stat().st_size)

    def fn_20(self, paths: List[str]) -> dict:
        results = []
        for p in paths:
            try:
                target = self._safe_path(p)
                if not target.exists():
                    results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): p, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006e\\u006f\\u0074\\u005f\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if target.is_dir():
                    shutil.rmtree(target)
                else:
                    target.unlink()
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): p, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape')})
                self._audit(codecs.decode('\\u0064\\u0065\\u006c\\u0065\\u0074\\u0065', 'unicode_escape'), p, codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): p, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): p, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): results}

    def fn_21(self, move_map: Dict[str, str]) -> dict:
        results = []
        for src, dst in move_map.items():
            try:
                src_path = self._safe_path(src)
                dst_path = self._safe_path(dst)
                if not src_path.exists():
                    results.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): src, codecs.decode('\\u0074\\u006f', 'unicode_escape'): dst, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if dst_path.exists():
                    results.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): src, codecs.decode('\\u0074\\u006f', 'unicode_escape'): dst, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape')})
                    continue
                dst_path.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(src_path), str(dst_path))
                results.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): str(src_path.relative_to(self.root)), codecs.decode('\\u0074\\u006f', 'unicode_escape'): str(dst_path.relative_to(self.root)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u006d\\u006f\\u0076\\u0065\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(src) + codecs.decode('\\u0020\\u002d\\u003e\\u0020', 'unicode_escape') + str(dst), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                results.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): src, codecs.decode('\\u0074\\u006f', 'unicode_escape'): dst, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                results.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): src, codecs.decode('\\u0074\\u006f', 'unicode_escape'): dst, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        success_count = sum((1 for r in results if r[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        self._audit(codecs.decode('\\u006d\\u006f\\u0076\\u0065\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(list(move_map.keys())), codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(move_map), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): success_count})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if success_count > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(move_map), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): success_count, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): results}

    def fn_22(self, copy_map: Dict[str, str]) -> dict:
        results = []
        for src, dst in copy_map.items():
            try:
                src_path = self._safe_path(src)
                dst_path = self._safe_path(dst)
                if not src_path.exists():
                    results.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): src, codecs.decode('\\u0074\\u006f', 'unicode_escape'): dst, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0053\\u006f\\u0075\\u0072\\u0063\\u0065\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                if dst_path.is_dir():
                    dst_path = dst_path / src_path.name
                if dst_path.exists():
                    results.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): src, codecs.decode('\\u0074\\u006f', 'unicode_escape'): dst, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0044\\u0065\\u0073\\u0074\\u0069\\u006e\\u0061\\u0074\\u0069\\u006f\\u006e\\u0020\\u0065\\u0078\\u0069\\u0073\\u0074\\u0073', 'unicode_escape')})
                    continue
                dst_path.parent.mkdir(parents=True, exist_ok=True)
                if src_path.is_file():
                    shutil.copy2(str(src_path), str(dst_path))
                else:
                    shutil.copytree(str(src_path), str(dst_path))
                results.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): str(src_path.relative_to(self.root)), codecs.decode('\\u0074\\u006f', 'unicode_escape'): str(dst_path.relative_to(self.root)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u0063\\u006f\\u0070\\u0079\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(src) + codecs.decode('\\u0020\\u002d\\u003e\\u0020', 'unicode_escape') + str(dst), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            except HTTPException as e:
                results.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): src, codecs.decode('\\u0074\\u006f', 'unicode_escape'): dst, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except Exception as e:
                results.append({codecs.decode('\\u0066\\u0072\\u006f\\u006d', 'unicode_escape'): src, codecs.decode('\\u0074\\u006f', 'unicode_escape'): dst, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
        success_count = sum((1 for r in results if r[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        self._audit(codecs.decode('\\u0063\\u006f\\u0070\\u0079\\u005f\\u0062\\u0061\\u0074\\u0063\\u0068', 'unicode_escape'), str(list(copy_map.keys())), codecs.decode('\\u0063\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064', 'unicode_escape'), {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(copy_map), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): success_count})
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if success_count > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(copy_map), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): success_count, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): results}

    def _parse_mode(self, mode_str: str) -> int:
        mode_str = mode_str.strip()
        if mode_str.isdigit() or (mode_str.startswith(codecs.decode('\\u0030', 'unicode_escape')) and mode_str[1:].isdigit()):
            return int(mode_str, 8)
        if len(mode_str) == 9 and all((c in codecs.decode('\\u0072\\u0077\\u0078\\u0053\\u0074\\u0054\\u002d', 'unicode_escape') for c in mode_str)):
            mode = 0
            perm_map = {codecs.decode('\\u0072', 'unicode_escape'): 4, codecs.decode('\\u0077', 'unicode_escape'): 2, codecs.decode('\\u0078', 'unicode_escape'): 1, codecs.decode('\\u0053', 'unicode_escape'): 0, codecs.decode('\\u0073', 'unicode_escape'): 1, codecs.decode('\\u0054', 'unicode_escape'): 0, codecs.decode('\\u0074', 'unicode_escape'): 1, codecs.decode('\\u002d', 'unicode_escape'): 0}
            for i, c in enumerate(mode_str):
                if c in perm_map:
                    shift = 2 - i % 3
                    mode |= perm_map[c] << 6 - i // 3 * 3 + shift
            return mode
        if any((op in mode_str for op in [codecs.decode('\\u003d', 'unicode_escape'), codecs.decode('\\u002b', 'unicode_escape'), codecs.decode('\\u002d', 'unicode_escape')])) and any((who in mode_str for who in [codecs.decode('\\u0075', 'unicode_escape'), codecs.decode('\\u0067', 'unicode_escape'), codecs.decode('\\u006f', 'unicode_escape'), codecs.decode('\\u0061', 'unicode_escape')])):
            raise ValueError(codecs.decode('\\u0053\\u0079\\u006d\\u0062\\u006f\\u006c\\u0069\\u0063\\u0020\\u006d\\u006f\\u0064\\u0065\\u0020\\u0027', 'unicode_escape') + str(mode_str) + codecs.decode('\\u0027\\u0020\\u006e\\u006f\\u0074\\u0020\\u0066\\u0075\\u006c\\u006c\\u0079\\u0020\\u0073\\u0075\\u0070\\u0070\\u006f\\u0072\\u0074\\u0065\\u0064\\u0020\\u0079\\u0065\\u0074\\u002c\\u0020\\u0075\\u0073\\u0065\\u0020\\u006f\\u0063\\u0074\\u0061\\u006c\\u0020\\u006c\\u0069\\u006b\\u0065\\u0020\\u0027\\u0037\\u0035\\u0035\\u0027', 'unicode_escape'))
        raise ValueError(codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u006d\\u006f\\u0064\\u0065\\u0020\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u003a\\u0020\\u0027', 'unicode_escape') + str(mode_str) + codecs.decode('\\u0027\\u002e\\u0020\\u0055\\u0073\\u0065\\u0020\\u0027\\u0037\\u0035\\u0035\\u0027\\u002c\\u0020\\u0027\\u0030\\u0036\\u0034\\u0034\\u0027\\u002c\\u0020\\u006f\\u0072\\u0020\\u0027\\u0072\\u0077\\u0078\\u0072\\u002d\\u0078\\u0072\\u002d\\u0078\\u0027', 'unicode_escape'))

    def fn_23(self, perm_map: Dict[str, str], recursive: bool=False) -> dict:
        results = []
        for path, mode_str in perm_map.items():
            try:
                target = self._safe_path(path)
                if not target.exists():
                    results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): path, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0074\\u0020\\u0066\\u006f\\u0075\\u006e\\u0064', 'unicode_escape')})
                    continue
                mode = self._parse_mode(mode_str)
                if recursive and target.is_dir():
                    for root, dirs, files in os.walk(target):
                        os.chmod(root, mode)
                        for d in dirs:
                            os.chmod(os.path.join(root, d), mode)
                        for f in files:
                            os.chmod(os.path.join(root, f), mode)
                else:
                    os.chmod(target, mode)
                new_mode = stat.filemode(target.stat().st_mode)
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(target.relative_to(self.root)), codecs.decode('\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0065\\u0064', 'unicode_escape'): mode_str, codecs.decode('\\u0061\\u0070\\u0070\\u006c\\u0069\\u0065\\u0064', 'unicode_escape'): new_mode, codecs.decode('\\u006d\\u006f\\u0064\\u0065\\u005f\\u006f\\u0063\\u0074\\u0061\\u006c', 'unicode_escape'): oct(stat.S_IMODE(target.stat().st_mode)), codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
                self._audit(codecs.decode('\\u0063\\u0068\\u006d\\u006f\\u0064', 'unicode_escape'), path, codecs.decode('\\u006f\\u006b', 'unicode_escape'), {codecs.decode('\\u006d\\u006f\\u0064\\u0065', 'unicode_escape'): mode_str, codecs.decode('\\u0072\\u0065\\u0063\\u0075\\u0072\\u0073\\u0069\\u0076\\u0065', 'unicode_escape'): recursive})
            except HTTPException as e:
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): path, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e.detail)})
            except ValueError as e:
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): path, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(e)})
            except PermissionError:
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): path, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0050\\u0065\\u0072\\u006d\\u0069\\u0073\\u0073\\u0069\\u006f\\u006e\\u0020\\u0064\\u0065\\u006e\\u0069\\u0065\\u0064', 'unicode_escape')})
            except Exception as e:
                results.append({codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): path, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(e)})
        success_count = sum((1 for r in results if r[codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape')] == codecs.decode('\\u006f\\u006b', 'unicode_escape')))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape') if success_count > 0 else codecs.decode('\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): len(perm_map), codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): success_count, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): results}

    def fn_24(self, dir_path: str) -> dict:
        target = self._safe_path(dir_path)
        if target.exists():
            raise HTTPException(409, codecs.decode('\\u0045\\u0078\\u0069\\u0073\\u0074\\u0073\\u003a\\u0020', 'unicode_escape') + str(dir_path))
        try:
            target.mkdir(parents=True)
            self._audit(codecs.decode('\\u006d\\u006b\\u0064\\u0069\\u0072', 'unicode_escape'), str(target), codecs.decode('\\u006f\\u006b', 'unicode_escape'))
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): str(target.relative_to(self.root))}
        except Exception as e:
            raise HTTPException(500, codecs.decode('\\u004d\\u006b\\u0064\\u0069\\u0072\\u0020\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(e))

@asynccontextmanager
async def fn_25(app: FastAPI):
    Logger.fn_3(codecs.decode('\\U0001f527\\u0020\\u521d\\u59cb\\u5316\\u7ba1\\u7406\\u5668\\u002e\\u002e\\u002e', 'unicode_escape'))
    Config.fn_1()
    fn_11()
    app.state.file_manager = FileManager(root=Config.FILE_ROOT, max_upload=Config.MAX_UPLOAD_SIZE, chunk_size=int(os.getenv(codecs.decode('\\u0043\\u0048\\u0055\\u004e\\u004b\\u005f\\u0054\\u0048\\u0052\\u0045\\u0053\\u0048\\u004f\\u004c\\u0044', 'unicode_escape'), codecs.decode('\\u0032\\u0030\\u0039\\u0037\\u0031\\u0035\\u0032\\u0030', 'unicode_escape'))), audit=Config.FILE_AUDIT_LOG)
    app.state.task_manager = TaskManager(timeout=Config.TASK_TIMEOUT, check_interval=Config.CRON_CHECK_INTERVAL)
    if Config.DEBUG:
        Logger.fn_3(codecs.decode('\\u2705\\u0020\\u7ba1\\u7406\\u5668\\u5df2\\u6302\\u8f7d\\u5230\\u0020\\u0061\\u0070\\u0070\\u002e\\u0073\\u0074\\u0061\\u0074\\u0065', 'unicode_escape'))
        Logger.fn_3(codecs.decode('\\u0020\\u0020\\u0020\\u2022\\u0020\\u0066\\u0069\\u006c\\u0065\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072\\u003a\\u0020', 'unicode_escape') + str(app.state.file_manager))
        Logger.fn_3(codecs.decode('\\u0020\\u0020\\u0020\\u2022\\u0020\\u0074\\u0061\\u0073\\u006b\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072\\u003a\\u0020', 'unicode_escape') + str(app.state.task_manager))
    yield
    if Config.DEBUG:
        Logger.fn_3(codecs.decode('\\U0001f6d1\\u0020\\u5e94\\u7528\\u5173\\u95ed\\uff0c\\u6e05\\u7406\\u8d44\\u6e90\\u002e\\u002e\\u002e', 'unicode_escape'))
    if hasattr(app.state, codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u005f\\u006d\\u0061\\u006e\\u0061\\u0067\\u0065\\u0072', 'unicode_escape')):
        try:
            app.state.task_manager.stop_cron_loop()
        except:
            pass
app = FastAPI(title=codecs.decode('\\u0050\\u0072\\u006f\\u0078\\u0079\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074\\u0020\\u0041\\u0050\\u0049', 'unicode_escape'), description=codecs.decode('\\u5355\\u6587\\u4ef6\\u90e8\\u7f72\\u7248\\u0020\\u002d\\u0020\\u652f\\u6301\\u7b7e\\u540d\\u8ba4\\u8bc1\\u4e0e\\u54cd\\u5e94\\u52a0\\u5bc6', 'unicode_escape'), version=Config.AGENT_VERSION, docs_url=codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u0073', 'unicode_escape') if Config.DEBUG else None, redoc_url=None, lifespan=fn_25)
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware, allow_origins=[codecs.decode('\\u002a', 'unicode_escape')], allow_methods=[codecs.decode('\\u002a', 'unicode_escape')], allow_headers=[codecs.decode('\\u002a', 'unicode_escape')], expose_headers=[codecs.decode('\\u0058\\u002d\\u0045\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape')])
app.add_middleware(AuthEncryptMiddleware)

async def fn_26(request: Request) -> ExecRequestJSON:
    body_bytes = await request.body()
    body_str = body_bytes.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape')).strip()
    if not body_str:
        raise HTTPException(status_code=400, detail=codecs.decode('\\u0045\\u006d\\u0070\\u0074\\u0079\\u0020\\u0072\\u0065\\u0071\\u0075\\u0065\\u0073\\u0074\\u0020\\u0062\\u006f\\u0064\\u0079', 'unicode_escape'))
    try:
        return ExecRequestJSON.model_validate_json(body_str)
    except Exception:
        return ExecRequestJSON(cmd=body_str)

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0062\\u0061\\u0073\\u0065\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'), response_model=BaseInfoResponse)
async def fn_27():
    basic_info = await SystemInfoCollector().fn_13()
    basic_info[codecs.decode('\\u0073\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u005f\\u006b\\u0065\\u0079', 'unicode_escape')] = Config.SESSION_KEY
    return basic_info

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), response_model=StatusResponse)
async def fn_27():
    status = await SystemInfoCollector().fn_14()
    return status

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0065\\u0078\\u0065\\u0063', 'unicode_escape'), response_model=ExecResponse)
async def fn_28(payload: ExecRequestJSON=Depends(fn_26)):
    cmd = payload.cmd
    cwd = payload.cwd
    env_override = payload.env
    timeout = Config.Rtimeout
    use_shell = Config.EXEC_SHELL_MODE
    exec_kwargs = {codecs.decode('\\u0073\\u0068\\u0065\\u006c\\u006c', 'unicode_escape'): use_shell, codecs.decode('\\u0073\\u0074\\u0064\\u006f\\u0075\\u0074', 'unicode_escape'): subprocess.PIPE, codecs.decode('\\u0073\\u0074\\u0064\\u0065\\u0072\\u0072', 'unicode_escape'): subprocess.STDOUT, codecs.decode('\\u0073\\u0074\\u0064\\u0069\\u006e', 'unicode_escape'): subprocess.DEVNULL, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): timeout, codecs.decode('\\u0074\\u0065\\u0078\\u0074', 'unicode_escape'): True, codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072\\u0073', 'unicode_escape'): codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'), codecs.decode('\\u0063\\u0077\\u0064', 'unicode_escape'): cwd}
    if env_override:
        exec_kwargs[codecs.decode('\\u0065\\u006e\\u0076', 'unicode_escape')] = {**os.environ, **env_override}
    try:
        res = subprocess.run(cmd, **exec_kwargs)
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): res.stdout, codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): res.returncode, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): False, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): cmd}
    except subprocess.TimeoutExpired as e:
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d\\u000a', 'unicode_escape') + str(e.output or ''), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): 124, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): True, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): cmd}
    except Exception as e:
        return {codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074', 'unicode_escape'): codecs.decode('\\u005b\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(str(e)), codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): -1, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape'): False, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): cmd}

class TaskManager:

    def __init__(self, timeout: int=300, check_interval: int=30, max_log_size: int=None):
        self.timeout = timeout
        self.check_interval = check_interval
        self.max_log_size = max_log_size or Config.MAX_TASK_LOG_SIZE
        Config.onetimetasks_log = deque(Config.onetimetasks_log, maxlen=self.max_log_size)
        Config.crontasks_log = deque(Config.crontasks_log, maxlen=self.max_log_size)
        self._cron_task: Optional[asyncio.Task] = None
        self._running = False
        self._executed_crons: set = set()

    def fn_29(self, tasks: List[str]) -> dict:
        Config.onetasks = tasks if tasks else []
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.onetasks}

    def fn_30(self) -> dict:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.onetasks}

    def fn_31(self) -> List[dict]:
        if not Config.InitTask or not Config.onetasks:
            return []
        results = []
        tasks_to_run = Config.onetasks.copy()
        for i, cmd in enumerate(tasks_to_run):
            start_time = datetime.utcnow()
            try:
                if Config.DEBUG:
                    Logger.fn_3(codecs.decode('\\U0001f680\\u0020\\u005b\\u004f\\u006e\\u0065\\u0054\\u0069\\u006d\\u0065\\u002d', 'unicode_escape') + str(i + 1) + codecs.decode('\\u005d\\u0020\\u0045\\u0078\\u0065\\u0063\\u0075\\u0074\\u0069\\u006e\\u0067\\u003a\\u0020', 'unicode_escape') + str(cmd[:100]) + codecs.decode('\\u002e\\u002e\\u002e', 'unicode_escape'))
                result = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, stdin=subprocess.DEVNULL, timeout=self.timeout, text=True, errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))
                output = result.stdout[:2000]
                exitcode = result.returncode
                log_entry = self._format_log_entry(cmd, output, exitcode, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, log_entry, self.max_log_size)
                results.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): i, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): cmd[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): exitcode, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): output[:500], codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape')})
            except subprocess.TimeoutExpired as e:
                output = codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d\\u0020', 'unicode_escape') + str(e.output[:500] if e.output else '')
                exitcode = 124
                log_entry = self._format_log_entry(cmd, output, exitcode, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, log_entry, self.max_log_size)
                results.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): i, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): cmd[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): exitcode, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): output[:500], codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u006f\\u0075\\u0074', 'unicode_escape')})
            except Exception as e:
                output = codecs.decode('\\u005b\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(str(e))
                exitcode = -1
                log_entry = self._format_log_entry(cmd, output, exitcode, codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))
                Config.onetimetasks_log = self._append_task_log(Config.onetimetasks_log, log_entry, self.max_log_size)
                results.append({codecs.decode('\\u0069\\u006e\\u0064\\u0065\\u0078', 'unicode_escape'): i, codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): cmd[:200], codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): exitcode, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): output, codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape')})
        Config.InitTask = False
        if Config.DEBUG:
            Logger.fn_3(codecs.decode('\\u2705\\u0020\\u005b\\u004f\\u006e\\u0065\\u0054\\u0069\\u006d\\u0065\\u005d\\u0020\\u0043\\u006f\\u006d\\u0070\\u006c\\u0065\\u0074\\u0065\\u0064\\u0020', 'unicode_escape') + str(len(results)) + codecs.decode('\\u0020\\u0074\\u0061\\u0073\\u006b\\u0073\\u002c\\u0020\\u006c\\u006f\\u0067\\u0067\\u0065\\u0064\\u0020\\u0074\\u006f\\u0020\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u0074\\u0061\\u0073\\u006b\\u0073\\u005f\\u006c\\u006f\\u0067', 'unicode_escape'))
        return results

    async def _check_and_run_cron(self):
        if not Config.crontasks:
            return
        now = datetime.now()
        for cron_expr, cmd in Config.crontasks.items():
            try:
                cron = croniter(cron_expr, now)
                prev_run = cron.get_prev(datetime)
                time_passed = (now - prev_run).total_seconds()
                if 0 <= time_passed <= self.check_interval + 5:
                    time_slug = prev_run.strftime(codecs.decode('\\u0025\\u0059\\u0025\\u006d\\u0025\\u0064\\u0025\\u0048\\u0025\\u004d', 'unicode_escape'))
                    task_id = str(cron_expr) + codecs.decode('\\u003a', 'unicode_escape') + str(cmd) + codecs.decode('\\u003a', 'unicode_escape') + str(time_slug)
                    task_hash = hashlib.md5(task_id.encode()).hexdigest()[:10]
                    if task_hash in self._executed_crons:
                        continue
                    if Config.DEBUG:
                        Logger.fn_4(codecs.decode('\\u23f0\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u0054\\u0072\\u0069\\u0067\\u0067\\u0065\\u0072\\u0065\\u0064\\u003a\\u0020', 'unicode_escape') + str(cron_expr) + codecs.decode('\\u0020\\u2192\\u0020', 'unicode_escape') + str(cmd[:50]) + codecs.decode('\\u002e\\u002e\\u002e\\u0020\\u0028\\u004c\\u0061\\u0067\\u003a\\u0020', 'unicode_escape') + format(str(time_passed), codecs.decode('\\u002e\\u0032\\u0066', 'unicode_escape')) + codecs.decode('\\u0073\\u0029', 'unicode_escape'))
                    proc = await asyncio.create_subprocess_shell(cmd, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.STDOUT, stdin=asyncio.subprocess.DEVNULL)
                    try:
                        stdout, _ = await asyncio.wait_for(proc.communicate(), timeout=self.timeout)
                        output = stdout.decode(codecs.decode('\\u0075\\u0074\\u0066\\u002d\\u0038', 'unicode_escape'), errors=codecs.decode('\\u0072\\u0065\\u0070\\u006c\\u0061\\u0063\\u0065', 'unicode_escape'))[:2000]
                        exitcode = proc.returncode
                    except asyncio.TimeoutError:
                        try:
                            proc.kill()
                        except:
                            pass
                        output = codecs.decode('\\u005b\\u0054\\u0049\\u004d\\u0045\\u004f\\u0055\\u0054\\u005d', 'unicode_escape')
                        exitcode = 124
                    except Exception as inner_e:
                        output = codecs.decode('\\u005b\\u0052\\u0055\\u004e\\u0054\\u0049\\u004d\\u0045\\u005f\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(str(inner_e))
                        exitcode = -1
                    log_entry = self._format_log_entry(cmd, output, exitcode, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), cron_expr)
                    Config.crontasks_log = self._append_task_log(Config.crontasks_log, log_entry, self.max_log_size)
                    self._executed_crons.add(task_hash)
                    asyncio.get_event_loop().call_later(120, self._executed_crons.discard, task_hash)
            except Exception as e:
                if Config.DEBUG:
                    Logger.fn_6(codecs.decode('\\u274c\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u0053\\u0063\\u0068\\u0065\\u0064\\u0075\\u006c\\u0065\\u0072\\u0020\\u0045\\u0072\\u0072\\u006f\\u0072\\u0020\\u0066\\u006f\\u0072\\u0020\\u0027', 'unicode_escape') + str(cron_expr) + codecs.decode('\\u0027\\u003a\\u0020', 'unicode_escape') + str(e))
                output = codecs.decode('\\u005b\\u0053\\u0043\\u0048\\u0045\\u0044\\u0055\\u004c\\u0045\\u0052\\u005f\\u0045\\u0052\\u0052\\u004f\\u0052\\u005d\\u0020', 'unicode_escape') + str(type(e).__name__) + codecs.decode('\\u003a\\u0020', 'unicode_escape') + str(str(e))
                log_entry = self._format_log_entry(cmd, output, -1, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), cron_expr)
                Config.crontasks_log = self._append_task_log(Config.crontasks_log, log_entry, self.max_log_size)

    def fn_32(self, limit: int=None) -> list:
        logs = list(Config.onetimetasks_log)
        if limit and limit > 0:
            return logs[-limit:]
        return logs

    def fn_33(self, limit: int=None) -> list:
        logs = list(Config.crontasks_log)
        if limit and limit > 0:
            return logs[-limit:]
        return logs

    def fn_34(self, log_type: str=codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')):
        if log_type in [codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')]:
            Config.onetimetasks_log.clear()
        if log_type in [codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), codecs.decode('\\u0061\\u006c\\u006c', 'unicode_escape')]:
            Config.crontasks_log.clear()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006c\\u0065\\u0061\\u0072\\u0065\\u0064', 'unicode_escape'): log_type}

    def fn_35(self, tasks: Dict[str, str]) -> dict:
        invalid = []
        for cron_expr in tasks.keys():
            try:
                croniter(cron_expr, datetime.now())
            except Exception:
                invalid.append(cron_expr)
        if invalid:
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0063\\u0072\\u006f\\u006e\\u0020\\u0065\\u0078\\u0070\\u0072\\u0065\\u0073\\u0073\\u0069\\u006f\\u006e\\u0073\\u003a\\u0020', 'unicode_escape') + str(invalid), codecs.decode('\\u0076\\u0061\\u006c\\u0069\\u0064\\u005f\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(tasks) - len(invalid)}
        Config.crontasks = tasks if tasks else {}
        if Config.crontasks and (not Config.cronloop):
            self.start_cron_loop()
        elif not Config.crontasks and Config.cronloop:
            self.stop_cron_loop()
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.crontasks}

    def fn_36(self) -> dict:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): Config.crontasks}

    def start_cron_loop(self):
        if Config.cronloop and self._running:
            return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u0020\\u006c\\u006f\\u006f\\u0070\\u0020\\u0061\\u006c\\u0072\\u0065\\u0061\\u0064\\u0079\\u0020\\u0072\\u0075\\u006e\\u006e\\u0069\\u006e\\u0067', 'unicode_escape')}
        Config.cronloop = True
        self._running = True
        self._executed_crons.clear()
        try:
            loop = asyncio.get_event_loop()
            self._cron_task = loop.create_task(self._cron_loop_worker())
            if Config.DEBUG:
                Logger.fn_4(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0065\\u0064\\u002c\\u0020\\u0069\\u006e\\u0074\\u0065\\u0072\\u0076\\u0061\\u006c\\u003d', 'unicode_escape') + str(self.check_interval) + codecs.decode('\\u0073', 'unicode_escape'))
        except RuntimeError:
            import threading
            thread = threading.Thread(target=self._run_cron_sync, daemon=True)
            thread.start()
            if Config.DEBUG:
                Logger.fn_4(codecs.decode('\\U0001f504\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0065\\u0064\\u0020\\u0069\\u006e\\u0020\\u0074\\u0068\\u0072\\u0065\\u0061\\u0064\\u002c\\u0020\\u0069\\u006e\\u0074\\u0065\\u0072\\u0076\\u0061\\u006c\\u003d', 'unicode_escape') + str(self.check_interval) + codecs.decode('\\u0073', 'unicode_escape'))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u0020\\u006c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u0061\\u0072\\u0074\\u0065\\u0064', 'unicode_escape')}

    def stop_cron_loop(self):
        Config.cronloop = False
        self._running = False
        if self._cron_task:
            self._cron_task.cancel()
            self._cron_task = None
        if Config.DEBUG:
            Logger.fn_4(codecs.decode('\\U0001f6d1\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape'))
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u0043\\u0072\\u006f\\u006e\\u0020\\u006c\\u006f\\u006f\\u0070\\u0020\\u0073\\u0074\\u006f\\u0070\\u0070\\u0065\\u0064', 'unicode_escape')}

    async def _cron_loop_worker(self):
        while self._running and Config.cronloop:
            try:
                await self._check_and_run_cron()
            except Exception as e:
                if Config.DEBUG:
                    Logger.fn_6(codecs.decode('\\u274c\\u0020\\u005b\\u0043\\u0072\\u006f\\u006e\\u005d\\u0020\\u004c\\u006f\\u006f\\u0070\\u0020\\u0065\\u0072\\u0072\\u006f\\u0072\\u003a\\u0020', 'unicode_escape') + str(e))
            await asyncio.sleep(self.check_interval)

    def _run_cron_sync(self):
        import time
        while self._running and Config.cronloop:
            try:
                asyncio.run(self._check_and_run_cron())
            except:
                pass
            time.sleep(self.check_interval)

    @staticmethod
    def _append_task_log(log_list: deque, entry: dict, max_size: int=None):
        if max_size is None:
            max_size = Config.MAX_TASK_LOG_SIZE
        if not isinstance(log_list, deque):
            log_list = deque(log_list, maxlen=max_size)
        log_list.append(entry)
        return log_list

    @staticmethod
    def _format_log_entry(cmd: str, output: str, exitcode: int, task_type: str, cron_expr: str=None) -> dict:
        return {codecs.decode('\\u0074\\u0073', 'unicode_escape'): datetime.utcnow().isoformat() + codecs.decode('\\u005a', 'unicode_escape'), codecs.decode('\\u0063\\u006d\\u0064', 'unicode_escape'): cmd, codecs.decode('\\u006f\\u0075\\u0074\\u0070\\u0075\\u0074', 'unicode_escape'): output, codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): exitcode, codecs.decode('\\u0074\\u0079\\u0070\\u0065', 'unicode_escape'): task_type, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'): cron_expr, codecs.decode('\\u0066\\u006f\\u0072\\u006d\\u0061\\u0074\\u0074\\u0065\\u0064', 'unicode_escape'): str(datetime.utcnow().isoformat()) + codecs.decode('\\u005a\\u0020\\u002d\\u002d\\u002d\\u002d\\u0020', 'unicode_escape') + str(cmd) + codecs.decode('\\u0020\\u002d\\u002d\\u002d\\u002d\\u0020\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065\\u003d', 'unicode_escape') + str(exitcode) + codecs.decode('\\u000a', 'unicode_escape') + str(output.strip())}

    def fn_27(self) -> dict:
        return {codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): {codecs.decode('\\u0070\\u0065\\u006e\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): Config.InitTask and len(Config.onetasks) > 0, codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.onetasks)}, codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'): {codecs.decode('\\u0061\\u0063\\u0074\\u0069\\u0076\\u0065', 'unicode_escape'): Config.cronloop, codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(Config.crontasks), codecs.decode('\\u0063\\u0068\\u0065\\u0063\\u006b\\u005f\\u0069\\u006e\\u0074\\u0065\\u0072\\u0076\\u0061\\u006c', 'unicode_escape'): self.check_interval}}

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u006c\\u0069\\u0073\\u0074', 'unicode_escape'), response_model=FileListResponse)
async def fn_37(request: Request, body: FileListRequest=Body(...)):
    fm = request.app.state.file_manager
    result = fm.fn_15(base_path=body.path, recursive=body.recursive)
    return result

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), response_model=AuthorityQueryResponse)
async def fn_38(request: Request, body: AuthorityQueryRequest=Body(...)):
    if not body.paths:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073\\u003a', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0066\\u0069\\u006c\\u0065\\u0073', 'unicode_escape'): []})
    fm = request.app.state.file_manager
    result = fm.fn_16(body.paths)
    return result

@app.put(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0061\\u0075\\u0074\\u0068\\u006f\\u0072\\u0069\\u0074\\u0079', 'unicode_escape'), response_model=AuthoritySetResponse)
async def fn_39(request: Request, body: AuthoritySetRequest=Body(...)):
    perm_map = body.permissions
    recursive = body.recursive
    if not perm_map:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): 0, codecs.decode('\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []})
    fm = request.app.state.file_manager
    result = fm.fn_23(perm_map, recursive)
    return result

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0063\\u0061\\u0074', 'unicode_escape'), response_model=FileCatResponse)
async def fn_40(request: Request, body: FileCatRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0065\\u006e\\u0063\\u006f\\u0064\\u0069\\u006e\\u0067', 'unicode_escape'): codecs.decode('', 'unicode_escape'), codecs.decode('\\u0069\\u0073\\u005f\\u0062\\u0069\\u006e\\u0061\\u0072\\u0079', 'unicode_escape'): False, codecs.decode('\\u0073\\u0069\\u007a\\u0065', 'unicode_escape'): 0})
    fm = request.app.state.file_manager
    result = fm.fn_17(body.path)
    return result

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileUploadResponse)
async def fn_41(request: Request, body: FileUploadRequest=Body(...)):
    if not body.content:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074\\u0020\\u0028\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0029\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): None, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): None, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): None, codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): None})
    try:
        file_content = base64.b64decode(body.content)
    except Exception:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0049\\u006e\\u0076\\u0061\\u006c\\u0069\\u0064\\u0020\\u0062\\u0061\\u0073\\u0065\\u0036\\u0034\\u0020\\u0063\\u006f\\u006e\\u0074\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): None, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u0069\\u0076\\u0065\\u0064', 'unicode_escape'): None, codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c', 'unicode_escape'): None, codecs.decode('\\u0063\\u0068\\u0075\\u006e\\u006b\\u0065\\u0064', 'unicode_escape'): None})
    fm = request.app.state.file_manager
    result = fm.fn_18(file_content=file_content, target_path=body.path, filename=body.filename, chunk_id=body.chunk_id, total_chunks=body.total_chunks)
    return result

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0064\\u006f\\u0077\\u006e\\u006c\\u006f\\u0061\\u0064', 'unicode_escape'))
async def fn_42(request: Request, body: FileDownloadRequest=Body(...)):
    if not body.path:
        return JSONResponse(400, {codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    fm = request.app.state.file_manager
    file_path, mime_type, size = fm.fn_19(body.path)
    from fastapi.responses import FileResponse
    return FileResponse(path=str(file_path), filename=file_path.name, media_type=mime_type, headers={codecs.decode('\\u0058\\u002d\\u0046\\u0069\\u006c\\u0065\\u002d\\u0053\\u0069\\u007a\\u0065', 'unicode_escape'): str(size), codecs.decode('\\u0058\\u002d\\u004f\\u0072\\u0069\\u0067\\u0069\\u006e\\u0061\\u006c\\u002d\\u0050\\u0061\\u0074\\u0068', 'unicode_escape'): str(file_path.relative_to(Path(Config.FILE_ROOT)))})

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileDeleteResponse)
async def fn_43(request: Request, body: FileDeleteRequest=Body(...)):
    paths = body.paths
    if not paths:
        raw_body = await request.body()
        params = json.loads(raw_body.decode()) if raw_body else {}
        paths = [p for k in [codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0032', 'unicode_escape'), codecs.decode('\\u0070\\u0031', 'unicode_escape'), codecs.decode('\\u0070\\u0032', 'unicode_escape')] if (p := params.get(k))]
    if not paths:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []})
    fm = request.app.state.file_manager
    result = fm.fn_20(paths)
    return result

@app.put(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065', 'unicode_escape'), response_model=FileMoveResponse)
async def fn_44(request: Request, move_map: Dict[str, str]=Body(..., examples={codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape')})):
    if not move_map:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0074\\u0020\\u006c\\u0065\\u0061\\u0073\\u0074\\u0020\\u006f\\u006e\\u0065\\u0020\\u0073\\u0072\\u0063\\u002d\\u003e\\u0064\\u0073\\u0074\\u0020\\u0070\\u0061\\u0069\\u0072\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    fm = request.app.state.file_manager
    result = fm.fn_21(move_map)
    return result

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u0063\\u0070', 'unicode_escape'), response_model=FileMoveResponse)
async def fn_45(request: Request, copy_map: Dict[str, str]=Body(..., description=codecs.decode('\\u6e90\\u8def\\u5f84\\u5230\\u76ee\\u6807\\u8def\\u5f84\\u7684\\u6620\\u5c04', 'unicode_escape'), examples=[{codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0072\\u0063\\u0068\\u0069\\u0076\\u0065\\u002f\\u006f\\u006c\\u0064\\u002e\\u0074\\u0078\\u0074', 'unicode_escape'), codecs.decode('\\u002f\\u0074\\u006d\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0062\\u0061\\u0063\\u006b\\u0075\\u0070\\u002f\\u006c\\u006f\\u0067\\u0073', 'unicode_escape')}])):
    if not copy_map:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): codecs.decode('\\u0041\\u0074\\u0020\\u006c\\u0065\\u0061\\u0073\\u0074\\u0020\\u006f\\u006e\\u0065\\u0020\\u0073\\u0072\\u0063\\u002d\\u003e\\u0064\\u0073\\u0074\\u0020\\u0070\\u0061\\u0069\\u0072\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape')})
    fm = request.app.state.file_manager
    result = fm.fn_22(copy_map)
    return result

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0066\\u0069\\u006c\\u0065\\u002f\\u006e\\u0065\\u0077', 'unicode_escape'), response_model=FileMkdirResponse)
async def fn_46(request: Request, body: FileMkdirRequest=Body(...)):
    if not body.path:
        return JSONResponse(status_code=400, content={codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u0070\\u0061\\u0074\\u0068\\u0020\\u0072\\u0065\\u0071\\u0075\\u0069\\u0072\\u0065\\u0064', 'unicode_escape'), codecs.decode('\\u0070\\u0061\\u0074\\u0068', 'unicode_escape'): codecs.decode('', 'unicode_escape')})
    fm = request.app.state.file_manager
    result = fm.fn_24(body.path)
    return result

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=OneTimeTaskGetResponse)
async def fn_30(request: Request):
    tasks = request.app.state.task_manager.fn_30()
    return tasks

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=OneTimeTaskResponse)
async def fn_29(request: Request, tasks: List[str]=Body(default=[])):
    request.app.state.task_manager.fn_29(tasks)
    res = {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(tasks), codecs.decode('\\u0074\\u0061\\u0073\\u006b\\u0073', 'unicode_escape'): tasks}
    if Config.InitTask and tasks:
        res[codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape')] = request.app.state.task_manager.fn_31()
    return res

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=CronTasksResponse)
async def fn_36(request: Request):
    result = request.app.state.task_manager.fn_36()
    return result

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=CronTasksResponse)
async def fn_35(request: Request, tasks: Dict[str, str]=Body(default={}, examples=[{codecs.decode('\\u002a\\u002f\\u0031\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a\\u0020\\u002a', 'unicode_escape'): codecs.decode('\\u0070\\u0079\\u0074\\u0068\\u006f\\u006e\\u0020\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068\\u005f\\u0063\\u0068\\u0065\\u0063\\u006b\\u002e\\u0070\\u0079', 'unicode_escape'), codecs.decode('\\u0030\\u0020\\u0030\\u0020\\u002a\\u0020\\u002a\\u0020\\u0030', 'unicode_escape'): codecs.decode('\\u002f\\u006f\\u0070\\u0074\\u002f\\u0073\\u0063\\u0072\\u0069\\u0070\\u0074\\u0073\\u002f\\u0077\\u0065\\u0065\\u006b\\u006c\\u0079\\u005f\\u0072\\u0065\\u0070\\u006f\\u0072\\u0074\\u002e\\u0073\\u0068', 'unicode_escape')}])):
    result = request.app.state.task_manager.fn_35(tasks)
    return result

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), response_model=TaskStatusResponse)
async def fn_47(request: Request):
    return request.app.state.task_manager.fn_27()

@app.post(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065\\u002f\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065', 'unicode_escape'), response_model=OnetimeExecuteResponse)
async def fn_48(request: Request):
    if not Config.onetasks:
        return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u006d\\u0065\\u0073\\u0073\\u0061\\u0067\\u0065', 'unicode_escape'): codecs.decode('\\u004e\\u006f\\u0020\\u0074\\u0061\\u0073\\u006b\\u0073\\u0020\\u0074\\u006f\\u0020\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape'): 0, codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): []}
    Config.InitTask = True
    results = request.app.state.task_manager.fn_31()
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0065\\u0078\\u0065\\u0063\\u0075\\u0074\\u0065\\u0064', 'unicode_escape'): len(results), codecs.decode('\\u0072\\u0065\\u0073\\u0075\\u006c\\u0074\\u0073', 'unicode_escape'): results}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=TaskLogResponse)
async def fn_32(request: Request, limit: int=Query(100, ge=1, le=100)):
    logs = request.app.state.task_manager.fn_32(limit)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(logs), codecs.decode('\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): list(logs)}

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=TaskLogResponse)
async def fn_33(request: Request, limit: int=Query(100, ge=1, le=100)):
    logs = request.app.state.task_manager.fn_33(limit)
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0063\\u006f\\u0075\\u006e\\u0074', 'unicode_escape'): len(logs), codecs.decode('\\u006c\\u006f\\u0067\\u0073', 'unicode_escape'): list(logs)}

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'), response_model=LogClearResponse)
async def fn_49(request: Request):
    return request.app.state.task_manager.fn_34(codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'))

@app.delete(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'), response_model=LogClearResponse)
async def fn_50(request: Request):
    return request.app.state.task_manager.fn_34(codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'))

@app.get(codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0074\\u0061\\u0073\\u006b\\u002f\\u006c\\u006f\\u0067\\u002f\\u0073\\u0075\\u006d\\u006d\\u0061\\u0072\\u0079', 'unicode_escape'), response_model=LogSummaryResponse)
async def fn_51(request: Request):

    def fn_52(log_deque):
        recent = list(log_deque)[-10:]
        return {codecs.decode('\\u0074\\u006f\\u0074\\u0061\\u006c\\u005f\\u006c\\u006f\\u0067\\u0067\\u0065\\u0064', 'unicode_escape'): len(log_deque), codecs.decode('\\u006d\\u0061\\u0078\\u005f\\u0063\\u0061\\u0070\\u0061\\u0063\\u0069\\u0074\\u0079', 'unicode_escape'): Config.MAX_TASK_LOG_SIZE, codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u006e\\u0074\\u005f\\u0073\\u0075\\u0063\\u0063\\u0065\\u0073\\u0073', 'unicode_escape'): sum((1 for l in recent if l.get(codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape')) == 0)), codecs.decode('\\u0072\\u0065\\u0063\\u0065\\u006e\\u0074\\u005f\\u0066\\u0061\\u0069\\u006c\\u0065\\u0064', 'unicode_escape'): sum((1 for l in recent if l.get(codecs.decode('\\u0065\\u0078\\u0069\\u0074\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'), -1) != 0))}
    return {codecs.decode('\\u006f\\u006e\\u0065\\u0074\\u0069\\u006d\\u0065', 'unicode_escape'): fn_52(Config.onetimetasks_log), codecs.decode('\\u0063\\u0072\\u006f\\u006e', 'unicode_escape'): fn_52(Config.crontasks_log)}

@app.get(codecs.decode('\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'))
async def fn_53():
    return {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u006f\\u006b', 'unicode_escape'), codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067', 'unicode_escape'): Config.DEBUG, codecs.decode('\\u0074\\u0069\\u006d\\u0065\\u0073\\u0074\\u0061\\u006d\\u0070', 'unicode_escape'): int(time.time()), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION}

@app.get(codecs.decode('\\u002f', 'unicode_escape'))
async def root():
    return {codecs.decode('\\u006e\\u0061\\u006d\\u0065', 'unicode_escape'): codecs.decode('\\u0050\\u0072\\u006f\\u0078\\u0079\\u0020\\u0041\\u0067\\u0065\\u006e\\u0074', 'unicode_escape'), codecs.decode('\\u0076\\u0065\\u0072\\u0073\\u0069\\u006f\\u006e', 'unicode_escape'): Config.AGENT_VERSION, codecs.decode('\\u0065\\u006e\\u0064\\u0070\\u006f\\u0069\\u006e\\u0074\\u0073', 'unicode_escape'): {codecs.decode('\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0061\\u0070\\u0069\\u002f\\u0073\\u0074\\u0061\\u0074\\u0075\\u0073', 'unicode_escape'), codecs.decode('\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'): codecs.decode('\\u002f\\u0068\\u0065\\u0061\\u006c\\u0074\\u0068', 'unicode_escape'), codecs.decode('\\u0064\\u006f\\u0063\\u0073', 'unicode_escape'): codecs.decode('\\u002f\\u0064\\u006f\\u0063\\u0073\\u0020\\u0028\\u4ec5\\u0044\\u0045\\u0042\\u0055\\u0047\\u6a21\\u5f0f\\u0029', 'unicode_escape')}}

@app.exception_handler(HTTPException)
async def fn_54(request: Request, exc: HTTPException):
    content = {codecs.decode('\\u0065\\u0072\\u0072\\u006f\\u0072', 'unicode_escape'): exc.detail, codecs.decode('\\u0063\\u006f\\u0064\\u0065', 'unicode_escape'): exc.status_code}
    encrypted = crypto.fn_9(content) if not Config.DEBUG else json.dumps(content)
    return JSONResponse(status_code=exc.status_code, content=json.loads(encrypted) if Config.DEBUG else {codecs.decode('\\u005f\\u0065\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape'): encrypted}, headers={codecs.decode('\\u0058\\u002d\\u0045\\u006e\\u0063\\u0072\\u0079\\u0070\\u0074\\u0065\\u0064', 'unicode_escape'): codecs.decode('\\u0066\\u0061\\u006c\\u0073\\u0065', 'unicode_escape') if Config.DEBUG else codecs.decode('\\u0074\\u0072\\u0075\\u0065', 'unicode_escape')})

def fn_55():
    Config.fn_1()
    fn_11()
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    import os
    script_name = os.path.splitext(os.path.basename(__file__))[0]
    app_import_string = str(script_name) + codecs.decode('\\u003a\\u0061\\u0070\\u0070', 'unicode_escape')
    Logger.fn_3(codecs.decode('\\u0020\\u4f7f\\u7528\\u91cd\\u8f7d\\u6a21\\u5f0f\\u542f\\u52a8\\u003a\\u0020', 'unicode_escape') + str(app_import_string))
    uvicorn.run(app_import_string, host=Config.HOST, port=Config.PORT, reload=Config.DEBUG, log_level=codecs.decode('\\u0064\\u0065\\u0062\\u0075\\u0067', 'unicode_escape') if Config.DEBUG else codecs.decode('\\u0069\\u006e\\u0066\\u006f', 'unicode_escape'))
if __name__ == codecs.decode('\\u005f\\u005f\\u006d\\u0061\\u0069\\u006e\\u005f\\u005f', 'unicode_escape'):
    fn_55()