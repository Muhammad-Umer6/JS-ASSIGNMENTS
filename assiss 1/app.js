//   ----- Q1 -------
// let number = 3;

// if (number % 2 === 0){
//     console.log(${number} is a even number);
// }
// else{
//     console.log(${number} is a odd number);

// }

    //   ----- Q2 -------

// let age = 19;
// let eligiblity = age >= 18 ? "u are eligible to vote" : " u are not eligible to vote " ;
// console.log(eligiblity);

    //   ----- Q3 -------

// for (let i = 1; i<=10 ; i++ ) {
//     console.log(i);
// }

    //   ----- Q4 -------

    // let num = 1;

    // while (num <= 20) {
    //     if ( num % 2 === 0 ) {
    //         console.log(num);
    //     }
    //     num++;
    // }


    //   ----- Q5 -------

    //   function reverseString(str) {
    //     let reversed = "";
        
    //     for (let i = 0; i < str.length; i++) {
    //       reversed = str[i] + reversed;
    //     }
        
    //     return reversed;
    //   }
      
    //   console.log(reverseString("hello world"));
    //   console.log(reverseString("javascript"));


//  ----- Q6 -------
      
// function add (num1 ,num2 ) {
// let sum = num1 + num2;
// console.log(` ${num1} + ${num2}  = ${sum}`);
// return sum;
// }   

//  add(4,9);


// ----- Q7 -------

// function factorial(n) {
//     if (n < 0) {
//        console.log("Factorial is not defined for negative numbers");  
//        return undefined;
       
//     }

//     if (n === 0 || n === 1) {
//         return 1;
//     }
    
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
//  console.log(factorial(4));
  
// ----- Q8 -------

// let value = "12332";

// const revValue = () => {
//    let myRevVal = value.toString().split("").reverse().join("");
//    let strValue = value.toString();
//    if (strValue === myRevVal) {
//          console.log(`${value} is a palindrome`);
//    } else {
//     console.log(`${value} is not palindrome`);

//    }
   
// }   

// revValue();

// ----- Q9 -------


// const student = {
//     name :"Umer",
//     rollNumber : 20,
//     marks :80,
//     isPassed : true,
// } 
// console.log(student);

// ----- Q10 -------

// console.log(student.name)

// console.log(student["marks"])

//  ----- Q11 -------


// const student = {
//     name :"Umer",
//     rollNumber : 20,
//     marks :80,
//     isPassed : true,
//     intro : function () {
//     console.log(`Hello, I am ${this.name}`); 
//     }
// } 

// student.intro()

//  ----- Q12 -------

// const student = {
//     name: "Ali",
//     age: 12,
//     rollNo: 12
// }

// // console.log(obj);
// for(const key in obj){
//     console.log (`${key} : ${obj[key]} `)
// }

//  ----- Q13 -------

// const fruits = ["Mango","Cherry","Banana"]
// console.log(fruits);

// //  ----- Q14 -------

// fruits.push("Apple");
// console.log(fruits);

//  ----- Q15 -------

// fruits.pop();
// console.log(fruits);

// //  ----- Q16 -------

// let isBanana = fruits.includes("Banana");
// console.log(isBanana);

//   ----- Q17 -------

// const num = [1,2,3,4,5,6]

// console.log (num.map(num => num*2))


//   ----- Q18 -------

// const ages = [12,14,18,23,43]
// console.log(ages.filter(age => age >= 18))

//   ----- Q19 -------

// const number = [7,9,10,11,19];

// console.log(number.find(num=> num>10));

//   ----- Q20 -------

// const students = [
//     { name: "Ali", marks: 80 },
//     { name: "Zara", marks: 95 },
//     { name: "Umar", marks: 45 }
//   ];
// students.forEach(student => {
//     console.log(student.name);
// });


//   ----- Q21------

//     const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// console.log(students.map (student=>student.name));

    //   ----- Q22------

// console.log(students.filter(student=> student.marks>50));

    //   ----- Q23------

// console.log(students.find(student => student.name === "Zara"));

    //   ----- Q24------

// students.forEach(student => {
//     console.log(${student.name} : ${student.marks});
// });

//     //   ----- Q25------

// const number = [2,4,6,8];

// console.log(number.map(num => num**2));

//        ----- Q26------

// const names = ["Ali", "Zara", "Umar", "Ahmed"];
// method 1 
// names.forEach(name => {
//     console.log(${name});
// })
// method 2
// for (const name of names){
//     console.log(name);
    
// }

//        ----- Q27------

// const ages = [12, 25, 17, 20, 16, 30];

// console.log(ages.filter(age => age>18));



//        ----- Q28------

// const fruits = ["banana", "mango", "grapes", "apple"]

// console.log(fruits.includes( "apple"));

//        ----- Q29------

// const students = [
//    { name: "Ali", marks: 75 },
//    { name: "Zara", marks: 92 },
//   { name: "Umar", marks: 85 }
//  ]

// console.log(students.filter(student => student.marks>90));

//        ----- Q30------

// const nums = [200, 150, 300, 100]

// console.log(nums.reduce( (sum,num) =>   sum + num ));


// 32) From [1, 2, 3, 4, 5, 6], return only odd numbers.
// → Output: [1, 3, 5]



//        ----- Q31------

// const users = [
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ];

// console.log(users.map(name => name.username));


//        ----- Q32------

// const nums = [1, 2, 3, 4, 5, 6];

// console.log(nums.filter(num => num % 2 !== 0));

//        ----- Q33------
// const str = "javascript"
// 33) Count how many vowels are present in the string "javascript".


//        ----- Q34------



//        ----- Q35------


// 34) Loop through this array and log:
// Task: [taskName] - Status: [Completed/Incomplete]
// [
//   { task: "Assignment", completed: true },
//   { task: "Homework", completed: false }
// ]
// 35) From a list of employees, return a new array that adds a new field:
// "status": "active" to each object.
