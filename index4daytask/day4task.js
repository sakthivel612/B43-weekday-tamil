// // 1 . how to compare two JSON have the same properties without order?
// let object1 = {
//     name : "Person1", 
//     age : 5
// };
// let object2 = {
//     age : 5,
//     name : "Person1"
// };
// console.log(object1 === object2);

// // 2 . use the rest countires API URL https://restcountries.com/v3.1/all and display the all the rest country
// // flags in console.
// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// const url = "https://restcountries.com/v3.1/all"
// const request = new XMLHttpRequest()
// request.open("GET", url);
// request.onload = () =>{
//     var data = JSON.parse(request.response);
//     for(let i of data){
//         console.log(i.flag);
//     }
// }
// request.send();

// 3. use the same rest countries and print all countries, names,regions,sub-regions and populations

// const url = "https://restcountries.com/v3.1/all"
// const request = new XMLHttpRequest()
// request.open("GET", url);
// request.onload = () =>{
//     var data = JSON.parse(request.response);
//     for(i=0;i<=data.length-1;i++){
//         console.log(data[i].name,data[i].region,data[i].subregion,data[i].population);
//     }
// }
// request.send();