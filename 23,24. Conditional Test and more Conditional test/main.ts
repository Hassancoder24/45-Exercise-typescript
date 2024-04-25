//varible
let five = 5;
let ten = 10;
let twenty = 20;
let apple = "apple";
let uppercaseApple ="APPLE";
let fruits = ["apple","graps","banana"];

//1st True Print
console.log("!st Test: five is equal to 5?");
console.log(five == 5);

//2nd True Print
console.log("2nd Test: ten is equal to 10?");
console.log(ten == 10);

//3rd True Print
console.log("3rd Test: 5 not equal to 10?");
console.log(five != 10);

//4th True Print
console.log("4th Test: 5 is smaller then 10?");
console.log(five < ten);

//5th True Print
console.log("5th Test: ten is greater than 5?");
console.log(ten > 5);

//1st False Print
console.log("6th Test: five is equal to 10?");
console.log(five == 10);

//2nd False Print
console.log("7th Test: ten is equal to 5?");
console.log(ten == 5);

//3rd False Print
console.log("8th Test: 5 not equal to 5?");
console.log(five != 5);

//4th False Print
console.log("9th Test: 5 is smaller then 5?");
console.log(five < five);

//5th False Print
console.log("10th Test: ten is greater than 10?");
console.log(ten > ten);

//"and" & "or" operator
console.log("20 is not equal to ten and twenty is greater then 10");
console.log(20 != ten && 20 > 10);

console.log("20 is not equal to ten and twenty is greater then 10");
console.log(20 != ten && 20 > 30);

//using || (or) operator
console.log("20 is greater then 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("20 is greater then 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//items in arrey
console.log("apple is in the array");
console.log(fruits.includes("apple"));
console.log("banana is not in the array");
console.log(!fruits.includes("banana"));