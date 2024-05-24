// Get the mean of an array

function getAverage(arr) {
    return Math.floor(arr.reduce((acc, curr) => acc + curr, 0) / arr.length);
  }