//переменные
// // const lastName = 'Роман' //string
// const age = 18  //number
// const firstName = 'Крутарчук'  //string
// const boolean = true //boolean
// age = 20
// age = 'string'
// age = false

// 2 Мутирование
// console.log('Моё имя ' + lastName + ' и мне ' + age)
// ('Моё имя ' + lastName + ' и мне ' + age)
// const lastName = prompt('Ваше имя')
// alert(firstName + ' ' + lastName)

// 3 операторы
// const currentYear = 2020
// const birhtYear = 2003
// // const age = currentYear - birhtYear
// const a = 10
// const b = 25
// let c = 5
// const d = a + b + c
// console.log(a + b)
// console.log(b - c)
// console.log(a * c)
// console.log(a / c)
// console.log(d)
// let plusone = 1
// console.log(plusone++)
// c += a
// c -= a
// c /= a
// c *= a

//4 Типы данных
// const boolean = true
// const name = 'Роман'
// const age = 18
// let x
// //null
// console.log(typeof boolean)
// console.log(typeof age)
// console.log(typeof name)
// console.log(typeof x)

//5 приорите операторов
// const fullAge = 18
// const birthAge = 2003
// const currentYear = 2021
// // > < >= <=
// const isFullAge = (currentYear - birthAge) >= fullAge // 18 >=19
// console.log(isFullAge)
//6 условные операторы

//  const projectStatus = 'pending' //ready .fail .panding

//  if (projectStatus === 'fail'){
//      console.log('Ничего не вышло') // если projectstatus = fail тогда console.log -> ничего не вышло
//  }else if ( projectStatus === "pending"){
//     console.log('Еще делаем')
// }else if (projectStatus === 'ready'){
//     console.log('Всё получилось')
// }else{
//     console.log('ничего не получилось')
// }

// const num1 = 1
// const num2 = '1'

// console.log(num1 == num2)

//7 булевая логика

//8 Функции
// function calculateAge(year) {
//     return 2021 - year
// }
// const myAge = calculateAge(2003)
// console.log(myAge)

// function logInfoAbout(name,age){
// console.log('имя человека ' + name + ' его возраст ' + age)
// }
// let name = prompt('ваше имя')
// let age = prompt('ваш возраст ') //чтото не вышлj
// // logInfoAbout("roma","15")
// logInfoAbout(name,age)

// function calculateAge(year) {
//     return 2021 - year
// }
// function logInfoAbout(name,year){
//     const age = calculateAge(year)
//     if( age > 0)
//     console.log('человек по имени ' + name + ' чейчас имеет возраст ' + age)
//     else {
//         console.log('он не родился')
//     }
// }
// logInfoAbout ('Рома',2003 )

//9масивы
// const lures = ['pontoon21','jackall','yozuri','clutch']
// console.log(lures[1])
// console.log(lures.length)
// lures[0] = 'zipbaits'
// lures[4] = 'magalonSSR'
// lures[lures.length] = 'crackjack'
// console.log(lures)

//10циклы
// const lures = ['pontoon21','jackall','yozuri','clutch']
// for (let i = 0; i < lures.length; i++ ) {
//     const lure = lures[i]
//     console.log(lure)
// }

// for (let lure of lures){
//     console.log(lure);
// }

//11ОБЬЕКТЫ
// const newPerson = new Object()
// const person = {
//   firstName: "Роман",
//   lastName: "Крутарчук",
//   birthYear: 2003,
//   languages: ["Ru", "MD", "Spanish"],
//   hasWife: false,
//   great: function () {
//     console.log("greet from person");
//   },
// };
// console.log(person.firstName);
// console.log(person.lastName);
// // console.log(person['languages']);
// const key = 'birthYear'
// console.log(person[key]);
// person.hasWife = true
// person.isProgrammer = true;
// console.log(person);

// person.great()


//12 ЧИСЛА

