/**
 * @desc trim leading and trailing spaces and make allow one spaces between character
 * @return {string}
 * @exemple '  redoin    khalifa  ' => 'redoin khalifa'
 * @this {string} The string to be trimmed.
 */
// eslint-disable-next-line no-extend-native
String.prototype.customTrim = function () {
    return this.replace(/ +/g, " ").trim();
};
