// JS-Assiss 2

    // ------1------

// const text = "JavaScript is great and JavaScript is powerful";

// function countUniqueWords(str) {
//   const words = str.split(" "); 
//   const wordCount = {}; 

//   for (const word of words) {
//     if (wordCount[word]) {
//       wordCount[word]++;
//     } else {
//       wordCount[word] = 1; 
//     }
//   }

//   return wordCount;
// }

// console.log(countUniqueWords(text));
       

    // ------2------

// const students = [
//   { name: "Ali", class: "10th" },
//   { name: "Sara", class: "9th" },
//   { name: "Ahmed", class: "10th" },
//   { name: "Zara", class: "9th" },
//   { name: "qasim", class: "11th" },

// ]
 
// const groupedStudents = Object.groupBy(students, student => student.class);
// console.log(groupedStudents);


    // ------3------

//    const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 20 },
//   { name: "Phone", price: 500 },
// ];

// function filterProductsByPrice(minPrice, maxPrice) {
//   return products.filter(product => 
//     product.price >= minPrice && product.price <= maxPrice
//   );
// }

// console.log(filterProductsByPrice(100, 500)); 

// console.log(filterProductsByPrice(10, 1000)); 


    // ------4------

    // let value = 2332;

    // const revValue = () => {
    //   let myRevVal = value.toString().split("").reverse().join("");
    //   let strValue = value.toString();
    //   if (strValue===myRevVal) {
    //     console.log(${value} is a palindrome);
    //   } else {
    //     console.log(${value} is not a palindrome);

    //   }
    // }
    // revValue();


    // ------5------

//       const nestedArray = [1, [2, [3, 4]], 5];
// const flattened = nestedArray.flat(Infinity);
// console.log(flattened); // [1, 2, 3, 4, 5]

 // ------5------

//  const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Zara", salary: 1500 },
//   { name: "Ahmed", salary: 1200 },
// ];

// const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);

// console.log(totalSalary);


 // ------6------

//  function sumEvenNumbers(arr) {
//     let sum = 0;
    
//     for (const item of arr) {
//       if (Array.isArray(item)) {
//         sum += sumEvenNumbers(item); 
//       } else if (typeof item === 'number' && item % 2 === 0) {
//         sum += item; // Add even numbers
//       }
//     }
    
//     return sum;
//   }
  
//   const data = [1, 2, [4, 5, [6, 8]], 10];
//   console.log(sumEvenNumbers(data)); 



 // ------7------

//  function calculateAverage(...numbers) {
//     if (numbers.length === 0) return 0; 
    
//     const sum = numbers.reduce((total, num) => total + num, 0);
//     return sum / numbers.length;
//   }
  

//   console.log(calculateAverage(1, 2, 3));      
//   console.log(calculateAverage(10, 20, 30));   
//   console.log(calculateAverage(5, 2));            
//   console.log(calculateAverage());             


 // ------8------

//  const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const frequencyCount = arr.reduce((acc, fruit) => ({
//   ...acc,
//   [fruit]: (acc[fruit] || 0) + 1
// }), {});

// console.log(frequencyCount);



 // ------9------

//  const toggleTaskStatus = (tasks, id) => 
//     tasks.map(task => 
//       task.id === id ? { ...task, done: !task.done } : task
//     );
  
//   const tasks = [
//     { id: 1, name: "Code", done: false },
//     { id: 2, name: "Eat", done: true },
//   ];
  
//   console.log(toggleTaskStatus(tasks, 1));
  
//   console.log(toggleTaskStatus(tasks, 2));


 // ------10------

//  const names = ["Ali", "Zara", "Ahmed", "Usman"];

//  const sortedNames = [...names].sort((a, b) => a.length - b.length);
 
//  console.log(sortedNames);