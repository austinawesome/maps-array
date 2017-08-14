$(document).ready(function() {
  var numbers = [1,3,5,7,9];
  var arrayWords = ['some','styupid','words']
  var newNumbers = numbers.map(function(number) {
    return number + 1 ;
  });
  var capitalWords = arrayWords.map(function(arrayWord) {
    return arrayWord.toUpperCase();
  });
  console.log(newNumbers);
  alert(newNumbers);
  alert(capitalWords);
});
