"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.atob = atob;exports.btoa = btoa;exports.jsonEncode = jsonEncode;exports.jsonDecode = jsonDecode;exports.base64toHex = base64toHex;
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
  let raw = atob(base64);
  return '0x' + [...new Array(raw.length)].map((c, i) => {
    let h = raw.charCodeAt(i).toString(16);
    return h.length === 2 ? h : `0${h}`;
  }).join('').toLowerCase();
}