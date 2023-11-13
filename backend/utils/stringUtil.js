// costum function to use acrosse all application

/**
 * @desc trim leading and trailing spaces and make allow one spaces between character
 * @return {string}
 * @exemple '  redoin    khalifa  ' => 'redoin khalifa'
 */
String.prototype.customTrim = function () {
    return this.replace(/ +/g, " ").trim();
};