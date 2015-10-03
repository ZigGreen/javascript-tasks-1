var hours = process.argv[2];
var minutes = process.argv[3];

var figlet = require('figlet');
var toRoman = require('roman-numerals').toRoman;

function isMinute(n) {
  return n >= 0 && n < 60;
}
function isHour(n) {
  return n >= 0 && n < 24;
}

function stringToASCIIArt(str, font) {
  return new Promise(function (res, rej) {
    figlet(
      str,
      font || 'Dot Matrix',
      function (err, data) {
        if (err) {
          rej(err)
        } else {
          res(data)
        }
      }
    );
  })
}

var timeInRomanNotation = [toRoman(hours), ':', toRoman(minutes)].join('');

if (isHour(hours) && isMinute(minutes)) {
  stringToASCIIArt(timeInRomanNotation).then(console.log.bind(console));
}
else {
  console.log('Время указано не верно');
}