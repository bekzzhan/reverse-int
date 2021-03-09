/* jshint esversion: 6 */
module.exports = function reverse (n) {
  const str = String(n);
  const arr = [];
  for (const item of str) {
    arr.push(item);
  }
  return Number.parseInt(arr.reverse().join(''));
};
