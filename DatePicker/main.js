class testC
{
    random()
    {
        let random1  = this.random1()
        let random2 = this.random2()
        let random3 = this.random3()
        let random4 = this.random4()
        document.getElementById("random1").innerText = random1
        document.getElementById("random2").innerText = random2
        document.getElementById("random3").innerText = random3
        document.getElementById("random4").innerText = random4
    }
    
    random1()
    {
        return Math.random();
    }
    random2()
    {
        let min = 1;
        let max = 10000
        return Math.floor(Math.random() * (max-min)+min);
    }
    random3()
    {
        let min = 1;
        let max = 10000
        return Math.floor(Math.random() * (max-min+1))+min;
    }
    random4()
    {
        return Date.now();
    }
}

var classInstance = new testC();


window.addEventListener('load', (event) => {
    let ele = document.getElementsByClassName("cc_datePicker")
    for(let i=0;i<ele.length;i++)
    {
        ele[i].innerHTML = ""
        let eleCh0 = document.createElement("label")
        eleCh0.setAttribute('for','cc_datePicker_dt'+i)
        eleCh0.setAttribute('id','cc_datePicker_dtlbl'+i)
        eleCh0.innerText = ele[i].getAttribute("label")
        let eleCh1 = document.createElement("input")
        eleCh1.setAttribute('type','date')
        eleCh0.setAttribute('id','cc_datePicker_dt'+i)
        ele[i].appendChild(eleCh0)
        ele[i].appendChild(eleCh1)
    }
});



