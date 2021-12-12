function digitalDechipher(eMessage, key) {
  var keyArray = ("" + key).split("");
  var keyLength = keyArray.length
  for (let index = 0; keyLength < eMessage.length; keyLength++) {
      var keyGet = keyArray[index]
      keyArray.push(keyGet)
      index++
  }

  const resultArray = []
  var index = 0
  var keyNum = 0
  while (index < eMessage.length) {
      var num = eMessage[index]
      while (keyNum <= index) {
          var takeKey = keyArray[index]
          let changeString = '', takeNum;

          takeNum = (num - takeKey - 1) % 26;
          changeString = String.fromCharCode(65 + takeNum) + changeString;
          resultArray.push(changeString)
          keyNum++
      }
      index++
  }
  var result = resultArray.join("")
  return result || undefined
}

console.log(digitalDechipher([20, 12, 18, 30, 21], 1939))
console.log(digitalDechipher([14, 30, 11, 1, 20, 17, 18, 18], 1990))
console.log(digitalDechipher([6, 4, 1, 3, 9, 20], 100))