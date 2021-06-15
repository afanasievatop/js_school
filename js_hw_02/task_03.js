/*Задание 3
Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
const findLongestWord = function(string) {
  // твой код
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
/*console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'*/

const findLongestWord = function(str) {
  let strSplit = str.split('');
  let longestword = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestword){
      longestword = strSplit[i].length;
    }
    
    
  }
  return longestword;
}
console.log (findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'))
console.log(findLongestWord('May the force be with you'));