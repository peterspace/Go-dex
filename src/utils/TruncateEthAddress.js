"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Captures 0x + 5 characters, then the last 7 characters.
var truncateRegex = /^(0x[a-zA-Z0-9]{5})[a-zA-Z0-9]+([a-zA-Z0-9]{7})$/;
/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
var truncateEthAddress = function (address) {
    var match = address.match(truncateRegex);
    if (!match)
        return address;
    return match[1] + "..." + match[2];
    // return match[1] + "\u2026" + match[2];
};
exports.default = truncateEthAddress;
