const init = () => {
    // 5 5+4+3+2+1=15
    console.log(sum(3000))
    console.log(sum(7000))
    console.log(sum(3600))
    console.log(sum(3000))
    console.log(sum(3000))
    console.log(sum(3000))
    console.log(sum(3600))
    console.log(sum(39600))
    console.log(cache)
}

let cache={}
const sum = (_max) => {
    let res = 0;
    if(_max in cache)
    {
        console.log("Pulling from cache");
        return cache[_max];
    }
    console.log("Calculating...");
    for(let i=1;i<=_max;i++)
    {
        res += i;
    }
    cache[_max] = res;
    return res;
}




document.addEventListener('DOMContentLoaded',init)



