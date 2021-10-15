var fs = require('fs');

fs.readFile('sample.txt', 'ascii', function (err, data) {
  let sum = 0;
  let numbers = data.match(/\d+/g).map(Number);
  numbers.forEach(i => {
    sum = sum + i;
  });
  console.log(sum);
});