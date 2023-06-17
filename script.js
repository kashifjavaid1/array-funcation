// arraydata=[10,20,30,40,50,60];
// arra=["kashif","javaid", 123]
// console.log(arraydata.length ); length find

// var arr=arra.concat(arraydata)
// console.log(arr);

// arraydata=[10,20,30,40,50,60];

// function result(a) {
//     console.log(a);
// }
// arraydata.forEach(result);


// write a js program find the all value (1,2,3,4,5,6,7,8,9,10) with use foreach loop?
// var array=[1,2,3,4,5,6,7,8,9,10]
// function result(element,a,b) {
// console.log("index",a);
//     // console.log(element);
//     console.log(b);
// }
// array.forEach(result);



// var newNumbers = numbers.map((element,index)=>{

//          console.log(element);

//          return 2 * 2

//     })

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function result(element) {
//     return element * 2;
// }
// var  a=array.map(result);

// console.log(a);

// write a js program that value use (1,5,6,8,3,9,8,5,2) that  answer whit create [3,15,18,24,9,27,15,6]


// var data=[1,5,6,8,3,9,8,5,2];
// function result(element,b) {
//     console.log("index");
//     return element *3;
// }
// var datapush=data.map(result);

// console.log(datapush);

// var data=[1,5,6,8,3,9,8,5,2];
// var datashow=data.forEach((element,index )=> {
//     console.log(index,"index",element);

// });

// var data=[1,5,6,8,3,9,8,5,2];
// var data1=data.map((element,index) =>{
//     return element +2;

// });
// console.log(data1);


// writa a js program to convert numbers "1,2,3,4,5,6,7,8,9,10" to string into array and int or index find??
//  first methode
// var number="1,2,3,4,5,6,7,8,9,10";
// var array=number.split(",");
// var array1=array.forEach((element,index) => {
//     console.log(index,"index",element);

// });

// writa a js program to convert numbers "1,2,3,4,5,6,7,8,9,10" to string into array show resutl ("2,4,6,8,10,12,14,16,18,20") ?

// var data="1,2,3,4,5,6,7,8,9,10";
// var convertarray= data.split(",");
// var result=convertarray.map((element,index )=>{
//      console.log(element);
//      if (element % 2 == 0) {
//                   return index + element
//              }

// });
// console.log(result);

// lenght
// var stringvar="  Miankashifjavaid";
// console.log(stringvar.length);
// console.log(stringvar.slice(4,10));
// console.log(stringvar.trim());

// var stringvar="  Miankashifjavaid";
// console.log(stringvar.toLocaleLowerCase());

// write a js program suppose one varaibel to array [1,2,3,4,5,6,7,8,9,10] find length and index with out use for loop do while loop and while loop ?

// var array=[1,2,3,4,5,6,7,8,9,10];
// var result=array.forEach((Element,index)=>{
//      console.log(index,"index number",Element);
// });

// write a js program to suppose one variable array [5,10,15,20,25,30] to change the array shape and show resule new array[1,2,3,4,5,6] without use for loop while loop and do while loop?

// var array=[5,10,15,20,25,30];
// var show=array.map((Element,index )=> {
//     console.log("index",show);
//     return 2*2
// });
// console.log(show);

// const array = [5, 10, 15, 20, 25, 30];
// const show = array.map(element => {
//     return element/5
// });
// console.log(show);

// let a="kashif";
// let b=a.charAt(3);
// console.log(b);

// array pre define function ??

// let objec =[
//      { name:'kashif',city:'faisalabad' },
//      {name:'ali',city:'lahore'},
//      {name:'umar', city:'peshware'},
//      { name:'asad',city:'faisalabad' },

// ];
// let result= objec.every(abc =>{
//     if (abc.city==='faisalabad') {
//         return true;
//     }
//     return false
// });
// console.log(result);

// write a js program password 

// var newpassword=passwords.map(password => {
//  if (password.match == `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$`) {
//     return true;
//  }
//  return false;
// });
// console.log(newpassword);

// var passwords = ["test", "test@1214", "newPass2422@", "testPassword23", "examPle#242"];

// var newpasswords = passwords.map((element) => {
//     if (element.match(`((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})`)) {
//         return true
//     }
//     return false
// })

// console.log("newpasswords", newpasswords);


// var newpassword=passwords.map(element =>{
//     if (element.match(`((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})`)) {
//         return true
//     }
//     return false;
// });
// console.log(newpassword);

// var arra=[1,2,3,4,5,6,7,8,9];
// var result=array1(element  =>{
//    for (let index = 0; index < arra.length; index++) {
//        const element = array[index];
//        console.log(element);

//    }
// });
// array1()

// foreach loop

// var data=[1,2,3,4,5,6,7,8,9,10];
// var result=data.forEach((abc,index) =>{
//     console.log("index",index);
// console.log(abc);


// });
// map methode
// var arr = [1, 2, 3, 4, 5]
// var result=arr.forEach(element =>{
//     console.log(element);
//     var show=arr.map(abc =>{
//         return 5;
//     });
//     console.log(show);
// });
// var show=arr.map(abc =>{
//     return 5;
// });
// console.log(show);
// var marks = +prompt("Enter Your Marks?");
// var result = () => {
//     switch (true) {
//         case marks >= 90 && marks <= 100:
//             console.log("Your Grade is A++");
//             break;
//         case marks >= 80 && marks < 90:
//             console.log("Your Grade is A");
//             break;
//         case marks >= 70 && marks < 80:
//             console.log("Your Grade is B");
//             break;
//             case marks>=60 && marks<70:
//                 console.log("Your Grade is C");
//                 break;
//                 case marks>=40 && marks<60:
//                     console.log("Your Grade is D");
//                     break;
//         default:
//             console.log("Try next time you are fail");
//             break;
//     }
// };
// result()


// for (let index = 0; index <=100; index++) {
//     const element = array[index];

// }

// chapter 3 variable and datatype?

// var name1="kashifjavaid";
// console.log(typeof(name1),name1);
// name1.typeof()
// console.log(name1);
// var number1=123456;
// console.log(typeof (number1));
// console.log(number1);

// var num="12345";
// var a=console.log(parseInt(num));
// console.log(typeof(a));

// var data="kashif";
// var num=123;
// var result=data.concat(num);
// console.log(result);

// array fucntion

// var arr=[1,2,3,4,5,6,7,8];
// var result=arr.forEach((element,index) => {
//   console.log(index,"index number",element);
// ;
// });

// var data=[1,2,3,4,56,7];
// data.forEach((abc,index) => {
//     console.log(index,"index",abc);
// });
// every 

// var abc=[1,2,3,4,5,5,6,7];
// var arrro=abc.every( xyz => {
//      if (abc<=5) { 
//      }
// });
// console.log(arrro);

// var names=["kashif","javaid","kashif","ali"];
// var functionresult=names.every(ab =>{
//   if (names=='kashif') {

//   }
// });
// console.log(functionresult);
// filter methode

// var names=["kashif","javaid","kashif","ali"];
// var result=names.filter((element)=> {
//     console.log(element);


// });

// sort
// var numberarray=[1,2,6,4,3,5,7,9,8];
// var resule=numberarray.sort((a,b)=> {
//  return a-b;
// });
// console.log(resule);


// var input=[{name:'naveed',dod:'10-11-1997',email:"nameed@tecloste.com"},
// {name:'ali',dod:'10-11-1996',email:"ali@tecloste.com"},
// {name:'zain',dod:'10-11-1995',email:"zain@tecloste.com"}];

// var input = [
//     { name: 'naveed', dod: '10-11-1997', email: 'nameed@tecloste.com' },
//     { name: 'ali', dod: '10-11-1996', email: 'ali@tecloste.com' },
//     { name: 'zain', dod: '10-11-1995', email: 'zain@tecloste.com' }
//   ];

//   input.forEach(function(obj) {
//     var birthDate = new Date(obj.dod); // Convert the date of birth to a Date object
//     var ageInMilliseconds = Date.now() - birthDate.getTime(); // Calculate the age in milliseconds
//     var ageDate = new Date(ageInMilliseconds); // Convert the age to a Date object

//     // Extract the year from the age Date object
//     var age = Math.abs(ageDate.getUTCFullYear() - 1970);

//     obj.age = age; // Add the age property to the object
//   });

//   console.log(input);

// write a js program to  print a message "you can drive a car" or "you cannot drive a car" based age is grater then 18?

// let age=prompt("Your enter a age?");
// Number.parseInt(age)
// if (age<=10) {
//     console.log("You are kide ");
// }
// else if(age>10 && age<18){
//   console.log("you cannot a drive ");
// }
// else{
//     console.log("you can drive a car");
// }

// write a js program to print a "try again" unitl the user correct number find?

// var num1=+prompt("User enter any number");
//      var num2=7;
//      if (num1==num2) {
//         console.log("user enter a correct number");
//      } else {
//         console.log("try again");
//      }

// write a js function to find mean of 5 number?
//  function mean() {

//     var mean=+prompt("Enter First number ");
//     var mean1=+prompt("Enter Second Number");
//     var mean2=+prompt("Enter Third Number");
//     var mean3=+prompt("Enter Forth  Number");
//     var mean4=+prompt("Enter Fifth Number");
//     var resule=mean+mean1+mean2+mean3+mean4;
//     console.log(resule/5);

//  }
//  mean()

// string handling
// var str="kashif"
// var resule=str.toUpperCase()
//  console.log(resule);

// write a js program  extract amount out of this string 
//  "please give Rs 1000"
//  var amount="please give Rs 1000";
//  var resule=amount.slice(15,19);
//  console.log(resule);

// array 

//  var arr1=[1,2,3,4,5,6,7];
//  arr1.pop();
// arr1.push(8)
// arr1.shift()
//    delete arr1 [0];
//    console.log(arr1);

//   array methode
// var num=[1,2,3,4,5,6,7,8];
// console.log(num);

//  chapter No5

//  write a js program  to crate a array of number and take input  from the user  to add the number?
// var array=[1,2,3,4,5,6];
// var inpu=+prompt("enter a number");
// array.push(inpu);
// console.log(array);

// end

//  write a js program  to crate a array of number and take input  from the user  to add the number?
//  var array=[2,4,6,8,10];
//  var inputData=prompt("user enter number");
//  Number.parseInt(inputData);
//  array.push(inputData);
//  console.log(array);
//  var len=array.forEach( (Element,index)=>{
//         console.log(Element,"index number",index);
//  });

// program no 2
//  var array=[2,4,6,8,10];
//  do {
//   var user=+prompt("enter a number");
//   array.push(user)
//  } while (user!=0);
//  console.log(array);

// var array=[1,2,3,4,5,6,7,8,9,10];
// var inputData=+prompt("enter a number");
// array.push(inputData);
// if (inputData!=0) {
//   console.log(array);
// }
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// do {
//  var inputData = +prompt("Enter a number");

//   array.push(inputData);

// } while (inputData !== 0);

// console.log(array);

// prorgram no 3

//    var array=[10,5,10,15,20,25,30,35,40,20,50,55,60];
//    var newarray=array.filter( Element=>{
//          if (Element%10==0) {
//          return true;
//          }
//    });
//    newarray.sort((a,b) => a-b);
//    console.log(newarray);

//   var array = [10, 5, 10, 15, 20, 25, 30, 35, 40, 20, 50, 55, 60];
// var newArray = array.filter(Element => {
//   if (Element % 10 === 0) {
//     return true;
//   }
// });
// newArray.sort((a, b) =>{ 
//   return a - b;
// });

// console.log(newArray);

// var element=Math.PI;
// console.log(element);

// 1 Write a JavaScript program that takes a number as input and checks whether it is positive, negative, or zero using if-else statements.

//  let inputnumber=prompt("Enter a Number");
//  Number.parseInt(inputnumber)
//  if (inputnumber>=1) {
//       console.log("positive a number");
//  }
//  else if (inputnumber==0) {
//       console.log("zero a number");
//  }
//  else{
//       console.log("Negative a number");
//  }

// 2   Create a function in JavaScript that takes a day of the week as input (e.g., "Monday", "Tuesday", etc.) and displays a message indicating whether it is a weekday or a weekend day using if statements.

//    function weekend() {
//       var day=prompt("Enter a Day number");
//       if (day.toLowerCase==='monday') {
//             console.log("Day is Monday");
//       }
//       else if (day.toLowerCase==='tuesday') {
//             console.log("day is Tuesday ");
//       }
//       else if (day.toLowerCase==='wednesday') {
//           console.log("day is Wednesday");
//       }
//       else if (day.toLowerCase==="thuresday") {
//            console.log("day is Thuresday");  
//       }
//       else if (day.toLowerCase==='friday') {
//             console.log("day is Friday");
//       }
//       else if (day.toLowerCase==='saturday') {
//             console.log("day is Saturday");
//       }
//      else if (day.toLowerCase==='sunday') {
//         console.log("day is Sunday");
//      }
//    }
//    weekend();

// question no 3  Write a JavaScript program that takes a number between 1 and 7 as input and displays the corresponding day of the week using a switch statement.
// let day=+prompt("Enter a day")
// switch (true) {
//       case day==1:
//             console.log("monday");
//             break;
//         case day==2:
//             console.log("tuesday");
//             break;
//             case day==3:
//             console.log("wednesday");
//             break;
//             case day==4:
//             console.log("thuresday");
//             break;
//             case day==5:
//             console.log("friday");
//             break;
//             case day==6:
//             console.log("saturday");
//             break;
//             case day==7:
//                   console.log("sunday");
//                   break;

//       default:
//             console.log("");
//             break;
// }

// question 4 Write a JavaScript program that takes a month number (1-12) as input and displays the number of days in that month using switch statements.

// function months(params) {
//       let numberofmonth = +prompt("Enter a month number");
//       switch (true) {
//             case numberofmonth == 1:
//                   console.log("January");
//                   break;
//             case numberofmonth == 2:
//                   console.log("February");
//                   break;
//             case numberofmonth == 3:
//                   console.log("March");
//                   break;
//             case numberofmonth == 4:
//                   console.log("April");
//                   break;
//             case numberofmonth == 5:
//                   console.log("May");
//                   break;
//             case numberofmonth == 6:
//                   console.log("June");
//                   break;
//             case numberofmonth == 7:
//                   console.log("July");
//                   break;
//             case numberofmonth == 8:
//                   console.log("August");
//                   break;
//             case numberofmonth == 9:
//                   console.log("September");
//                   break;

//             case numberofmonth == 10:
//                   console.log("October");
//                   break;
//             case numberofmonth == 11:
//                   console.log("November");
//                   break;
//             case numberofmonth == 12:
//                   console.log("December");
//                   break;

//             default:
//                   console.log("Not a other month");
//                   break;
//       }
// }
// months();

//    for loop 
     
//              var result=(index => {
//                   var number=+prompt("enter a number");
      
//      });
//    result()

// var number = +prompt("Enter a number");

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// table crerate;
// var table=+prompt("Enter a table");
// for (let index = 1; index <=10; index++) {
//       console.log(table, `*` ,index, `=`,table*index);
      
// }

// Write a JavaScript program to calculate the sum of all numbers from 1 to a given number. Implement this using a loop (either for loop or while loop).

// var obj=[10,15,20,25,30]
// var sum=0;
//  for (let index = 0; index < obj.length; index++) {
//       const element = obj[index];
//      sum +=element
      
//  }
//  console.log("sum",sum);

// var sum = 0;
// var element = 5;

// sum += element;
// console.log(sum);

// var arr=[2,4,6,8,10,12,14,16,18,20];
// var sum=0;
// var resule=arr.forEach(i =>{
//       sum+=i;
      
// })
// console.log(sum);

      // var array=["kashif","javaid","ali"];
      // array.push("abdullah");
      // array.length
      // console.log(array);
      
      // var array=["kashif","javaid","ali"];
      // array.push("abdullah");
      // array.pop()
//       array.unshift("Muhammad")

// console.log(array);
  
//       var array1=["kashif","javaid"];
      
// console.log(typeof (array1));

// write a js program find the all value (1,2,3,4,5,6,7,8,9,10) with use foreach loop?
  
//    var arr=[1,2,3,4,5,6,7,8,9,10];
//    var resule=arr.forEach(a =>{
//      console.log(a);
//    });


// data="1,2,3,4,5,6,7,8,9,10";
// var convertarray= data.split(",");
// var result=convertarray.map((element,index )=>{
// //      console.log(element);
//      if (element % 2 == 0) {
//                   return index + element
//              }

// });
// console.log(result);

// write a js program to sum off array[2,4,5,6,7,8,9,10];
// var arra=[2,4,5,6,7,8,9,10];
// sum=0;
// var resule=arra.forEach((element) => {
      
//    sum-=element;
  
      
// });
//  console.log(sum);
// var a=1;
// while (a<=10) {
//   console.log(a,"pakistan");
//   a++;
// }

//    var result=function abc(a,b) {
//       if (a==b) {
//           console.log("equal values"); 
          
//       }
//       else{
//             console.log("Not equal value");
           
      
//    }
// }
//    var resuleshow=result(2,5)

//    var result=Number.MAX_VALUE;
//    console.log(result);
// var arr = [2, 4, 5, 6, 7];
// var arrToString = arr.toString();

// console.log(arrToString);

// string handling
   
//  var abc="a-z"
//  var a=abc.charAt(6);
//  var b=abc.charCodeAt(a-z);
//  console.log(b);
// //  console.log(a);
 
  var a="kashif";
  var b="muhammad";

