let longText:string="My Name is Sarowar Malla.I Live in Kupondole,Lalitpur.";
let i:number;
let shortText:string="";
for(i=0;i<11;i++){
  shortText+= longText[i];
  
}
console.log(shortText);

//second question
let str1:string="Sarowar";
let str2:string="Sarowar";
let areEqual:boolean=(str1==str2);
console.log(areEqual);

///third question
let product:string="Momo";
let price:number=120;
console.log(`The price of ${product} is Rs ${price}`);


// fourth question
function isDivisibleBy4and8(a:number):boolean{
  return a%4==0 && a%8==0
    
  

}
console.log(isDivisibleBy4and8(64));

//palindrone
const isPalin=(palin:string):boolean =>{
  let myPalin=palin.split("").reverse().join("");
  return myPalin===palin;
}
console.log(isPalin("123212"));

//Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
const calculateAverage=(num:number[]):number =>{
 let sum=num.reduce((acc,init)=>acc+init,0)
 return sum/num.length;
}
const num=[1,2,3,4,5];
const average=calculateAverage(num);
console.log(`Average is :${average}`);

// arrays 

const findMaxValue=(arr:number[])=>{
  let maxValue=arr[0];
  for(let num of arr){
    if(num>maxValue){
      maxValue=num;
    }
  }
  return maxValue;
}
let num1:number[]=[3,8,2,12,34,22,11];
console.log(findMaxValue(num1));

// js file
let arr:number[]=[1,2,3];
let a=arr.map((value,index,array)=>
{
  console.log(value,index,array);
  return value+1;
}
)
console.log(a);

// converting number to string
let arr4:number[]=[1,2,3,4,5];
let arr12=arr4.map((value12)=>{
  return value12.toString();
})
console.log(arr12);


///map function
const studentName:string[]=["Sonu","Saro","Asis","Rajat","Anil","Nayan"];
const arrUpperCase=studentName.map((nam)=>{
  console.log(nam.length);
  return nam.toUpperCase();
 
})
console.log(arrUpperCase);

// Given an array of numbers, create a new array that contains the square of each number
const arrNum:number[]=[2,4,6];
const sqrNum=arrNum.map((val)=>{
  return val*val;

})
console.log(sqrNum);
console.log("\n");

//Given an array of strings, create a new array that contains only the strings with a length greater than 4.
 const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
 const newName=names.filter((valss)=>{
 if(valss.length==4)
  return valss;

 })
 const newName2=names.filter((valu)=>{
  return valu.indexOf("A")===0;

 })
 console.log(newName);
 console.log(newName2);
 console.log("\n");


 //Typescript objects
 //type alias
type Product={
  Name:string;
  Price:number;
  Quantity:5;
}
 const product12:Product={
  Name:'Laptop',
  Price:1000,
  Quantity:5
 }
 
 const totalCost=(product12:Product)=>{
  return `${product12.Quantity} ${product12.Name} costs ${product12.Price * product12.Quantity} `

 }
 console.log(totalCost(product12));
 console.log("\n");

 //enum example

 enum Roles{
  user="user",
  admin="admin",
 }
 type LoginDetails={
  name?:string;
  email:string;
  passw:string;
  role:Roles;
 }
 const user1:LoginDetails={
  name:"Sarowar",
  email:"saro@gmail.com",
  passw:"1234",
  role:Roles.user,
 };
 const user2:LoginDetails={
  name:"Malla",
  email:"Malla@gmail.com",
  passw:"4321",
  role:Roles.admin,
 };
 const isAdmin=(user:LoginDetails)=>{
  const {name,role}=user;
  return role==="admin"? `${user.name} is allowed to edit website` :`${user.name} is not allowed to edit website`;

 };
 console.log(isAdmin(user1));
 console.log(isAdmin(user2));
 console.log("\n");


 ///enum next practice


 enum Flavour{
  flav1="Vanilla",
  flav2="Strawberry",
 }
 type People={
  name:string,
  flav:Flavour,
 }
 const people1:People={
  name:"Saro",
  flav:Flavour.flav1,
 }
 const people2:People={
  name:"Maiya",
  flav:Flavour.flav2,
 }
 const favFlavour=(pep:People)=>{
  const {name,flav}=pep;
  return flav === "Vanilla" ? `${people1.flav} is favourite of ${people1.name}`:`${people2.flav} is favourite of ${people2.name}`
 }
 console.log(favFlavour(people1));
 console.log(favFlavour(people2));
 console.log("\n");


 ////tuples example
 // You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:
 type ProductInfo=readonly[string,number,number];

 const product1:ProductInfo=['DiaryMilk',20,5];
 const product2:ProductInfo=['Oreo',25,3];

 const productDetails=(prod:ProductInfo)=>{
  const[product,price,quantity]=prod;
  console.log(`Product:${product},Price:${price},Qty:${quantity}`);
 }
 productDetails(product1);
 productDetails(product2);


 //union 
 const conversion1=(value:string|number)=>{
  if(typeof value==="string"){
    return value.toUpperCase();
  }
  else if(typeof value==="number"){
    return value*2;
  }
  else{
    throw new Error("Invalid");
    
  }
 }
 console.log(conversion1("Sarowar"));
 console.log(conversion1(6));
 console.log("\n");



 ///union practice 
 const practiceUnion=(valueUnion:number|string|boolean)=>{
  if(typeof valueUnion==="number"){
    return "$"+valueUnion.toFixed(2);
  }
  else if(typeof valueUnion==="string"){
    return  `${valueUnion.charAt(0).toUpperCase()}${valueUnion.substring(1)}`
  }
  else if(typeof valueUnion==="boolean"){
    if(valueUnion===true)
      return "Yes";
    else{
      return "No";
    }
  }
 else{
  throw new Error("invalid input");
 }

 }
 console.log(practiceUnion(101));
 console.log(practiceUnion("sArowar"));
 console.log(practiceUnion(false));


 ///intersection

 type userI={
  id:number;
  name:string;
  email:string;

 }
 type Account={
  accountId:number;
  accountType:string;
  balance:(number);
 }
 const user3:userI={
  id:1011,
  name:"Rooney",
  email:"Rooney@gmail.com",
 }
 const account1:Account={
  accountId:1111,
  accountType:"Savings",
  balance:100000,
 }
 const combineUserAccount=(userss:userI,accounts:Account)=>{
  return {...userss,...accounts};
 }
const result123:userI & Account=combineUserAccount(user3,account1);
console.log(result123);


const sarowa={
  name:"sarowar",
  age:12,
}



