type userObj =
{
name:string;
age:number;
company:string;
employeeId?:string; //optional future me use kr sakte hai 
address:{
    street:string;
    state:string;
    city:string;
}};



let userObj:userObj = {
    name:"Rahmat",
    age:23,
    company:"papayaSchool",
    address:{
        street:"Chandni Chowk",
        city:"Banglore",
        state:"Karnataka",
    }
}


console.log(userObj)