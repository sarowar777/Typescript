const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Saro", email: "saromalla#gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "saro", password: 124 });
    } else {
      reject("Error:Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=>console.log("the promise is either resolved or rejected"))


  const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = true;
    if (!error) {
      resolve({ username: "javascript", password: 124 });
    } else {
      reject("Error:JS went wrong");
    }
    },1000)
  })

  async function consumePromiseFive(){
   try{
    const response=await promiseFive
    console.log(response);
   }
   catch(error){
    console.log(error)
   }
  }
  consumePromiseFive()