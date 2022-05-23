// objects:

// function myobject (it){
// for(i=0; i<it.length; i++){
//     console.log(it[i]);

// }
// }

// myobject("i recive letters");

// function secondfun(it){
//     var result;
//     for(i=0; i<it.length; i++){

//        result+=it[i]+i;
//     }
//     console.log(result);
//     return result;

// }
// secondfun("i recive letters");


// function evendigits(any) {
//     var neweven="";
//     for (var i = 0; i < any.length; i++) {
//         if (i % 2 == 0) {
//             neweven+="2";
//         }
//         else{
//             neweven+= any[i];
//         }
//     }
//     console.log(neweven);
// }

// evendigits("my text string");

//class work 23/5/22:

//49:

// function printdate(){
//     var mydate= new Date();
//    console.log(mydate);
// }
// printdate();

//50:

// function recivesdate(){
//     var stringDate= new Date("2/5/2021");
//     console.log(stringDate);
// }
// recivesdate();

//51:

// var user= prompt("enter a chosen date");
// function userdate(user){
//     var makeadate= new Date(user);
//     console.log(user);
// }
// userdate(user);

//52:
// var daTe= prompt("enter date");
// function printM(daTe){
//     var s= daTe.getMonth();
//     console.log(s);
//     return s;
// }
// printM(daTe);



/////////////////////////////////////Date:
// 163:

// function getdate(){
//     var currentdate= new Date();
//     console.log(currentdate);

// }
// getdate();

//164:
// function getontherdate(dstring){
//     var mystring= new Date(dstring);
//     console.log(mystring);

// }

// getontherdate("11/4/21");
//165:

// function getfromuser(){
//     var strii= prompt("choose date");
//     var usersdate = new Date(strii);
//     console.log(usersdate);
// }
// getfromuser();
//166:
// function retmonth(){
//     var usersdatestrii= prompt("select a date");
//     var findmonth= new Date(usersdatestrii);
//     var answer= findmonth.getMonth();
//     return answer; 
// }
// console.log(retmonth());
// 167:
// function rethour(){
//     var usersselction= prompt("select a date");
//     var findhour= new Date(usersselction);
//     var answer= findhour.getHours();
//     return answer; 
// }
// console.log(rethour());
// 168:
// function anotherdate(){
//     var a = prompt("date");
//     var b= new Date(a);
//     var c= b.getFullYear()
//     return c;
// }
// console.log(anotherdate()); 
//169:
// function anotherdate(){
//     var a = prompt("date");
//     var b= new Date(a);
//     var c= b.getMinutes()
//     return c;
// }
// console.log(anotherdate()); 

//170:
// function comperdate(){
//     var a = prompt("date1");
//     var b = prompt("date2");
//     var c= new Date(a);
//     var d= new Date(b);
//     yearone= c.getFullYear()
//     yeartwo= d.getFullYear()
//     answer= Math.min(yearone,yeartwo);
//     return answer;

// }
// console.log(comperdate()); 
//171://///////////////////////

// function getage(){
//     var a = prompt("date");
//     var b= new Date(a);
//     var c= new Date();
//     yearone= b.getFullYear()
//     yeartwo= c.getFullYear()
//     var d= (yeartwo-yearone);
//     return d;
// }
// getage();








