document.onreadystatechange = function() {
    const subArr = document.getElementsByClassName("sub");
    if (document.readyState === 'complete') {
        for(let it = 0 ;it<subArr.length;it++)
            subArr[it].onchange = () => {
                callWorker()
            }
        }
    }

function callWorker()
{
    const myWorker = new Worker("worker.js")
    const subE = document.getElementsByClassName("sub");
    let data = []
    for(let it = 0 ;it<subE.length;it++){
        data.push(subE[it].value)
    }
    myWorker.postMessage(data);
    myWorker.onmessage = function(e) {
        document.getElementById('res').innerText = e.data;
        console.log('Message received from worker');
      }
}