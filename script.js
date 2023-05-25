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

var data=[1,5,6,8,3,9,8,5,2];
var datashow=data.forEach((element,index )=> {
    console.log(index,"index",element);
    
});
