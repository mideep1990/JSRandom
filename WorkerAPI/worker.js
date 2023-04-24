onmessage = function(e) {
    console.log('Worker: Message received');
    let sum = 0
    for(let i = 0;i<e.data.length;i++)
    {
        sum = sum + Number(e.data[i])
    }
    let result = (sum/(e.data.length*100))*100
    if (isNaN(result)) {
      postMessage('invalid entries');
    } else {
      result = parseFloat(result).toFixed(2)
      console.log('Worker: final result ',result);
      postMessage(result);
    }
  }