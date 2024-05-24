// Array plus array

function arrayPlusArray(arr1, arr2) {
    const sum1 = arr1.reduce((total, num) => total + num, 0);
    
    const sum2 = arr2.reduce((total, num) => total + num, 0);
  
    return sum1 + sum2;
  }