
exports.min = function min(array) {
  if (array == undefined || array.length == 0) return 0;

  let sorted = array.sort((a, b) => a - b);

  return sorted[0];
}

exports.max = function max(array) {
  if (array == undefined || array.length == 0) return 0;

  let sorted = array.sort((a, b) => a - b);

  return sorted[sorted.length - 1];
}

exports.avg = function avg(array) {
  if (array == undefined || array.length == 0) return 0;

  return array.reduce((acc, cur) => acc + cur, 0) / array.length;
}
