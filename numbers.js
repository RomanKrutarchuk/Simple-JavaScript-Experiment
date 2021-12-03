// //NUMBER
// const num = 100; //integer
// const float = 10.42; //float
// const pow = 10e2;

// console.log("MaxSafeInteger", Number.MAX_SAFE_INTEGER);
// console.log("MathPow2**53", Math.pow(2, 53) - 1);
// console.log("MinSafeInteger", Number.MIN_SAFE_INTEGER);
// console.log("MaxValue", Number.MAX_VALUE);
// console.log("MinValue", Number.MIN_VALUE);
// console.log("PositiveInfinity", Number.POSITIVE_INFINITY);
// console.log("NegativeInfinity", Number.NEGATIVE_INFINITY);
// console.log("NaN", Number.NaN); // Not a number // typeof NaN - number
// // const weird = 2 / undefined;
// // console.log(isNaN(weird)); //проверка на not a number
// // console.log('',Number.isFinite(Infinity));
// // console.log('',Number.isFinite(42));
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2); //конкотинация строки в номер
// console.log(+stringInt + 2); // тоже в номер
// console.log(Number(stringInt) + 2); //конкотинация строки в номер

// console.log(parseInt(stringFloat) + 2); // parseInt не работает с float числами по этому отделяет .42
// console.log(parseFloat(stringFloat) + 2);

// как работать с числами
// console.log(0.4 + 0.2)
// console.log(2 / 5);
// console.log(parseFloat((0.4 + 0.2).toFixed(1)));

//BigINT
//  console.log( 9007199254740991999999999n - 900719925474099199999999n)
//  console.log(-9002227199254740991n);
//  console.log(-9002227199254740991.222222n);//не может быть
// console.log(10n - 4);//error
// console.log(parseInt(10n) - 4);
// console.log(10n - BigInt(4));
// console.log(5n / 2n);

// //Math
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.sqrt(25));//квадратный корень 
// console.log(Math.pow(5, 3));
// console.log('случайное число от 0 до 1',Math.random() );
// console.log('максимальное число из списка',Math.max(10,11,22,42,55,709,1));
// console.log('минимальное число из списка',Math.min(42,10,33,1.2999,55));
// console.log('math.floor-округляет число в меньшую сторону',Math.floor(3.9));
// console.log('ceil-округляет в большую сторону',Math.ceil(4.1));
// console.log('round-округляет в разные стороны',Math.round(4.4));
// console.log('возвращяет целую часть числа',Math.trunc(7.99));

// //example Math
// function generateRandomNumber(min, max){
//     return Math.floor(Math.random() * (max + min + 1) - min)
// }
// console.log(generateRandomNumber(1, 31));








