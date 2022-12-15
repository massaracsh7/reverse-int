module.exports = function reverse(n) {
    let str = Math.abs(n).toString().split('').reverse().join('');
    let number = str.startsWith('0') ? parseInt(str.slice(1)) : parseInt(str);
    return number;
}
