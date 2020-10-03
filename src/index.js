
exports.min = function min (array) {
  let min = 0;
  if (typeof(array) === 'undefined' || array !== array || array === Infinity || array.length === 0) {
    return 0;
  } else{
    min = array[0];
    array.forEach((element) => {
      if (element < min) min = element;
    });
    return min;
  }
}

exports.max = function max (array) {
  let max = 0;
  if (typeof(array) === 'undefined' || array !== array || array === Infinity || array.length === 0) {
    return 0;
  } else{
    array.forEach((element) => {
      if (element > max) max = element;
    });
    return max;
  }
}

exports.avg = function avg (array) {
  let sum = 0;
  if (typeof(array) === 'undefined' || array !== array || array === Infinity || array.length === 0) {
    return 0;
  } else{
    array.forEach((element) => {
      sum += element;
    });
    return sum / array.length;
  }
}
