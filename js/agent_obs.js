#!/usr/bin/env node
const a0S = a0b;
(function (a, b) {
    const R = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(R(0x33e)) / 0x1 + -parseInt(R(0x1c6)) / 0x2 * (-parseInt(R(0x1c3)) / 0x3) + parseInt(R(0x153)) / 0x4 * (-parseInt(R(0x124)) / 0x5) + parseInt(R(0x133)) / 0x6 + -parseInt(R(0x13e)) / 0x7 * (-parseInt(R(0x211)) / 0x8) + -parseInt(R(0x1c0)) / 0x9 + parseInt(R(0x1f6)) / 0xa * (-parseInt(R(0x372)) / 0xb);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x92cd5));
const a0c = [
    a0S(0x3a1),
    'Failed\x20to\x20parse\x20URL\x20from',
    a0S(0x16a)
];
function a0d(a) {
    const b = {
        'aFEel': function (c, d) {
            return c === d;
        },
        'fDtpY': 'function',
        'szoxg': function (c) {
            return c();
        }
    };
    return function (c, d, f) {
        const T = a0b, g = c['toString']();
        if (a0c['some'](h => g[T(0x2c1)](h))) {
            if (b[T(0x1d0)](typeof f, b[T(0x3a4)]))
                b[T(0x213)](f);
            return !![];
        }
        return a['apply'](this, arguments);
    };
}
process['stdout']['write'] = a0d(process[a0S(0x2e2)][a0S(0x1a8)]), process[a0S(0x3c8)][a0S(0x1a8)] = a0d(process[a0S(0x3c8)][a0S(0x1a8)]);
const a0f = require('express'), a0g = require('crypto'), a0h = require('fs'), a0i = require('fs')[a0S(0x3e3)], a0j = require(a0S(0x16c)), a0k = require('os'), {exec: a0l} = require(a0S(0x24a)), a0m = require(a0S(0x22c)), a0n = require(a0S(0x1dd)), {encrypt: a0o} = require(a0S(0x23b)), a0p = require('base64-js'), a0q = require(a0S(0x2d6)), a0r = require(a0S(0x224));
let a0s;
try {
    typeof Bun !== 'undefined' ? a0s = require(a0S(0x2f2)) : a0s = require(a0S(0x39b));
} catch (a0Q) {
    console[a0S(0x3da)]('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20核心终端依赖\x20(pty)\x20加载失败，程序终止！'), console['error']('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20详细错误:\x20' + a0Q['message']), console[a0S(0x3da)]('💡\x20修复建议:\x20请在项目目录下运行\x20npm\x20install\x20@lydell/node-pty'), process[a0S(0x28a)](0x1);
}
const a0t = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const U = a0S, a = {
                'UJqYH': function (b, c) {
                    return b !== c;
                },
                'IBDEb': function (b, c) {
                    return b !== c;
                }
            };
        return a['UJqYH'](typeof a0D, U(0x348)) && a['IBDEb'](a0D[U(0x398)], undefined) ? a0D[U(0x398)] : 0x2;
    },
    'debug': a => {
        const V = a0S, b = {
                'zywwy': function (c, d) {
                    return c <= d;
                }
            };
        b[V(0x14b)](a0t['currentLevel'], a0t[V(0x2a3)][V(0x25e)]) && console['log'](V(0x2ae) + a);
    },
    'info': a => {
        const W = a0S, b = {
                'xSNDo': function (c, d) {
                    return c <= d;
                }
            };
        b[W(0x2e6)](a0t['currentLevel'], a0t[W(0x2a3)][W(0x198)]) && console['log'](W(0x281) + a);
    },
    'warn': a => {
        const X = a0S, b = {
                'slTEA': function (c, d) {
                    return c <= d;
                }
            };
        b[X(0x286)](a0t['currentLevel'], a0t[X(0x2a3)]['WARN']) && console[X(0x262)]('\x1b[33m[WARN]\x1b[0m\x20' + a);
    },
    'error': a => {
        const Y = a0S, b = {
                'iDOjL': function (c, d) {
                    return c <= d;
                }
            };
        b[Y(0x344)](a0t['currentLevel'], a0t['LEVELS'][Y(0x2e9)]) && console['log'](Y(0x2fe) + a);
    }
};
class a0u {
    constructor(a = 'ok') {
        const Z = a0S;
        this[Z(0x315)] = a;
    }
}
class a0v extends a0u {
    constructor(a = 'ok', b = 0x0) {
        const a0 = a0S;
        super(a), this[a0(0x397)] = b;
    }
}
function a0a() {
    const c0 = [
        'Chr5uhjVy2vZCW',
        'ywvZlti1nI1Ny20',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'B25fEgL0',
        'zw5JB2rPBMC',
        'ANnVBG',
        'rLzfquW',
        'vLPLr1i',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'DhLWzq',
        'y0P5DMe',
        'vujftgS',
        'l2fWAs9MAwXLl25LDW',
        'yNz4svO',
        'BgvUz3rO',
        'CgHHC2u',
        'zw5JCNLWDfjLC3bVBNnL',
        'z1Pkv3q',
        'ywXSB2m',
        'D1LJDuS',
        'q09xCg4',
        'ChvZAa',
        'zMLSzxm',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'rMLSzsbUB3qGzM91BMq',
        'x3jLy2vPDMvxC0j5DgvZ',
        'z2v0tg9Nu3vTBwfYEq',
        'u2H1DhrPBMCGzg93BI4UlG',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'Ec1HzxmTzw5JCNLWDgvK',
        'C3rHDhvZ',
        'BwfW',
        'BwTKAxjtEw5J',
        'swv2weO',
        'AgfUzhnOywTL',
        'zgLZA190B3rHBa',
        'tKDOzgK',
        'u0vnvum',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'y29WEuzPBgvtEw5J',
        'zgvSzxrLrMLSzxm',
        'CMvSzwfZzq',
        'u0Lhsu5u',
        's09yrLm',
        'zxHWB3j0CW',
        'tu1fv04',
        'ihn0yxj0zwqGB24G',
        'l3bYB2mVms9LBNzPCM9U',
        'BxnNuMvZB2X2zxjZ',
        'CKLerwS',
        'yMrXA1q',
        'Bwzbq0S',
        'A3j6s0m',
        'CMvHzgrPCLn5BMm',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'tufyx1vqte9brf9tsvPf',
        'yxnZAwDU',
        'rgXvBuS',
        'zMXVB3i',
        'BM9PC2vFA2v5',
        'yMD0q2m',
        'zxLk',
        'uM5AyLK',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'DgfN',
        'Ec1MAwXLlxnPEMu',
        'ywrKCMvZCW',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'mNWWFdn8nxW0Fde',
        'odG2mtaWEhbktfns',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'Axb2nG',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'C2HPzNq',
        'q29UDgvUDc1mzw5NDgG',
        'AurpAKW',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'zNjVBq',
        'zMDbDLC',
        'Dw5KzwzPBMvK',
        'DhmTBM9Kzq',
        'wgrdyxa',
        'CMvZDwX0',
        'CMvHzezPBgvtEw5J',
        'BLfxAMi',
        'BgLZDgvU',
        'AgvHzgvYCW',
        'y3DK',
        'DMvYAwz5u2LNBMf0DxjL',
        'zgvZDhjVEq',
        'CxvLCNK',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'zNntAxPL',
        'uMv3sLO',
        'y29UC3rHBNrZ',
        'y0v2Aui',
        'tufyx1rbu0TFte9hx1njwKu',
        'zMLSzq',
        'x2nOzwnRqwnJzxnZ',
        'B3DUzxi',
        'x2DLDenVBM5Ly3rPB25Z',
        'Dg90ywXozxr3B3jRrg93BG',
        'y2XLyxi',
        'CM91BMq',
        'Dwzsz1G',
        'D1f1rhO',
        'zfjsq2y',
        'sxLcCMe',
        'A3vIzxbVzhm',
        'zevkzw0',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'tLn3q2G',
        'BMv0D29YA1n0yxrZ',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'yM9KEq',
        'l2fWAs90yxnRl2nYB24',
        'veLnrvnuqu1qx1DjtKrpvW',
        'AvrxweO',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'Dhf1uKi',
        'C3bSAwnL',
        'otm4ndiXtKDJtfvv',
        'BgLTAxq',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'Cg9ZDa',
        'vefts19usu1ft1vu',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'B0TTsKG',
        'B25LDgfZA3m',
        'CNHFyNL0zxm',
        'uvLyEMO',
        'y2XVC2u',
        'CgfYC2u',
        'C3rVCa',
        'Ag5Oz28',
        'CxLuDvy',
        'l2fWAs9MAwXLl2nW',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'zgLYBMfTzq',
        'q29UDgvUDc1uExbL',
        'De9LDNa',
        'DgvYBwLUywW',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'DxrMltG',
        'Aw5WDxq',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'DxH3CLK',
        'Aw5MBW',
        'ChvIBgLJx2i2na',
        'BuTtCNm',
        'CgvYBwLZC2LVBNm',
        'sw5PDgLHBgL6zq',
        'BwfPBG',
        'ywXS',
        'mta0odu3nJaW',
        'DMfSAwrHDgu',
        'CMvHzgfIBgu',
        'DwLK',
        'y291BNq',
        'te9hx0XfvKvm',
        'C2v0vgLTzw91Da',
        'BNHWANi',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'CgvZs2e',
        'CgfYyw1Z',
        'Bw9Kzv9Vy3rHBa',
        'Ec1VCMLNAw5HBc1WyxrO',
        'sunLte0',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'DhLxqwy',
        'CMvUyw1Lu3LUyW',
        'zKr0CfK',
        'y2fSBa',
        'qNLzA2S',
        'v0zLrwK',
        'mtaW',
        'vujjBxa',
        'Dg9Rzw4',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'Chv0',
        'DMvnz2S',
        'uNrPBwvVDxq',
        'AeHbqNe',
        'Dg90ywXozxr3B3jRvxa',
        'y3jVBNrHC2TZ',
        'y2f0y2G',
        'rKLmrv9st09u',
        'zhPNu2K',
        'uePSz0O',
        'Dvjvvfy',
        'Aw50zxjUywW',
        'zxHLy3v0ywjSzq',
        'BgLZDezPBgvZ',
        'u2vJrwG',
        'AxnwywXPzeLqDJq',
        'BM9Uy2u',
        'ChjVDg9JB2W',
        'AgLrBvK',
        'AgvizgO',
        'zgLYzwn0B3j5',
        'sw1pq3i',
        'DxnL',
        'AKjIq2S',
        'yMfZseW',
        'l2fWAs93CY8',
        'Dg90ywW',
        'CMvZAxPL',
        'C3rKzxjY',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'C2L6zq',
        't1bftG',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'yxbNzuS',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'mNWZFdf8nhWW',
        'y2H1BMTFAwq',
        'wc1uAw1LC3rHBxa',
        'BMfTzq',
        'D2vIC29JA2v0',
        'DffoExe',
        'CffsDvu',
        'ugXNyMu',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        't0PiEw0',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'zxjYB3i',
        'yuHlsNe',
        'z2v0',
        'DxrMoa',
        'y2XLyw51Ca',
        'Aw5PDa',
        'zePnzg8',
        'yxzNtg9Hza',
        'DefMAey',
        'ChjVBwLZzxm',
        'quDftLrFvKvsu0LptG',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'y3b1x2nVCMvZ',
        'C3DHChvZzwq',
        'wc1bDxrOlvrVA2vU',
        'l2fWAs9MAwXLl2XPC3q',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'DMvYC2LVBG',
        'A2v5CW',
        'ChjPDMf0zv9InJq',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'DwfXs3a',
        'AxneAxjLy3rVCNK',
        'C2vZC2LVBL9RzxK',
        'ALvKtLG',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'ANDR',
        'tfHd',
        'Bw92zuzPBgvZ',
        'EhrLCM0TmJu2y29SB3i',
        'zgvIDwC',
        'DvfZwfe',
        'ywjZ',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'z2v0tg9JywXjuhy0',
        'zgnswvy',
        't1rnr0O',
        'Ag9TzwrPCG',
        'rNzst2G',
        'mc4XlJiTANm',
        'AvbzC2G',
        'zgvSzxrL',
        'mJe1nvn0uw1iuG',
        'D3jPDgfIBgu',
        'zM9YrwfJAa',
        'ntbTyG',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'y29UDgfPBMvYza',
        'lY5KB2nRzxjLBNy',
        'wKvZt3q',
        'yMXNwuu',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'zgLZAW',
        'zw9qCem',
        'y29WEuzPBgvZ',
        'ic0Tls0G',
        'v2rszfm',
        'mJuYnZi4ne5zDejxrG',
        'z2v0q3jVBLrHC2TZ',
        'y3b1x25HBwu',
        'B3njBMzV',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        's1rzwLm',
        'AM9PBG',
        'z2revKy',
        'C2XPy2u',
        'zMv0y2Hjua',
        'Bw92zv9Tyxa',
        'mJG2otq1nevzDxvOyG',
        'sunKrxC',
        'l2jPBI9HC2G',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'x3nWBgL0qw5KrMLUAxnO',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        's29oAhK',
        'C3rHCNrZv2L0Aa',
        'D2fYBG',
        'zgf0yq',
        'zg9JA2vY',
        'q1jptL9dsevds19jtLrfuLzbta',
        'A2vYBMvSx3zLCNnPB24',
        'ENL3D3K',
        'CMvHzezPBgu',
        'l2fWAs9ZDgf0Dxm',
        'A3vIzwXLDa',
        'C3rHCNrtzxnZAw9U',
        'x2DLDenVBMzPz1zHBhvL',
        'ANPxvxC',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'nZC4ne9qtMrgDq',
        'Dgv4Dc9WBgfPBG',
        'zwnPzxnqDwjRzxK',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'rMLSzsb0B28GBgfYz2u',
        'Ec10Aw1LC3rHBxa',
        'yMfZzw5HBwu',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'CgfKu3rHCNq',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'D3zxtgO',
        'BwrPvfy',
        'uNPAzM8',
        'EuHYzgC',
        'whLmsK4',
        'tM9Uzq',
        'r3PSvfu',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'BM90x2zVDw5K',
        'nhW1Fdn8mNWXFda',
        'Cw5QvwS',
        'z2vUzxjHDgvqywLY',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'q0jHsKG',
        'Cgf0Aa',
        'y3jVBNrHC2TZx2XVzW',
        'A2LSBa',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        't1vlq3u',
        'quDftLrFufjjvKfurv9lrvK',
        'BwLU',
        'qwvszKC',
        'ic0Tls0GzxHPDgnVzgu9',
        'z2vUzxjHDgvtAw5NBgu',
        'ugPAt2u',
        'txvRA2q',
        'tgTbu1y',
        'ELfctem',
        'AwvnChu',
        'C3DHCf90B3rHBa',
        'qK50C1u',
        'Agv4B0C',
        'q2zmEvq',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'AgvHzgvY',
        'rKTUEey',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lgf1DgHVCML6yxrPB24SihGTBM9Uy2uSihGTDgLTzxn0yw1Wlcb4lwf1DgGTDg9Rzw4SihGTywvZlwvUy3j5ChrLzcWGEc1Kzwj1zW',
        'rLHhtgW',
        'DMv1wM4',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'DMjKqKS',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'DxbSB2fKrMLSzq',
        'ugf0AcbUB3qGzM91BMq',
        'zxHWB3j0',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'Bw9Kzq',
        'y2LWAgvY',
        'D3P3Bw8',
        'rNLHruO',
        'BKjlAg4',
        'v1Hewvm',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'v3jPDgvnzxnZywDL',
        'vMrft2C',
        'su5gtW',
        'qwDLBNq',
        'Dxb0Aw1L',
        'yNL0zuXLBMD0Aa',
        'CMvSyxrPDMu',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'Cgf0Ahm',
        'ug9KBwfU',
        'y29UDgvUDa',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'wuXjsMW',
        'zw5JCNLWDa',
        'teforW',
        'A0XrvxG',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'se9tva',
        'D3jPDgu',
        'wvvtCLe',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'CMvZB2X2zq',
        'EuThvgm',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'DhjPBq',
        'q29UDhjVBgXLCG',
        'B25LDgLTzq',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'x2LZqMLUyxj5',
        'vuDor0S',
        'uwPwAhe',
        'x3j1BLrLCM1PBMfS',
        'lNvWBg9Hzf9JAhvUA3m',
        'y29Yzxm',
        'BwvTx3rVDgfS',
        'v19psW',
        'yLH5tge',
        'Dg9ju09tDhjPBMC',
        'BhHJ',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'ywDLBNq',
        'z2v0vgfZA1n0yxr1CW',
        'mJa5mJK2ohLiC0Hrza',
        'zM5zqwG',
        'txbPzeq',
        'mZb4yMj6y3u',
        'x2DLDerPC2TjBMzV',
        'yxbWBgLJyxrPB24VANnVBG',
        'nJi2ndrNwe5wCuS',
        'BMv0D29YAW',
        'BNn4z2W',
        'CMfUzg9TqNL0zxm',
        'rKLmrv9bvurjvf9mt0C',
        'zg93BMXVywrgAwXL',
        'D0fuAKO',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'yuzfzwW',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'BNjXwM0',
        'tfnArfu',
        'ChjVy2vZC2vZ',
        'tg9pzMi',
        'wLDJzgO',
        'CMvJDxjZAxzL',
        'D1P0thy',
        'ywnJzxnZu3LUyW',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'Bwv0Ag9K',
        'x2zVCM1HDe1Vzgu',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'tLjxruW',
        'tLvhu3u',
        'lcbtAwDUywW6ia',
        'y21K',
        'z2v0qMfZAwnjBMzV',
        'DxnLza',
        'y3btEw5J',
        'swvRs3C',
        'z2v0uhvIBgLJsxbwnG',
        'AgvHCNrIzwf0',
        'ue9sva',
        'zNjVBuj5DgvbCNjHEq',
        'De9OyKG',
        'D3jPDgvgAwXLu3LUyW',
        'sNrorgG',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'zw52',
        'Ec1HDxrOlxrVA2vU',
        'svb2nG',
        'BxrPBwu',
        'zw5K',
        'r29SreG',
        'Buvouvy',
        'B2jQzwn0',
        'otb3vxjWEgG',
        'ohWWFdr8n3WXmNW2Fde0FdeXFdeWFdeZFdj8mxWXnxWZFdL8nq',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'rK9mte9xx1nztuXjtKTt',
        'ChDLA1y',
        'BNLwCuG',
        'terQuvK',
        'C3rHDhvZq29Kzq',
        'y0XKBwS',
        'zNjLzq',
        'C3rYAw5N',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'wMXHBK4',
        'vM5fAui',
        'wuDiDhu',
        'y3jLyxrLuhvIBgLJs2v5',
        'l2jPBI9ZAa',
        'zxHPC3rZu3LUyW',
        'zMLSDgvY',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'zNvUy3rPB24',
        'zMfSC2u',
        'AefJAe8',
        'Axnoyu4',
        'C3rHDfn5BMm',
        'BgfZDe5LDhDVCMTuAw1L',
        'rwXxCMm',
        'mtzmtMjgD2u',
        'Dhj1zq',
        'C3PVEgC',
        'C2nOzwr1Bgu',
        'z2v0uhvIBgLJsxbwna',
        'runjrvnFufvcs0vz',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'l3bYB2mVy3b1Aw5MBW',
        'twr5uuC',
        'zfrnBwi',
        'qY5vveyToa',
        'vevstq',
        'q0n2qK4',
        '6k6/6zEUia',
        'z2v0q3jVBKXVz3m',
        'z2v0uMvHBhrPBwvjBMzV',
        'Bu9OAgO',
        'z2v0t25LDgLTzvrHC2TZ',
        'l2fWAs9MAwXLl2nHDa',
        'BM9PC2uTyY53yxnT',
        'BxPNA1O',
        'ChjVy2vZCW',
        'veLvwMu',
        'Edi1nte5',
        'DhHFyNL0zxm',
        'C2vUzenPCgHLCG',
        'CM93CW',
        'BM9Kzs1JCM9U',
        'CM1KAxjtEw5J',
        'CMT6vKW',
        'AuDKsLi',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'CMvJDKnPCgHLCG',
        'sevbra',
        'zKD0seS',
        'ChzoCuq',
        'icaG4OcIia',
        'y2LWAgvYDgv4Da',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'zxHUywi',
        'uuP2AMe',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'zwnPzxnQCW',
        's0D3D1a',
        'l2fWAs9MAwXL',
        'Dg9mB3DLCKnHC2u',
        'Cerjuu0',
        'tK9ju0vFs0vz',
        'D2LcEfG',
        'C3rYAw5NAwz5',
        'y25TCvq',
        'rKT4qwe',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'u3bSAxq',
        'yMfZzty0DxjS',
        'Bg9gBMG',
        'C2v0',
        'y2HPBgrFChjVy2vZCW',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'CMvHzhLtDgf0zq',
        'B25eyxrH',
        'vLLgDwC',
        'C2vUza',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'zw50CMLLCW',
        'r2v0qwn0Aw9U',
        'AKnjCwu',
        'qw95uwi',
        'BwvZC2fNzq',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'iowKSEI0PtOG',
        'z3b1x25HBwu',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'AMDvsLu',
        'q1zYvMu',
        'Ec1LBMnYExb0zwq',
        'revcvuC',
        'C2v0t25LDgLTzvrHC2TZ',
        'sw5PDfrHC2S',
        'BM93',
        'Bg9N',
        't1nIDNu',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'Bg9Hza',
        'Dg9cExrLqxjYyxK',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'y29Kzq',
        'rurvrKm',
        'q09ovfjptf9qvujmsunFs0vz',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'DeroyMu',
        'y3jLyxrLvMvYAwz5',
        'Ahr0Chm',
        'wc1oB25Jzq',
        'y3b1',
        'EvPKuwO',
        'sgfUzhnOywTLu3rHDgu',
        'CLjxuNi',
        'BxnNuxvLDwu',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        't1busu9ouW',
        'BhDdEfC',
        'CYa+ia',
        'CvPswNu',
        'Dg90ywXFy2H1BMTZ',
        'A2LSBgvK',
        'zwnKC2fqDwjRzxK',
        'tK9ju0vFqunusu9ox1nqteLu',
        'rLbvywW',
        'wunrzu0',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'g1SZnM1Bsu5gt10BwZbTia',
        'z2v0t25LDgLTzuXVz3m',
        'Cvbkwxq',
        'wf9psW',
        'AxnwywXPzeLqDJy',
        'C2Xurue',
        'l2fWAs93CY8Q',
        'Bwf4',
        'ywnJzxnZx2rLBMLLza',
        'zxHPDa',
        'yxvLu3C',
        'vgX1EwW',
        'yxjJAa',
        'CvvjD0y',
        'yM1UDw8',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'AxnjBML0Awf0B3i',
        'w+E7IoERR+s8MUIVNsa',
        'y29UDhjVBa',
        'D1n6r3e',
        'u3PyvwO',
        'y2H1BMTF',
        'A1bpBNm',
        'C3bSAxq',
        'mxWZFdb8mNW0Fdu',
        'AwfwC1K',
        'DgvZDa',
        'C3bHD24',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'y21KihjLCxvPCMvK',
        'u0vtu0LptL9lrvK',
        'vK9oCeu',
        'y3jLyxrLrgLYzwn0B3j5',
        'CMvXDwvZDf9Pza',
        'tevwruXt',
        'vKPzvva',
        'DfPOzeK',
        'l2jPBI9IyxnO',
        'y3jVBMXVB3a',
        'C3DHCa',
        'zxHPDgnVzgu',
        'Dg9tDhjPBMC',
        'q2XLyw5SEsbJBg9Zzwq',
        'yMfZzty0',
        'AxnbCNjHEq',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'DgnW',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'A2vYBMvS',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'ueTKzuG',
        'Dgv4Da',
        'rw5JCNLWDfDPDgHbza',
        'twLZC2LUzYbJAhvUAYa',
        'Cgf0Adi',
        'wxrXEKq',
        'CMvXDwvZDeLK',
        'z1bKvMG',
        's3vIzxjUzxrLCW',
        'mZaW',
        'C3DHChrVDgfS',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'Bg9JywXqCML2qJy0',
        'vKPqu20',
        'Aw5JBhvKzxm',
        'wfjuzwe',
        'y3vYCMvUDeXVywq',
        'A3zurum',
        'z2v0tg9JywXjuhy2',
        'rKHrtK0',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'x2fWCgvUzeXVzW',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'ELPjy2K',
        'zgvSzxrLza',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'mhW0FdD8m3WYFdv8nNWX',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'zxHLy3v0zq',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'BKPgzLy',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'l2fWAs90yxnRl3n0yxr1CW',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'CMvKDwnL',
        'zxHWCMvZCY13CW',
        'l2jPBI96C2G',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'BNvTyMvY',
        'BfjWtfi',
        'l2fWAs9IyxnLAw5MBW',
        'x2zVCM1HDeXVz0vUDhj5',
        'sevIs2W',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'l3bVzhmV',
        'DwvNyvO',
        'qMTtDg8',
        'C3rKB3v0',
        'sgrprum',
        'DxbKyxrL',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'Efnorg8',
        'ruTkzvu',
        'thjjrhG',
        'rvjst1i',
        'BwvT',
        'y3jVBKPVyNm',
        'v2jtyLq',
        'zMfTAwX5',
        'y0LTqvi',
        'svb2na',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'B25LDgLTzxrHC2TZx2XVzW',
        'yNvUlxb0Eq',
        'Eu5erM4',
        'DxnLtM9PC2u',
        'uxD4sfq'
    ];
    a0a = function () {
        return c0;
    };
    return a0a();
}
class a0w extends a0u {
    constructor() {
        const a1 = a0S, a = { 'LSZDU': a1(0x1f7) }, b = a[a1(0x1d3)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a1(0x28d)] = '';
                continue;
            case '1':
                this[a1(0x17d)] = 0x0;
                continue;
            case '2':
                this[a1(0x14a)] = '';
                continue;
            case '3':
                this['virtualization'] = '';
                continue;
            case '4':
                this[a1(0x3e6)] = 0x0;
                continue;
            case '5':
                this[a1(0x332)] = null;
                continue;
            case '6':
                this[a1(0x259)] = '';
                continue;
            case '7':
                this[a1(0x135)] = '';
                continue;
            case '8':
                super();
                continue;
            case '9':
                this[a1(0x3f2)] = '';
                continue;
            case '10':
                this[a1(0x1b8)] = 0x0;
                continue;
            case '11':
                this[a1(0x340)] = null;
                continue;
            case '12':
                this[a1(0x31a)] = 0x0;
                continue;
            case '13':
                this['os'] = '';
                continue;
            case '14':
                this['ipv4'] = null;
                continue;
            case '15':
                this[a1(0x3ec)] = a0D[a1(0x3e4)];
                continue;
            }
            break;
        }
    }
}
class a0x extends a0u {
    constructor() {
        const a2 = a0S;
        super(), this[a2(0x270)] = { 'usage': 0x0 }, this['ram'] = {
            'total': 0x0,
            'used': 0x0
        }, this[a2(0x2a8)] = {
            'total': 0x0,
            'used': 0x0
        }, this[a2(0x265)] = {
            'load1': 0x0,
            'load5': 0x0,
            'load15': 0x0
        }, this[a2(0x12e)] = {
            'total': 0x0,
            'used': 0x0
        }, this[a2(0x1c7)] = {
            'up': 0x0,
            'down': 0x0,
            'totalUp': 0x0,
            'totalDown': 0x0
        }, this['connections'] = {
            'tcp': 0x0,
            'udp': 0x0
        }, this[a2(0x19a)] = 0x0, this[a2(0x226)] = 0x0, this[a2(0x255)] = '';
    }
}
class a0y extends a0u {
    constructor() {
        const a3 = a0S, a = a3(0x3cf)[a3(0x298)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this['cmd'] = '';
                continue;
            case '1':
                this[a3(0x2a9)] = 0x0;
                continue;
            case '2':
                super();
                continue;
            case '3':
                this[a3(0x34b)] = '';
                continue;
            case '4':
                this['timeout'] = ![];
                continue;
            }
            break;
        }
    }
}
class a0z {
    constructor() {
        const a4 = a0S, a = { 'JtNDh': a4(0x2cd) }, b = a[a4(0x1ec)][a4(0x298)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a4(0x3d2)] = '';
                continue;
            case '1':
                this['owner'] = '';
                continue;
            case '2':
                this[a4(0x1f1)] = '';
                continue;
            case '3':
                this[a4(0x3ca)] = 0x0;
                continue;
            case '4':
                this[a4(0x16c)] = '';
                continue;
            case '5':
                this[a4(0x18f)] = '';
                continue;
            case '6':
                this[a4(0x39e)] = '';
                continue;
            case '7':
                this[a4(0x300)] = '';
                continue;
            }
            break;
        }
    }
}
class a0A {
    constructor() {
        const a5 = a0S;
        this[a5(0x16c)] = '', this['name'] = '', this[a5(0x18f)] = '', this[a5(0x39e)] = '', this[a5(0x300)] = '', this[a5(0x395)] = ![], this[a5(0x125)] = ![], this[a5(0x3b8)] = ![];
    }
}
class a0B extends a0u {
    constructor() {
        const a6 = a0S;
        super(), this[a6(0x30d)] = [];
    }
}
class a0C {
    static [a0S(0x2c9)]() {
        const a7 = a0S, a = {
                'ONMTk': a7(0x228),
                'ByYkk': a7(0x114),
                'EDUFC': a7(0x247),
                'YtqzD': function (i, j) {
                    return i !== j;
                },
                'VZeGR': a7(0x2ac)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a7(0x18a)](a['ONMTk']), d = b[a7(0x18d)]({ 'format': a[a7(0x3a6)] }), f = c[a7(0x18d)]({ 'format': a[a7(0x3a6)] }), g = Buffer[a7(0x346)](d['d'], a[a7(0x269)]), h = Buffer[a7(0x346)](f['x'], a[a7(0x269)]);
        return (a[a7(0x2b8)](g['length'], 0x20) || a[a7(0x2b8)](h[a7(0x305)], 0x20)) && a0t['error']('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g[a7(0x2aa)](a[a7(0x2fd)]),
            'public_b64': h[a7(0x2aa)](a7(0x2ac))
        };
    }
    static [a0S(0x177)](a) {
        const a8 = a0S, b = this[a8(0x2c9)]();
        return {
            'role': a,
            'private_b64': b[a8(0x3ee)],
            'public_b64': b['public_b64']
        };
    }
    static [a0S(0x169)](a = a0S(0x1af), b = a0S(0x199)) {
        const a9 = a0S, c = {
                'control': this[a9(0x177)](a),
                'agent': this[a9(0x177)](b)
            };
        return c;
    }
}
class a0D {
    static [a0S(0x3ae)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static ['EXEC_SHELL_MODE'] = (process.env.EXEC_SHELL || a0S(0x212))[a0S(0x23e)]() === a0S(0x212);
    static ['DEBUG'] = (process.env.DEBUG || 'false')[a0S(0x23e)]() === a0S(0x212);
    static [a0S(0x36d)] = parseInt(process.env.TIMESTAMP_WINDOW || '30');
    static [a0S(0x398)] = parseInt(process.env.LOG_LEVEL || (this[a0S(0x25e)] ? '0' : '2'), 0xa);
    static [a0S(0x33b)] = a0D[a0S(0x150)]('ECDSA_PUBKEY', a0S(0x3ab)) || 'ECDSA公钥内容';
    static [a0S(0x164)] = a0D[a0S(0x150)](a0S(0x216), 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static ['FILE_ROOT'] = process.env.FILE_ROOT || a0k[a0S(0x11f)]();
    static [a0S(0x32e)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0S(0x393));
    static [a0S(0x1f9)] = (process.env.FOLLOW_SYMLINKS || a0S(0x20b))[a0S(0x23e)]() === a0S(0x212);
    static [a0S(0x1ca)] = (process.env.FILE_AUDIT_LOG || a0S(0x212))[a0S(0x23e)]() === a0S(0x212);
    static [a0S(0x260)] = !![];
    static [a0S(0x379)] = [];
    static [a0S(0x3b1)] = {};
    static [a0S(0x2a7)] = ![];
    static [a0S(0x376)] = parseInt(process.env.TASK_TIMEOUT || a0S(0x2bc));
    static [a0S(0x149)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0S(0x2f1)] = [];
    static ['crontasks_log'] = [];
    static [a0S(0x359)] = parseInt(process.env.MAX_TASK_LOG || a0S(0x3a8));
    static [a0S(0x1a7)] = process.env.HOST || '0.0.0.0';
    static ['PORT'] = parseInt(process.env.PORT || process.env.SERVER_PORT || '8000');
    static [a0S(0x3e4)] = process.env.AGENT_VERSION || a0S(0x121);
    static [a0S(0x29f)] = a0g[a0S(0x1c9)](0x20)['toString']('base64');
    static [a0S(0x1ce)] = a0C[a0S(0x169)]();
    static [a0S(0x240)] = {
        'controller': { 'private': this['NOISE_KEYS_INTERNAL'][a0S(0x293)]['private_b64'] },
        'agent': { 'public': this[a0S(0x1ce)]['agent'][a0S(0x38d)] }
    };
    static [a0S(0x150)](a, b) {
        const aa = a0S, c = { 'RffYT': 'utf8' }, d = process.env[a];
        if (d)
            return d;
        const f = a0j['join'](__dirname, b);
        if (a0h['existsSync'](f))
            try {
                return a0h[aa(0x34c)](f, c['RffYT'])[aa(0x1ae)]();
            } catch (g) {
            }
        return '';
    }
    static [a0S(0x394)]() {
        const ab = a0S, a = {
                'jCIqe': 'ECDSA_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecdsa_pub.pem\x20不存在',
                'koHXt': ab(0x1d1),
                'MdyQG': ab(0x299),
                'FHQNM': '\x0a💡\x20解决方法:',
                'OUKCu': '\x20\x20\x201.\x20设置环境变量:\x20export\x20ECDSA_PUBKEY=\x27-----BEGIN\x20PUBLIC\x20KEY-----\x27...\x27'
            };
        if (!this[ab(0x25e)]) {
            const b = [];
            !this['ECDSA_PUBLIC_KEY_PEM'] && b[ab(0x30c)](a[ab(0x253)]);
            !this[ab(0x164)] && b['push'](a['koHXt']);
            if (b['length'] > 0x0) {
                const c = a[ab(0x219)][ab(0x298)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0t[ab(0x118)](a[ab(0x2c6)]);
                        continue;
                    case '1':
                        a0t[ab(0x3da)](ab(0x1ad));
                        continue;
                    case '2':
                        a0t[ab(0x118)](a[ab(0x172)]);
                        continue;
                    case '3':
                        b[ab(0x126)](f => a0t[ab(0x3da)](ab(0x235) + f));
                        continue;
                    case '4':
                        a0t[ab(0x118)](ab(0x336));
                        continue;
                    case '5':
                        process[ab(0x28a)](0x1);
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
        const ac = a0S;
        this[ac(0x27c)] = null, this[ac(0x155)] = null;
        a && (this[ac(0x27c)] = a0g[ac(0x205)](a));
        if (b)
            try {
                this['eciesPubkey'] = a0p['toByteArray'](b[ac(0x1ae)]());
            } catch (c) {
                a0t[ac(0x146)](ac(0x382) + c['message']);
            }
    }
    [a0S(0x351)](a, b, c) {
        const ad = a0S, d = {
                'QwxHT': function (f, g) {
                    return f(g);
                },
                'cKVFl': function (f, g) {
                    return f / g;
                },
                'qnjUk': function (f, g) {
                    return f > g;
                },
                'lUupI': function (f, g) {
                    return f - g;
                },
                'PJlgJ': function (f, g) {
                    return f - g;
                },
                'VJYUP': 'SHA256'
            };
        if (!this[ad(0x27c)])
            return !![];
        try {
            const f = d[ad(0x2f5)](parseInt, b), g = Math[ad(0x331)](d['cKVFl'](Date[ad(0x261)](), 0x3e8));
            if (d[ad(0x168)](Math['abs'](d['lUupI'](g, f)), a0D[ad(0x36d)]))
                throw new Error(ad(0x195) + Math[ad(0x11a)](d[ad(0x3b5)](g, f)) + ad(0x278) + a0D[ad(0x36d)] + 's');
            const h = '' + a + b, i = a0p[ad(0x266)](c), j = a0g[ad(0x26d)](d[ad(0x2a4)]);
            return j[ad(0x2e4)](h), j['verify'](this[ad(0x27c)], i);
        } catch (k) {
            throw new Error('Signature\x20verification\x20failed:\x20' + k['message']);
        }
    }
    [a0S(0x307)](a) {
        const ae = a0S, b = {
                'RnZbY': ae(0x388),
                'yNDFn': function (c, d, f) {
                    return c(d, f);
                },
                'AeRfG': ae(0x2ac)
            };
        if (a0D[ae(0x25e)] || !this['eciesPubkey'])
            return JSON[ae(0x242)](a);
        try {
            const c = JSON[ae(0x242)](a), d = Buffer['from'](c, b[ae(0x335)]), f = Buffer[ae(0x346)](this[ae(0x155)]), g = b[ae(0x2f3)](a0o, f, d);
            return Buffer[ae(0x346)](g)[ae(0x2aa)](b[ae(0x175)]);
        } catch (h) {
            const i = {
                '_encrypt_error': h[ae(0x255)],
                '_raw': a0D[ae(0x25e)] ? a : null
            };
            return JSON[ae(0x242)](i);
        }
    }
    ['decryptData'](a, b) {
        const af = a0S, c = {
                'UeYuV': function (d, f) {
                    return d !== f;
                },
                'RMjcW': af(0x38a),
                'EKJeU': af(0x2ac),
                'wATjJ': af(0x3dd),
                'fDogP': af(0x25a),
                'pesKa': af(0x2f7)
            };
        if (!b || c['UeYuV'](b['length'], 0x20))
            throw new Error(c['RMjcW']);
        try {
            const d = Buffer['from'](a, c[af(0x2e7)])[af(0x2aa)](c[af(0x1cc)]), f = JSON[af(0x37d)](d);
            if (!f[af(0x3bc)] || !f[af(0x337)] || !f[af(0x236)])
                throw new Error(c['fDogP']);
            const g = Buffer[af(0x346)](f[af(0x3bc)], c['EKJeU']), h = Buffer[af(0x346)](f[af(0x337)], c[af(0x2e7)]), i = Buffer[af(0x346)](f[af(0x236)], c[af(0x2e7)]), j = a0g[af(0x30e)](c[af(0x39c)], b, g);
            j['setAuthTag'](h);
            let k = j[af(0x2e4)](i, null, af(0x3dd));
            return k += j['final'](c[af(0x1cc)]), k;
        } catch (l) {
            throw new Error(af(0x3e5) + l[af(0x255)]);
        }
    }
}
function a0F(a) {
    const ag = a0S, b = {
            'gZJWt': ag(0x384),
            'LrIDx': ag(0x200),
            'YQVoK': ag(0x25d),
            'HEbKl': ag(0x212),
            'UBImp': 'x-agent-version',
            'qPJYt': ag(0x343),
            'bdqkT': ag(0x3dd),
            'uxwrY': ag(0x3c5),
            'wzwmo': function (c, d) {
                return c === d;
            },
            'XyLJN': 'websocket',
            'WXDYS': function (c) {
                return c();
            },
            'wZtLv': ag(0x276),
            'iJAib': function (c, d) {
                return c === d;
            },
            'HlVBt': ag(0x232),
            'rDsUc': 'x-debug',
            'ijoBT': 'x-nonce',
            'uQsXQ': ag(0x26f),
            'GtTKz': ag(0x158),
            'aHXBP': ag(0x3d1),
            'tKNVZ': ag(0x1ef),
            'pDIQM': function (c, d) {
                return c || d;
            },
            'ddvUj': ag(0x189),
            'zQBLC': function (c, d) {
                return c === d;
            },
            'nrqZm': ag(0x2ac),
            'KgZRS': ag(0x334),
            'UGNGK': function (c, d) {
                return c === d;
            },
            'pwekV': function (c) {
                return c();
            }
        };
    return async (c, d, f) => {
        const ah = ag;
        if (c[ah(0x16c)][ah(0x145)](b[ah(0x38b)]) || b[ah(0x191)]((c[ah(0x34f)]['upgrade'] || '')[ah(0x23e)](), b[ah(0x161)]))
            return b[ah(0x194)](f);
        if (c[ah(0x1db)] === b[ah(0x1d8)] || b['iJAib'](c[ah(0x1db)], b['HlVBt']))
            return b['WXDYS'](f);
        if (!a0D[ah(0x25e)] && !c['headers'][b['rDsUc']]) {
            const h = c[ah(0x34f)][b['ijoBT']] || c[ah(0x34f)][b[ah(0x119)]], i = c[ah(0x34f)][b['GtTKz']] || c[ah(0x34f)][b['aHXBP']], j = c[ah(0x34f)][b['tKNVZ']] || c[ah(0x34f)][ah(0x3e8)];
            if (b[ah(0x23f)](!h, !i) || !j)
                return d[ah(0x315)](0x191)['json']({ 'error': b['ddvUj'] });
            try {
                a[ah(0x351)](h, i, j);
            } catch (k) {
                return d[ah(0x315)](0x191)[ah(0x2fb)]({ 'error': 'Signature\x20verification\x20failed:\x20' + k[ah(0x255)] });
            }
        }
        if (c[ah(0x36b)] && b[ah(0x191)](typeof c[ah(0x36b)], ah(0x200))) {
            const l = b[ah(0x17b)]((c[ah(0x34f)][ah(0x314)] || '')['toLowerCase'](), b[ah(0x2dd)]);
            try {
                if (l) {
                    const m = Buffer[ah(0x346)](a0D[ah(0x29f)], b[ah(0x1d2)]), n = a['decryptData'](c[ah(0x36b)], m);
                    c[ah(0x36b)] = JSON[ah(0x37d)](n);
                } else {
                    if (c[ah(0x36b)][ah(0x145)](b['KgZRS'])) {
                        const o = Buffer[ah(0x346)](c['body'], b[ah(0x1d2)])[ah(0x2aa)](ah(0x388));
                        c[ah(0x36b)] = JSON['parse'](o);
                    } else {
                        if (c[ah(0x36b)][ah(0x1ae)]()[ah(0x145)]('{') || c[ah(0x36b)]['trim']()['startsWith']('['))
                            c[ah(0x36b)] = JSON['parse'](c[ah(0x36b)]);
                        else {
                            if (b[ah(0x1b3)](c[ah(0x36b)][ah(0x1ae)](), ''))
                                c['body'] = {};
                        }
                    }
                }
            } catch (p) {
                return a0t[ah(0x3da)](ah(0x1da) + p['message']), d[ah(0x315)](0x190)[ah(0x2fb)]({ 'error': 'Invalid\x20body\x20format:\x20' + p[ah(0x255)] });
            }
        }
        const g = d[ah(0x24f)];
        d[ah(0x24f)] = function (q) {
            const ai = ah;
            if (d[ai(0x3dc)](b[ai(0x308)]) && d['get'](b['gZJWt'])['includes'](ai(0x1c5)))
                try {
                    const r = typeof q === b[ai(0x2e8)] ? JSON[ai(0x37d)](q) : q, s = a[ai(0x307)](r), t = typeof s === b[ai(0x2e8)] ? s : JSON['stringify'](s);
                    return !a0D[ai(0x25e)] && (d[ai(0x249)](b['YQVoK'], b[ai(0x2dd)]), d[ai(0x249)](b[ai(0x3a9)], a0D[ai(0x3e4)])), d['set'](b[ai(0x283)], Buffer[ai(0x19b)](t, b[ai(0x329)])[ai(0x2aa)]()), g[ai(0x3a5)](this, t);
                } catch (u) {
                    if (a0D[ai(0x25e)])
                        a0t['error'](ai(0x36f) + u[ai(0x255)]);
                }
            return g[ai(0x3a5)](this, q);
        }, b[ah(0x1fa)](f);
    };
}
class a0G {
    constructor() {
        const aj = a0S, a = {
                'Tluyl': function (b, c) {
                    return b / c;
                }
            };
        this[aj(0x1a6)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this['totalNetworkUp'] = 0x0, this[aj(0x35e)] = 0x0, this[aj(0x20f)] = a[aj(0x28c)](Date[aj(0x261)](), 0x3e8);
    }
    async [a0S(0x15a)]() {
        const ak = a0S, a = {
                'tquRB': ak(0x2f8),
                'ImOCr': ak(0x3dd),
                'COWpn': function (d, f) {
                    return d === f;
                },
                'vbdBK': ak(0x288),
                'rIDEk': function (d, f, g) {
                    return d(f, g);
                },
                'HdOEC': function (d, f, g) {
                    return d(f, g);
                },
                'bvxIZ': '/sys/fs/cgroup/memory/memory.limit_in_bytes',
                'Plgbe': '/sys/fs/cgroup/memory/memory.usage_in_bytes',
                'tQNyq': function (d, f) {
                    return d(f);
                },
                'CVrVe': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[ak(0x14c)](a[ak(0x370)], a[ak(0x3c1)]))[ak(0x1ae)]();
            b = a[ak(0x30b)](d, a[ak(0x188)]) ? null : a[ak(0x328)](parseInt, d, 0xa), c = a[ak(0x2e3)](parseInt, (await a0i[ak(0x14c)](ak(0x11b), a[ak(0x3c1)]))['trim'](), 0xa);
        } catch {
            try {
                b = parseInt((await a0i[ak(0x14c)](a[ak(0x304)], ak(0x3dd)))['trim'](), 0xa), c = parseInt((await a0i[ak(0x14c)](a[ak(0x3d6)], ak(0x3dd)))[ak(0x1ae)](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0n[ak(0x2ea)]();
                b = f[ak(0x3c6)], c = f['used'];
            }
        }
        if (b === null) {
            const g = await a0n[ak(0x2ea)]();
            b = g[ak(0x3c6)], (a[ak(0x30b)](c, null) || a[ak(0x3d4)](isNaN, c)) && (c = g[ak(0x1e3)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[ak(0x25c)](b, c),
            'free': b - c,
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0S(0x1e2)]() {
        const al = a0S, [a, b, c, d] = await Promise[al(0x392)]([
                a0n['cpu'](),
                this[al(0x15a)](),
                a0n[al(0x136)](),
                a0n[al(0x2cc)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[al(0x392)]([
                this[al(0x215)](),
                this[al(0x1e6)]()
            ]);
        } catch (h) {
            a0t['debug'](al(0x171) + h[al(0x255)], 0x1);
        }
        return {
            'arch': a0k['arch'](),
            'cpu_cores': a[al(0x1b7)],
            'cpu_name': a['brand'],
            'disk_total': (await a0n[al(0x355)]())[0x0]?.[al(0x3ca)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[al(0x3c6)],
            'os': c['distro'] + '\x20' + c[al(0x320)],
            'kernel_version': c[al(0x2b1)],
            'swap_total': b[al(0x2bd)],
            'version': a0D[al(0x3e4)],
            'virtualization': await this[al(0x36a)](),
            'session_key': a0D[al(0x29f)],
            'noise_key': a0D[al(0x240)]
        };
    }
    [a0S(0x11c)]() {
        const am = a0S, a = {
                'mENQV': function (c, d) {
                    return c === d;
                },
                'QYXzj': am(0x2ef)
            }, b = a0k['networkInterfaces']();
        for (const c of Object[am(0x3ed)](b)) {
            for (const d of b[c]) {
                const f = a['mENQV'](d[am(0x2ed)], a[am(0x37b)]) || a[am(0x1f4)](d[am(0x2ed)], 0x4);
                if (f && !d[am(0x3b7)]) {
                    if (!/^10\./[am(0x29b)](d['address']) && !/^192\.168\./['test'](d[am(0x339)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d[am(0x339)]))
                        return d[am(0x339)];
                }
            }
        }
        return null;
    }
    async [a0S(0x215)]() {
        const an = a0S, a = {
                'QjVhq': an(0x1a1),
                'ZEsOt': an(0x341),
                'nyVqH': an(0x18e),
                'FvROh': an(0x141),
                'aueSw': an(0x31d)
            }, b = [
                a[an(0x1b4)],
                a[an(0x12b)],
                an(0x3ea),
                a[an(0x1fb)],
                a[an(0x120)],
                a[an(0x28b)],
                'https://myexternalip.com/raw'
            ];
        for (const d of b) {
            try {
                const f = await this['fetchIP'](d, 0x4);
                if (f && this['isValidIPv4'](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[an(0x11c)]();
        if (c && this[an(0x3bb)](c))
            return c;
        return null;
    }
    [a0S(0x2c5)]() {
        const ao = a0S, a = {
                'uegaZ': function (c, d) {
                    return c === d;
                },
                'PjZOe': ao(0x1f0),
                'XRTea': 'fe80:'
            }, b = a0k['networkInterfaces']();
        for (const c of Object[ao(0x3ed)](b)) {
            for (const d of b[c]) {
                const f = a[ao(0x2e0)](d[ao(0x2ed)], a[ao(0x178)]) || d[ao(0x2ed)] === 0x6;
                if (f && !d['internal']) {
                    if (!d[ao(0x339)][ao(0x23e)]()[ao(0x145)](a[ao(0x2c2)]))
                        return d[ao(0x339)];
                }
            }
        }
        return null;
    }
    async [a0S(0x1e6)]() {
        const ap = a0S, a = {
                'dEJem': 'https://icanhazip.com',
                'wQuDz': ap(0x2d8)
            }, b = this['getLocalIPv6']();
        if (b && this[ap(0x285)](b))
            return b;
        const c = [
            'https://api6.ipify.org',
            a[ap(0x366)],
            a[ap(0x362)]
        ];
        for (const d of c) {
            try {
                const f = await this[ap(0x13c)](d, 0x6);
                if (f && this['isValidIPv6'](f))
                    return f;
            } catch (g) {
                a0t[ap(0x118)](ap(0x21e) + d + ap(0x258) + g['message']);
                continue;
            }
        }
        return null;
    }
    async ['fetchIP'](a, b = 0x0) {
        const aq = a0S, c = {
                'cImAR': function (d, f) {
                    return d(f);
                },
                'yRBgx': '请求超时',
                'sYMtQ': function (d, f) {
                    return d !== f;
                },
                'eoPpC': aq(0x1f2),
                'OSbvu': aq(0x154)
            };
        return new Promise((d, f) => {
            const ar = aq, g = {
                    'bfTht': function (k, l) {
                        return c['sYMtQ'](k, l);
                    },
                    'gLBxD': c[ar(0x12f)]
                }, h = require(ar(0x26e)), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[ar(0x263)] }
                }, j = h[ar(0x3dc)](a, i, k => {
                    const as = ar;
                    let l = '';
                    if (g['bfTht'](k[as(0x1fd)], 0xc8)) {
                        f(new Error('HTTP\x20' + k[as(0x1fd)]));
                        return;
                    }
                    k['on'](as(0x147), m => l += m), k['on'](g['gLBxD'], () => d(l[as(0x1ae)]()));
                });
            j['on'](ar(0x3da), f), j[ar(0x399)](0x1388, () => {
                const at = ar;
                j[at(0x352)](), c[at(0x2ee)](f, new Error(c['yRBgx']));
            });
        });
    }
    [a0S(0x3bb)](a) {
        return /^(\d{1,3}\.){3}\d{1,3}$/['test'](a);
    }
    ['isValidIPv6'](a) {
        const au = a0S;
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a[au(0x2c1)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i['test'](a))
            return ![];
        return !![];
    }
    async [a0S(0x220)]() {
        const av = a0S, a = {
                'bdeif': function (m, n) {
                    return m - n;
                },
                'wvWLj': function (m, n) {
                    return m / n;
                },
                'cnmqT': function (m, n) {
                    return m * n;
                },
                'tZhdI': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[av(0x392)]([
                a0n[av(0x2c3)](),
                a0n[av(0x2ea)](),
                a0n[av(0x369)](),
                a0n[av(0x2c3)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = Date['now']() / 0x3e8, i = h - this[av(0x20f)], j = a['bdeif'](g[av(0x229)], this['lastNetworkStats']['tx']), k = g[av(0x37a)] - this[av(0x1a6)]['rx'];
        this[av(0x3b0)] += j, this[av(0x35e)] += k, this[av(0x1a6)] = {
            'tx': g[av(0x229)],
            'rx': g[av(0x37a)]
        }, this['lastNetworkTime'] = h;
        const l = await a0n[av(0x1d4)]();
        return {
            'cpu': { 'usage': Math[av(0x360)](b[av(0x2c3)]) },
            'ram': {
                'total': c[av(0x3c6)],
                'used': c[av(0x1e3)]
            },
            'swap': {
                'total': c['swaptotal'],
                'used': c[av(0x3e7)]
            },
            'load': {
                'load1': a[av(0x15d)](Math[av(0x360)](a[av(0x243)](f[av(0x3e1)], 0x64)), 0x64),
                'load5': a['wvWLj'](Math[av(0x360)](f[av(0x3e1)] * 0x64), 0x64),
                'load15': a[av(0x2a5)](Math[av(0x360)](a[av(0x243)](f[av(0x3e1)], 0x64)), 0x64)
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[av(0x360)](a[av(0x15d)](j, i)),
                'down': Math[av(0x360)](a['wvWLj'](k, i)),
                'totalUp': this[av(0x3b0)],
                'totalDown': this[av(0x35e)]
            },
            'connections': await this[av(0x35d)](),
            'uptime': a0k[av(0x19a)](),
            'process': l?.[av(0x392)] || 0x0,
            'message': ''
        };
    }
    async [a0S(0x36a)]() {
        const aw = a0S, a = {
                'gPdVh': 'Docker',
                'heHdj': '/run/.containerenv',
                'zWuGI': aw(0x19f),
                'bXyLa': '/proc/1/cgroup',
                'RzZfo': aw(0x3dd),
                'zZIci': aw(0x129),
                'PNjan': aw(0x365),
                'XdCap': aw(0x2bb),
                'hHABq': aw(0x1bc),
                'jBbCk': aw(0x115),
                'qUIwF': '/proc/self/mountinfo',
                'Nffte': aw(0x201),
                'sGYya': aw(0x2df),
                'xMCDL': aw(0x14e),
                'LoOfb': aw(0x326),
                'bMJXz': 'container=lxc',
                'jzWUw': aw(0x218),
                'SzXUj': 'QEMU',
                'kvTEC': aw(0x162)
            };
        try {
            if (a0h[aw(0x207)](aw(0x12a)))
                return a[aw(0x2ba)];
            if (a0h[aw(0x207)](a[aw(0x3bf)]))
                return a['zWuGI'];
            if (a0h[aw(0x207)](a[aw(0x1ba)])) {
                const b = a0h[aw(0x34c)](a['bXyLa'], a[aw(0x15f)])[aw(0x23e)]();
                if (b[aw(0x2c1)](aw(0x148)) || b[aw(0x2c1)](a[aw(0x2ca)]))
                    return a[aw(0x2ba)];
                else {
                    if (b[aw(0x2c1)](a['PNjan']))
                        return a[aw(0x34a)];
                    else {
                        if (b[aw(0x2c1)](a[aw(0x3af)]))
                            return a[aw(0x3c3)];
                    }
                }
            }
            if (a0h[aw(0x207)](a['qUIwF'])) {
                const c = a0h[aw(0x34c)](a[aw(0x28e)], a['RzZfo']);
                if (c[aw(0x2c1)](aw(0x230)) || c[aw(0x2c1)](a['Nffte']))
                    return 'Docker';
                else {
                    if (c['includes'](a['sGYya']) || c[aw(0x2c1)](a['xMCDL']))
                        return a[aw(0x34a)];
                }
            }
            if (a0h[aw(0x207)](a[aw(0x1d5)])) {
                const d = a0h[aw(0x34c)](a['LoOfb'], a[aw(0x15f)]);
                if (d[aw(0x2c1)](a['bMJXz']))
                    return a[aw(0x3c3)];
            }
            if (a0h['existsSync']('/proc/cpuinfo')) {
                const f = a0h['readFileSync'](a[aw(0x151)], a['RzZfo']);
                if (f[aw(0x2c1)](a['SzXUj']) || f[aw(0x2c1)]('KVM'))
                    return a[aw(0x295)];
            }
        } catch (g) {
        }
        return a[aw(0x2c4)];
    }
    async [a0S(0x1c4)]() {
        const ax = a0S;
        try {
            const a = await a0n[ax(0x355)](), b = a['reduce']((d, f) => d + f[ax(0x3ca)], 0x0), c = a[ax(0x2d5)]((d, f) => d + f['used'], 0x0);
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
    async [a0S(0x35d)]() {
        const ay = a0S;
        try {
            const a = await a0n['networkConnections'](), b = a[ay(0x208)](d => d[ay(0x3bd)] === ay(0x2af))[ay(0x305)], c = a[ay(0x208)](d => d[ay(0x3bd)] === 'udp')['length'];
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
    static async [a0S(0x2cf)](a, b = {}) {
        const az = a0S, c = {
                'dcRYV': function (d, f) {
                    return d - f;
                },
                'NSwCh': function (d, f) {
                    return d || f;
                },
                'nxpjr': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'mfACK': function (d, f) {
                    return d * f;
                },
                'pbfIC': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[az(0x350)](),
                env: env = {},
                timeout: timeout = a0D[az(0x3ae)]
            } = b;
        return new Promise(d => {
            const aC = az, f = {
                    'tAfhF': function (i, j) {
                        const aA = a0b;
                        return c[aA(0x11d)](i, j);
                    },
                    'veuZn': function (i, j) {
                        const aB = a0b;
                        return c[aB(0x368)](i, j);
                    },
                    'WFeEi': function (i, j) {
                        return i === j;
                    }
                }, g = Date[aC(0x261)](), h = c[aC(0x39a)](a0l, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[aC(0x32a)](timeout, 0x3e8),
                    'maxBuffer': c['pbfIC'](c[aC(0x32a)](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const aD = aC, l = f[aD(0x3e2)](Date[aD(0x261)](), g), m = i && i[aD(0x27b)] && i['signal'];
                    let n = f[aD(0x186)](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f[aD(0x3a7)](typeof i[aD(0x268)], aD(0x2d9)) ? o = i[aD(0x268)] : o = -0x1;
                    }
                    d({
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
    static async [a0S(0x3b9)](a, b = ![]) {
        const aE = a0S, c = {
                'pQRuU': aE(0x3c0),
                'mzgkZ': 'file',
                'QJvja': function (h, i) {
                    return h & i;
                },
                'wiBxX': function (h, i) {
                    return h(i);
                },
                'DlUmK': function (h, i) {
                    return h || i;
                },
                'GolDH': aE(0x18c),
                'JKuPZ': function (h, i) {
                    return h(i);
                }
            }, d = a0j['resolve'](a0D[aE(0x3b3)], c[aE(0x330)](a, '.'));
        if (!d['startsWith'](a0D[aE(0x3b3)]))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        if (!a0h[aE(0x207)](d))
            throw new Error(c[aE(0x1f3)]);
        const f = [], g = h => {
                const aF = aE, i = a0h[aF(0x32c)](h);
                for (const j of i) {
                    const k = a0j['join'](h, j), l = a0h[aF(0x20e)](k), m = new a0z();
                    m[aF(0x3d2)] = j, m[aF(0x16c)] = a0j[aF(0x19c)](a0D[aF(0x3b3)], k), m['type'] = l[aF(0x3f1)]() ? c[aF(0x3d5)] : c[aF(0x225)], m[aF(0x3ca)] = l['size'], m['mtime'] = l['mtime'][aF(0x1bb)](), m[aF(0x18f)] = this['_formatMode'](l['mode'], l[aF(0x3f1)]()), m[aF(0x39e)] = '0o' + c[aF(0x239)](l['mode'], 0x1ff)[aF(0x2aa)](0x8), m[aF(0x35c)] = l[aF(0x396)] + ':' + l['gid'], f[aF(0x30c)](m), b && l[aF(0x3f1)]() && c[aF(0x241)](g, k);
                }
            };
        return c['JKuPZ'](g, d), f;
    }
    static async [a0S(0x377)](a) {
        const aG = a0S, b = {
                'EZUsv': aG(0x3c0),
                'BNtsU': aG(0x35a)
            }, c = [];
        for (const d of a) {
            const f = a0j[aG(0x1ab)](a0D['FILE_ROOT'], d);
            if (!f[aG(0x145)](a0D[aG(0x3b3)]))
                continue;
            try {
                const g = a0h[aG(0x20e)](f), h = this[aG(0x35b)](f, a0h['constants']['R_OK']), i = this['_checkAccess'](f, a0h[aG(0x357)][aG(0x1b9)]), j = this[aG(0x35b)](f, a0h[aG(0x357)][aG(0x284)]), k = new a0A();
                k[aG(0x16c)] = a0j['relative'](a0D['FILE_ROOT'], f), k[aG(0x3d2)] = a0j[aG(0x159)](f), k['mode'] = this[aG(0x1dc)](g[aG(0x18f)], g[aG(0x3f1)]()), k['mode_octal'] = '0o' + (g['mode'] & 0x1ff)[aG(0x2aa)](0x8), k[aG(0x300)] = g['isDirectory']() ? b['EZUsv'] : b[aG(0x17e)], k[aG(0x395)] = h, k['writable'] = i, k[aG(0x3b8)] = j, c['push'](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0S(0x35b)](a, b) {
        const aH = a0S;
        try {
            return a0h[aH(0x1d9)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const aI = a0S, b = {
                'WbSbT': function (c, d) {
                    return c === d;
                },
                'LDjQY': 'number',
                'basHL': 'string',
                'RewJZ': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (b[aI(0x2ec)](typeof a, b[aI(0x1fc)]))
            return a;
        if (b['WbSbT'](typeof a, b[aI(0x3c4)])) {
            const c = a[aI(0x1ae)]();
            if (/^[0-7]{3,4}$/['test'](c))
                return b[aI(0x356)](parseInt, c, 0x8);
        }
        throw new Error(aI(0x313));
    }
    static ['_formatMode'](a, b) {
        const aJ = a0S, c = {
                'SEMUC': function (i, j) {
                    return i & j;
                },
                'VONpE': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[aJ(0x31c)](a, 0x1ff)[aJ(0x2aa)](0x8)[aJ(0x15b)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aJ(0x2a0)](parseInt, i, 0xa);
            h += f[aJ(0x316)]((k, l) => j & 0x4 >> l ? k : '-')['join']('');
        }
        return h;
    }
    static async [a0S(0x250)](a, b = ![]) {
        const aK = a0S, c = {
                'NRWEL': function (g, h) {
                    return g(h);
                },
                'mOhhj': function (g, h) {
                    return g(h);
                },
                'hnhgo': aK(0x289),
                'wZgCG': function (g, h) {
                    return g(h);
                },
                'VJPSm': function (g, h) {
                    return g(h);
                },
                'dzgSi': function (g, h) {
                    return g(h);
                },
                'Tjgiu': aK(0x3da)
            }, d = [];
        for (const [g, h] of Object[aK(0x251)](a)) {
            const i = a0j[aK(0x1ab)](a0D[aK(0x3b3)], g);
            if (!i[aK(0x145)](a0D['FILE_ROOT'])) {
                d['push']({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[aK(0x37f)]
                });
                continue;
            }
            try {
                const j = this['_parseMode'](h), k = m => {
                        a0h['chmodSync'](m, j);
                    };
                if (b && a0h['existsSync'](i) && a0h[aK(0x20e)](i)[aK(0x3f1)]()) {
                    const m = n => {
                        const aL = aK;
                        c[aL(0x1de)](k, n);
                        const o = a0h[aL(0x32c)](n);
                        for (const p of o) {
                            const q = a0j[aL(0x139)](n, p);
                            a0h[aL(0x20e)](q)[aL(0x3f1)]() ? m(q) : c[aL(0x221)](k, q);
                        }
                    };
                    m(i);
                } else
                    c['wZgCG'](k, i);
                const l = j[aK(0x2aa)](0x8);
                d[aK(0x30c)]({
                    'path': g,
                    'requested': c[aK(0x2c0)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aK(0x30c)]({
                    'path': g,
                    'requested': c[aK(0x3b4)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['Tjgiu'],
                    'message': n[aK(0x255)]
                });
            }
        }
        const f = d[aK(0x208)](o => o['status'] === 'ok')[aK(0x305)];
        return {
            'status': 'ok',
            'total': d[aK(0x305)],
            'success': f,
            'results': d
        };
    }
    static async [a0S(0x14c)](a) {
        const aM = a0S, b = {
                'FPUal': aM(0x19d),
                'fVywU': function (h, i) {
                    return h > i;
                },
                'mKSrs': function (h, i) {
                    return h * i;
                },
                'NUGSu': aM(0x3dd),
                'dTMmb': aM(0x2ac),
                'LwGyy': aM(0x388)
            }, c = a0j[aM(0x1ab)](a0D[aM(0x3b3)], a);
        if (!c[aM(0x145)](a0D[aM(0x3b3)]))
            throw new Error(b[aM(0x27e)]);
        const d = a0h['statSync'](c);
        if (b['fVywU'](d[aM(0x3ca)], b[aM(0x38e)](0x400, 0x400)))
            throw new Error(aM(0x157));
        const f = a0h[aM(0x34c)](c), g = this['_isBinary'](f);
        return {
            'status': 'ok',
            'path': a0j[aM(0x19c)](a0D['FILE_ROOT'], c),
            'content': g ? a0p[aM(0x1e9)](f) : f['toString'](b[aM(0x1df)]),
            'encoding': g ? b[aM(0x21a)] : b['LwGyy'],
            'is_binary': g,
            'size': d[aM(0x3ca)]
        };
    }
    static [a0S(0x1b2)](a) {
        const aN = a0S, b = {
                'npPKI': function (c, d) {
                    return c === d;
                },
                'ICdEw': function (c, d) {
                    return c < d;
                },
                'blgYE': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b['npPKI'](a['length'], 0x0))
            return ![];
        for (let c = 0x0; b[aN(0x13f)](c, Math[aN(0x174)](a[aN(0x305)], 0x200)); c++) {
            if (b[aN(0x12c)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0S(0x18b)](a, b, c, d = null, f = null) {
        const aO = a0S, g = {
                'kqNoa': aO(0x19d),
                'FPGju': function (l, m) {
                    return l !== m;
                },
                'mdiTV': function (l, m) {
                    return l !== m;
                },
                'tdWWH': function (l, m) {
                    return l(m);
                },
                'pJmoL': aO(0x143),
                'jUdNX': function (l, m) {
                    return l === m;
                },
                'RTphA': function (l, m) {
                    return l < m;
                }
            }, h = a0j[aO(0x1ab)](a0D['FILE_ROOT'], a);
        let j = h;
        b && (j = a0j[aO(0x139)](h, b));
        if (!j['startsWith'](a0D[aO(0x3b3)]))
            throw new Error(g['kqNoa']);
        !a0h[aO(0x207)](a0j[aO(0x383)](j)) && a0h[aO(0x317)](a0j[aO(0x383)](j), { 'recursive': !![] });
        const k = a0p[aO(0x266)](c);
        if (k['length'] > a0D[aO(0x32e)])
            throw new Error('File\x20too\x20large');
        if (g['FPGju'](d, null) && g[aO(0x15e)](f, null)) {
            const l = g['tdWWH'](Number, d), m = Number(f);
            if (Number[aO(0x20d)](l) || Number[aO(0x20d)](m))
                throw new Error(g['pJmoL']);
            const n = a0j[aO(0x139)](a0j[aO(0x383)](j), aO(0x1b6), a0j['basename'](j));
            !a0h[aO(0x207)](n) && a0h[aO(0x317)](n, { 'recursive': !![] });
            const o = a0j[aO(0x139)](n, 'chunk_' + l);
            a0h['writeFileSync'](o, k);
            const p = a0h[aO(0x32c)](n)[aO(0x208)](s => s[aO(0x145)]('chunk_')), q = p[aO(0x305)], r = g[aO(0x112)](q, m);
            if (r) {
                const s = a0h[aO(0x29d)](j);
                for (let t = 0x0; g['RTphA'](t, m); t++) {
                    const u = a0j['join'](n, aO(0x296) + t);
                    if (!a0h[aO(0x207)](u)) {
                        s[aO(0x37c)]();
                        throw new Error(aO(0x2b6) + t);
                    }
                    s[aO(0x1a8)](a0h[aO(0x34c)](u));
                }
                s['end']();
                for (const v of a0h['readdirSync'](n)) {
                    a0h['unlinkSync'](a0j[aO(0x139)](n, v));
                }
                a0h[aO(0x22d)](n, { 'recursive': !![] });
            }
            return {
                'status': 'ok',
                'path': a0j[aO(0x19c)](a0D[aO(0x3b3)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aO(0x1eb)](j, k), {
            'status': 'ok',
            'path': a0j[aO(0x19c)](a0D[aO(0x3b3)], j),
            'received': k[aO(0x305)],
            'total': k[aO(0x305)],
            'chunked': ![]
        };
    }
    static async [a0S(0x1cb)](a) {
        const aP = a0S, b = {
                'Mincn': aP(0x19d),
                'vJxjj': aP(0x30f)
            }, c = a0j['resolve'](a0D['FILE_ROOT'], a);
        if (!c['startsWith'](a0D[aP(0x3b3)]))
            throw new Error(b['Mincn']);
        if (!a0h[aP(0x207)](c))
            throw new Error(b['vJxjj']);
        const d = a0h['statSync'](c), f = a0h[aP(0x34c)](c), g = a0p[aP(0x1e9)](f);
        return {
            'path': a0j[aP(0x19c)](a0D['FILE_ROOT'], c),
            'content': g,
            'size': d[aP(0x3ca)]
        };
    }
    static async [a0S(0x31f)](a) {
        const aQ = a0S, b = { 'aHKJq': aQ(0x289) }, c = [];
        for (const d of a) {
            const f = a0j[aQ(0x1ab)](a0D[aQ(0x3b3)], d);
            if (!f['startsWith'](a0D[aQ(0x3b3)])) {
                c['push']({
                    'path': d,
                    'status': b[aQ(0x3db)]
                });
                continue;
            }
            try {
                if (a0h[aQ(0x207)](f)) {
                    const g = a0h[aQ(0x20e)](f);
                    g[aQ(0x3f1)]() ? a0h['rmdirSync'](f, { 'recursive': !![] }) : a0h['unlinkSync'](f), c['push']({
                        'path': d,
                        'status': aQ(0x2cb)
                    });
                } else
                    c[aQ(0x30c)]({
                        'path': d,
                        'status': aQ(0x166)
                    });
            } catch (h) {
                c['push']({
                    'path': d,
                    'status': aQ(0x3da),
                    'message': h['message']
                });
            }
        }
        return c;
    }
    static async [a0S(0x116)](a) {
        const aR = a0S, b = {
                'onSHd': aR(0x289),
                'JKMjf': aR(0x3da)
            }, c = [];
        for (const [d, f] of Object[aR(0x251)](a)) {
            const g = a0j[aR(0x1ab)](a0D[aR(0x3b3)], d), h = a0j['resolve'](a0D[aR(0x3b3)], f);
            if (!g[aR(0x145)](a0D[aR(0x3b3)]) || !h[aR(0x145)](a0D['FILE_ROOT'])) {
                c[aR(0x30c)]({
                    'from': d,
                    'to': f,
                    'status': b['onSHd']
                });
                continue;
            }
            try {
                const i = a0j[aR(0x383)](h);
                !a0h[aR(0x207)](i) && a0h[aR(0x317)](i, { 'recursive': !![] }), a0h[aR(0x3a3)](g, h), c[aR(0x30c)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[aR(0x30c)]({
                    'from': d,
                    'to': f,
                    'status': b['JKMjf'],
                    'message': j[aR(0x255)]
                });
            }
        }
        return c;
    }
    static async [a0S(0x130)](a) {
        const aS = a0S, b = {
                'NGhdi': aS(0x289),
                'exzGZ': aS(0x166),
                'CfLyT': function (d, f, g) {
                    return d(f, g);
                },
                'cJyva': aS(0x3da)
            }, c = [];
        for (const [d, f] of Object[aS(0x251)](a)) {
            const g = a0j[aS(0x1ab)](a0D[aS(0x3b3)], d), h = a0j['resolve'](a0D['FILE_ROOT'], f);
            if (!g[aS(0x145)](a0D[aS(0x3b3)]) || !h['startsWith'](a0D[aS(0x3b3)])) {
                c[aS(0x30c)]({
                    'from': d,
                    'to': f,
                    'status': b[aS(0x31b)]
                });
                continue;
            }
            try {
                if (!a0h['existsSync'](g)) {
                    c[aS(0x30c)]({
                        'from': d,
                        'to': f,
                        'status': b['exzGZ']
                    });
                    continue;
                }
                const i = a0j[aS(0x383)](h);
                !a0h['existsSync'](i) && a0h[aS(0x317)](i, { 'recursive': !![] });
                const j = a0h['statSync'](g);
                if (j['isDirectory']()) {
                    if (a0h[aS(0x1e4)])
                        a0h[aS(0x1e4)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aT = aS;
                            if (a0h[aT(0x20e)](l)[aT(0x3f1)]()) {
                                if (!a0h[aT(0x207)](m))
                                    a0h[aT(0x317)](m, { 'recursive': !![] });
                                for (const n of a0h[aT(0x32c)](l)) {
                                    k(a0j[aT(0x139)](l, n), a0j[aT(0x139)](m, n));
                                }
                            } else
                                a0h[aT(0x31e)](l, m);
                        };
                        b[aS(0x180)](k, g, h);
                    }
                } else
                    a0h[aS(0x31e)](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[aS(0x301)],
                    'message': l[aS(0x255)]
                });
            }
        }
        return c;
    }
    static async [a0S(0x2a1)](a) {
        const aU = a0S, b = a0j[aU(0x1ab)](a0D[aU(0x3b3)], a);
        if (!b[aU(0x145)](a0D[aU(0x3b3)]))
            throw new Error(aU(0x19d));
        return a0h[aU(0x317)](b, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[aU(0x19c)](a0D[aU(0x3b3)], b)
        };
    }
}
class a0J {
    static ['cronJobs'] = new Map();
    static [a0S(0x2c8)](a, b) {
        const aV = a0S, c = {
                'pvNqD': function (d, f) {
                    return d > f;
                },
                'yHrdg': function (d, f) {
                    return d - f;
                }
            };
        a[aV(0x30c)](b), c[aV(0x234)](a[aV(0x305)], a0D[aV(0x359)]) && a[aV(0x371)](0x0, c[aV(0x160)](a[aV(0x305)], a0D[aV(0x359)]));
    }
    static [a0S(0x2dc)](a, b, c, d, f = null) {
        const aW = a0S, g = new Date()[aW(0x1bb)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + aW(0x131) + a + aW(0x176) + c + '\x0a' + (b?.[aW(0x1ae)]() || '')
        };
    }
    static [a0S(0x222)]() {
        const aX = a0S;
        return {
            'status': 'ok',
            'count': a0D[aX(0x379)][aX(0x305)],
            'tasks': a0D[aX(0x379)]
        };
    }
    static async [a0S(0x25f)](a) {
        const aY = a0S, b = {
                'yZdQj': function (d, f) {
                    return d < f;
                },
                'uRUTV': aY(0x1b0),
                'Sggke': function (d, f) {
                    return d === f;
                },
                'lwCxW': aY(0x3da)
            };
        a0D[aY(0x379)] = a || [], a0D['InitTask'] = !![];
        const c = [];
        for (let d = 0x0; b[aY(0x271)](d, a0D[aY(0x379)][aY(0x305)]); d++) {
            const f = a0D[aY(0x379)][d], g = await a0H['execute'](f), h = this[aY(0x2dc)](f, g[aY(0x34b)], g['exitcode'], b[aY(0x3b6)]);
            this['_appendLog'](a0D[aY(0x2f1)], h), c[aY(0x30c)]({
                'index': d,
                'cmd': f,
                'exitcode': g[aY(0x2a9)],
                'output': g[aY(0x34b)],
                'status': b['Sggke'](g[aY(0x2a9)], 0x0) ? 'ok' : b[aY(0x277)]
            });
        }
        return a0D['InitTask'] = ![], {
            'status': 'ok',
            'count': a0D[aY(0x379)][aY(0x305)],
            'tasks': a0D[aY(0x379)],
            'executed': c
        };
    }
    static [a0S(0x134)]() {
        const aZ = a0S;
        return {
            'status': 'ok',
            'count': Object[aZ(0x3ed)](a0D[aZ(0x3b1)])[aZ(0x305)],
            'tasks': a0D[aZ(0x3b1)]
        };
    }
    static ['setCronTasks'](a) {
        const b0 = a0S, b = {
                'EjBSd': b0(0x20a),
                'PCbzR': function (d, f) {
                    return d === f;
                },
                'GzlTU': 'cron',
                'lRpLR': function (d, f) {
                    return d || f;
                },
                'iGdJR': 'error',
                'bmnuo': function (d, f) {
                    return d - f;
                },
                'xLVJE': function (d, f) {
                    return d > f;
                }
            };
        this[b0(0x2eb)]['forEach'](d => {
            const b1 = b0;
            typeof d[b1(0x37e)] === b['EjBSd'] && d[b1(0x37e)](), b['PCbzR'](typeof d[b1(0x352)], 'function') && d[b1(0x352)]();
        }), this[b0(0x2eb)][b0(0x35f)]();
        const c = [];
        for (const d of Object['keys'](b[b0(0x2da)](a, {}))) {
            !a0m['validate'](d) && c['push'](d);
        }
        if (c[b0(0x305)] > 0x0)
            return {
                'status': b[b0(0x22f)],
                'message': b0(0x33c) + c[b0(0x139)](',\x20'),
                'valid_count': b[b0(0x28f)](Object[b0(0x3ed)](b[b0(0x2da)](a, {}))['length'], c[b0(0x305)])
            };
        a0D[b0(0x3b1)] = b[b0(0x2da)](a, {});
        for (const [f, g] of Object['entries'](a0D[b0(0x3b1)])) {
            const h = a0m[b0(0x214)](f, async () => {
                const b2 = b0, i = await a0H[b2(0x2cf)](g), j = this[b2(0x2dc)](g, i[b2(0x34b)], i[b2(0x2a9)], b[b2(0x163)], f);
                this[b2(0x2c8)](a0D[b2(0x16d)], j);
            });
            this[b0(0x2eb)]['set'](f, h);
        }
        return a0D['cronloop'] = b['xLVJE'](Object['keys'](a0D[b0(0x3b1)])[b0(0x305)], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0D[b0(0x3b1)])[b0(0x305)],
            'tasks': a0D['crontasks']
        };
    }
    static [a0S(0x1bf)]() {
        const b3 = a0S;
        return {
            'onetime': {
                'pending': a0D[b3(0x260)],
                'count': a0D[b3(0x379)]['length']
            },
            'cron': {
                'active': a0D[b3(0x2a7)],
                'count': Object[b3(0x3ed)](a0D[b3(0x3b1)])[b3(0x305)],
                'check_interval': a0D['CRON_CHECK_INTERVAL']
            }
        };
    }
    static [a0S(0x282)](a = 0x32) {
        const b4 = a0S, b = a0D[b4(0x2f1)][b4(0x13b)](-a);
        return {
            'status': 'ok',
            'count': b[b4(0x305)],
            'logs': b
        };
    }
    static ['getCronLogs'](a = 0x32) {
        const b5 = a0S, b = a0D[b5(0x16d)][b5(0x13b)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const b6 = a0S, a = { 'FKnxF': 'onetime' }, b = a0D['onetimetasks_log'][b6(0x305)];
        return a0D[b6(0x2f1)] = [], {
            'status': 'ok',
            'cleared': a[b6(0x183)]
        };
    }
    static ['clearCronLogs']() {
        const b7 = a0S, a = a0D['crontasks_log'][b7(0x305)];
        return a0D['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': 'cron'
        };
    }
    static [a0S(0x311)]() {
        const b8 = a0S, a = {
                'PKdeH': function (g, h) {
                    return g - h;
                }
            }, b = a0D[b8(0x2f1)]['filter'](g => g[b8(0x2a9)] === 0x0)['length'], c = a[b8(0x2b3)](a0D[b8(0x2f1)][b8(0x305)], b), d = a0D[b8(0x16d)]['filter'](g => g[b8(0x2a9)] === 0x0)[b8(0x305)], f = a[b8(0x2b3)](a0D[b8(0x16d)][b8(0x305)], d);
        return {
            'onetime': {
                'total_logged': a0D[b8(0x2f1)][b8(0x305)],
                'max_capacity': a0D['MAX_TASK_LOG_SIZE'],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0D['crontasks_log'][b8(0x305)],
                'max_capacity': a0D[b8(0x359)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const b9 = a0S, a = {
                'iaVsY': function (c, d) {
                    return c < d;
                },
                'VdEOg': 'onetime'
            }, b = [];
        for (let c = 0x0; a[b9(0x29a)](c, a0D['onetasks'][b9(0x305)]); c++) {
            const d = a0D[b9(0x379)][c], f = await a0H[b9(0x2cf)](d), g = this['_formatLogEntry'](d, f[b9(0x34b)], f['exitcode'], a[b9(0x197)]);
            this[b9(0x2c8)](a0D[b9(0x2f1)], g), b['push']({
                'cmd': d,
                'exitcode': f[b9(0x2a9)],
                'output': f['result'],
                'timeout': f['timeout']
            });
        }
        return a0D['InitTask'] = ![], {
            'status': 'ok',
            'executed': b[b9(0x305)],
            'results': b
        };
    }
}
let a0K = null, a0L = null;
const a0M = new Promise((a, b) => {
    const ba = a0S, c = {
            'fnYAh': ba(0x1cd),
            'IekKw': ba(0x2d4),
            'IyBra': function (d) {
                return d();
            },
            'hAchO': function (d, f) {
                return d(f);
            },
            'KOXFS': ba(0x26b)
        };
    try {
        c[ba(0x20c)](a0r, function (d) {
            const bb = ba;
            if (!d) {
                a0L = new Error(c[bb(0x1c1)]), a0t[bb(0x146)](bb(0x345), a0L['message']), a();
                return;
            }
            a0K = d, a0t[bb(0x118)](c[bb(0x1e5)]), c[bb(0x364)](a);
        });
    } catch (d) {
        a0L = d, a0t[ba(0x146)](c[ba(0x322)], d[ba(0x255)]), c[ba(0x364)](a);
    }
});
process['on'](a0S(0x1cf), (a, b) => {
    const bc = a0S, c = { 'iPYsh': bc(0x217) };
    a0t[bc(0x3da)](c[bc(0x122)], a);
}), process['on']('uncaughtException', a => {
    const bd = a0S, b = { 'kwohr': bd(0x2e5) };
    a0t[bd(0x3da)](b['kwohr'], a), process[bd(0x28a)](0x1);
});
class a0N {
    constructor(a, b, c) {
        const be = a0S;
        this[be(0x291)] = a, this[be(0x2bf)] = b, this[be(0x2ce)] = c, this[be(0x3ef)] = ![], this['hs'] = null, this['sendCipher'] = null, this['recvCipher'] = null;
    }
    async ['init']() {
        const bf = a0S, a = {
                'CBaJH': bf(0x275),
                'MMEWN': bf(0x32d),
                'hWUVb': bf(0x187),
                'KGwwP': 'base64'
            };
        await a0M;
        if (!a0K)
            throw a0L || new Error(a[bf(0x16b)]);
        const b = a0K, c = this[bf(0x291)] ? b['constants'][bf(0x367)] : b[bf(0x357)][bf(0x2d0)];
        this['hs'] = b[bf(0x272)](a[bf(0x324)], c);
        const d = Buffer[bf(0x346)](a['hWUVb']), f = this[bf(0x2bf)] ? Buffer[bf(0x346)](this['localPrivB64'], bf(0x2ac)) : null, g = this[bf(0x2ce)] ? Buffer[bf(0x346)](this[bf(0x2ce)], a[bf(0x23c)]) : null;
        this['hs'][bf(0x390)](d, f, g, null);
    }
    [a0S(0x1ed)](a) {
        const bg = a0S, b = {
                'taHdl': function (d, f) {
                    return d > f;
                },
                'eqfbn': function (d, f) {
                    return d === f;
                }
            };
        if (this[bg(0x3ef)])
            return Buffer[bg(0x309)](0x0);
        const c = a0K;
        a && b['taHdl'](a[bg(0x305)], 0x0) && this['hs'][bg(0x252)]() === c['constants']['NOISE_ACTION_READ_MESSAGE'] && this['hs']['ReadMessage'](a);
        if (this['hs']['GetAction']() === c['constants']['NOISE_ACTION_SPLIT'])
            return this['_splitAndFinish'](), Buffer['alloc'](0x0);
        if (this['hs'][bg(0x252)]() === c[bg(0x357)][bg(0x354)]) {
            const d = this['hs'][bg(0x196)](new Uint8Array(0x0));
            return b['eqfbn'](this['hs'][bg(0x252)](), c['constants'][bg(0x27d)]) && this[bg(0x142)](), Buffer[bg(0x346)](d);
        }
        return Buffer[bg(0x309)](0x0);
    }
    ['_splitAndFinish']() {
        const bh = a0S, a = this['hs'][bh(0x246)]();
        this[bh(0x22a)] = a[0x0], this[bh(0x231)] = a[0x1], this[bh(0x3ef)] = !![];
        try {
            if (this['hs'])
                this['hs'][bh(0x1ff)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0S(0x1a3)](a) {
        const bi = a0S;
        if (!this[bi(0x3ef)])
            throw new Error(bi(0x1f8));
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer[bi(0x346)](this['sendCipher'][bi(0x2b5)](b, c));
    }
    ['decrypt'](a) {
        const bj = a0S, b = { 'cLdmk': bj(0x2d2) };
        if (!this[bj(0x3ef)])
            throw new Error(b[bj(0x1fe)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bj(0x346)](this[bj(0x231)]['DecryptWithAd'](c, d));
    }
    [a0S(0x1ff)]() {
        const bk = a0S, a = { 'ZlanN': bk(0x33d) }, b = a[bk(0x202)][bk(0x298)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                try {
                    if (this[bk(0x231)])
                        this[bk(0x231)][bk(0x1ff)]();
                } catch (d) {
                }
                continue;
            case '1':
                this['hs'] = null;
                continue;
            case '2':
                try {
                    if (this[bk(0x22a)])
                        this['sendCipher'][bk(0x1ff)]();
                } catch (f) {
                }
                continue;
            case '3':
                try {
                    if (this['hs'])
                        this['hs'][bk(0x1ff)]();
                } catch (g) {
                }
                continue;
            case '4':
                this[bk(0x231)] = null;
                continue;
            case '5':
                this['sendCipher'] = null;
                continue;
            }
            break;
        }
    }
}
class a0O {
    constructor() {
        const bl = a0S, a = { 'uaqKp': '3|5|8|1|6|9|4|2|7|0' }, b = a[bl(0x3f0)][bl(0x298)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bl(0x190)] = new a0N(![], this[bl(0x173)], this[bl(0x26a)]);
                continue;
            case '1':
                this[bl(0x2f4)] = !![];
                continue;
            case '2':
                this[bl(0x173)] = a0D[bl(0x1ce)][bl(0x1be)][bl(0x3ee)];
                continue;
            case '3':
                this[bl(0x2f6)] = null;
                continue;
            case '4':
                this[bl(0x327)] = [];
                continue;
            case '5':
                this['websocket'] = null;
                continue;
            case '6':
                this['phase'] = bl(0x319);
                continue;
            case '7':
                this[bl(0x26a)] = a0D['NOISE_KEYS_INTERNAL']['control'][bl(0x38d)];
                continue;
            case '8':
                this[bl(0x2b9)] = null;
                continue;
            case '9':
                this[bl(0x274)] = [];
                continue;
            }
            break;
        }
    }
    async ['cleanup']() {
        const bm = a0S, a = {
                'krzKC': function (b, c) {
                    return b === c;
                },
                'PNjLD': bm(0x2ab)
            };
        this[bm(0x2b9)] && a0t[bm(0x38c)]('[' + this['requestId'] + ']\x20执行终端资源清理...');
        if (this[bm(0x2f6)]) {
            try {
                this[bm(0x2f6)][bm(0x16e)]();
            } catch (b) {
            }
            this[bm(0x2f6)] = null;
        }
        if (this[bm(0x190)])
            this[bm(0x190)][bm(0x1ff)]();
        if (this[bm(0x3d3)])
            try {
                a[bm(0x32b)](this[bm(0x3d3)]['readyState'], this[bm(0x3d3)][bm(0x3cb)]) && this[bm(0x3d3)][bm(0x37c)](0x3e8, a['PNjLD']);
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0S(0x2c7)](a) {
        const bn = a0S, b = {
                'nJFfV': function (c, d) {
                    return c === d;
                },
                'nsxgl': bn(0x386)
            };
        if (b[bn(0x2d1)](this[bn(0x306)], 'handshake')) {
            if (this[bn(0x327)][bn(0x305)] > 0x0) {
                const c = this[bn(0x327)][bn(0x342)]();
                c(a);
            } else
                this['msgQueue'][bn(0x30c)](a);
        } else
            b[bn(0x2d1)](this['phase'], b[bn(0x1c8)]) && this['_processTerminalMessage'](a);
    }
    async [a0S(0x310)]() {
        const bo = a0S;
        if (this[bo(0x274)][bo(0x305)] > 0x0)
            return this[bo(0x274)][bo(0x342)]();
        return new Promise(a => {
            const bp = bo;
            this['msgResolvers'][bp(0x30c)](a);
        });
    }
    async [a0S(0x2ff)](a) {
        const bq = a0S, b = {
                'qyTuV': function (c, d) {
                    return c(d);
                },
                'IiKcl': bq(0x245),
                'fgAvW': function (c, d) {
                    return c > d;
                },
                'VnEiB': bq(0x3c9),
                'cjbCi': '✅\x20Noise\x20握手完成，端到端加密通道已建立！'
            };
        b['qyTuV'](a, b['IiKcl']);
        try {
            await this[bq(0x190)][bq(0x3df)]();
            const c = await this[bq(0x310)](), d = this[bq(0x190)][bq(0x1ed)](c);
            d && b[bq(0x347)](d[bq(0x305)], 0x0) && this['websocket'][bq(0x24f)](d);
            const f = await this[bq(0x310)]();
            this[bq(0x190)]['processHandshake'](f);
            if (!this[bq(0x190)][bq(0x3ef)])
                throw new Error(b[bq(0x203)]);
            b['qyTuV'](a, b['cjbCi']);
        } catch (g) {
            b[bq(0x380)](a, '💥\x20握手失败详情:\x20' + g[bq(0x255)]);
            throw new Error(bq(0x3d9));
        }
    }
    ['getAvailableShell']() {
        const br = a0S, a = {
                'AoyQb': br(0x2a6),
                'cUDEW': br(0x2d7),
                'nBKhn': br(0x140),
                'hiQmY': br(0x206)
            }, b = process.env.SHELL;
        if (b && a0h['existsSync'](b))
            return b;
        const c = [
            a[br(0x254)],
            a['cUDEW'],
            a[br(0x193)],
            a[br(0x3be)]
        ];
        for (const d of c) {
            if (a0h[br(0x207)](d))
                return d;
        }
        return a[br(0x3be)];
    }
    async ['startSession'](a, b, c) {
        const bs = a0S, d = {
                'bnqCx': function (g, h) {
                    return g(h);
                },
                'kPOns': '🔐\x20检测到\x20Token，视为\x20WSS\x20链路，跳过\x20Noise'
            };
        this[bs(0x3d3)] = a, this[bs(0x2b9)] = b;
        const f = g => a0t[bs(0x38c)](bs(0x292) + b + ']\x20' + g);
        this['useNoise'] = !c, d['bnqCx'](f, this[bs(0x2f4)] ? bs(0x128) : d[bs(0x297)]), a['on'](bs(0x255), g => this[bs(0x2c7)](g));
        try {
            this[bs(0x2f4)] && await this['_doNoiseHandshake'](f), await this[bs(0x1b5)](f);
        } catch (g) {
            f('❌\x20终端会话异常:\x20' + g['message']), await this[bs(0x3de)]();
        }
    }
    async [a0S(0x1b5)](a) {
        const bt = a0S, b = {
                'qZRZu': bt(0x388),
                'cEviB': function (f, g) {
                    return f === g;
                },
                'UBELk': function (f, g) {
                    return f(g);
                },
                'NAuZi': bt(0x2be),
                'YCQeM': function (f, g) {
                    return f(g);
                },
                'NlDeg': bt(0x21b),
                'qLOvb': bt(0x117),
                'SecEh': function (f, g) {
                    return f(g);
                },
                'loFnh': 'unknown',
                'WdRdS': function (f, g) {
                    return f > g;
                },
                'veMgk': bt(0x37c)
            }, c = this['getAvailableShell']();
        b[bt(0x27f)](a, bt(0x152) + c);
        const d = Object[bt(0x32f)]({}, process.env);
        delete d['PROMPT_COMMAND'], d[bt(0x21c)] = bt(0x117);
        if (!d[bt(0x1a4)])
            d[bt(0x1a4)] = b['NlDeg'];
        try {
            this[bt(0x2f6)] = a0s[bt(0x29c)](c, [], {
                'name': b['qLOvb'],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process['cwd'](),
                'env': d
            }), b[bt(0x3ba)](a, '🚀\x20终端进程已启动\x20(PID:\x20' + (this['ptyProcess']['pid'] || b[bt(0x248)]) + ')'), this[bt(0x306)] = bt(0x386);
            while (b[bt(0x132)](this[bt(0x274)][bt(0x305)], 0x0)) {
                const f = this[bt(0x274)][bt(0x342)]();
                this[bt(0x2de)](f);
            }
            this['ptyProcess'][bt(0x24d)](g => {
                const bu = bt;
                try {
                    let h = Buffer[bu(0x346)](g, b[bu(0x279)]);
                    this[bu(0x2f4)] && this[bu(0x190)] && this['cipher'][bu(0x3ef)] && (h = this['cipher'][bu(0x1a3)](h)), b[bu(0x358)](this[bu(0x3d3)][bu(0x24c)], 0x1) && this['websocket'][bu(0x24f)](h);
                } catch (i) {
                }
            }), this[bt(0x2f6)][bt(0x2f9)](({
                exitCode: g,
                signal: h
            }) => {
                const bv = bt;
                b[bv(0x302)](a, bv(0x3ce) + g + bv(0x1e0) + h + ')'), this[bv(0x3de)]();
            }), this[bt(0x3d3)]['on'](b[bt(0x3ad)], () => {
                const bw = bt;
                a(b['NAuZi']), this[bw(0x3de)]();
            });
        } catch (g) {
            a(bt(0x1aa) + g[bt(0x255)]), await this[bt(0x3de)]();
            throw g;
        }
    }
    [a0S(0x2de)](a) {
        const bx = a0S, b = {
                'yKGTc': bx(0x388),
                'BkSto': function (c, d) {
                    return c === d;
                },
                'wSzGq': bx(0x1e7),
                'YGHtu': bx(0x3c7),
                'exnab': function (c, d) {
                    return c === d;
                },
                'ZWcdj': bx(0x389),
                'ICeLM': bx(0x2ac)
            };
        if (!this[bx(0x2f6)])
            return;
        try {
            const c = Buffer[bx(0x346)](a);
            let d;
            this[bx(0x2f4)] ? d = this[bx(0x190)]['decrypt'](c) : d = c;
            let f = ![], g = d['toString'](b['yKGTc']);
            if (g[bx(0x1ae)]()[bx(0x145)]('{'))
                try {
                    const h = JSON['parse'](g);
                    f = !![];
                    if (b[bx(0x2e1)](h['type'], b['wSzGq'])) {
                        let i = Buffer[bx(0x346)](JSON['stringify']({ 'type': b[bx(0x294)] }));
                        if (this['useNoise'])
                            i = this['cipher'][bx(0x1a3)](i);
                        this[bx(0x3d3)][bx(0x24f)](i);
                        return;
                    }
                    if (b[bx(0x2e1)](h['type'], b[bx(0x204)])) {
                        this['ptyProcess'][bx(0x3c7)](h['cols'] || 0x50, h[bx(0x22b)] || 0x18);
                        return;
                    }
                    if (b[bx(0x238)](h['type'], b[bx(0x1d6)]) && h['data'] !== undefined) {
                        let j = b['exnab'](h[bx(0x2fa)], b[bx(0x3a0)]) ? Buffer[bx(0x346)](h[bx(0x147)], bx(0x2ac))[bx(0x2aa)](bx(0x388)) : h[bx(0x147)];
                        this[bx(0x2f6)][bx(0x1a8)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[bx(0x2f6)][bx(0x1a8)](d['toString'](b[bx(0x1ac)]));
        } catch (l) {
            a0t[bx(0x38c)](bx(0x292) + this[bx(0x2b9)] + bx(0x2b0) + l[bx(0x255)]);
            if (this['useNoise'])
                this[bx(0x3de)]();
        }
    }
}
async function a0P() {
    const by = a0S, a = {
            'oWBgF': by(0x167),
            'FLMXG': function (b, c) {
                return b === c;
            },
            'FVEAL': by(0x276),
            'apgeK': by(0x237),
            'VCmRH': by(0x184),
            'nQWjb': by(0x113),
            'dRRCf': by(0x12d),
            'rkzVL': by(0x1bd),
            'tDNbe': function (b, c) {
                return b === c;
            },
            'ElWrc': by(0x200),
            'TIUZe': function (b, c) {
                return b === c;
            },
            'jgUJU': by(0x1f5),
            'KoNhy': by(0x3da),
            'SzaVx': by(0x29e),
            'YLIJl': by(0x2ac),
            'XPFsw': by(0x338),
            'tOhbH': 'content-type',
            'bgtCc': by(0x267),
            'ieMpu': function (b, c, d) {
                return b(c, d);
            },
            'FXGLl': by(0x165),
            'FKxAa': by(0x137),
            'JyEWc': by(0x23a),
            'hexoG': by(0x312),
            'fBowd': 'Starting\x20main()\x20function...',
            'rRWRr': by(0x3cc),
            'CCvBN': 'Config\x20validated',
            'JhsdN': by(0x24b),
            'lmUFe': by(0x264),
            'IJSIl': by(0x170),
            'dJMdo': function (b) {
                return b();
            },
            'YUSrQ': by(0x127),
            'OJHym': function (b, c) {
                return b(c);
            },
            'Mukkd': 'Middleware\x20applied,\x20setting\x20up\x20routes...',
            'gdDVF': by(0x2db),
            'wYcuK': by(0x14d),
            'QOzIh': '/api/exec',
            'kLQUx': by(0x3e9),
            'tOevp': by(0x374),
            'oKmJH': by(0x223),
            'FyaEJ': '/api/file/download',
            'OTMGJ': '/api/file',
            'fiJLy': by(0x303),
            'VYFug': '/api/task/onetime',
            'fGtHK': by(0x36c),
            'IevXJ': by(0x2d3),
            'iTWXJ': by(0x1b1),
            'MpidD': by(0x15c),
            'KTYZS': by(0x156),
            'ufRgX': by(0x33f),
            'LkASV': by(0x287),
            'zxDDB': by(0x3eb),
            'tyWAf': by(0x256),
            'slMwR': 'SIGINT\x20handler\x20registered'
        };
    try {
        a0t[by(0x118)](a['fBowd']), a0t[by(0x118)](a[by(0x273)]), a0D[by(0x394)](), a0t[by(0x118)](a[by(0x21d)]), a0t[by(0x118)](a['JhsdN']);
        const b = new a0E(a0D[by(0x33b)], a0D[by(0x164)]);
        a0t[by(0x118)](by(0x280)), a0t[by(0x118)](a['lmUFe']);
        const c = new a0G();
        a0t[by(0x118)](a['IJSIl']), a0t[by(0x118)](by(0x33a));
        const d = a[by(0x3e0)](a0f);
        a0q(d), a0t[by(0x118)](by(0x387)), d[by(0x3c2)]((g, h, i) => {
            const bz = by, j = a['oWBgF'][bz(0x298)]('|');
            let k = 0x0;
            while (!![]) {
                switch (j[k++]) {
                case '0':
                    i();
                    continue;
                case '1':
                    if (a['FLMXG'](g['method'], a[bz(0x2fc)]))
                        return h[bz(0x315)](0xc8)[bz(0x1f2)]();
                    continue;
                case '2':
                    h[bz(0x182)](a[bz(0x3cd)], bz(0x3d7));
                    continue;
                case '3':
                    h[bz(0x182)](bz(0x290), a['VCmRH']);
                    continue;
                case '4':
                    h['header'](a[bz(0x34d)], '*');
                    continue;
                case '5':
                    h['header'](a[bz(0x363)], a[bz(0x22e)]);
                    continue;
                }
                break;
            }
        }), d[by(0x3c2)](a0f[by(0x2b4)]({
            'type': () => !![],
            'limit': a[by(0x1a9)]
        })), d[by(0x3c2)](a0f['urlencoded']({ 'extended': !![] })), d['use'](a[by(0x3d8)](a0F, b)), a0t['debug'](a[by(0x179)]), d[by(0x3dc)](a[by(0x13a)], async (g, h) => {
            const bA = by;
            try {
                const i = await c['getBasicInfo']();
                h[bA(0x2fb)](i);
            } catch (j) {
                h[bA(0x315)](0x1f4)[bA(0x2fb)]({
                    'status': bA(0x3da),
                    'message': j[bA(0x255)]
                });
            }
        }), d[by(0x3dc)](a[by(0x30a)], async (g, h) => {
            const bB = by;
            try {
                const i = await c[bB(0x220)]();
                h[bB(0x2fb)](i);
            } catch (j) {
                h[bB(0x315)](0x1f4)[bB(0x2fb)]({
                    'status': 'error',
                    'message': j[bB(0x255)]
                });
            }
        }), d[by(0x375)](a['QOzIh'], async (g, h) => {
            const bC = by;
            try {
                let i = null;
                if (a[bC(0x26c)](typeof g[bC(0x36b)], a[bC(0x210)]))
                    i = g[bC(0x36b)]['trim']();
                else
                    g[bC(0x36b)] && a[bC(0x227)](typeof g['body'], a[bC(0x25b)]) && (i = g[bC(0x36b)][bC(0x1e1)] || '');
                if (!i)
                    return h[bC(0x315)](0x190)[bC(0x2fb)]({
                        'status': a[bC(0x144)],
                        'message': a['SzaVx']
                    });
                const j = await a0H[bC(0x2cf)](i, {
                    'cwd': g[bC(0x36b)][bC(0x350)],
                    'env': g['body'][bC(0x1ee)],
                    'timeout': a0D[bC(0x3ae)]
                });
                h['json'](j);
            } catch (k) {
                h[bC(0x315)](0x1f4)[bC(0x2fb)]({
                    'status': a[bC(0x144)],
                    'message': k[bC(0x255)]
                });
            }
        }), d[by(0x375)](a[by(0x1a5)], async (g, h) => {
            const bD = by;
            try {
                const i = await a0I[bD(0x3b9)](g[bD(0x36b)]['path'], g[bD(0x36b)][bD(0x1d7)]);
                h[bD(0x2fb)]({
                    'status': 'ok',
                    'count': i[bD(0x305)],
                    'files': i
                });
            } catch (j) {
                h[bD(0x315)](0x1f4)['json']({
                    'status': a[bD(0x144)],
                    'message': j[bD(0x255)]
                });
            }
        }), d[by(0x375)]('/api/file/authority', async (g, h) => {
            const bE = by;
            try {
                const i = await a0I['getFilePermissions'](g[bE(0x36b)][bE(0x19e)] || []);
                h[bE(0x2fb)]({
                    'status': 'ok',
                    'files': i
                });
            } catch (j) {
                h[bE(0x315)](0x1f4)[bE(0x2fb)]({
                    'status': a[bE(0x144)],
                    'message': j[bE(0x255)]
                });
            }
        }), d[by(0x3ac)](a[by(0x385)], async (g, h) => {
            const bF = by;
            try {
                const i = g[bF(0x36b)][bF(0x38f)] || {}, j = g[bF(0x36b)][bF(0x1d7)] === !![], k = await a0I[bF(0x250)](i, j);
                h[bF(0x2fb)](k);
            } catch (l) {
                h['status'](0x1f4)['json']({
                    'status': a[bF(0x144)],
                    'message': l[bF(0x255)]
                });
            }
        }), d[by(0x375)](a[by(0x378)], async (g, h) => {
            const bG = by;
            try {
                const i = await a0I[bG(0x14c)](g[bG(0x36b)][bG(0x16c)]);
                h['json'](i);
            } catch (j) {
                h['status'](0x1f4)['json']({
                    'status': a[bG(0x144)],
                    'message': j[bG(0x255)]
                });
            }
        }), d[by(0x375)](by(0x23d), async (g, h) => {
            const bH = by;
            try {
                const i = await a0I['uploadFile'](g[bH(0x36b)]['path'], g['body']['filename'], g[bH(0x36b)][bH(0x1a0)], g[bH(0x36b)][bH(0x3d0)], g[bH(0x36b)][bH(0x27a)]);
                h['json'](i);
            } catch (j) {
                h[bH(0x315)](0x1f4)[bH(0x2fb)]({
                    'status': bH(0x3da),
                    'message': j['message']
                });
            }
        }), d[by(0x375)](a[by(0x192)], async (g, h) => {
            const bI = by;
            try {
                const i = await a0I[bI(0x1cb)](g['body'][bI(0x16c)]), j = Buffer[bI(0x346)](i['content'], a[bI(0x1a2)]);
                return h[bI(0x249)](a['XPFsw'], i[bI(0x3ca)][bI(0x2aa)]()), h[bI(0x249)](bI(0x39f), i[bI(0x16c)]), h[bI(0x249)](a[bI(0x1ea)], a[bI(0x333)]), h[bI(0x24f)](j);
            } catch (k) {
                h['status'](0x1f4)['json']({
                    'status': a[bI(0x144)],
                    'message': k[bI(0x255)]
                });
            }
        }), d['delete'](a[by(0x11e)], async (g, h) => {
            const bJ = by;
            try {
                let i = g[bJ(0x36b)][bJ(0x19e)];
                if (!i || !Array[bJ(0x2ad)](i)) {
                    i = [];
                    if (g[bJ(0x36b)][bJ(0x16c)])
                        i[bJ(0x30c)](g[bJ(0x36b)][bJ(0x16c)]);
                    if (g[bJ(0x36b)][bJ(0x2b7)])
                        i[bJ(0x30c)](g[bJ(0x36b)][bJ(0x2b7)]);
                }
                const j = await a0I[bJ(0x31f)](i);
                h[bJ(0x2fb)]({
                    'status': 'ok',
                    'results': j
                });
            } catch (k) {
                h[bJ(0x315)](0x1f4)[bJ(0x2fb)]({
                    'status': a['KoNhy'],
                    'message': k[bJ(0x255)]
                });
            }
        }), d[by(0x3ac)]('/api/file', async (g, h) => {
            const bK = by;
            try {
                const i = await a0I[bK(0x116)](g['body'][bK(0x13d)] || g[bK(0x36b)]);
                h['json']({
                    'status': 'ok',
                    'total': i[bK(0x305)],
                    'success': i[bK(0x208)](j => j[bK(0x315)] === 'ok')[bK(0x305)],
                    'results': i
                });
            } catch (j) {
                h['status'](0x1f4)['json']({
                    'status': a['KoNhy'],
                    'message': j[bK(0x255)]
                });
            }
        }), d[by(0x375)](by(0x381), async (g, h) => {
            const bL = by;
            try {
                const i = await a0I['copyFiles'](g['body']);
                h[bL(0x2fb)]({
                    'status': 'ok',
                    'total': i[bL(0x305)],
                    'success': i[bL(0x208)](j => j[bL(0x315)] === 'ok')[bL(0x305)],
                    'results': i
                });
            } catch (j) {
                h[bL(0x315)](0x1f4)[bL(0x2fb)]({
                    'status': bL(0x3da),
                    'message': j['message']
                });
            }
        }), d[by(0x375)](a['fiJLy'], async (g, h) => {
            const bM = by;
            try {
                const i = await a0I[bM(0x2a1)](g[bM(0x36b)][bM(0x16c)]);
                h[bM(0x2fb)](i);
            } catch (j) {
                h[bM(0x315)](0x1f4)[bM(0x2fb)]({
                    'status': bM(0x3da),
                    'message': j['message']
                });
            }
        }), d[by(0x3dc)](a[by(0x24e)], (g, h) => {
            const bN = by;
            h[bN(0x2fb)](a0J[bN(0x222)]());
        }), d['post'](a[by(0x24e)], async (g, h) => {
            const bO = by;
            try {
                const i = await a0J['setOnetimeTasks'](g['body']);
                h['json'](i);
            } catch (j) {
                h['status'](0x1f4)[bO(0x2fb)]({
                    'status': a[bO(0x144)],
                    'message': j[bO(0x255)]
                });
            }
        }), d['get'](a['fGtHK'], (g, h) => {
            const bP = by;
            h[bP(0x2fb)](a0J['getCronTasks']());
        }), d[by(0x375)](a[by(0x233)], (g, h) => {
            const bQ = by;
            try {
                const i = a0J['setCronTasks'](g[bQ(0x36b)]);
                h[bQ(0x2fb)](i);
            } catch (j) {
                h[bQ(0x315)](0x1f4)[bQ(0x2fb)]({
                    'status': a[bQ(0x144)],
                    'message': j[bQ(0x255)]
                });
            }
        }), d[by(0x3dc)](a[by(0x318)], (g, h) => {
            const bR = by;
            h[bR(0x2fb)](a0J[bR(0x1bf)]());
        }), d[by(0x3dc)](a[by(0x36e)], (g, h) => {
            const bS = by;
            let i = a[bS(0x17c)](parseInt, g[bS(0x353)][bS(0x373)], 0xa) || 0x32;
            i = Math[bS(0x174)](Math['max'](i, 0x1), 0x64), h['json'](a0J[bS(0x282)](i));
        }), d[by(0x3dc)](a[by(0x1c2)], (g, h) => {
            const bT = by;
            let i = parseInt(g[bT(0x353)][bT(0x373)], 0xa) || 0x32;
            i = Math['min'](Math[bT(0x288)](i, 0x1), 0x64), h['json'](a0J[bT(0x21f)](i));
        }), d['delete'](a['iTWXJ'], (g, h) => {
            const bU = by;
            h[bU(0x2fb)](a0J['clearOnetimeLogs']());
        }), d[by(0x123)](a[by(0x1c2)], (g, h) => {
            h['json'](a0J['clearCronLogs']());
        }), d['get'](a[by(0x138)], (g, h) => {
            const bV = by;
            h[bV(0x2fb)](a0J[bV(0x311)]());
        }), d[by(0x375)](a[by(0x361)], async (g, h) => {
            const bW = by;
            try {
                const i = await a0J['executeOnetimeTasks']();
                h[bW(0x2fb)](i);
            } catch (j) {
                h['status'](0x1f4)[bW(0x2fb)]({
                    'status': a[bW(0x144)],
                    'message': j['message']
                });
            }
        }), a0t['debug'](by(0x16f)), d['ws'](a[by(0x17a)], async (g, h) => {
            const bX = by, i = h[bX(0x39d)][0x0];
            a0t[bX(0x118)](bX(0x181) + h['url']), a0t[bX(0x118)](bX(0x2b2) + i);
            const j = h[bX(0x353)][bX(0x2a2)], k = h['query'][bX(0x3aa)];
            a0t['debug'](bX(0x209) + j);
            if (!j) {
                a0t[bX(0x118)](a[bX(0x185)]), g['close'](0x3f0, a[bX(0x244)]);
                return;
            }
            const l = new a0O();
            await l[bX(0x14f)](g, j, k);
        }), a0t['debug'](a['zxDDB']), a0t[by(0x118)](a[by(0x3a2)]);
        const f = d[by(0x34e)](a0D[by(0x1e8)], a0D[by(0x1a7)], () => {
            const bY = by;
            a0t[bY(0x118)](bY(0x2f0) + a0D['AGENT_VERSION'] + bY(0x325) + a0D[bY(0x1a7)] + ':' + a0D[bY(0x1e8)]), a0t['debug'](a['JyEWc']);
        });
        process['on'](by(0x321), () => {
            const bZ = by;
            a0t[bZ(0x118)](a[bZ(0x17f)]), f[bZ(0x37c)](), process[bZ(0x28a)](0x0);
        }), a0t[by(0x118)](a['slMwR']);
    } catch (g) {
        a0t[by(0x3da)](by(0x257), g), process[by(0x28a)](0x1);
    }
}
function a0b(a, b) {
    a = a - 0x112;
    const c = a0a();
    let d = c[a];
    if (a0b['uJMouk'] === undefined) {
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
        a0b['nzQsIq'] = e, a0b['aPikev'] = {}, a0b['uJMouk'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['aPikev'][g];
    return !h ? (d = a0b['nzQsIq'](d), a0b['aPikev'][g] = d) : d = h, d;
}
(require[a0S(0x391)] === module || require[a0S(0x391)]?.['filename']?.['includes'](a0S(0x349))) && a0P()[a0S(0x3b2)](a0t['error']);
module[a0S(0x323)] = {
    'Config': a0D,
    'CryptoManager': a0E,
    'SystemInfoCollector': a0G,
    'CommandExecutor': a0H,
    'FileManager': a0I,
    'TaskManager': a0J
};