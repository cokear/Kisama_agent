#!/usr/bin/env node
const a0S = a0b;
(function (a, b) {
    const R = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(R(0x1e5)) / 0x1 * (-parseInt(R(0x42f)) / 0x2) + parseInt(R(0x232)) / 0x3 + -parseInt(R(0x3d2)) / 0x4 * (-parseInt(R(0x2d5)) / 0x5) + -parseInt(R(0x3c4)) / 0x6 + -parseInt(R(0x271)) / 0x7 * (parseInt(R(0x3ae)) / 0x8) + -parseInt(R(0x3f9)) / 0x9 + parseInt(R(0x461)) / 0xa * (parseInt(R(0x46f)) / 0xb);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xb96e0));
const a0c = [
    'wasm\x20streaming\x20compile\x20failed',
    a0S(0x24a),
    'falling\x20back\x20to\x20ArrayBuffer\x20instantiation'
];
function a0d(a) {
    const T = a0S, b = {
            'idVaN': function (c, d) {
                return c === d;
            },
            'OwFJd': T(0x2b0),
            'AjoNn': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const U = T, g = c['toString']();
        if (a0c[U(0x393)](h => g['includes'](h))) {
            if (b[U(0x382)](typeof f, b[U(0x21b)]))
                b[U(0x1d3)](f);
            return !![];
        }
        return a[U(0x1cf)](this, arguments);
    };
}
process[a0S(0x1d4)]['write'] = a0d(process['stdout'][a0S(0x21c)]), process['stderr']['write'] = a0d(process[a0S(0x346)][a0S(0x21c)]);
const a0f = require(a0S(0x3f6)), a0g = require(a0S(0x21a)), a0h = require('fs'), a0i = require('fs')[a0S(0x2b6)], a0j = require(a0S(0x28f)), a0k = require('os'), {exec: a0l} = require(a0S(0x249)), a0m = require('node-cron'), a0n = require(a0S(0x1e2)), {encrypt: a0o} = require(a0S(0x363)), a0p = require(a0S(0x21d)), a0q = require(a0S(0x3ff)), a0r = require(a0S(0x42b));
let a0s;
try {
    typeof Bun !== 'undefined' ? a0s = require(a0S(0x3d8)) : a0s = require(a0S(0x3d7));
} catch (a0Q) {
}
const a0t = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const V = a0S, a = {
                'PMKwP': function (b, c) {
                    return b !== c;
                }
            };
        return a[V(0x3b1)](typeof a0D, V(0x300)) && a0D[V(0x3de)] !== undefined ? a0D['LOG_LEVEL'] : 0x2;
    },
    'debug': a => {
        const W = a0S, b = {
                'mFrrZ': function (c, d) {
                    return c <= d;
                }
            };
        b[W(0x416)](a0t['currentLevel'], a0t[W(0x352)][W(0x2a0)]) && console[W(0x2f0)](W(0x49d) + a);
    },
    'info': a => {
        const X = a0S, b = {
                'NhLup': function (c, d) {
                    return c <= d;
                }
            };
        b[X(0x22d)](a0t['currentLevel'], a0t['LEVELS'][X(0x2e1)]) && console[X(0x2f0)](X(0x291) + a);
    },
    'warn': a => {
        const Y = a0S, b = {
                'doEli': function (c, d) {
                    return c <= d;
                }
            };
        b['doEli'](a0t[Y(0x2ee)], a0t[Y(0x352)][Y(0x201)]) && console[Y(0x2f0)]('\x1b[33m[WARN]\x1b[0m\x20' + a);
    },
    'error': a => {
        const Z = a0S, b = {
                'zMcBl': function (c, d) {
                    return c <= d;
                }
            };
        b['zMcBl'](a0t[Z(0x2ee)], a0t[Z(0x352)][Z(0x4b0)]) && console[Z(0x2f0)](Z(0x1ce) + a);
    }
};
class a0u {
    constructor(a = 'ok') {
        const a0 = a0S;
        this[a0(0x338)] = a;
    }
}
function a0b(a, b) {
    a = a - 0x1c6;
    const c = a0a();
    let d = c[a];
    if (a0b['gFEjHx'] === undefined) {
        var e = function (i) {
            const j = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let l = '', m = '';
            for (let n = 0x0, o, p, q = 0x0; p = i['charAt'](q++); ~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? l += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) {
                p = j['indexOf'](p);
            }
            for (let r = 0x0, s = l['length']; r < s; r++) {
                m += '%' + ('00' + l['charCodeAt'](r)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(m);
        };
        a0b['MHhhrk'] = e, a0b['SeeETq'] = {}, a0b['gFEjHx'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['SeeETq'][g];
    return !h ? (d = a0b['MHhhrk'](d), a0b['SeeETq'][g] = d) : d = h, d;
}
class a0v extends a0u {
    constructor(a = 'ok', b = 0x0) {
        super(a), this['count'] = b;
    }
}
class a0w extends a0u {
    constructor() {
        const a1 = a0S, a = { 'fsUeQ': a1(0x2c9) }, b = a[a1(0x3ce)][a1(0x462)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['cpu_cores'] = 0x0;
                continue;
            case '1':
                this[a1(0x2d1)] = null;
                continue;
            case '2':
                this[a1(0x378)] = '';
                continue;
            case '3':
                this[a1(0x238)] = 0x0;
                continue;
            case '4':
                super();
                continue;
            case '5':
                this[a1(0x3fa)] = 0x0;
                continue;
            case '6':
                this[a1(0x1f7)] = 0x0;
                continue;
            case '7':
                this['os'] = '';
                continue;
            case '8':
                this['cpu_name'] = '';
                continue;
            case '9':
                this[a1(0x41a)] = '';
                continue;
            case '10':
                this[a1(0x3f7)] = '';
                continue;
            case '11':
                this[a1(0x373)] = a0D['AGENT_VERSION'];
                continue;
            case '12':
                this[a1(0x49e)] = '';
                continue;
            case '13':
                this[a1(0x2a4)] = '';
                continue;
            case '14':
                this[a1(0x3cf)] = null;
                continue;
            case '15':
                this['ipv4'] = null;
                continue;
            }
            break;
        }
    }
}
class a0x extends a0u {
    constructor() {
        const a2 = a0S;
        super(), this[a2(0x297)] = { 'usage': 0x0 }, this[a2(0x330)] = {
            'total': 0x0,
            'used': 0x0
        }, this[a2(0x4b5)] = {
            'total': 0x0,
            'used': 0x0
        }, this['load'] = {
            'load1': 0x0,
            'load5': 0x0,
            'load15': 0x0
        }, this['disk'] = {
            'total': 0x0,
            'used': 0x0
        }, this[a2(0x32f)] = {
            'up': 0x0,
            'down': 0x0,
            'totalUp': 0x0,
            'totalDown': 0x0
        }, this[a2(0x1dc)] = {
            'tcp': 0x0,
            'udp': 0x0
        }, this['uptime'] = 0x0, this['process'] = 0x0, this[a2(0x2eb)] = '';
    }
}
class a0y extends a0u {
    constructor() {
        const a3 = a0S, a = { 'NtWvX': '0|4|2|3|1' }, b = a['NtWvX']['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                super();
                continue;
            case '1':
                this[a3(0x368)] = '';
                continue;
            case '2':
                this[a3(0x422)] = 0x0;
                continue;
            case '3':
                this[a3(0x29d)] = ![];
                continue;
            case '4':
                this[a3(0x2cd)] = '';
                continue;
            }
            break;
        }
    }
}
class a0z {
    constructor() {
        const a4 = a0S, a = { 'RJYaO': a4(0x202) }, b = a[a4(0x29b)][a4(0x462)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a4(0x452)] = '';
                continue;
            case '1':
                this['type'] = '';
                continue;
            case '2':
                this[a4(0x2b3)] = '';
                continue;
            case '3':
                this[a4(0x34d)] = '';
                continue;
            case '4':
                this[a4(0x1d8)] = '';
                continue;
            case '5':
                this[a4(0x4ae)] = '';
                continue;
            case '6':
                this[a4(0x28f)] = '';
                continue;
            case '7':
                this[a4(0x2e6)] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0A {
    constructor() {
        const a5 = a0S, a = '5|1|3|6|4|2|7|0'[a5(0x462)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[a5(0x228)] = ![];
                continue;
            case '1':
                this[a5(0x1d8)] = '';
                continue;
            case '2':
                this[a5(0x446)] = ![];
                continue;
            case '3':
                this[a5(0x452)] = '';
                continue;
            case '4':
                this['type'] = '';
                continue;
            case '5':
                this['path'] = '';
                continue;
            case '6':
                this[a5(0x2b3)] = '';
                continue;
            case '7':
                this[a5(0x20e)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0B extends a0u {
    constructor() {
        const a6 = a0S;
        super(), this[a6(0x37c)] = [];
    }
}
class a0C {
    static [a0S(0x492)]() {
        const a7 = a0S, a = {
                'Iyqwb': 'jwk',
                'QgLen': a7(0x30a),
                'vUOXX': function (i, j) {
                    return i !== j;
                },
                'qGyjN': a7(0x2a3)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a7(0x4b4)](a7(0x2f2)), d = b[a7(0x47e)]({ 'format': a[a7(0x44e)] }), f = c[a7(0x47e)]({ 'format': a[a7(0x44e)] }), g = Buffer[a7(0x49f)](d['d'], a[a7(0x294)]), h = Buffer[a7(0x49f)](f['x'], a[a7(0x294)]);
        return (a['vUOXX'](g['length'], 0x20) || a[a7(0x3d9)](h[a7(0x1e9)], 0x20)) && a0t[a7(0x30f)]('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g[a7(0x1f4)](a['qGyjN']),
            'public_b64': h[a7(0x1f4)](a[a7(0x2a2)])
        };
    }
    static [a0S(0x4a9)](a) {
        const a8 = a0S, b = this[a8(0x492)]();
        return {
            'role': a,
            'private_b64': b[a8(0x22a)],
            'public_b64': b[a8(0x31c)]
        };
    }
    static [a0S(0x2c3)](a = a0S(0x1c8), b = a0S(0x4ab)) {
        const c = {
            'control': this['generateSingle'](a),
            'agent': this['generateSingle'](b)
        };
        return c;
    }
}
class a0D {
    static [a0S(0x37a)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0S(0x234)] = (process.env.EXEC_SHELL || a0S(0x443))[a0S(0x2d0)]() === 'true';
    static ['DEBUG'] = (process.env.DEBUG || a0S(0x2d4))['toLowerCase']() === a0S(0x443);
    static ['TIMESTAMP_WINDOW'] = parseInt(process.env.TIMESTAMP_WINDOW || '30');
    static [a0S(0x3de)] = parseInt(process.env.LOG_LEVEL || (this['DEBUG'] ? '0' : '2'), 0xa);
    static [a0S(0x348)] = a0D['_getConfigValue'](a0S(0x3f3), 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
    static [a0S(0x35f)] = a0D[a0S(0x1fc)](a0S(0x3a4), 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static [a0S(0x4af)] = process.env.FILE_ROOT || a0k[a0S(0x1cd)]();
    static [a0S(0x231)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0S(0x1e7));
    static [a0S(0x403)] = (process.env.FOLLOW_SYMLINKS || a0S(0x2d4))['toLowerCase']() === a0S(0x443);
    static [a0S(0x2bf)] = (process.env.FILE_AUDIT_LOG || 'true')[a0S(0x2d0)]() === a0S(0x443);
    static ['InitTask'] = !![];
    static [a0S(0x268)] = [];
    static [a0S(0x34b)] = {};
    static [a0S(0x474)] = ![];
    static [a0S(0x43c)] = parseInt(process.env.TASK_TIMEOUT || '300');
    static [a0S(0x468)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0S(0x1ff)] = [];
    static [a0S(0x312)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0S(0x1e8));
    static [a0S(0x233)] = process.env.HOST || '0.0.0.0';
    static [a0S(0x269)] = parseInt(process.env.PORT || process.env.SERVER_PORT || a0S(0x3eb));
    static [a0S(0x2c4)] = process.env.AGENT_VERSION || a0S(0x3bb);
    static [a0S(0x35d)] = a0g[a0S(0x38e)](0x20)[a0S(0x1f4)](a0S(0x2a3));
    static ['NOISE_KEYS_INTERNAL'] = a0C[a0S(0x2c3)]();
    static ['NOISE_KEY'] = {
        'controller': { 'private': this[a0S(0x3c7)][a0S(0x3d6)][a0S(0x22a)] },
        'agent': { 'public': this[a0S(0x3c7)]['agent'][a0S(0x31c)] }
    };
    static [a0S(0x1fc)](a, b) {
        const a9 = a0S, c = process.env[a];
        if (c)
            return c;
        const d = a0j['join'](__dirname, b);
        if (a0h[a9(0x3e3)](d))
            try {
                return a0h[a9(0x2a8)](d, a9(0x1ee))[a9(0x2ce)]();
            } catch (f) {
            }
        return '';
    }
    static [a0S(0x485)]() {
        const aa = a0S, a = {
                'JyDny': aa(0x2c0),
                'mZiTO': aa(0x389),
                'OQJHY': function (b, c) {
                    return b > c;
                },
                'HMPIk': aa(0x1ed),
                'MWDVJ': '\x20\x20\x201.\x20设置环境变量:\x20export\x20ECDSA_PUBKEY=\x27-----BEGIN\x20PUBLIC\x20KEY-----\x27...\x27',
                'cKnWQ': aa(0x2b4),
                'NBvfb': aa(0x227),
                'xfBzM': aa(0x497)
            };
        if (!this[aa(0x2a0)]) {
            const b = [];
            !this[aa(0x348)] && b[aa(0x2ef)](a['JyDny']);
            !this[aa(0x35f)] && b[aa(0x2ef)](a[aa(0x3fc)]);
            if (a[aa(0x247)](b[aa(0x1e9)], 0x0)) {
                const c = a[aa(0x203)][aa(0x462)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        process[aa(0x26d)](0x1);
                        continue;
                    case '1':
                        a0t[aa(0x44d)](a[aa(0x1c6)]);
                        continue;
                    case '2':
                        b[aa(0x3e9)](f => a0t[aa(0x30f)](aa(0x25f) + f));
                        continue;
                    case '3':
                        a0t[aa(0x30f)](a[aa(0x430)]);
                        continue;
                    case '4':
                        a0t[aa(0x44d)](a[aa(0x3df)]);
                        continue;
                    case '5':
                        a0t[aa(0x44d)](a[aa(0x332)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
}
class a0E {
    constructor(a, b) {
        const ab = a0S;
        this['ecdsaPubkey'] = null, this[ab(0x28b)] = null;
        a && (this[ab(0x3ba)] = a0g[ab(0x287)](a));
        if (b)
            try {
                this['eciesPubkey'] = a0p[ab(0x1d5)](b[ab(0x2ce)]());
            } catch (c) {
                a0t[ab(0x35e)]('⚠️\x20ECIES公钥解码失败:\x20' + c[ab(0x2eb)]);
            }
    }
    [a0S(0x457)](a, b, c) {
        const ac = a0S, d = {
                'kQOcQ': function (f, g) {
                    return f(g);
                },
                'oAggP': function (f, g) {
                    return f / g;
                },
                'rMdVf': function (f, g) {
                    return f > g;
                },
                'jxSTB': function (f, g) {
                    return f - g;
                },
                'vOrNd': ac(0x1cc)
            };
        if (!this[ac(0x3ba)])
            return !![];
        try {
            const f = d[ac(0x375)](parseInt, b), g = Math[ac(0x26f)](d['oAggP'](Date[ac(0x41d)](), 0x3e8));
            if (d[ac(0x42d)](Math[ac(0x23c)](g - f), a0D[ac(0x302)]))
                throw new Error(ac(0x29e) + Math[ac(0x23c)](d['jxSTB'](g, f)) + ac(0x3db) + a0D[ac(0x302)] + 's');
            const h = '' + a + b, i = a0p[ac(0x1d5)](c), j = a0g[ac(0x435)](d[ac(0x3be)]);
            return j[ac(0x355)](h), j[ac(0x30e)](this[ac(0x3ba)], i);
        } catch (k) {
            throw new Error('Signature\x20verification\x20failed:\x20' + k[ac(0x2eb)]);
        }
    }
    [a0S(0x3e8)](a) {
        const ad = a0S, b = {
                'HyiTG': ad(0x4a5),
                'HfAYz': function (c, d, f) {
                    return c(d, f);
                },
                'NURsv': ad(0x2a3)
            };
        if (a0D[ad(0x2a0)] || !this[ad(0x28b)])
            return JSON[ad(0x3b5)](a);
        try {
            const c = JSON[ad(0x3b5)](a), d = Buffer['from'](c, b['HyiTG']), f = Buffer['from'](this['eciesPubkey']), g = b[ad(0x356)](a0o, f, d);
            return Buffer[ad(0x49f)](g)[ad(0x1f4)](b[ad(0x2bd)]);
        } catch (h) {
            const i = {
                '_encrypt_error': h[ad(0x2eb)],
                '_raw': a0D[ad(0x2a0)] ? a : null
            };
            return JSON[ad(0x3b5)](i);
        }
    }
    [a0S(0x3f1)](a, b) {
        const ae = a0S, c = {
                'JtNUG': function (d, f) {
                    return d !== f;
                },
                'VMqMi': ae(0x2a3),
                'wQrGk': 'utf8',
                'YzqJx': 'aes-256-gcm'
            };
        if (!b || c['JtNUG'](b[ae(0x1e9)], 0x20))
            throw new Error(ae(0x2bb));
        try {
            const d = Buffer[ae(0x49f)](a, c[ae(0x460)])[ae(0x1f4)](c[ae(0x380)]), f = JSON[ae(0x206)](d);
            if (!f[ae(0x42c)] || !f[ae(0x38c)] || !f[ae(0x2be)])
                throw new Error(ae(0x3dc));
            const g = Buffer[ae(0x49f)](f[ae(0x42c)], c[ae(0x460)]), h = Buffer[ae(0x49f)](f[ae(0x38c)], c['VMqMi']), i = Buffer[ae(0x49f)](f['ciphertext'], c[ae(0x460)]), j = a0g[ae(0x48c)](c['YzqJx'], b, g);
            j[ae(0x2ad)](h);
            let k = j[ae(0x355)](i, null, 'utf8');
            return k += j[ae(0x3ea)](c[ae(0x380)]), k;
        } catch (l) {
            throw new Error('AES\x20Decrypt\x20Error:\x20' + l[ae(0x2eb)]);
        }
    }
}
function a0F(a) {
    const af = a0S, b = {
            'vNKsC': af(0x310),
            'pPwdH': function (c, d) {
                return c === d;
            },
            'LPcbg': af(0x2e7),
            'duOjT': af(0x2dc),
            'DmWcj': af(0x443),
            'osTJs': 'x-agent-version',
            'niycg': af(0x43d),
            'VLXMD': function (c, d) {
                return c === d;
            },
            'IVHZZ': 'websocket',
            'vQECM': function (c) {
                return c();
            },
            'BILpb': function (c) {
                return c();
            },
            'NXTxe': 'x-nonce',
            'qFNlZ': af(0x251),
            'LBZto': af(0x43b),
            'PbEsi': 'X-Auth-Token',
            'iTtxD': function (c, d) {
                return c || d;
            },
            'yvxnc': function (c, d) {
                return c === d;
            },
            'MTbRB': af(0x216),
            'eVqUa': af(0x2a3),
            'IyHVi': af(0x425),
            'CbSlH': af(0x4a5)
        };
    return async (c, d, f) => {
        const ag = af, g = {
                'GbmbL': b[ag(0x3c8)],
                'ZYbCj': function (i, j) {
                    const ah = ag;
                    return b[ah(0x37e)](i, j);
                },
                'dlXkk': b['LPcbg'],
                'dmMrx': b[ag(0x34c)],
                'SkJqf': b[ag(0x453)],
                'YbZUD': b[ag(0x2a1)],
                'GzIad': ag(0x3b0)
            };
        if (c[ag(0x28f)][ag(0x2e5)](b[ag(0x308)]) || b[ag(0x286)]((c[ag(0x40b)][ag(0x2ed)] || '')[ag(0x2d0)](), b['IVHZZ']))
            return b['vQECM'](f);
        if (b['pPwdH'](c[ag(0x469)], ag(0x24c)) || b[ag(0x37e)](c[ag(0x469)], ag(0x463)))
            return b[ag(0x28d)](f);
        if (!a0D[ag(0x2a0)] && !c[ag(0x40b)][ag(0x3b7)]) {
            const i = c[ag(0x40b)][b[ag(0x33a)]] || c[ag(0x40b)][b['qFNlZ']], j = c[ag(0x40b)][ag(0x395)] || c[ag(0x40b)][b[ag(0x257)]], k = c[ag(0x40b)]['x-auth-token'] || c[ag(0x40b)][b[ag(0x396)]];
            if (b[ag(0x434)](!i, !j) || !k)
                return d[ag(0x338)](0x191)[ag(0x36a)]({ 'error': 'Missing\x20auth\x20headers' });
            try {
                a[ag(0x457)](i, j, k);
            } catch (l) {
                return d[ag(0x338)](0x191)[ag(0x36a)]({ 'error': ag(0x413) + l[ag(0x2eb)] });
            }
        }
        if (c[ag(0x39f)] && b[ag(0x39c)](typeof c[ag(0x39f)], b[ag(0x3bd)])) {
            const m = b[ag(0x39c)]((c[ag(0x40b)][b[ag(0x225)]] || '')[ag(0x2d0)](), 'true');
            try {
                if (m) {
                    const n = Buffer['from'](a0D['SESSION_KEY'], b[ag(0x3a9)]), o = a[ag(0x3f1)](c[ag(0x39f)], n);
                    c[ag(0x39f)] = JSON[ag(0x206)](o);
                } else {
                    if (c[ag(0x39f)][ag(0x2e5)](b['IyHVi'])) {
                        const p = Buffer['from'](c[ag(0x39f)], b[ag(0x3a9)])['toString'](b[ag(0x305)]);
                        c[ag(0x39f)] = JSON[ag(0x206)](p);
                    } else {
                        if (c[ag(0x39f)]['trim']()[ag(0x2e5)]('{') || c[ag(0x39f)][ag(0x2ce)]()['startsWith']('['))
                            c[ag(0x39f)] = JSON[ag(0x206)](c['body']);
                        else {
                            if (b[ag(0x39c)](c[ag(0x39f)]['trim'](), ''))
                                c[ag(0x39f)] = {};
                        }
                    }
                }
            } catch (q) {
                return a0t[ag(0x30f)](ag(0x478) + q[ag(0x2eb)]), d[ag(0x338)](0x190)['json']({ 'error': 'Invalid\x20body\x20format:\x20' + q[ag(0x2eb)] });
            }
        }
        const h = d[ag(0x303)];
        d['send'] = function (r) {
            const ai = ag;
            if (d[ai(0x2cb)](ai(0x36c)) && d[ai(0x2cb)](ai(0x36c))[ai(0x35a)](g[ai(0x25b)]))
                try {
                    const s = g[ai(0x2a5)](typeof r, g['dlXkk']) ? JSON[ai(0x206)](r) : r, t = a[ai(0x3e8)](s), u = g['ZYbCj'](typeof t, ai(0x2e7)) ? t : JSON[ai(0x3b5)](t);
                    return !a0D[ai(0x2a0)] && (d[ai(0x2a9)](g[ai(0x476)], g['SkJqf']), d[ai(0x2a9)](g[ai(0x3b6)], a0D[ai(0x2c4)])), d[ai(0x2a9)](g[ai(0x1f0)], Buffer['byteLength'](u, ai(0x1ee))['toString']()), h[ai(0x1c7)](this, u);
                } catch (v) {
                    if (a0D[ai(0x2a0)])
                        a0t[ai(0x30f)](ai(0x397) + v[ai(0x2eb)]);
                }
            return h[ai(0x1c7)](this, r);
        }, b['vQECM'](f);
    };
}
class a0G {
    constructor() {
        const aj = a0S, a = {
                'aXdUq': function (b, c) {
                    return b / c;
                }
            };
        this[aj(0x25e)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[aj(0x3fe)] = 0x0, this[aj(0x2b8)] = 0x0, this['lastNetworkTime'] = a[aj(0x24e)](Date[aj(0x41d)](), 0x3e8);
    }
    async [a0S(0x1f5)]() {
        const ak = a0S, a = {
                'uIFDT': function (d, f) {
                    return d === f;
                },
                'FkDZO': 'max',
                'YbLXi': function (d, f, g) {
                    return d(f, g);
                },
                'CgMYl': ak(0x377),
                'TXogc': ak(0x1ee),
                'lblTs': ak(0x25a),
                'wYCaA': function (d, f, g) {
                    return d(f, g);
                },
                'ixUIY': function (d, f) {
                    return d > f;
                },
                'kQPWe': function (d, f) {
                    return d - f;
                },
                'UJqdx': function (d, f) {
                    return d - f;
                }
            };
        let b, c;
        try {
            const d = (await a0i[ak(0x42e)](ak(0x45e), ak(0x1ee)))[ak(0x2ce)]();
            b = a[ak(0x343)](d, a['FkDZO']) ? null : a[ak(0x2f9)](parseInt, d, 0xa), c = parseInt((await a0i[ak(0x42e)](a[ak(0x2e0)], a[ak(0x364)]))[ak(0x2ce)](), 0xa);
        } catch {
            try {
                b = a[ak(0x2f9)](parseInt, (await a0i[ak(0x42e)](a[ak(0x48e)], a[ak(0x364)]))[ak(0x2ce)](), 0xa), c = a['wYCaA'](parseInt, (await a0i[ak(0x42e)](ak(0x2d7), a['TXogc']))[ak(0x2ce)](), 0xa);
                if (a[ak(0x450)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0n[ak(0x272)]();
                b = f[ak(0x279)], c = f['used'];
            }
        }
        return {
            'total': b,
            'used': c,
            'available': b !== null ? a[ak(0x2df)](b, c) : null,
            'free': b !== null ? a['UJqdx'](b, c) : 0x0,
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0S(0x306)]() {
        const al = a0S, [a, b, c, d] = await Promise[al(0x467)]([
                a0n[al(0x297)](),
                this['getContainerMemory'](),
                a0n[al(0x205)](),
                a0n[al(0x290)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[al(0x467)]([
                this[al(0x371)](),
                this['getPublicIpV6']()
            ]);
        } catch (h) {
            a0t[al(0x44d)]('获取\x20IP\x20地址失败:\x20' + h[al(0x2eb)], 0x1);
        }
        return {
            'arch': a0k['arch'](),
            'cpu_cores': a['cores'],
            'cpu_name': a[al(0x3c2)],
            'disk_total': (await a0n[al(0x410)]())[0x0]?.[al(0x2e6)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b['total'],
            'os': c[al(0x456)] + '\x20' + c[al(0x49a)],
            'kernel_version': c[al(0x360)],
            'swap_total': b[al(0x3f2)],
            'version': a0D[al(0x2c4)],
            'virtualization': await this[al(0x44a)](),
            'session_key': a0D[al(0x35d)],
            'noise_key': a0D[al(0x26a)]
        };
    }
    [a0S(0x45d)]() {
        const am = a0S, a = {
                'fnouk': function (c, d) {
                    return c === d;
                },
                'lbuBG': am(0x2bc)
            }, b = a0k[am(0x290)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a['fnouk'](d[am(0x442)], a[am(0x3f4)]) || a['fnouk'](d[am(0x442)], 0x4);
                if (f && !d[am(0x23e)]) {
                    if (!/^10\./[am(0x423)](d[am(0x266)]) && !/^192\.168\./[am(0x423)](d['address']) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[am(0x423)](d[am(0x266)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV4']() {
        const an = a0S, a = {
                'HFtYd': an(0x252),
                'GNZtc': an(0x222),
                'BuSXn': an(0x3d4),
                'tZepD': an(0x361),
                'pWxav': 'https://ipecho.net/plain',
                'uWvoQ': an(0x334),
                'GIqwa': 'https://myexternalip.com/raw'
            }, b = [
                a[an(0x473)],
                a['GNZtc'],
                a[an(0x41c)],
                a[an(0x499)],
                a[an(0x261)],
                a[an(0x280)],
                a[an(0x3ef)]
            ];
        for (const d of b) {
            try {
                const f = await this[an(0x275)](d, 0x4);
                if (f && this[an(0x2f3)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this['getLocalIPv4']();
        if (c && this[an(0x2f3)](c))
            return c;
        return null;
    }
    [a0S(0x21e)]() {
        const ao = a0S, a = {
                'RDBgB': ao(0x1d1),
                'qtLJW': function (c, d) {
                    return c === d;
                }
            }, b = a0k[ao(0x290)]();
        for (const c of Object[ao(0x34e)](b)) {
            for (const d of b[c]) {
                const f = d[ao(0x442)] === a['RDBgB'] || a[ao(0x1f6)](d['family'], 0x6);
                if (f && !d[ao(0x23e)]) {
                    if (!d[ao(0x266)][ao(0x2d0)]()[ao(0x2e5)](ao(0x258)))
                        return d[ao(0x266)];
                }
            }
        }
        return null;
    }
    async [a0S(0x3bc)]() {
        const ap = a0S, a = { 'szmXq': 'https://icanhazip.com' }, b = this[ap(0x21e)]();
        if (b && this[ap(0x1fb)](b))
            return b;
        const c = [
            ap(0x3a6),
            a['szmXq'],
            ap(0x345)
        ];
        for (const d of c) {
            try {
                const f = await this[ap(0x275)](d, 0x6);
                if (f && this[ap(0x1fb)](f))
                    return f;
            } catch (g) {
                a0t[ap(0x44d)](ap(0x3cc) + d + ap(0x3e7) + g[ap(0x2eb)]);
                continue;
            }
        }
        return null;
    }
    async [a0S(0x275)](a, b = 0x0) {
        const aq = a0S, c = {
                'znlMv': function (d, f) {
                    return d(f);
                },
                'zJPnm': aq(0x1de),
                'JrWej': function (d, f) {
                    return d !== f;
                },
                'RkKQU': function (d, f) {
                    return d(f);
                },
                'UuTYQ': aq(0x1f8),
                'Svmcm': aq(0x30f)
            };
        return new Promise((d, f) => {
            const as = aq, g = {
                    'BQawf': function (k, l) {
                        return c['JrWej'](k, l);
                    },
                    'IiWIv': function (k, l) {
                        const ar = a0b;
                        return c[ar(0x25d)](k, l);
                    }
                }, h = c[as(0x20c)](require, 'https'), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[as(0x38d)] }
                }, j = h['get'](a, i, k => {
                    const at = as;
                    let l = '';
                    if (g['BQawf'](k['statusCode'], 0xc8)) {
                        g[at(0x28c)](f, new Error(at(0x4ac) + k['statusCode']));
                        return;
                    }
                    k['on'](at(0x433), m => l += m), k['on'](at(0x496), () => d(l[at(0x2ce)]()));
                });
            j['on'](c['Svmcm'], f), j[as(0x491)](0x1388, () => {
                const au = as;
                j[au(0x295)](), c[au(0x20c)](f, new Error(c[au(0x480)]));
            });
        });
    }
    [a0S(0x2f3)](a) {
        const av = a0S;
        return /^(\d{1,3}\.){3}\d{1,3}$/[av(0x423)](a);
    }
    [a0S(0x1fb)](a) {
        const aw = a0S;
        if (!/^[0-9a-fA-F:]+$/[aw(0x423)](a) || !a[aw(0x35a)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[aw(0x423)](a))
            return ![];
        return !![];
    }
    async [a0S(0x344)]() {
        const ax = a0S, a = {
                'ykVie': function (m, n) {
                    return m - n;
                },
                'PxMqp': function (m, n) {
                    return m / n;
                },
                'ToouL': function (m, n) {
                    return m * n;
                },
                'JxTYn': function (m, n) {
                    return m / n;
                },
                'BYWfi': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[ax(0x467)]([
                a0n[ax(0x29f)](),
                a0n['mem'](),
                a0n[ax(0x347)](),
                a0n[ax(0x29f)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = Date['now']() / 0x3e8, i = a['ykVie'](h, this[ax(0x255)]), j = g[ax(0x2aa)] - this[ax(0x25e)]['tx'], k = a[ax(0x2d9)](g['rx_bytes'], this[ax(0x25e)]['rx']);
        this[ax(0x3fe)] += j, this[ax(0x2b8)] += k, this[ax(0x25e)] = {
            'tx': g[ax(0x2aa)],
            'rx': g[ax(0x34a)]
        }, this['lastNetworkTime'] = h;
        const l = await a0n[ax(0x421)]();
        return {
            'cpu': { 'usage': Math['round'](b[ax(0x29f)]) },
            'ram': {
                'total': c[ax(0x279)],
                'used': c[ax(0x354)]
            },
            'swap': {
                'total': c['swaptotal'],
                'used': c[ax(0x296)]
            },
            'load': {
                'load1': a['PxMqp'](Math['round'](a[ax(0x376)](f[ax(0x386)], 0x64)), 0x64),
                'load5': Math[ax(0x48f)](f[ax(0x386)] * 0x64) / 0x64,
                'load15': a['JxTYn'](Math[ax(0x48f)](a[ax(0x376)](f[ax(0x386)], 0x64)), 0x64)
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[ax(0x48f)](a[ax(0x2ec)](j, i)),
                'down': Math[ax(0x48f)](k / i),
                'totalUp': this[ax(0x3fe)],
                'totalDown': this[ax(0x2b8)]
            },
            'connections': await this[ax(0x217)](),
            'uptime': a0k['uptime'](),
            'process': l?.[ax(0x467)] || 0x0,
            'message': ''
        };
    }
    async [a0S(0x44a)]() {
        const ay = a0S, a = {
                'JBDQd': ay(0x29a),
                'fvziM': ay(0x223),
                'NMfwm': ay(0x37f),
                'DHYLe': '/proc/1/cgroup',
                'DuAQq': 'utf8',
                'RhEVY': ay(0x337),
                'wItMy': ay(0x4a2),
                'hwZAs': ay(0x282),
                'yvFKC': ay(0x27d),
                'MBUGd': 'LXC',
                'JuOyJ': ay(0x2c2),
                'yXfpV': ay(0x2fb),
                'NhAdY': ay(0x39e),
                'wpdNO': '/pods/',
                'cwRWu': ay(0x3fd),
                'uZcNd': ay(0x404),
                'cipyR': ay(0x451),
                'NsVgg': ay(0x326),
                'RfxQE': 'QEMU',
                'gvuMa': ay(0x336),
                'cddtI': ay(0x27c)
            };
        try {
            if (a0h[ay(0x3e3)](a[ay(0x204)]))
                return ay(0x3a8);
            if (a0h[ay(0x3e3)](a[ay(0x289)]))
                return a['NMfwm'];
            if (a0h[ay(0x3e3)](a['DHYLe'])) {
                const b = a0h['readFileSync'](a['DHYLe'], a[ay(0x484)])['toLowerCase']();
                if (b[ay(0x35a)](a[ay(0x45c)]) || b[ay(0x35a)](a['wItMy']))
                    return ay(0x3a8);
                else {
                    if (b['includes'](a[ay(0x298)]))
                        return a[ay(0x230)];
                    else {
                        if (b[ay(0x35a)]('lxc'))
                            return a[ay(0x277)];
                    }
                }
            }
            if (a0h[ay(0x3e3)](a['JuOyJ'])) {
                const c = a0h['readFileSync'](ay(0x2c2), a['DuAQq']);
                if (c['includes'](a['yXfpV']) || c['includes'](a['NhAdY']))
                    return ay(0x3a8);
                else {
                    if (c[ay(0x35a)](a['wpdNO']) || c['includes'](a['cwRWu']))
                        return a[ay(0x230)];
                }
            }
            if (a0h[ay(0x3e3)](a['uZcNd'])) {
                const d = a0h[ay(0x2a8)](a[ay(0x299)], a[ay(0x484)]);
                if (d['includes'](a[ay(0x317)]))
                    return a[ay(0x277)];
            }
            if (a0h[ay(0x3e3)](a[ay(0x2d6)])) {
                const f = a0h[ay(0x2a8)](a[ay(0x2d6)], ay(0x1ee));
                if (f['includes'](a[ay(0x432)]) || f[ay(0x35a)](a[ay(0x33c)]))
                    return ay(0x3d3);
            }
        } catch (g) {
        }
        return a[ay(0x40d)];
    }
    async [a0S(0x315)]() {
        const az = a0S;
        try {
            const a = await a0n[az(0x410)](), b = a[az(0x44b)]((d, f) => d + f['size'], 0x0), c = a[az(0x44b)]((d, f) => d + f[az(0x354)], 0x0);
            return {
                'total': b,
                'used': c
            };
        } catch {
            return {
                'total': 0x0,
                'used': 0x0
            };
        }
    }
    async [a0S(0x217)]() {
        const aA = a0S;
        try {
            const a = await a0n[aA(0x379)](), b = a[aA(0x32d)](d => d[aA(0x2e3)] === aA(0x482))[aA(0x1e9)], c = a[aA(0x32d)](d => d[aA(0x2e3)] === aA(0x45f))[aA(0x1e9)];
            return {
                'tcp': b,
                'udp': c
            };
        } catch {
            return {
                'tcp': 0x0,
                'udp': 0x0
            };
        }
    }
}
class a0H {
    static async [a0S(0x439)](a, b = {}) {
        const aB = a0S, c = {
                'BkjMR': function (d, f) {
                    return d - f;
                },
                'ybeLD': function (d, f) {
                    return d || f;
                },
                'xPkWF': function (d, f) {
                    return d(f);
                },
                'UgnTT': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'puDur': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process['cwd'](),
                env: env = {},
                timeout: timeout = a0D[aB(0x37a)]
            } = b;
        return new Promise(d => {
            const aE = aB, f = {
                    'DYfsi': function (i, j) {
                        const aC = a0b;
                        return c[aC(0x1ca)](i, j);
                    },
                    'blksi': function (i, j) {
                        return c['ybeLD'](i, j);
                    },
                    'Ledhh': function (i, j) {
                        return i === j;
                    },
                    'uMIyf': function (i, j) {
                        const aD = a0b;
                        return c[aD(0x39b)](i, j);
                    }
                }, g = Date[aE(0x41d)](), h = c[aE(0x30b)](a0l, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': timeout * 0x3e8,
                    'maxBuffer': c['puDur'](0xa * 0x400, 0x400)
                }, (i, j, k) => {
                    const aF = aE, l = f[aF(0x390)](Date[aF(0x41d)](), g), m = i && i[aF(0x1fa)] && i[aF(0x365)];
                    let n = f[aF(0x477)](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f[aF(0x429)](typeof i['code'], aF(0x437)) ? o = i[aF(0x254)] : o = -0x1;
                    }
                    f['uMIyf'](d, {
                        'result': n,
                        'exitcode': o,
                        'timeout': m,
                        'cmd': a
                    });
                });
        });
    }
}
class a0I {
    static async [a0S(0x229)](a, b = ![]) {
        const aG = a0S, c = {
                'obgUx': aG(0x3bf),
                'JvIpP': 'file',
                'mfuPb': function (h, i) {
                    return h & i;
                },
                'YNCLA': function (h, i) {
                    return h || i;
                },
                'XRPtf': 'Access\x20denied:\x20path\x20outside\x20root',
                'kXtXA': aG(0x31b),
                'mFyMw': function (h, i) {
                    return h(i);
                }
            }, d = a0j[aG(0x285)](a0D[aG(0x4af)], c[aG(0x424)](a, '.'));
        if (!d[aG(0x2e5)](a0D[aG(0x4af)]))
            throw new Error(c[aG(0x3b9)]);
        if (!a0h[aG(0x3e3)](d))
            throw new Error(c[aG(0x1dd)]);
        const f = [], g = h => {
                const aH = aG, i = a0h['readdirSync'](h);
                for (const j of i) {
                    const k = a0j[aH(0x307)](h, j), l = a0h[aH(0x38b)](k), m = new a0z();
                    m[aH(0x1d8)] = j, m[aH(0x28f)] = a0j['relative'](a0D['FILE_ROOT'], k), m['type'] = l[aH(0x212)]() ? c[aH(0x35b)] : c[aH(0x4b2)], m['size'] = l[aH(0x2e6)], m[aH(0x4ae)] = l[aH(0x4ae)][aH(0x319)](), m[aH(0x452)] = this[aH(0x43a)](l[aH(0x452)], l[aH(0x212)]()), m['mode_octal'] = '0o' + c[aH(0x243)](l[aH(0x452)], 0x1ff)[aH(0x1f4)](0x8), m[aH(0x34d)] = l[aH(0x4aa)] + ':' + l[aH(0x2ab)], f[aH(0x2ef)](m), b && l['isDirectory']() && g(k);
                }
            };
        return c[aG(0x49b)](g, d), f;
    }
    static async ['getFilePermissions'](a) {
        const aI = a0S, b = {
                'nTwDL': function (d, f) {
                    return d & f;
                },
                'PNfTb': 'file'
            }, c = [];
        for (const d of a) {
            const f = a0j[aI(0x285)](a0D[aI(0x4af)], d);
            if (!f['startsWith'](a0D[aI(0x4af)]))
                continue;
            try {
                const g = a0h[aI(0x38b)](f), h = this['_checkAccess'](f, a0h['constants'][aI(0x440)]), i = this[aI(0x263)](f, a0h[aI(0x23d)][aI(0x428)]), j = this[aI(0x263)](f, a0h['constants'][aI(0x1ea)]), k = new a0A();
                k[aI(0x28f)] = a0j[aI(0x351)](a0D[aI(0x4af)], f), k[aI(0x1d8)] = a0j['basename'](f), k['mode'] = this[aI(0x43a)](g[aI(0x452)], g[aI(0x212)]()), k[aI(0x2b3)] = '0o' + b['nTwDL'](g[aI(0x452)], 0x1ff)['toString'](0x8), k[aI(0x32b)] = g['isDirectory']() ? 'directory' : b[aI(0x325)], k[aI(0x446)] = h, k[aI(0x20e)] = i, k[aI(0x228)] = j, c[aI(0x2ef)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static ['_checkAccess'](a, b) {
        const aJ = a0S;
        try {
            return a0h[aJ(0x1fd)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0S(0x2b9)](a) {
        const aK = a0S, b = {
                'UEYQr': function (c, d) {
                    return c === d;
                },
                'eZstz': aK(0x437),
                'xApti': function (c, d) {
                    return c === d;
                },
                'IBndj': aK(0x1e4)
            };
        if (b[aK(0x43f)](typeof a, b[aK(0x494)]))
            return a;
        if (b[aK(0x36d)](typeof a, aK(0x2e7))) {
            const c = a[aK(0x2ce)]();
            if (/^[0-7]{3,4}$/[aK(0x423)](c))
                return parseInt(c, 0x8);
        }
        throw new Error(b[aK(0x387)]);
    }
    static ['_formatMode'](a, b) {
        const aL = a0S, c = {
                'IZFVv': function (i, j) {
                    return i & j;
                },
                'QgPrp': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[aL(0x1e1)](a, 0x1ff)[aL(0x1f4)](0x8)['padStart'](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aL(0x1e0)](parseInt, i, 0xa);
            h += f[aL(0x419)]((k, l) => j & 0x4 >> l ? k : '-')[aL(0x307)]('');
        }
        return h;
    }
    static async [a0S(0x340)](a, b = ![]) {
        const aM = a0S, c = {
                'AzaBY': function (g, h) {
                    return g(h);
                },
                'DpOlx': function (g, h) {
                    return g(h);
                },
                'QANOd': 'access_denied',
                'EoBrw': function (g, h) {
                    return g(h);
                },
                'cUmiB': aM(0x30f)
            }, d = [];
        for (const [g, h] of Object['entries'](a)) {
            const i = a0j['resolve'](a0D[aM(0x4af)], g);
            if (!i[aM(0x2e5)](a0D['FILE_ROOT'])) {
                d[aM(0x2ef)]({
                    'path': g,
                    'requested': c['AzaBY'](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['QANOd']
                });
                continue;
            }
            try {
                const j = this[aM(0x2b9)](h), k = m => {
                        const aN = aM;
                        a0h[aN(0x244)](m, j);
                    };
                if (b && a0h['existsSync'](i) && a0h['statSync'](i)['isDirectory']()) {
                    const m = n => {
                        const aO = aM;
                        c[aO(0x2ff)](k, n);
                        const o = a0h[aO(0x316)](n);
                        for (const p of o) {
                            const q = a0j['join'](n, p);
                            a0h[aO(0x38b)](q)[aO(0x212)]() ? c[aO(0x2ff)](m, q) : c['DpOlx'](k, q);
                        }
                    };
                    c[aM(0x2f8)](m, i);
                } else
                    c[aM(0x2ff)](k, i);
                const l = j[aM(0x1f4)](0x8);
                d[aM(0x2ef)]({
                    'path': g,
                    'requested': c[aM(0x331)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aM(0x2ef)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['cUmiB'],
                    'message': n[aM(0x2eb)]
                });
            }
        }
        const f = d[aM(0x32d)](o => o[aM(0x338)] === 'ok')[aM(0x1e9)];
        return {
            'status': 'ok',
            'total': d[aM(0x1e9)],
            'success': f,
            'results': d
        };
    }
    static async [a0S(0x42e)](a) {
        const aP = a0S, b = {
                'HDkmV': aP(0x246),
                'DZrLe': aP(0x1f2),
                'ZwTZy': aP(0x1ee),
                'ldzXF': aP(0x2a3)
            }, c = a0j[aP(0x285)](a0D['FILE_ROOT'], a);
        if (!c['startsWith'](a0D[aP(0x4af)]))
            throw new Error(b['HDkmV']);
        const d = a0h[aP(0x38b)](c);
        if (d[aP(0x2e6)] > 0x400 * 0x400)
            throw new Error(b[aP(0x259)]);
        const f = a0h[aP(0x2a8)](c), g = this[aP(0x46b)](f);
        return {
            'status': 'ok',
            'path': a0j[aP(0x351)](a0D[aP(0x4af)], c),
            'content': g ? a0p[aP(0x311)](f) : f[aP(0x1f4)](b['ZwTZy']),
            'encoding': g ? b['ldzXF'] : aP(0x4a5),
            'is_binary': g,
            'size': d[aP(0x2e6)]
        };
    }
    static ['_isBinary'](a) {
        const aQ = a0S, b = {
                'DoVTF': function (c, d) {
                    return c < d;
                }
            };
        if (!a || a['length'] === 0x0)
            return ![];
        for (let c = 0x0; b[aQ(0x23a)](c, Math[aQ(0x2a6)](a[aQ(0x1e9)], 0x200)); c++) {
            if (a[c] === 0x0)
                return !![];
        }
        return ![];
    }
    static async [a0S(0x1fe)](a, b, c, d = null, f = null) {
        const aR = a0S, g = {
                'AeKUP': 'Access\x20denied:\x20path\x20outside\x20root',
                'plWpk': function (l, m) {
                    return l > m;
                },
                'vJwsv': 'File\x20too\x20large',
                'oQitE': function (l, m) {
                    return l !== m;
                },
                'calFF': function (l, m) {
                    return l(m);
                },
                'qdMQU': aR(0x4a1)
            }, h = a0j[aR(0x285)](a0D[aR(0x4af)], a);
        let j = h;
        b && (j = a0j['join'](h, b));
        if (!j[aR(0x2e5)](a0D[aR(0x4af)]))
            throw new Error(g[aR(0x31f)]);
        !a0h[aR(0x3e3)](a0j[aR(0x398)](j)) && a0h[aR(0x40c)](a0j[aR(0x398)](j), { 'recursive': !![] });
        const k = a0p[aR(0x1d5)](c);
        if (g[aR(0x20a)](k[aR(0x1e9)], a0D['MAX_UPLOAD_SIZE']))
            throw new Error(g['vJwsv']);
        if (d !== null && g['oQitE'](f, null)) {
            const l = g['calFF'](Number, d), m = g[aR(0x200)](Number, f);
            if (Number[aR(0x2e9)](l) || Number[aR(0x2e9)](m))
                throw new Error(g[aR(0x4a4)]);
            const n = a0j[aR(0x307)](a0j[aR(0x398)](j), aR(0x2cf), a0j[aR(0x35c)](j));
            !a0h[aR(0x3e3)](n) && a0h[aR(0x40c)](n, { 'recursive': !![] });
            const o = a0j[aR(0x307)](n, aR(0x38f) + l);
            a0h['writeFileSync'](o, k);
            const p = a0h[aR(0x316)](n)[aR(0x32d)](s => s[aR(0x2e5)](aR(0x38f))), q = p[aR(0x1e9)], r = q === m;
            if (r) {
                const s = a0h[aR(0x2c5)](j);
                for (let t = 0x0; t < m; t++) {
                    const u = a0j[aR(0x307)](n, aR(0x38f) + t);
                    if (!a0h[aR(0x3e3)](u)) {
                        s['close']();
                        throw new Error('Missing\x20chunk\x20' + t);
                    }
                    s[aR(0x21c)](a0h[aR(0x2a8)](u));
                }
                s[aR(0x496)]();
                for (const v of a0h['readdirSync'](n)) {
                    a0h[aR(0x44c)](a0j['join'](n, v));
                }
                a0h[aR(0x2e2)](n, { 'recursive': !![] });
            }
            return {
                'status': 'ok',
                'path': a0j[aR(0x351)](a0D[aR(0x4af)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aR(0x441)](j, k), {
            'status': 'ok',
            'path': a0j[aR(0x351)](a0D['FILE_ROOT'], j),
            'received': k[aR(0x1e9)],
            'total': k[aR(0x1e9)],
            'chunked': ![]
        };
    }
    static async ['downloadFile'](a) {
        const aS = a0S, b = a0j[aS(0x285)](a0D[aS(0x4af)], a);
        if (!b[aS(0x2e5)](a0D[aS(0x4af)]))
            throw new Error(aS(0x246));
        if (!a0h[aS(0x3e3)](b))
            throw new Error(aS(0x38a));
        const c = a0h[aS(0x38b)](b), d = a0h[aS(0x2a8)](b), f = a0p['fromByteArray'](d);
        return {
            'path': a0j[aS(0x351)](a0D[aS(0x4af)], b),
            'content': f,
            'size': c[aS(0x2e6)]
        };
    }
    static async [a0S(0x372)](a) {
        const aT = a0S, b = {
                'hnXiQ': aT(0x464),
                'HgcLL': 'not_found',
                'xXsob': 'error'
            }, c = [];
        for (const d of a) {
            const f = a0j[aT(0x285)](a0D['FILE_ROOT'], d);
            if (!f[aT(0x2e5)](a0D[aT(0x4af)])) {
                c[aT(0x2ef)]({
                    'path': d,
                    'status': aT(0x359)
                });
                continue;
            }
            try {
                if (a0h['existsSync'](f)) {
                    const g = a0h[aT(0x38b)](f);
                    g['isDirectory']() ? a0h[aT(0x2e2)](f, { 'recursive': !![] }) : a0h['unlinkSync'](f), c[aT(0x2ef)]({
                        'path': d,
                        'status': b[aT(0x327)]
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': b[aT(0x224)]
                    });
            } catch (h) {
                c['push']({
                    'path': d,
                    'status': b['xXsob'],
                    'message': h['message']
                });
            }
        }
        return c;
    }
    static async [a0S(0x47c)](a) {
        const aU = a0S, b = {
                'jacTl': aU(0x359),
                'WSLrk': 'error'
            }, c = [];
        for (const [d, f] of Object[aU(0x3e5)](a)) {
            const g = a0j['resolve'](a0D[aU(0x4af)], d), h = a0j['resolve'](a0D['FILE_ROOT'], f);
            if (!g[aU(0x2e5)](a0D[aU(0x4af)]) || !h['startsWith'](a0D[aU(0x4af)])) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[aU(0x301)]
                });
                continue;
            }
            try {
                const i = a0j[aU(0x398)](h);
                !a0h[aU(0x3e3)](i) && a0h[aU(0x40c)](i, { 'recursive': !![] }), a0h[aU(0x407)](g, h), c[aU(0x2ef)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[aU(0x385)],
                    'message': j[aU(0x2eb)]
                });
            }
        }
        return c;
    }
    static async ['copyFiles'](a) {
        const aV = a0S, b = {
                'xzEXH': function (d, f, g) {
                    return d(f, g);
                },
                'ExAJP': aV(0x359),
                'FafNi': aV(0x28a),
                'xtWVC': aV(0x30f)
            }, c = [];
        for (const [d, f] of Object[aV(0x3e5)](a)) {
            const g = a0j[aV(0x285)](a0D['FILE_ROOT'], d), h = a0j[aV(0x285)](a0D['FILE_ROOT'], f);
            if (!g[aV(0x2e5)](a0D['FILE_ROOT']) || !h[aV(0x2e5)](a0D[aV(0x4af)])) {
                c[aV(0x2ef)]({
                    'from': d,
                    'to': f,
                    'status': b[aV(0x2ca)]
                });
                continue;
            }
            try {
                if (!a0h[aV(0x3e3)](g)) {
                    c[aV(0x2ef)]({
                        'from': d,
                        'to': f,
                        'status': b[aV(0x445)]
                    });
                    continue;
                }
                const i = a0j[aV(0x398)](h);
                !a0h['existsSync'](i) && a0h[aV(0x40c)](i, { 'recursive': !![] });
                const j = a0h[aV(0x38b)](g);
                if (j[aV(0x212)]()) {
                    if (a0h['cpSync'])
                        a0h['cpSync'](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aW = aV;
                            if (a0h[aW(0x38b)](l)[aW(0x212)]()) {
                                if (!a0h[aW(0x3e3)](m))
                                    a0h[aW(0x40c)](m, { 'recursive': !![] });
                                for (const n of a0h['readdirSync'](l)) {
                                    b['xzEXH'](k, a0j[aW(0x307)](l, n), a0j[aW(0x307)](m, n));
                                }
                            } else
                                a0h[aW(0x2c8)](l, m);
                        };
                        k(g, h);
                    }
                } else
                    a0h[aV(0x2c8)](g, h);
                c[aV(0x2ef)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[aV(0x2ef)]({
                    'from': d,
                    'to': f,
                    'status': b['xtWVC'],
                    'message': l[aV(0x2eb)]
                });
            }
        }
        return c;
    }
    static async [a0S(0x32e)](a) {
        const aX = a0S, b = { 'EToDm': aX(0x246) }, c = a0j[aX(0x285)](a0D[aX(0x4af)], a);
        if (!c[aX(0x2e5)](a0D['FILE_ROOT']))
            throw new Error(b[aX(0x3f0)]);
        return a0h[aX(0x40c)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[aX(0x351)](a0D['FILE_ROOT'], c)
        };
    }
}
class a0J {
    static [a0S(0x401)] = new Map();
    static [a0S(0x1ef)](a, b) {
        const aY = a0S, c = {
                'FxdZN': function (d, f) {
                    return d > f;
                },
                'Ptxxi': function (d, f) {
                    return d - f;
                }
            };
        a[aY(0x2ef)](b), c[aY(0x2fa)](a[aY(0x1e9)], a0D[aY(0x2d3)]) && a[aY(0x3e6)](0x0, c[aY(0x1f3)](a['length'], a0D['MAX_TASK_LOG_SIZE']));
    }
    static [a0S(0x281)](a, b, c, d, f = null) {
        const aZ = a0S, g = new Date()[aZ(0x319)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + aZ(0x31e) + a + '\x20----\x20exitcode=' + c + '\x0a' + (b?.[aZ(0x2ce)]() || '')
        };
    }
    static [a0S(0x493)]() {
        const b0 = a0S;
        return {
            'status': 'ok',
            'count': a0D[b0(0x268)][b0(0x1e9)],
            'tasks': a0D[b0(0x268)]
        };
    }
    static async [a0S(0x239)](a) {
        const b1 = a0S, b = {
                'TSPGO': function (d, f) {
                    return d < f;
                },
                'JzbRx': b1(0x342)
            };
        a0D['onetasks'] = a || [], a0D[b1(0x46d)] = !![];
        const c = [];
        for (let d = 0x0; b[b1(0x47b)](d, a0D[b1(0x268)][b1(0x1e9)]); d++) {
            const f = a0D['onetasks'][d], g = await a0H[b1(0x439)](f), h = this[b1(0x281)](f, g[b1(0x2cd)], g[b1(0x422)], b[b1(0x488)]);
            this['_appendLog'](a0D['onetimetasks_log'], h), c[b1(0x2ef)]({
                'index': d,
                'cmd': f,
                'exitcode': g[b1(0x422)],
                'output': g[b1(0x2cd)],
                'status': g[b1(0x422)] === 0x0 ? 'ok' : b1(0x30f)
            });
        }
        return a0D['InitTask'] = ![], {
            'status': 'ok',
            'count': a0D[b1(0x268)][b1(0x1e9)],
            'tasks': a0D[b1(0x268)],
            'executed': c
        };
    }
    static [a0S(0x489)]() {
        const b2 = a0S;
        return {
            'status': 'ok',
            'count': Object[b2(0x34e)](a0D['crontasks'])[b2(0x1e9)],
            'tasks': a0D['crontasks']
        };
    }
    static ['setCronTasks'](a) {
        const b3 = a0S, b = {
                'OUROj': function (d, f) {
                    return d === f;
                },
                'LXrXK': b3(0x2b0),
                'XCpEi': 'cron',
                'Uczyu': function (d, f) {
                    return d > f;
                },
                'YMbUw': b3(0x30f),
                'TaPGw': function (d, f) {
                    return d - f;
                },
                'KkBPN': function (d, f) {
                    return d || f;
                }
            };
        this[b3(0x401)][b3(0x3e9)](d => {
            const b4 = b3;
            b[b4(0x218)](typeof d['stop'], b['LXrXK']) && d['stop'](), b[b4(0x218)](typeof d[b4(0x295)], b[b4(0x4a7)]) && d[b4(0x295)]();
        }), this[b3(0x401)][b3(0x2c7)]();
        const c = [];
        for (const d of Object[b3(0x34e)](a || {})) {
            !a0m[b3(0x485)](d) && c['push'](d);
        }
        if (b['Uczyu'](c[b3(0x1e9)], 0x0))
            return {
                'status': b[b3(0x3c0)],
                'message': 'Invalid\x20cron\x20expressions:\x20' + c[b3(0x307)](',\x20'),
                'valid_count': b['TaPGw'](Object[b3(0x34e)](a || {})['length'], c[b3(0x1e9)])
            };
        a0D['crontasks'] = b[b3(0x4a3)](a, {});
        for (const [f, g] of Object[b3(0x3e5)](a0D[b3(0x34b)])) {
            const h = a0m[b3(0x43e)](f, async () => {
                const b5 = b3, i = await a0H[b5(0x439)](g), j = this['_formatLogEntry'](g, i['result'], i[b5(0x422)], b[b5(0x2b5)], f);
                this[b5(0x1ef)](a0D[b5(0x312)], j);
            });
            this[b3(0x401)][b3(0x2a9)](f, h);
        }
        return a0D[b3(0x474)] = Object[b3(0x34e)](a0D[b3(0x34b)])['length'] > 0x0, {
            'status': 'ok',
            'count': Object[b3(0x34e)](a0D[b3(0x34b)])[b3(0x1e9)],
            'tasks': a0D[b3(0x34b)]
        };
    }
    static [a0S(0x1e6)]() {
        const b6 = a0S;
        return {
            'onetime': {
                'pending': a0D[b6(0x46d)],
                'count': a0D['onetasks'][b6(0x1e9)]
            },
            'cron': {
                'active': a0D[b6(0x474)],
                'count': Object[b6(0x34e)](a0D[b6(0x34b)])[b6(0x1e9)],
                'check_interval': a0D[b6(0x468)]
            }
        };
    }
    static [a0S(0x1d6)](a = 0x32) {
        const b7 = a0S, b = a0D[b7(0x1ff)][b7(0x207)](-a);
        return {
            'status': 'ok',
            'count': b[b7(0x1e9)],
            'logs': b
        };
    }
    static [a0S(0x29c)](a = 0x32) {
        const b8 = a0S, b = a0D[b8(0x312)][b8(0x207)](-a);
        return {
            'status': 'ok',
            'count': b[b8(0x1e9)],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const b9 = a0S, a = { 'xbzDO': b9(0x342) }, b = a0D[b9(0x1ff)][b9(0x1e9)];
        return a0D[b9(0x1ff)] = [], {
            'status': 'ok',
            'cleared': a['xbzDO']
        };
    }
    static ['clearCronLogs']() {
        const ba = a0S, a = { 'BOOUs': ba(0x417) }, b = a0D[ba(0x312)][ba(0x1e9)];
        return a0D[ba(0x312)] = [], {
            'status': 'ok',
            'cleared': a[ba(0x48b)]
        };
    }
    static [a0S(0x37b)]() {
        const bb = a0S, a = a0D[bb(0x1ff)][bb(0x32d)](f => f[bb(0x422)] === 0x0)['length'], b = a0D[bb(0x1ff)][bb(0x1e9)] - a, c = a0D[bb(0x312)][bb(0x32d)](f => f[bb(0x422)] === 0x0)[bb(0x1e9)], d = a0D['crontasks_log'][bb(0x1e9)] - c;
        return {
            'onetime': {
                'total_logged': a0D[bb(0x1ff)][bb(0x1e9)],
                'max_capacity': a0D[bb(0x2d3)],
                'recent_success': a,
                'recent_failed': b
            },
            'cron': {
                'total_logged': a0D[bb(0x312)][bb(0x1e9)],
                'max_capacity': a0D[bb(0x2d3)],
                'recent_success': c,
                'recent_failed': d
            }
        };
    }
    static async [a0S(0x415)]() {
        const bc = a0S, a = {
                'DAkOg': function (c, d) {
                    return c < d;
                },
                'MoExn': bc(0x342)
            }, b = [];
        for (let c = 0x0; a[bc(0x495)](c, a0D[bc(0x268)][bc(0x1e9)]); c++) {
            const d = a0D[bc(0x268)][c], f = await a0H[bc(0x439)](d), g = this[bc(0x281)](d, f[bc(0x2cd)], f[bc(0x422)], a['MoExn']);
            this[bc(0x1ef)](a0D[bc(0x1ff)], g), b['push']({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f[bc(0x2cd)],
                'timeout': f[bc(0x29d)]
            });
        }
        return a0D[bc(0x46d)] = ![], {
            'status': 'ok',
            'executed': b[bc(0x1e9)],
            'results': b
        };
    }
}
let a0K = null, a0L = null;
const a0M = new Promise((a, b) => {
    const bd = a0S, c = {
            'sXhpu': bd(0x1d2),
            'OkPIQ': bd(0x314),
            'GNiNQ': bd(0x455),
            'ZyBRm': function (d, f) {
                return d(f);
            },
            'YmLyD': '[WARN]\x20Exception\x20loading\x20Noise\x20module:',
            'iBdiE': function (d) {
                return d();
            }
        };
    try {
        c[bd(0x353)](a0r, function (d) {
            const be = bd;
            if (!d) {
                a0L = new Error(c[be(0x323)]), a0t['warn'](c[be(0x400)], a0L[be(0x2eb)]), a();
                return;
            }
            a0K = d, a0t[be(0x44d)](c[be(0x2fc)]), a();
        });
    } catch (d) {
        a0L = d, a0t['warn'](c[bd(0x1d0)], d[bd(0x2eb)]), c[bd(0x2b7)](a);
    }
});
process['on']('unhandledRejection', (a, b) => {
    const bf = a0S;
    a0t['error'](bf(0x350), a);
}), process['on']('uncaughtException', a => {
    const bg = a0S, b = { 'WVJOc': bg(0x262) };
    a0t[bg(0x30f)](b['WVJOc'], a), process['exit'](0x1);
});
class a0N {
    constructor(a, b, c) {
        const bh = a0S;
        this[bh(0x369)] = a, this[bh(0x414)] = b, this['expectedRemotePubB64'] = c, this['handshakeFinished'] = ![], this['hs'] = null, this[bh(0x40f)] = null, this['recvCipher'] = null;
    }
    async [a0S(0x3e1)]() {
        const bi = a0S, a = {
                'rUScW': bi(0x367),
                'UPYPv': bi(0x32a),
                'KOAcN': bi(0x333),
                'CNMCf': 'base64'
            };
        await a0M;
        if (!a0K)
            throw a0L || new Error(a['rUScW']);
        const b = a0K, c = this[bi(0x369)] ? b['constants']['NOISE_ROLE_INITIATOR'] : b['constants'][bi(0x22f)];
        this['hs'] = b['HandshakeState'](a['UPYPv'], c);
        const d = Buffer[bi(0x49f)](a[bi(0x47a)]), f = this[bi(0x414)] ? Buffer['from'](this[bi(0x414)], bi(0x2a3)) : null, g = this['expectedRemotePubB64'] ? Buffer['from'](this[bi(0x242)], a[bi(0x283)]) : null;
        this['hs'][bi(0x427)](d, f, g, null);
    }
    [a0S(0x2af)](a) {
        const bj = a0S, b = {
                'hEiOo': function (d, f) {
                    return d > f;
                },
                'cckMG': function (d, f) {
                    return d === f;
                },
                'AgzVb': function (d, f) {
                    return d === f;
                },
                'lVUCA': function (d, f) {
                    return d === f;
                }
            };
        if (this[bj(0x284)])
            return Buffer['alloc'](0x0);
        const c = a0K;
        a && b['hEiOo'](a[bj(0x1e9)], 0x0) && b['cckMG'](this['hs'][bj(0x245)](), c[bj(0x23d)][bj(0x3b4)]) && this['hs']['ReadMessage'](a);
        if (b['AgzVb'](this['hs']['GetAction'](), c['constants'][bj(0x2f7)]))
            return this[bj(0x420)](), Buffer[bj(0x267)](0x0);
        if (b[bj(0x483)](this['hs'][bj(0x245)](), c[bj(0x23d)][bj(0x31d)])) {
            const d = this['hs']['WriteMessage'](new Uint8Array(0x0));
            return b[bj(0x449)](this['hs']['GetAction'](), c[bj(0x23d)][bj(0x2f7)]) && this[bj(0x420)](), Buffer[bj(0x49f)](d);
        }
        return Buffer[bj(0x267)](0x0);
    }
    [a0S(0x420)]() {
        const bk = a0S, a = this['hs'][bk(0x26c)]();
        this[bk(0x40f)] = a[0x0], this[bk(0x33b)] = a[0x1], this[bk(0x284)] = !![];
        try {
            if (this['hs'])
                this['hs'][bk(0x48a)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0S(0x37d)](a) {
        const bl = a0S, b = { 'aDXLt': '握手未完成，无法加密数据' };
        if (!this[bl(0x284)])
            throw new Error(b['aDXLt']);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bl(0x49f)](this['sendCipher'][bl(0x475)](c, d));
    }
    [a0S(0x3b2)](a) {
        const bm = a0S;
        if (!this[bm(0x284)])
            throw new Error(bm(0x209));
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer['from'](this[bm(0x33b)][bm(0x3f5)](b, c));
    }
    [a0S(0x48a)]() {
        const bn = a0S;
        try {
            if (this[bn(0x40f)])
                this['sendCipher'][bn(0x48a)]();
        } catch (a) {
        }
        try {
            if (this[bn(0x33b)])
                this[bn(0x33b)][bn(0x48a)]();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs'][bn(0x48a)]();
        } catch (c) {
        }
        this[bn(0x40f)] = null, this[bn(0x33b)] = null, this['hs'] = null;
    }
}
class a0O {
    constructor() {
        const bo = a0S, a = { 'MKxUV': 'handshake' };
        this[bo(0x1d9)] = null, this[bo(0x46a)] = null, this[bo(0x41e)] = null, this[bo(0x30d)] = !![], this[bo(0x366)] = a[bo(0x1df)], this[bo(0x213)] = [], this[bo(0x3a2)] = [], this[bo(0x46e)] = a0D[bo(0x3c7)][bo(0x472)][bo(0x22a)], this[bo(0x335)] = a0D[bo(0x3c7)][bo(0x3d6)]['public_b64'], this['cipher'] = new a0N(![], this[bo(0x46e)], this['CONTROL_PUBLIC_KEY']);
    }
    async ['cleanup']() {
        const bp = a0S, a = {
                'lnoNA': function (b, c) {
                    return b === c;
                },
                'pEYda': bp(0x1da)
            };
        this[bp(0x41e)] && a0t[bp(0x4ad)]('[' + this[bp(0x41e)] + bp(0x388));
        if (this['ptyProcess']) {
            try {
                this[bp(0x1d9)][bp(0x3a5)]();
            } catch (b) {
            }
            this[bp(0x1d9)] = null;
        }
        if (this[bp(0x46c)])
            this[bp(0x46c)]['free']();
        if (this[bp(0x46a)])
            try {
                a[bp(0x278)](this['websocket'][bp(0x431)], this['websocket'][bp(0x2cc)]) && this[bp(0x46a)][bp(0x42a)](0x3e8, a[bp(0x40e)]);
            } catch (c) {
            } finally {
                this[bp(0x46a)] = null;
            }
    }
    ['_handleRawMessage'](a) {
        const bq = a0S, b = {
                'wGUST': function (c, d) {
                    return c === d;
                },
                'mqLRG': bq(0x329),
                'pIpdR': function (c, d) {
                    return c === d;
                },
                'xhAwk': bq(0x27a)
            };
        if (b[bq(0x328)](this[bq(0x366)], b[bq(0x304)])) {
            if (this[bq(0x3a2)]['length'] > 0x0) {
                const c = this[bq(0x3a2)][bq(0x318)]();
                c(a);
            } else
                this[bq(0x213)][bq(0x2ef)](a);
        } else
            b[bq(0x3e0)](this[bq(0x366)], b['xhAwk']) && this[bq(0x3c3)](a);
    }
    async ['_receiveWsBytes']() {
        const br = a0S, a = {
                'miTsr': function (b, c) {
                    return b > c;
                }
            };
        if (a[br(0x391)](this['msgQueue'][br(0x1e9)], 0x0))
            return this[br(0x213)][br(0x318)]();
        return new Promise(b => {
            const bs = br;
            this[bs(0x3a2)]['push'](b);
        });
    }
    async ['_doNoiseHandshake'](a) {
        const bt = a0S, b = {
                'SoaLD': function (c, d) {
                    return c(d);
                },
                'wIsBP': bt(0x3af),
                'EOgOD': function (c, d) {
                    return c > d;
                },
                'UjtMO': bt(0x236),
                'AFTCA': bt(0x405)
            };
        b[bt(0x470)](a, b[bt(0x3fb)]);
        try {
            await this[bt(0x46c)]['init']();
            const c = await this[bt(0x3c9)](), d = this[bt(0x46c)][bt(0x2af)](c);
            d && b[bt(0x3ee)](d[bt(0x1e9)], 0x0) && this['websocket']['send'](d);
            const f = await this[bt(0x3c9)]();
            this[bt(0x46c)][bt(0x2af)](f);
            if (!this['cipher'][bt(0x284)])
                throw new Error(b[bt(0x322)]);
            a(bt(0x27e));
        } catch (g) {
            b[bt(0x470)](a, bt(0x47d) + g[bt(0x2eb)]);
            throw new Error(b[bt(0x370)]);
        }
    }
    ['getAvailableShell']() {
        const bu = a0S, a = {
                'NJLTg': bu(0x45a),
                'vbJpu': bu(0x39a),
                'ULwio': bu(0x349),
                'GVUES': bu(0x47f)
            }, b = process.env.SHELL;
        if (b && a0h[bu(0x3e3)](b))
            return b;
        const c = [
            a[bu(0x3d1)],
            a[bu(0x1f1)],
            a[bu(0x2f4)],
            a[bu(0x25c)]
        ];
        for (const d of c) {
            if (a0h['existsSync'](d))
                return d;
        }
        return a['GVUES'];
    }
    async [a0S(0x250)](a, b, c) {
        const bv = a0S, d = {
                'dmZFL': function (g, h) {
                    return g(h);
                },
                'vAQbr': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'XJyQC': bv(0x49c),
                'yiSFh': bv(0x2eb)
            };
        this['websocket'] = a, this[bv(0x41e)] = b;
        const f = g => a0t['info'](bv(0x226) + b + ']\x20' + g);
        this[bv(0x30d)] = !c, d['dmZFL'](f, this['useNoise'] ? d[bv(0x3ed)] : d[bv(0x438)]), a['on'](d[bv(0x409)], g => this[bv(0x2c1)](g));
        try {
            this['useNoise'] && await this[bv(0x358)](f), await this[bv(0x1ec)](f);
        } catch (g) {
            f(bv(0x357) + g[bv(0x2eb)]), await this[bv(0x273)]();
        }
    }
    async [a0S(0x1ec)](a) {
        const bw = a0S, b = {
                'lNRlm': bw(0x4a5),
                'uwDyF': function (f, g) {
                    return f === g;
                },
                'dVhFX': function (f, g) {
                    return f(g);
                },
                'nYrzP': bw(0x3ec),
                'WDrOR': bw(0x293),
                'Svdst': bw(0x221),
                'qkCKC': bw(0x288),
                'XIJnj': 'terminal',
                'EeYjt': 'close',
                'BJvjX': function (f, g) {
                    return f(g);
                }
            }, c = this[bw(0x3e2)]();
        a(bw(0x211) + c);
        const d = Object[bw(0x2b1)]({}, process.env);
        delete d[bw(0x3a3)], d[bw(0x479)] = b[bw(0x2c6)];
        if (!d[bw(0x220)])
            d[bw(0x220)] = b['Svdst'];
        try {
            this[bw(0x1d9)] = a0s[bw(0x2db)](c, [], {
                'name': b['WDrOR'],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process[bw(0x3e4)](),
                'env': d
            }), a(bw(0x3cb) + (this[bw(0x1d9)][bw(0x4a8)] || b[bw(0x3aa)]) + ')'), this['phase'] = b[bw(0x34f)];
            while (this[bw(0x213)]['length'] > 0x0) {
                const f = this[bw(0x213)][bw(0x318)]();
                this[bw(0x3c3)](f);
            }
            this[bw(0x1d9)]['onData'](g => {
                const bx = bw;
                try {
                    let h = Buffer[bx(0x49f)](g, b[bx(0x2ac)]);
                    this['useNoise'] && this[bx(0x46c)] && this['cipher']['handshakeFinished'] && (h = this[bx(0x46c)][bx(0x37d)](h)), b[bx(0x33d)](this[bx(0x46a)][bx(0x431)], 0x1) && this['websocket']['send'](h);
                } catch (i) {
                }
            }), this['ptyProcess'][bw(0x2de)](({
                exitCode: g,
                signal: h
            }) => {
                const by = bw;
                a(by(0x2ae) + g + by(0x1c9) + h + ')'), this[by(0x273)]();
            }), this['websocket']['on'](b[bw(0x24f)], () => {
                const bz = bw;
                b['dVhFX'](a, b[bz(0x2fd)]), this[bz(0x273)]();
            });
        } catch (g) {
            b[bw(0x384)](a, bw(0x3b3) + g[bw(0x2eb)]), await this['cleanup']();
            throw g;
        }
    }
    ['_processTerminalMessage'](a) {
        const bA = a0S, b = {
                'pCNRd': function (c, d) {
                    return c === d;
                },
                'GcjAe': bA(0x2d2),
                'WnWsr': bA(0x32c),
                'FHpHU': bA(0x406),
                'gyLUw': function (c, d) {
                    return c !== d;
                },
                'lSCLX': function (c, d) {
                    return c === d;
                },
                'dHbzy': 'base64',
                'CJVoH': bA(0x4a5)
            };
        if (!this[bA(0x1d9)])
            return;
        try {
            const c = Buffer['from'](a);
            let d;
            this[bA(0x30d)] ? d = this[bA(0x46c)][bA(0x3b2)](c) : d = c;
            let f = ![], g = d[bA(0x1f4)]('utf-8');
            if (g['trim']()['startsWith']('{'))
                try {
                    const h = JSON[bA(0x206)](g);
                    f = !![];
                    if (b[bA(0x210)](h[bA(0x32b)], b[bA(0x324)])) {
                        let i = Buffer[bA(0x49f)](JSON[bA(0x3b5)]({ 'type': b[bA(0x324)] }));
                        if (this[bA(0x30d)])
                            i = this['cipher'][bA(0x37d)](i);
                        this['websocket'][bA(0x303)](i);
                        return;
                    }
                    if (h['type'] === b['WnWsr']) {
                        this[bA(0x1d9)]['resize'](h[bA(0x2ea)] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (b[bA(0x210)](h['type'], b[bA(0x2fe)]) && b[bA(0x448)](h[bA(0x433)], undefined)) {
                        let j = b[bA(0x465)](h[bA(0x31a)], b[bA(0x320)]) ? Buffer[bA(0x49f)](h[bA(0x433)], bA(0x2a3))[bA(0x1f4)](b[bA(0x458)]) : h[bA(0x433)];
                        this[bA(0x1d9)]['write'](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this['ptyProcess']['write'](d['toString'](b[bA(0x458)]));
        } catch (l) {
            a0t[bA(0x4ad)](bA(0x226) + this[bA(0x41e)] + bA(0x1cb) + l[bA(0x2eb)]);
            if (this[bA(0x30d)])
                this[bA(0x273)]();
        }
    }
}
async function a0P() {
    const bB = a0S, a = {
            'FKtdp': bB(0x408),
            'naMIP': function (b, c) {
                return b === c;
            },
            'DRXag': bB(0x24c),
            'KAcwy': bB(0x36f),
            'VLRuP': function (b) {
                return b();
            },
            'AVhCV': 'Access-Control-Allow-Origin',
            'FbpPG': bB(0x362),
            'MTVab': bB(0x27b),
            'dtRjs': bB(0x2e7),
            'QkpJb': bB(0x339),
            'jXzoP': bB(0x30f),
            'Lvjkm': 'base64',
            'UtGmK': bB(0x20f),
            'halFJ': bB(0x466),
            'zMaih': bB(0x30c),
            'IuWVU': 'application/octet-stream',
            'igQle': function (b, c, d) {
                return b(c, d);
            },
            'gSfPl': function (b, c, d) {
                return b(c, d);
            },
            'ApFRY': bB(0x392),
            'QfJZi': 'Shutting\x20down...',
            'Zmphs': bB(0x26e),
            'smwcm': bB(0x1eb),
            'sZbHa': bB(0x3ab),
            'juvfA': bB(0x3c6),
            'VIioc': bB(0x3c5),
            'ArgxD': function (b) {
                return b();
            },
            'ROxep': function (b, c) {
                return b(c);
            },
            'vUagF': function (b, c) {
                return b(c);
            },
            'EGTxA': bB(0x2f6),
            'LSJrW': bB(0x394),
            'kkVJb': '/api/file/list',
            'wiVTR': bB(0x341),
            'CvgEs': bB(0x2f1),
            'koTLo': bB(0x436),
            'YOMzj': bB(0x274),
            'kXQUC': bB(0x2b2),
            'okeZL': bB(0x22c),
            'VTCas': bB(0x3d5),
            'LVSPy': bB(0x214),
            'KZBwK': '/api/task/log/cron',
            'kpcUL': bB(0x2dd),
            'toudB': bB(0x2e8),
            'YyQVY': bB(0x41f),
            'zWPRh': bB(0x33f),
            'Puenr': bB(0x44f),
            'jOCHy': bB(0x248)
        };
    try {
        a0t[bB(0x44d)](a[bB(0x33e)]), a0t[bB(0x44d)](a[bB(0x481)]), a0D[bB(0x485)](), a0t['debug'](bB(0x235)), a0t[bB(0x44d)](a[bB(0x309)]);
        const b = new a0E(a0D[bB(0x348)], a0D[bB(0x35f)]);
        a0t[bB(0x44d)](bB(0x4a6)), a0t[bB(0x44d)](a['juvfA']);
        const c = new a0G();
        a0t[bB(0x44d)](a[bB(0x313)]), a0t['debug']('Creating\x20Express\x20app...');
        const d = a[bB(0x24d)](a0f);
        a['ROxep'](a0q, d), a0t['debug'](bB(0x48d)), d[bB(0x23b)]((g, h, i) => {
            const bC = bB, j = a[bC(0x3dd)][bC(0x462)]('|');
            let k = 0x0;
            while (!![]) {
                switch (j[k++]) {
                case '0':
                    if (a[bC(0x2ba)](g['method'], a[bC(0x241)]))
                        return h[bC(0x338)](0xc8)[bC(0x496)]();
                    continue;
                case '1':
                    h[bC(0x20b)](a[bC(0x40a)], bC(0x498));
                    continue;
                case '2':
                    a[bC(0x256)](i);
                    continue;
                case '3':
                    h['header'](a[bC(0x444)], '*');
                    continue;
                case '4':
                    h[bC(0x20b)](bC(0x418), bC(0x4b1));
                    continue;
                case '5':
                    h[bC(0x20b)](a['FbpPG'], a[bC(0x2d8)]);
                    continue;
                }
                break;
            }
        }), d['use'](a0f[bB(0x260)]({
            'type': () => !![],
            'limit': bB(0x3a1)
        })), d[bB(0x23b)](a0f['urlencoded']({ 'extended': !![] })), d[bB(0x23b)](a[bB(0x3ad)](a0F, b)), a0t[bB(0x44d)](a['EGTxA']), d['get'](bB(0x240), async (g, h) => {
            const bD = bB;
            try {
                const i = await c['getBasicInfo']();
                h[bD(0x36a)](i);
            } catch (j) {
                h[bD(0x338)](0x1f4)[bD(0x36a)]({
                    'status': bD(0x30f),
                    'message': j[bD(0x2eb)]
                });
            }
        }), d['get'](a['LSJrW'], async (g, h) => {
            const bE = bB;
            try {
                const i = await c[bE(0x344)]();
                h[bE(0x36a)](i);
            } catch (j) {
                h[bE(0x338)](0x1f4)[bE(0x36a)]({
                    'status': bE(0x30f),
                    'message': j['message']
                });
            }
        }), d['post']('/api/exec', async (g, h) => {
            const bF = bB;
            try {
                let i = null;
                if (typeof g[bF(0x39f)] === a[bF(0x3b8)])
                    i = g[bF(0x39f)]['trim']();
                else
                    g[bF(0x39f)] && typeof g[bF(0x39f)] === bF(0x3a7) && (i = g[bF(0x39f)][bF(0x368)] || '');
                if (!i)
                    return h[bF(0x338)](0x190)[bF(0x36a)]({
                        'status': bF(0x30f),
                        'message': a[bF(0x486)]
                    });
                const j = await a0H[bF(0x439)](i, {
                    'cwd': g[bF(0x39f)][bF(0x3e4)],
                    'env': g['body'][bF(0x3ac)],
                    'timeout': a0D[bF(0x37a)]
                });
                h[bF(0x36a)](j);
            } catch (k) {
                h[bF(0x338)](0x1f4)[bF(0x36a)]({
                    'status': a[bF(0x447)],
                    'message': k[bF(0x2eb)]
                });
            }
        }), d[bB(0x374)](a['kkVJb'], async (g, h) => {
            const bG = bB;
            try {
                const i = await a0I['listFiles'](g[bG(0x39f)][bG(0x28f)], g['body'][bG(0x3a0)]);
                h[bG(0x36a)]({
                    'status': 'ok',
                    'count': i[bG(0x1e9)],
                    'files': i
                });
            } catch (j) {
                h[bG(0x338)](0x1f4)[bG(0x36a)]({
                    'status': 'error',
                    'message': j[bG(0x2eb)]
                });
            }
        }), d[bB(0x374)](a[bB(0x3d0)], async (g, h) => {
            const bH = bB;
            try {
                const i = await a0I[bH(0x20d)](g['body'][bH(0x24b)] || []);
                h['json']({
                    'status': 'ok',
                    'files': i
                });
            } catch (j) {
                h[bH(0x338)](0x1f4)[bH(0x36a)]({
                    'status': a[bH(0x447)],
                    'message': j['message']
                });
            }
        }), d['put'](a[bB(0x3d0)], async (g, h) => {
            const bI = bB;
            try {
                const i = g[bI(0x39f)][bI(0x3c1)] || {}, j = a['naMIP'](g[bI(0x39f)][bI(0x3a0)], !![]), k = await a0I[bI(0x340)](i, j);
                h['json'](k);
            } catch (l) {
                h['status'](0x1f4)[bI(0x36a)]({
                    'status': a[bI(0x447)],
                    'message': l[bI(0x2eb)]
                });
            }
        }), d[bB(0x374)](bB(0x27f), async (g, h) => {
            const bJ = bB;
            try {
                const i = await a0I[bJ(0x42e)](g['body'][bJ(0x28f)]);
                h[bJ(0x36a)](i);
            } catch (j) {
                h[bJ(0x338)](0x1f4)[bJ(0x36a)]({
                    'status': a[bJ(0x447)],
                    'message': j[bJ(0x2eb)]
                });
            }
        }), d[bB(0x374)](a[bB(0x2da)], async (g, h) => {
            const bK = bB;
            try {
                const i = await a0I[bK(0x1fe)](g[bK(0x39f)]['path'], g[bK(0x39f)]['filename'], g[bK(0x39f)][bK(0x36e)], g['body']['chunk_id'], g['body'][bK(0x412)]);
                h['json'](i);
            } catch (j) {
                h[bK(0x338)](0x1f4)['json']({
                    'status': a[bK(0x447)],
                    'message': j['message']
                });
            }
        }), d[bB(0x374)](a[bB(0x26b)], async (g, h) => {
            const bL = bB;
            try {
                const i = await a0I[bL(0x2a7)](g['body'][bL(0x28f)]), j = Buffer[bL(0x49f)](i['content'], a[bL(0x4a0)]);
                return h[bL(0x2a9)](a['UtGmK'], i[bL(0x2e6)][bL(0x1f4)]()), h['set'](a[bL(0x215)], i[bL(0x28f)]), h['set'](a[bL(0x3ca)], a['IuWVU']), h[bL(0x303)](j);
            } catch (k) {
                h[bL(0x338)](0x1f4)[bL(0x36a)]({
                    'status': a[bL(0x447)],
                    'message': k[bL(0x2eb)]
                });
            }
        }), d[bB(0x28e)](a[bB(0x2da)], async (g, h) => {
            const bM = bB;
            try {
                let i = g[bM(0x39f)][bM(0x24b)];
                if (!i || !Array[bM(0x1e3)](i)) {
                    i = [];
                    if (g[bM(0x39f)][bM(0x28f)])
                        i[bM(0x2ef)](g[bM(0x39f)]['path']);
                    if (g[bM(0x39f)][bM(0x270)])
                        i[bM(0x2ef)](g[bM(0x39f)]['path2']);
                }
                const j = await a0I[bM(0x372)](i);
                h[bM(0x36a)]({
                    'status': 'ok',
                    'results': j
                });
            } catch (k) {
                h[bM(0x338)](0x1f4)[bM(0x36a)]({
                    'status': bM(0x30f),
                    'message': k[bM(0x2eb)]
                });
            }
        }), d[bB(0x454)](bB(0x2f1), async (g, h) => {
            const bN = bB;
            try {
                const i = await a0I[bN(0x47c)](g[bN(0x39f)][bN(0x23f)] || g['body']);
                h[bN(0x36a)]({
                    'status': 'ok',
                    'total': i['length'],
                    'success': i[bN(0x32d)](j => j[bN(0x338)] === 'ok')['length'],
                    'results': i
                });
            } catch (j) {
                h[bN(0x338)](0x1f4)[bN(0x36a)]({
                    'status': a[bN(0x447)],
                    'message': j[bN(0x2eb)]
                });
            }
        }), d[bB(0x374)](bB(0x381), async (g, h) => {
            const bO = bB;
            try {
                const i = await a0I[bO(0x253)](g[bO(0x39f)]);
                h[bO(0x36a)]({
                    'status': 'ok',
                    'total': i[bO(0x1e9)],
                    'success': i[bO(0x32d)](j => j[bO(0x338)] === 'ok')[bO(0x1e9)],
                    'results': i
                });
            } catch (j) {
                h['status'](0x1f4)[bO(0x36a)]({
                    'status': a[bO(0x447)],
                    'message': j[bO(0x2eb)]
                });
            }
        }), d[bB(0x374)](a[bB(0x264)], async (g, h) => {
            const bP = bB;
            try {
                const i = await a0I[bP(0x32e)](g[bP(0x39f)][bP(0x28f)]);
                h[bP(0x36a)](i);
            } catch (j) {
                h['status'](0x1f4)[bP(0x36a)]({
                    'status': a[bP(0x447)],
                    'message': j[bP(0x2eb)]
                });
            }
        }), d['get'](a['kXQUC'], (g, h) => {
            const bQ = bB;
            h[bQ(0x36a)](a0J['getOnetimeTasks']());
        }), d[bB(0x374)](a['kXQUC'], async (g, h) => {
            const bR = bB;
            try {
                const i = await a0J[bR(0x239)](g[bR(0x39f)]);
                h[bR(0x36a)](i);
            } catch (j) {
                h[bR(0x338)](0x1f4)['json']({
                    'status': 'error',
                    'message': j[bR(0x2eb)]
                });
            }
        }), d[bB(0x2cb)](a[bB(0x1d7)], (g, h) => {
            const bS = bB;
            h[bS(0x36a)](a0J['getCronTasks']());
        }), d['post'](bB(0x22c), (g, h) => {
            const bT = bB;
            try {
                const i = a0J[bT(0x237)](g[bT(0x39f)]);
                h[bT(0x36a)](i);
            } catch (j) {
                h[bT(0x338)](0x1f4)['json']({
                    'status': a[bT(0x447)],
                    'message': j[bT(0x2eb)]
                });
            }
        }), d[bB(0x2cb)](a[bB(0x1f9)], (g, h) => {
            const bU = bB;
            h[bU(0x36a)](a0J[bU(0x1e6)]());
        }), d['get'](a['LVSPy'], (g, h) => {
            const bV = bB;
            let i = a[bV(0x2e4)](parseInt, g[bV(0x1db)][bV(0x22e)], 0xa) || 0x32;
            i = Math[bV(0x2a6)](Math[bV(0x3da)](i, 0x1), 0x64), h[bV(0x36a)](a0J['getOnetimeLogs'](i));
        }), d['get'](a[bB(0x3cd)], (g, h) => {
            const bW = bB;
            let i = a[bW(0x45b)](parseInt, g['query'][bW(0x22e)], 0xa) || 0x32;
            i = Math[bW(0x2a6)](Math[bW(0x3da)](i, 0x1), 0x64), h[bW(0x36a)](a0J['getCronLogs'](i));
        }), d[bB(0x28e)](bB(0x214), (g, h) => {
            const bX = bB;
            h['json'](a0J[bX(0x36b)]());
        }), d[bB(0x28e)](bB(0x383), (g, h) => {
            const bY = bB;
            h[bY(0x36a)](a0J['clearCronLogs']());
        }), d[bB(0x2cb)](bB(0x276), (g, h) => {
            const bZ = bB;
            h[bZ(0x36a)](a0J[bZ(0x37b)]());
        }), d[bB(0x374)](a[bB(0x321)], async (g, h) => {
            const c0 = bB;
            try {
                const i = await a0J[c0(0x415)]();
                h[c0(0x36a)](i);
            } catch (j) {
                h[c0(0x338)](0x1f4)['json']({
                    'status': a['jXzoP'],
                    'message': j[c0(0x2eb)]
                });
            }
        }), a0t[bB(0x44d)](bB(0x21f)), d['ws'](a[bB(0x426)], async (g, h) => {
            const c1 = bB, i = h[c1(0x402)][0x0];
            a0t[c1(0x44d)](c1(0x265) + h['url']), a0t['debug'](c1(0x490) + i);
            const j = h[c1(0x1db)]['request_id'], k = h['query']['token'];
            a0t[c1(0x44d)](c1(0x39d) + j);
            if (!j) {
                a0t[c1(0x44d)](c1(0x4b3)), g[c1(0x42a)](0x3f0, a[c1(0x411)]);
                return;
            }
            const l = new a0O();
            await l[c1(0x250)](g, j, k);
        }), a0t[bB(0x44d)](a[bB(0x471)]), a0t[bB(0x44d)](bB(0x219));
        const f = d['listen'](a0D[bB(0x269)], a0D[bB(0x233)], () => {
            const c2 = bB;
            a0t[c2(0x44d)](c2(0x2f5) + a0D['AGENT_VERSION'] + c2(0x399) + a0D[c2(0x233)] + ':' + a0D[c2(0x269)]), a0t['debug']('Server\x20listening\x20successfully');
        });
        process['on'](a['zWPRh'], () => {
            const c3 = bB;
            a0t[c3(0x44d)](a[c3(0x22b)]), f['close'](), process['exit'](0x0);
        }), a0t[bB(0x44d)](a['Puenr']);
    } catch (g) {
        a0t[bB(0x30f)](a[bB(0x208)], g), process[bB(0x26d)](0x1);
    }
}
(require['main'] === module || require[a0S(0x41b)]?.[a0S(0x459)]?.[a0S(0x35a)](a0S(0x3f8))) && a0P()[a0S(0x487)](a0t[a0S(0x30f)]);
module[a0S(0x292)] = {
    'Config': a0D,
    'CryptoManager': a0E,
    'SystemInfoCollector': a0G,
    'CommandExecutor': a0H,
    'FileManager': a0I,
    'TaskManager': a0J
};
function a0a() {
    const c4 = [
        'veLnrvnuqu1qx1DjtKrpvW',
        'C2vUza',
        'BxfmuKC',
        'q2jtBeG',
        'z2v0qMfZAwnjBMzV',
        'AM9PBG',
        'BML5y2C',
        'C1PIsge',
        'yMfZzty0DxjS',
        'vwDUvfq',
        'y29UDgvUDc10ExbL',
        'DxnLtM9PC2u',
        'DMvYAwz5',
        'zxjYB3i',
        'yxbWBgLJyxrPB24VANnVBG',
        'zNjVBuj5DgvbCNjHEq',
        'y3jVBNrHC2TZx2XVzW',
        'vKLPB2m',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'x2DLDerPC2TjBMzV',
        'CMvHzgrPCLn5BMm',
        'y2LWEvi',
        'C2HPzNq',
        'Dg9ju09tDhjPBMC',
        'zw5JB2rPBMC',
        'ugf0AcbUB3qGzM91BMq',
        'ChvIBgLJx2i2na',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'ic0Tls0G',
        'qwvlvva',
        'zeHIENK',
        'A3bJvuW',
        'vwP0tu8',
        'C1HOChu',
        'r2nQqwu',
        'ue5Mvgi',
        'l3bYB2mVy3b1Aw5MBW',
        'Ag5yAve',
        'D0Dvu1q',
        'AgfUzhnOywTL',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'DhLWzq',
        'CMvZAxPL',
        'zMLSDgvY',
        'y3jLyxrLrgLYzwn0B3j5',
        'BMv0D29YAW',
        'CMfT',
        'rhbpBhG',
        'EgzcEK0',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'q09ovfjptf9qvujmsunFs0vz',
        's1zn',
        'zg9JA2vY',
        'C3rHDhvZ',
        'y21KihjLCxvPCMvK',
        'tLHuEgu',
        'CMvJDKnPCgHLCG',
        'z3z1twe',
        'DxDeEuy',
        'wM1WAhm',
        'u0Lhsu5u',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'B25LDgLTzq',
        'DuLgrfq',
        'z2v0uMvHBhrPBwvjBMzV',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'C3rKzxjY',
        'BMv0D29YA1n0yxrZ',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'l2jPBI9HC2G',
        'CNHFyNL0zxm',
        'y3jVBNrHC2TZ',
        'zhvpALq',
        'B3DUzxi',
        'A2v5CW',
        'weLkBMO',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'CMvSyxrPDMu',
        'tevwruXt',
        'wNLcuM0',
        'DxnLza',
        'DxbKyxrL',
        'sgzbwxO',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'ywnJzxnZx2rLBMLLza',
        'Aw5JBhvKzxm',
        'B2jNvxG',
        'yMfZzw5HBwu',
        'u0vtu0LptL9lrvK',
        'D2fYBG',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'A2vYBMvS',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'zwnPzxnQCW',
        'vfHVz2m',
        'C2LNBMfS',
        'CgHHC2u',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'y21K',
        'AxnjBML0Awf0B3i',
        'ANnVBG',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'q29UDgvUDc1uExbL',
        'EefWDgK',
        'y29UDgvUDa',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'quzuq0e',
        'z2v0uhvIBgLJsxbwna',
        'zgvSzxrLrMLSzxm',
        'DMvYC2LVBG',
        'Cg9ZDa',
        'A1fpy1e',
        'vg9VDuW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'DMLYDhvHBgL6yxrPB24',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'uNrPBwvVDxq',
        'z2v0tg9Nu3vTBwfYEq',
        'zMLSzxm',
        'zw5JCNLWDa',
        'Cfb3zeG',
        'ug9KBwfU',
        'D1fYr2S',
        'l2fWAs9MAwXLl2nW',
        'Awrwyu4',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'qKP2ALG',
        'v1nmCMS',
        'yxzNtg9Hza',
        'sujUzgO',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'rMLSzsbUB3qGzM91BMq',
        'C3rHDfn5BMm',
        'DgfN',
        'vxvuwve',
        'CMfUzg9TqNL0zxm',
        'y2H1BMTF',
        'rfLMC2K',
        'BwLuC3i',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'C29Tzq',
        'l2fWAs9ZDgf0Dxm',
        'Ec10Aw1LC3rHBxa',
        'ugjfC2K',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'zgLYBMfTzq',
        'ihn0yxj0zwqGB24G',
        'l2jPBI96C2G',
        'EfbRv0y',
        'Exz4BMm',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'yM9KEq',
        'CMvJDxjZAxzL',
        'ntbTyG',
        'BxnNuMvZB2X2zxjZ',
        'ufjptvbux0nptu1btKq',
        'runjrvnFufvcs0vz',
        'A2LSBa',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'B2jQzwn0',
        'rg9JA2vY',
        'zvzXvwe',
        'CwTds0m',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'zw52',
        'DLvHz0y',
        'ogXqr1HNwG',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'q29UDgvUDc1mzw5NDgG',
        'ue1lD1a',
        'zgvJCNLWDa',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'C3rYAw5NAwz5',
        'wwjAvuq',
        'Ec1Kzwj1zW',
        'zhrsANm',
        'wfjqDgy',
        'zwnKC2fqDwjRzxK',
        'mc4XlJiTANm',
        'z2v0uhvIBgLJsxbwnG',
        'tfbJyMC',
        'DK9YtMq',
        'zgLYzwn0B3j5',
        'wu1IvxC',
        'CgvYBwLZC2LVBNm',
        'yNjHBMq',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'ndy4mdi3nMPTBK1iDW',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'DK5lC0m',
        'x3jLy2vPDMvxC0j5DgvZ',
        'EK1HAwG',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        '6k6/6zEUia',
        's1PcD0S',
        'zNnvzve',
        'Axb2nG',
        'D2Lwvfi',
        'tKPmvgC',
        'mtu2mJaWsLrnzwHM',
        'uuvnvq',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'l2fWAs90yxnRl3n0yxr1CW',
        'y29UDhjVBa',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'yNvUlxb0Eq',
        'DLvpwfG',
        'Bwf4',
        'CYa+ia',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'rKT0zha',
        'te9hx0XfvKvm',
        'tKj2zMi',
        'CeLWzfi',
        'Aw5PDa',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'zxHPC3rZu3LUyW',
        'y3DK',
        'zw50CMLLCW',
        'C3bSAwnL',
        'iowKSEI0PtOG',
        'zw5JCNLWDfjLC3bVBNnL',
        'zM9YrwfJAa',
        'zMLUywW',
        'odaWma',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'DKfryNi',
        'ru9Nt0q',
        'r0LXD2e',
        'rvrVrg0',
        'zgvJCNLWDerHDge',
        'C3DHChrVDgfS',
        'runeu0fFufvcs0vz',
        'Bgj1qKC',
        'rgvJCNLWDfDPDgHbza',
        'zxHWCMvZCW',
        'C2vZC2LVBL9RzxK',
        'DhmTBM9Kzq',
        'ntu0otiWmMLOBKTdyW',
        'zgLZA190B3rHBa',
        'D0LZqLa',
        'BvPPve8',
        'A3vIzwXLDa',
        'Dg90ywXozxr3B3jRvxa',
        'zxHWCMvZCY13CW',
        't2Tqsve',
        'y3jVBKPVyNm',
        'CgfYyw1Z',
        'rK9mte9xx1nztuXjtKTt',
        'l3bYB2mVms9LBNzPCM9U',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'Aw5WDxq',
        'CMvUyw1Lu3LUyW',
        'm3W0Fdv8mxWWFdi',
        'EwLtrMG',
        's0fJD3K',
        'AgvHzgvYCW',
        'BwTKAxjtEw5J',
        'y2rKDeK',
        'Cevzzge',
        'C2vUzenPCgHLCG',
        'zNntAxPL',
        'qxbguLK',
        'Dg90ywXFy2H1BMTZ',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'Bg9JywXqCML2qJy0',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'BuzYCLO',
        'y3jVBG',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'BwfW',
        'A2vYBMvSx3zLCNnPB24',
        'BwfPBG',
        'qNvtwg4',
        'BM93',
        'CMvXDwvZDeLK',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'x3nWBgL0qw5KrMLUAxnO',
        'ChjVy2vZC2vZ',
        'zxHPDgnVzgu',
        'DgvZDa',
        'wu5dtee',
        'zxLk',
        'Dg91zei',
        'sw5PDgLHBgL6zq',
        'v19psW',
        'tgvKAgG',
        'y2XVC2u',
        'BM9PC2uTyY53yxnT',
        'BM9Uy2u',
        'CK1KvMy',
        'CMvHzezPBgu',
        'otG1odaYBKjhtefK',
        'y0TUv1e',
        'CMvHzhLtDgf0zq',
        'uMz4uuu',
        'zgf0yq',
        'Avr0Eeq',
        'y3jLyxrLvMvYAwz5',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'BNvTyMvY',
        'weP5uum',
        'zxHLy3v0zq',
        'x2zVCM1HDe1Vzgu',
        'wc1uAw1LC3rHBxa',
        'vefts19usu1ft1vu',
        'l2fWAs93CY8',
        'C2nOzwr1Bgu',
        'vuvzuxi',
        'uL9psW',
        'D3jPDgvgAwXLu3LUyW',
        'zMfTAwX5',
        'Dhj1zq',
        'qvzOq1y',
        'rMfMtMK',
        'CMvHzgfIBgu',
        'ALH6B1a',
        'z3LmvxC',
        'y2nRtuC',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'CMvKDwnL',
        'Dw5SAw5Ru3LUyW',
        'zgvIDwC',
        'sxLXD2i',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'AxHvsvK',
        'y29UDgfPBMvYpwX4yW',
        'Bw9Kzq',
        'rg1xy2O',
        'Chv0',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'zgLZDhjV',
        'DMvYAwz5u2LNBMf0DxjL',
        'q0PwB0G',
        'zMLSzw5HBwu',
        'l2jPBI9IyxnO',
        'z1nMugW',
        'uMHfvLK',
        'z2v0tg9JywXjuhy0',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'DwrW',
        'vK1XtwK',
        'mtbkr0rqwe4',
        'C3bSAxq',
        'sevbra',
        'zgvSzxrLza',
        'BfndtfG',
        'Ec1VCMLNAw5HBc1WyxrO',
        'ywXS',
        'q1jptL9dsevds19jtLrfuLzbta',
        'Bwv0Ag9K',
        'D2vIC29JA2v0',
        'x2LZqMLUyxj5',
        'y2LWAgvY',
        'sw5PDfrHC2S',
        'quDftLrFufjjvKfurv9lrvK',
        'mtGXnJa3nJLUuhP1zhe',
        'u29Hteq',
        'wxLrvLK',
        'ywDLBNq',
        'sez0wwq',
        'y3jVBMXVB3a',
        'rw5JCNLWDfDPDgHbza',
        'zg1nCNG',
        'yMXRC2K',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'vevstq',
        's09by04',
        'vfnqr08',
        'Bw92zuzPBgvZ',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'zxHWB3j0',
        'l2jPBI9ZAa',
        'EKPqBM0',
        'C213y20',
        'DgnW',
        'Bfzvq0e',
        'rhvbuxe',
        'DMfSAwrHDgu',
        'uwTWsMi',
        'y2f0y2G',
        'sNPIuNG',
        'z2v0q3jVBLrHC2TZ',
        'zNjLzq',
        'qK9pvxm',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'BgjSvhm',
        'CM91BMq',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'C2v0vgLTzw91Da',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'z2v0t25LDgLTzvrHC2TZ',
        'zvPZDhO',
        'refRt2C',
        'zw5K',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'DfPLCeq',
        'CMvSzwfZzq',
        'Buz5txC',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'yxjJAa',
        'zNjVBq',
        'thzQA20',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'y29UDgfPBMvYza',
        's2Tcue4',
        'Cwrnuvu',
        'DxrMltG',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'tfHYweS',
        'CgLK',
        'z2vUzxjHDgvtAw5NBgu',
        'DwLK',
        'qwDLBNq',
        'sfruuca',
        'Aw5MBW',
        'BxrPBwu',
        'rKLmrv9st09u',
        'rvjst1i',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'sNzjCfa',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'C3DHCa',
        'tvDevKO',
        'y2fSBa',
        'q29UDhjVBgXLCG',
        'lcbtAwDUywW6ia',
        'qMTQtvi',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'u0HbmJu2',
        'Ag9TzwrPCG',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'yxbWBhK',
        'ww1mEuq',
        'svb2nG',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'qwPVtM4',
        'C3rKB3v0',
        'Dg9cExrLqxjYyxK',
        'z2v0t25LDgLTzuXVz3m',
        'B2TLwKW',
        'BMfTzq',
        'Chr5uhjVy2vZCW',
        'q2XLyw5SEsbJBg9Zzwq',
        'CxvLCNK',
        'y29UBMvJDgLVBNm',
        'A1H0wee',
        '6k+35Rgc6lAf5PE2',
        'tuT4vvy',
        'uwDqCNa',
        'svPgvNy',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'AxnbCNjHEq',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'mvvLsfnkCG',
        'z2v0vgfZA1n0yxr1CW',
        'mta0odu3nJaW',
        'mtaW',
        'BgvUz3rO',
        'wf9psW',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'x3j1BLrLCM1PBMfS',
        'm3WYFdv8mxW0Fda',
        'DxrMoa',
        'x2fWCgvUzeXVzW',
        'r3Pjywq',
        'DMjkChu',
        'rMLSzsb0B28GBgfYz2u',
        'uhr4EgK',
        'Dg9tDhjPBMC',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'CxrmsLC',
        'C3DHCf90B3rHBa',
        'Dgv4Dc9WBgfPBG',
        'vLrdyxm',
        'A2LSBgvK',
        'AxnwywXPzeLqDJy',
        'x2DLDenVBMzPz1zHBhvL',
        'ywnJzxnZu3LUyW',
        'DxbSB2fKrMLSzq',
        'B25LDgLTzxrHC2TZx2XVzW',
        'y2fSrKy',
        'v0fstG',
        'nhW2Fdf8n3W1Fdb8mNWZ',
        'se1qswS',
        'sKjeuwq',
        'B3njBMzV',
        'CgfYC2u',
        'C2XPy2u',
        'AK9dshK',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'CgXxCgS',
        'AgvHzgvY',
        'EM5Stxy',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'D3jPDgfIBgu',
        'Ec1MAwXLlxnPEMu',
        'CenouMq',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'AxneAxjLy3rVCNK',
        'BxnNuxvLDwu',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'AgfSrKO',
        'Ec1HzxmTzw5JCNLWDgvK',
        'x2DLDenVBM5Ly3rPB25Z',
        't1vst2O',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'y3j5ChrV',
        't3DgsMq',
        'D3jPDgu',
        'yMfZzty0lwPZ',
        'z2v0tg9JywXjuhy2',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'teforW',
        'qY5vveyToa',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'sgDJteW',
        'tvrIuKi',
        'w+E7IoERR+s8MUIVNsa',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'zxHLy3v0ywjSzq',
        'BgLZDezPBgvZ',
        'ChjPDMf0zv9InJq',
        'uwzkwMK',
        'l2fWAs90yxnRl2nYB24',
        'tMHmDxa',
        'BgLTAxq',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'Exzgs0m',
        'tufyx1vqte9brf9tsvPf',
        'nZq1ndCWuxDsBgXH',
        'se9tva',
        'rvHfq19tsevmtf9nt0rf',
        'q29UzMLNihzHBgLKyxrLza',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'C2v0q3jVBLrHC2TZ',
        'BwvTx3rVDgfS',
        'C2v0t25LDgLTzvrHC2TZ',
        'rg9wvey',
        'DxnL',
        'ywjZ',
        'y29UC3rHBNrZ',
        'Aw50zxjUywW',
        'Bw92zv9Tyxa',
        'l2fWAs9IyxnLAw5MBW',
        'rfjyywC',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'Bwz1ugi',
        'y2HTB2rtEw5J',
        'r2v0qwn0Aw9U',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        't1fksfK',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'y2HPBgrFChjVy2vZCW',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'Cgf0Ahm',
        't1busu9ouW',
        'qxjNEeq',
        'yvHKvxe',
        'rwvzANq',
        'C3rHCNrtzxnZAw9U',
        'wc1oB25Jzq',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'y29WEuzPBgvZ',
        'y29Kzq',
        'BgfZDe5LDhDVCMTuAw1L',
        'vKXsDva',
        'tejADg8',
        'zMu4mdO',
        'rfPYtgu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'r2jTyKW',
        'r1zvrvm',
        'uMTluvu',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'icaG4OcIia',
        'Dgv4Da',
        'CfD4yxy',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'x2nOzwnRqwnJzxnZ',
        'wu9nEMO',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'ywrKCMvZCW',
        'ywXSB2m',
        'B25LDgfZA3m',
        'ue9sva',
        'tK9ju0vFs0vz',
        'A29utg8',
        'u3bSAxq',
        'zxHPDa',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'zMXVB3i',
        'Cgf0Adi',
        'mZG0mdm4mMrrEMPYyW',
        'BwvT',
        'y2XLyw51Ca',
        'l2fWAs9MAwXLl25LDW',
        'zMv0y2Hjua',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'tujvr2q',
        'Bg5VtKe',
        'Dg90ywW',
        'DgvYBwLUywW',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lgf1DgHVCML6yxrPB24SihGTBM9Uy2uSihGTDgLTzxn0yw1Wlcb4lwf1DgGTDg9Rzw4SihGTywvZlwvUy3j5ChrLzcWGEc1Kzwj1zW',
        'tM9Uzq',
        's3vIzxjUzxrLCW',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'l2fWAs9MAwXLl2nHDa',
        'DvD2B1e',
        'x2zVCM1HDeXVz0vUDhj5',
        'A3vIzxbVzhm',
        'q05nq2y',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'CMvZB2X2zq',
        'vKXytuq',
        'y3jLyxrLuhvIBgLJs2v5',
        'Dw5RBM93BG',
        'zNz6Au0',
        'BM90x2zVDw5K',
        'zwnPzxnqDwjRzxK',
        'swLxsxy',
        'qKLmCgi',
        'zgvSzxrL',
        'Cgf0Aa',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'g1SZnM1Bsu5gt10BwZbTia',
        'zxHWB3j0CW',
        'EhrLCM0TmJu2y29SB3i',
        'uwDmzw4',
        'zgvZDhjVEq',
        'C3DHChvZzwq',
        'y3b1',
        'AhDAqxm',
        'DvPJtMq',
        'lY5KB2nRzxjLBNy',
        'uKPzyu8',
        'z2v0q3jVBKXVz3m',
        'DgLTzw91Da',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'y3vYCMvUDeXVywq',
        'revcvuC',
        'B3nusNm',
        'CuD5AK4',
        'yMfZzty0',
        'z3b1x25HBwu',
        'wLLIq2O',
        'BwLU',
        'zg93BMXVywrgAwXL',
        'CMvHzezPBgvtEw5J',
        'C2v0',
        'DhHFyNL0zxm',
        'z2LK',
        'Be5sBg0',
        'C2v0qxv0AfrHzW',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'zNvUy3rPB24',
        'yxnZAwDU',
        'l2fWAs90yxnRl29UzxrPBwu',
        'Bw9Kzv9Vy3rHBa',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'wenWrwK',
        'ChjVBwLZzxm',
        'AujKAuu',
        'Dg90ywXozxr3B3jRrg93BG',
        'x3bHCNnLtw9Kzq',
        'BMfnsva',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'svb2na',
        'tLvsC3y',
        'y2LWAgvYDgv4Da',
        'rKLmrv9bvurjvf9mt0C',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'z2vUzxjHDgvqywLY',
        'quDftLrFvKvsu0LptG',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'v0rYt1i',
        'y2XLyxi',
        'y29WEuzPBgvtEw5J',
        'nhWXmNWWFdH8nxWXm3WXnxWXnhWZFdD8oxW2FdeXFdj8mtb8mq',
        'rxHbsLa',
        'z2v0',
        't1bftG',
        'CMvZDwX0',
        'DhjPBq',
        'lNvWBg9Hzf9JAhvUA3m',
        'Dg9mB3DLCKnHC2u',
        'BM9PC2vFA2v5',
        'AgvHCNrIzwf0',
        'tufyx1rbu0TFte9hx1njwKu',
        'zMfSC2u',
        'ndbNq0LMCvy',
        'tNnwz2C',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'tvrwywi',
        'EwTwAwu',
        'q3zNrxm',
        'C3bHD24',
        'Ec1LBMnYExb0zwq',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'B25fEgL0',
        'A1fqv2u',
        'q2DnwwW',
        'su5gtW',
        'CM1KAxjtEw5J',
        'ChjVDg9JB2W',
        'AwDrBgu',
        'C3rHCNrZv2L0Aa',
        'C2L6zq',
        'C3rYAw5N',
        'l2fWAs93CY8Q',
        'Axnoyu4',
        'y29SCW',
        'BwvZC2fNzq',
        'qLLxzMK',
        'DxbNCMfKzq',
        'y3vYCMvUDeXLDMvS',
        'ChvZAa',
        'Bg9N',
        'l2fWAs9MAwXL',
        'Edi1nte5',
        'AxnwywXPzeLqDJq',
        'vuX3Aw8',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'tK9ju0vFqunusu9ox1nqteLu',
        'rw9cCNC',
        'wwjmwgK',
        'rNHKwK4',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'r05PtLe',
        'BLLYELa',
        'rKHWsfu',
        'qxPHqLK',
        'Dw5KzwzPBMvK',
        'AMfJvgW'
    ];
    a0a = function () {
        return c4;
    };
    return a0a();
}