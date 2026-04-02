const numbers = [1, 2, 3, 4];

function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i], i, array);
  }

  return result;
}

const doubled = myMap(numbers, function (num) {
  return num * 2;
});

console.log(doubled);


