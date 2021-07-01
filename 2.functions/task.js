// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (min > arr[i]) {
      min = arr[i];
    } if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
    avg = sum/arr.length;
  }

  return { min:min, max:max, avg:avg.toFixed(2) };
}

// Задание 2
const worker = (arr) => {
  let sum = 0;
  
    for (let  i = 0; i <arr.length; i += 1) {
      sum += arr[i];
    }
  
  return sum;
}

const makeWork = (arrOfArr, func) => {
  let max = 0
  for (let  i = 0; i <arrOfArr.length; i += 1) {
    let sum = func(arrOfArr[i])
    if(max < sum) {
      max = sum;
    }
  }
  return max
}

// Задание 3
const worker2 = (arr) => {
  let difference = 0;
  let min = arr[0];
  let max = arr[0];
  
    for (let i = 0; i < arr.length; i += 1) {
      if (min > arr[i]) {
        min = arr[i];
      } if (max < arr[i]) {
        max = arr[i];
      }
  difference = max - min
  }
  return difference;
}
