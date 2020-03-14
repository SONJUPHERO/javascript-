
var a=5;
var b=7;
console.log ("before swap: a=", a, "b=", b);

var temp =a;
a=b;
b=temp;

// console.log ("after swap: a=", a, "b=", b);

var x=5;
var y=7;
x=x+y;
y=x-y;
x=x-y;
// console.log ("after swap: x=", x, "y=", y);

var p =5;
var q =7;
[p,q]=[q,p];
//console.log ("after swap: p=", p, "q=", q);

//Random sonkha
// var num= 2.4999;
// var result = Math.floor(num);
// var result2= Math.ceil(num);
// var result3 = Math.round (num);

// for (var i=0; i<10; i++){
   
// var randomNum =Math.random() *10;
// var output=Math.round (randomNum)
// console.log(output);

// }

// var business =550;
// var ministar=750;
// var sochib =250;

// if(business>ministar){
//     if (business>sochib){
//         console.log("business is bigger");
        
//     }
//     else{
//         console.log("sochib is bigger");
//     }

// }
// else{
//     if (ministar >sochib){
//         console.log ("minester is bigger");
//     }
//     else{
//         console.log("sochib is bigger");
//     }
   

// }

//max value bar korar short cut
// var business =550;
// var ministar=750;
// var sochib =250;
// var max=Math.max(business,ministar,sochib)
// console.log(max);

// arry max 

var marks=[45,81,48,87,99,65,34,23];
var max=marks[0];
for (var i =0; i<marks.length;i++){
    var element= marks[i];
    if (element>max){
        max =element;

    }
}
//console.log("highest value is:", max);
