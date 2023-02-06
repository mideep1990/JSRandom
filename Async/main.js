/* Javascript Async 
Sample GET https://api.publicapis.org/entries
1 - Async Vs Sync
2 - CallBack
2 - Promises
3 - Async Await
*/
//Async vs Sync

function cal(a,b)
{
  console.log("A : "+a+" B : "+b)
  return a+b;
}
function calInp()
{
  console.log("Calculating...")
}
function print(res)
{
  console.log("Result : ",res)
}
let res = cal(4,5)
setTimeout(function test(){
  calInp()
},5000)
print(res)
for(let i =0;i<10000;i++)
{
  console.log("Waiting...")
}


//Call back

function calculate(a,b,callBack)
{
   let res = a + b;
   callBack(res)
}

function print(res)
{
  console.log("Result : ",res)
}

calculate(3,4,print)


//PROMISES
const calculateData = (a,b) => {
  return new Promise((resolve,reject) => {
    if(b !== 0)
    {
      resolve(a/b)
    }
    else
    {
      reject("Can not divide /Zero")
    }
  })
}

const formulaCal = (c) => {
  return new Promise((resolve,reject) => {
    if(c>0)
       resolve(c*3.14+78)
    else
       reject("Zero is not acceptable!!!")
  })
}


calculateData(4,2)
.then(resp => {
  console.log(resp)
  return formulaCal(resp)
}).then(resp2 => {
  console.log(resp2)
})
.catch(err => console.error(err))

//Async Await

const callFun = async () => {
  try{
   const resp = await calculate(4,2);
   const resp2 = await formulaCal(resp)
   console.log(resp)
   console.log(resp2)
  }
  catch(err)
  {
    console.error("Error : ",err);
  }
}

callFun()


//With Fetch API Promise + Callback
 
const apiFun = (CallBack) => {
  fetch("https://api.publicapis.org/entries")
  .then(resp => resp.json())
  .then(respCallBack => CallBack(respCallBack))
}

const dataProcessor = (data) => {
  console.log("Data : ",data)
}

apiFun(dataProcessor)


//With Fetch API Async + Await

const apiFun2 = async () => {
  const resp = 
  await fetch("https://api.publicapis.org/entries")
  const resp_json = await resp.json();
  console.log("Response : ",resp_json)
}

apiFun2()

