var hours = process.argv[2];
var minutes = process.argv[3];

var figlet = require('figlet');
var toRoman = require('roman-numerals').toRoman;

function isTime(n) {
  return n > 0 && n <= 60; // нету символа для 0
}

if (isTime(hours) && isTime(minutes))
  figlet(
    [toRoman(hours), ':', toRoman(minutes)].join(''),
    'Dot Matrix',
    function (err, data) {
      console.log(err || data);
    }
  );
else
  console.log('Время указано не верно');