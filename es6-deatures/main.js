/**
 *
 * - Khai báo biến let và const
 * - SO SÁNH GIỮA var, let và const(hoisting, scope)
 * + var: có cơ chế hoisting, function scope
 * + let: không có cơ chế hoisting, chỉ có phạm tri truy cập trong 1 scope (block scope)
 * + const: y chang let và không thể gán lại giá trị khác sau khi khai báo
 * + const: bắt buộc phải khai báo giá trị
 *
 * - NÊN DÙNG CÁI NÀO TRONG TRƯỜNG HỢP NÀO?
 * + var: khi browser không hỗ trợ (let, const)
 * + let: khi mà cần re-assign giá trị
 * + const: khi không cần re-assign giá trị
 */

// hoisting
// Có thể dùng 1 biến ngay cả trước khi định nghĩa nó

// scope
// Có thể xem là 1 phạm vi truy cập của 1 biến

// 1. ÔN LẠI var
// console.log(fullName); // undefined -> still work -> hoisting
// fullName = 'Phú Sang';
// console.log(fullName);
// var fullName = 'Trương Phú Sang';
// age = 23; // work (không cần khai báo - mặc định hiểu là var - báo lỗi khi strict mode)
// console.log(fullName, age);

// function showErrorWithVar() {
//     var isError = true;
//     var error = '';

//     if (isError) {
//         var error = 'Something went wrong!!';
//         console.log(error, '   1');
//     }

//     console.log(error, '   2');
// };

// showErrorWithVar();

// console.log('');

// 2. let
// console.log(age, '   1'); => ko có hoisting
// let age = 23;
// console.log(age, '   1');

// // let age = 19; => không thể trùng biến, không lặp khai báo được
// console.log(age, '   2');

// function showErrorWithLet() {
//     let isError = true;
//     let error = '';

//     if (isError) {
//         let error2 = 'Something went wrong!!';
//         console.log(error2, '   1');
//     }

//     console.log(error, '   2');
// };

// showErrorWithLet();

// 3. const
// console.log(birthYear); không có hoisting
// const birthYear = 1998;

// const fullName = 'Trương Phú Sang'; không gán lại giá trị khác được
// fullName = 'Sáng';

// function showErrorWithConst() {
//     const isError = true;
//     const error = '';

//     if (isError) {
//         const error = 'Something went wrong!!';
//         console.log(error, '   1');
//     }

//     console.log(error, '   2');
// };

// showErrorWithConst();


/**
 * Function
 * - Arrow Function
 * - So sánh declaration vs expression (normal function) vs arrow function (Con tró this)
 * - Trường hợp nên và không nên dùng arrow function
 * + Không nên sử dụng arrow function để làm phương thức của object
 */

// Normal function
// const calcAgeNormal = function (birthYear) {
//     console.log(this); // this = global object ~ window object
//     console.log(2021 - birthYear);
// };

// calcAgeNormal('My age is: ', '1998');

// Arrow function
// - Không định nghĩa bối cảnh thực thi (this) của riêng nó
// - Nó sẽ không quan tâm nó được thi trong ngữ cảnh nào, giá trị this của 
// arrow function sẽ bằng this của outer function
// - Nếu không có outer function thì nó sẽ là gobal object
// - Không dùng arrow function để làm phương thức object
// - Không dùng arrow function để làm constructor

// const calcAgeArrow = (birthYear) => {
//     console.log(2021 - birthYear);
// };

// calcAgeArrow(1998);

// const calcAgeArrowShort = (birthYear) => console.log(2021 - birthYear);
// calcAgeArrowShort(1998);

// const calcAgeArrowOneParam = birthYear => console.log(2021 - birthYear);
// calcAgeArrowOneParam(1998);

// const getEle = id => document.getElementById(id);

// const student = {
//     name: 'Sang',
//     birthYear: 1998,

//     calcAgeNormal: function () {
//         console.log('calcAgeNormal', this);
//         console.log(2021 - this.birthYear);

//         // const _this = this;

//         // const checkAgeNormal = function () {
//         //     console.log('checkAgeNormal', this);
//         //     if (2021 - this.birthYear >= 18) {
//         //         console.log('You are old enough to go to jail!!');
//         //     } else {
//         //         console.log('You are not old enough!!');
//         //     }
//         // }.bind(student);

//         const checkAgeNormal = () => {
//             console.log('checkAgeNormal', this);
//             if (2021 - this.birthYear >= 18) {
//                 console.log('You are old enough to go to jail!!');
//             } else {
//                 console.log('You are not old enough!!');
//             }
//         };

//         checkAgeNormal();
//     },

//     calcAgeArrow: () => {
//         console.log('calcAgeArrow', this);
//         console.log(2021 - this.birthYear);
//     },
// };

// student.calcAgeNormal();
// student.calcAgeArrow();


// const People = () => {

// };

// const person = new People();

/**
 * Default Parameter
 */

// const withoutDefaultParam = (typeOfUser) => {
//     if (typeOfUser === 'user') {
//         console.log('Redirect to user page!');
//     } else {
//         console.log('Redirect to admin page!');
//     }
// };

// withoutDefaultParam('user');
// withoutDefaultParam('admin');
// withoutDefaultParam();

// const withDefaultParam = (typeOfUser = 'user') => {
//     if (typeOfUser === 'user') {
//         console.log('Redirect to user page!');
//     } else {
//         console.log('Redirect to admin page!');
//     }
// };

// withDefaultParam();

/**
 * Destructuring
 * - Destructure Array
 * - Destructure Object
 */

// Array
// Without Destructuring

// const student = ['Sang', 'Tay', 'Y', 'Vi'];

// const sang = student[0];
// console.log(sang);

// const vi = student[3];
// console.log(vi);

// Array
// With Destructuring

// const student = ['Sang', 'Tay', 'Y', 'Vi'];

// const [Sang, Tay, , ,] = student;

// console.log(Sang, Tay);

// Object
// Without Destructuring

// const student = {
//     fullName: 'Truong Phu Sang',
//     age: 23,
//     class: 'FE68'
// };

// const fullName = student.fullName;
// const age = student['age'];
// console.log(fullName, age);

// Object
// With Destructuring

// const student = {
//     fullName: 'Truong Phu Sang',
//     age: 23,
//     class: 'FE68',
// };

// const { fullName, class: className, age } = student;

// console.log(fullName, className, age);

/**
 * Template String
 *
 */

// const fullName = 'Nhu Y';

// const str = 'My name is ' + fullName;

// const templateStr = `My Name is ${fullName}`;

// console.log(templateStr);


/**
 * Enhanced Object Literals (Shorthand Syntax)
 */
// const age = 18;

// const person = {
//     fullName: 'Truong Phu Sang',
//     age: age,

//     calcAge: function () {

//     },
// };

// const enhancedPerson = {
//     fullName: 'Truong Phu San',
//     age, // age: age,

//     calcAge() {

//     },
// };


/**
 * Rest Parameter
 */

// const calcSum = (num1, num2, num3) => console.log(num1 + num2 + num3);

// calcSum(1, 2, 3);


const calcSum = (...nums) => {
    let sum = 0;
    nums.forEach(num => {
        sum += num;
    });
    console.log(sum);
};

calcSum(1, 2, 3, 4, 5, 6);
