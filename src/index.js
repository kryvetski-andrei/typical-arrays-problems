
exports.min = function min (array) {
  //short version
  if (array === undefined || array.length === 0) return 0
  return Math.min.apply(null, array)

  // if (array === undefined) return 0
  // if (array.length === 0) return 0
  // let minValue = array[0]
  //   for (let i = 0; i < array.length; i++) {
  //   if (array[i] < minValue) {
  //     minValue = array[i]
  //   } 
  // }
  // return minValue
}

exports.max = function max (array) {
  //short version
  if (array === undefined || array.length === 0) return 0
  return Math.max.apply(null, array)

  // if (array === undefined) return 0
  // if (array.length === 0) return 0
  // let maxValue = array[0]
  //   for (let i = 0; i < array.length; i++) {
  //   if (array[i] > maxValue) {
  //     maxValue = array[i]
  //   } 
  // }
  // return maxValue
}

exports.avg = function avg (array) {
  //short version
  if (array === undefined || array.length === 0) return 0
  return (array.reduce(function(acc, value) { return acc + value; }, 0) / array.length)

  // if (array === undefined) return 0
  // if (array.length === 0) return 0
  // let sum = 0
  // for (let i = 0; i < array.length; i++) {
  //   sum += array[i]
  // } 
  // return (sum / array.length)
}
