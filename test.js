let arr = [1, 2, 3, 4]
/*let arrUsers = ['vova', 'vika', 'sara', 'jon']//
console.log (arr)
console.log (arrUsers)*/

//let arrBrand = ['apple', 'nokia', 'samsung', 'lg']
//console.log (arrBrand)
 
//let arrData = ['age', 'name','shop', 'street', [1, 2, 3, 4], 'school']
//console.log (arrData[0])

//let users = ['vika', 'djon', 'sara'];
//users = 300;
//console.log (users)
/*console.log(users[1])
console.log(users[0])
console.log(users.length)
console.log(users[1].length)*/
 //console.log(users [users.length -1])
//let res = users.indexOf('vika');
//res = users.indexOf('djon');
//res = users.indexOf('sara');
//console.log(res)
/*if (users.indexOf('sara') !== -1){
    console.log(users)
}*/
        
/*let users = ['vika', 'djon', 'sara'];
//let name = users.pop();
name = users.push();
console.log(name)*/
//let num = [10, 20, 30, 40, 50,];
//let result = num.splice (3);
/*let result = num.splice(2);
console.log(result);*/

/*let users = ['vika', 'djon', 'sara'];
let num = [10, 20, 30, 40, 50,];
/*let fruit = ['apple', 'orange', 'lemon'];
let resultArr = users.concat(num, fruit)
console.log(resultArr)*/


/*let name = prompt ('Какое «официальное» название JavaScript?')
let nameJs = "ECMAScript"
if (name ===nameJs) {
     alert('Верно!');
 } else {
     alert('Не знаете? ECMAScript!')
 }*/
 
/*let arrData = [20, "Vova", true, undefined, [1, 2, 3, 4], "Hello"];
//console.log(`${arrData}`);
console.log(arrData[0])
console.log(arrData[1])
console.log(arrData[2])
console.log(arrData[3])*/

/*/let message =["hello", "world"];
 console.log (message[0]);
 console.log(message[1]);*/
  
 //ВЫВОД ЭЛЕМЕНТОВ МАССИВА// или приск элемента//
 /*let users = ['Vika', "Lena", "Oleg","Vlad", "Anna"];
  /*console.log(users[0]);
  console.log(users[1]);
  console.log(users[2]);
  console.log(users[3]);
  console.log(typeof users);
  console.log(users.constructor);*/
  /*console.log(users.length);
  let resOlena = users.indexOf ("Oleg");
  let res = users.indexOf ("Lena");
  console.log(res);
  console.log (resOlena);
  let resAnna = users.indexOf("Anna");
  console.log (resAnna);*/

//-----удаление элементов с массива------//
//let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
/*let result = numbers.splice(3);
console.log(result);*/
/*let ressult = numbers.splice (2, 2);
let result = numbers.slice (1, 3);
console.log(ressult);
console.log(result);*/
 /*let message = 'Hello from javascript';
  let res = message.split(' ');
  console.log(res);
  console.log(res.length);
  console.log (typeof res);
  console.log (Array.isArray(res));*/


//Преобразование ARR TO SRING/STRING tO ARRAY
//SPLIT --change  STRING TO ARRAY преобразовать в массив//
//REVERSE -- развернуть массив(строку нельзя развернуть - у нее нет метода reverse//
// JOIN -- change ARRAY TO STRING преобразовать в строку//
// let arr = Array.From(' ') - в кавычки вставляем то из чего хотим получить массив---старый метод//
  /*let users = ['Vika', "Lena", "Oleg","Vlad", "Anna"];
  let res = users.reverse ();
  let str = users.join (' ');
  console.log (str);
  console.log(typeof str);8/
  let res = users.join (' ');
  console.log(res);*/

  //ЦИКЛ FOR -- перебор массива//
 /*let users = ['vova', 'Lena', 'Oleg', 'Vlad', 'Anna']
  let len = users.length ;
  //console.log(len);
  for (let i = 0; i < len ; i += 1) {
      console.log(users[i] + ' ' + 'moderator'); ---добавил стово MODERATOR к каждому элементу
  };
*/
 /*let numbers = [10, 20, 30, 40, 50, 60,];
 let len = numbers.length;
 console.log(len);

 for (let i = 0; i < len; i += 1) {
     console.log(numbers[] / 2);
 }*/
 
 
 /* цикл-------FOR OF-------
 let numbers = [10, 20, 30, 40, 50, 60,];
 for (let number of numbers) {
     console.log(number);
 }*/

 /*let users = ['vova', 'Lena', 'Oleg', 'Vlad', 'Anna']; 
 
     for (let user of users) {
          console.log(user.toLocaleUpperCase());
     };*/
     
     
        /*const checkForSpam = message => message.includes('spam') || message.includes('sale') ? true: false ;
     
     
        console.log(checkForSpam('Latest technology news')); // false
     console.log(checkForSpam('[SPAM] How to earn fast money?')); // true*/
      

     let fruits = ['banana', 'apple', 'orange', 'kiwi']
     
     //console.log(fruits);

     for (let i = 0; i < fruits.length; i +=  1) {

        if (fruits[i] == 'pizza'){
            console.log ('нашли!')
        } else {
            console.log ('не нашли!')
        }
     }
 
