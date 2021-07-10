/**
 *
 * - Khai báo biến let và const
 * - SO SÁNH GIỮA var, let và const(hoisting, scope)
 * + var: có cơ chế hoisting, function scope
 * + let: không có cơ chế hoisting, chỉ có phạm tri truy cập trong 1 scope (block scope)
 * - NÊN DÙNG CÁI NÀO TRONG TRƯỜNG HỢP NÀO?
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
let age = 23;
console.log(age, '   1');

// let age = 19; => không thể trùng biến, không lặp khai báo được
console.log(age, '   2');

function showErrorWithLet() {
    let isError = true;
    let error = '';

    if (isError) {
        let error2 = 'Something went wrong!!';
        console.log(error2, '   1');
    }

    console.log(error, '   2');
};

showErrorWithLet();