//FUNCTION
// function declaration
// function great(name) {
//   console.log("привет -", name);
// }
// great("roma");
// // function expression
// const great2 = function great2(name) {
//   console.log("привет из Лондона", name);
// };
// great2("Рома");
// console.log(typeof great)
// console.dir(great)

//анонимные функции-----------2.51 hour
// ...
//стрелочные функции

//   const arrow = (name) =>{
//       console.log("привет -", name);
//   }
//   arrow('roma')
//   ///или так
//   const arrow2 = name =>console.log("привет -", name);
//   arrow2('artur')
// const pow = num =>num * 2
// console.log(pow(21));

//параметры по умолчанию
// const arrow = (a=1, b=1) => {
//   return a + b
// }
// console.log(arrow(21,21))

// function sumAll(...all) { // нужно будет повторить (не понятно )
//   let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   return result;
// }
// const res = sumAll(40, 2);
// console.log(res);

//Замыкание
// function createMember(name){
//     return function(lastName){
//         console.log(name + lastName);
//     }
// }
// const logWithLastname = createMember('Roma ')
// console.log(logWithLastname('Krutarchuk'));