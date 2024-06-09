const getUsername=document.querySelector("#user") as HTMLInputElement;
const formSubmit= document.querySelector(".form") as HTMLFormElement;
const main_container=document.querySelector(".main_container") as HTMLElement;


//define contract of an object

interface UserData{
  id:number;
  login:string;
  avatar_url:string;
  location:string;
  url:string;
}
//reusable func
async function  myCustomFetcher<T>(url:string,options?:RequestInit):Promise<T>{
  const response= await fetch(url,options);
  if(!response.ok){
    // throw new Error(
    //   `Network response was not ok-status:${response.status}`
      

    // );
    console.log("failed");
  }
  const data= await response.json();
  console.log(data);
  
  return data;
}
//UI card
const showResultUI=(singleUser:UserData)=>{
  const {avatar_url,login,url,location}=singleUser;
  main_container.insertAdjacentHTML(
    "beforeend",
    `<div class='card'>
    <img src=${avatar_url} alt=${login}/>
    <hr/>
    <div class="card-footer">
    <img src="${avatar_url}" alt="${login}"/>
    <a href="${url}">Github</a>
    </div>
    </div>
    `
  )
}

//default func call
 async function fetchUserData(url:string){
  myCustomFetcher<UserData[]>(url,{}).then((userInfo)=>{
  for(const singleUser of userInfo){
    showResultUI(singleUser);
   
  }
  })
  

 }
fetchUserData("https://api.github.com/users");


//search
formSubmit.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const searchTerm=getUsername.value.toLowerCase();

  try{
const url="https://api/github.com/users";

const allUserData=await myCustomFetcher<UserData[]>(url,{});
const matchingUsers=allUserData.filter((user)=>{
  return user.login.toLowerCase().includes(searchTerm);
})
main_container.innerHTML="";
if(matchingUsers.length===0){
  main_container?.insertAdjacentHTML(
    "beforeend",
    `<p class="empty-msg">No matching users found.</p>`
  );
}
  }
  catch(error){
    console.log(error);
  }
})