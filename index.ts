                              //type user obj /also know as type aliasis

// type userObj =
// {
// name:string;
// age:number;
// company:string;
// employeeId?:string; //optional future me use kr sakte hai 
// address:{
//     street:string;
//     state:string;
//     city:string;
// }};

// let userObj:userObj = {
//     name:"Rahmat",
//     age:23,
//     company:"papayaSchool",
//     address:{
//         street:"Chandni Chowk",
//         city:"Banglore",
//         state:"Karnataka",
//     }
// }
// console.log(userObj);





                             //function type

// let sum =(a:number,b:number)=>{
//     return a+b;
// };
// let res:number =sum(40,50);
// console.log(res)



// let sum = (a: number, b: number): void => {
//   console.log(a + b);
// };
// sum(40, 50); 


                      //it will return nothing due to void 

// let sum = (a: number, b: number): void => {
//   return (a + b);
// };
// sum(40, 50); 


              //function as a parameter + function type annotation

// let sum = (a: number, b: () => number): number => {
//   console.log(a);
//   let data = b();
//   return a + data;
// };
// let res = sum(56, () => 45);
// console.log(res);

             //currying function
// let sum = (a: number) => (b: number) => {
//     if (b !== undefined) return sum(a + b);
//     return a;
// };

// let data =sum(89)(45)();
// console.log(data)

            //Rest parameter

// let sum = (...rest:number[]):number=>{
//     let data = rest.reduce((a,v)=>a+v,0);
//     return data;
// }
// let result =  sum(45,56,7,89,90,12,13,14);
// console.log(result);

