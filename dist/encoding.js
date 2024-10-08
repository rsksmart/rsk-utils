"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atob = atob;
exports.btoa = btoa;
exports.jsonEncode = jsonEncode;
exports.jsonDecode = jsonDecode;
exports.base64toHex = base64toHex;
function atob(str) {
    return Buffer.from(str, 'base64').toString('binary');
}
function btoa(base64) {
    return Buffer.from(base64, 'binary').toString('base64');
}
function jsonEncode(value) {
    return btoa(JSON.stringify(value));
}
function jsonDecode(value) {
    return JSON.parse(atob(value));
}
function base64toHex(base64) {
    var raw = atob(base64);
    return '0x' + __spreadArray([], new Array(raw.length), true).map(function (c, i) {
        var h = raw.charCodeAt(i).toString(16);
        return (h.length === 2) ? h : "0".concat(h);
    }).join('').toLowerCase();
}
