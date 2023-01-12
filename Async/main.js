/* Javascript Async */


const EvenOddService = (num) => {
   return new Promise((resolve,reject) => {
    console.log("Number to be tested : ",num)
    if(num % 2 === 0)
    {
      resolve("Resolved -> Even Number : "+num)
    }
    else 
    {
      reject("Rejected -> Odd Number : "+num)
    }
   })
}

const calculate = (num) => {
   console.log("Doing the calculation")
   return new Promise((resolve,reject)=> {
    if(num/2 >= 1)
    {
      resolve(num/2)
    }
    else{
      reject("Rejected : -1")
    }
   });
}

const display = (num) => {
  console.log("Display Msg Forming")
  return new Promise((resolve,reject)=> {
    resolve("Final Result : "+num)
  })

}

let __num = 23;
EvenOddService(__num).then(resp1 => {
  console.log("Response From EvenOddService : ",resp1);
  return calculate(__num)
}).then(resp2 => {
  console.log("Response From Calculate : ",resp2)
  return display(resp2)
}).then(resp3 => {
  console.log("Response Form Display : ",resp3)
}).catch(err => {
  console.log("Catch : ",err)
}).finally(() => {
   console.log("-----------------Finished-------------------")
})

const callMethods = async () => {
  try{
  let __num = 33;
  let resp1 = await EvenOddService(__num)
  console.log("From EvenOddService : ",resp1)
  let resp2 = await calculate(__num)
  console.log("From calculate : ",resp2)
  let resp3 = await display(__num)
  console.log("From display : ",resp3)
  }
  catch(err)
  {
    console.log("Catch : ",err)
  }
}

(() => 
{
  console.log("Step 1 - Printing...")
  console.log("Step 2 - Printing...")
  callMethods()
  console.log("Step 3 - Printing...")
})();



