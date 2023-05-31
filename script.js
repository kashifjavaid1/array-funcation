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
var arr=[1,2,3,4,5]
// var result=arr.forEach(element =>{
//     console.log(element);
//     var show=arr.map(abc =>{
//         return 5;
//     });
//     console.log(show);
// });
var show=arr.map(abc =>{
    return 5;
});
console.log(show);


