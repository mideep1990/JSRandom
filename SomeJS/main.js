/* How to Use Fetch*/
(() => 
{
  fetch("https://api.publicapis.org/entries")
  .then(resp => resp.json())
  .then(data => {
    console.log("API Respose : ",data)
  })
})();

(() => {
  console.log("Rest POST")
  fetch('https://jsonplaceholder.typicode.com/posts', 
  {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log("After Post : ",json));
  })();

(async () => 
{
  const url = "https://api.publicapis.org/entries";
  const resp = await fetch(url)
  const data = await resp.json()
  console.log("API Respose 2 : ",data)
})();




