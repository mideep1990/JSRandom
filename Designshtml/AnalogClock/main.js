const hr = document.getElementById('hr')
const min = document.getElementById('min')
function start(){
    setTime()
    setInterval(function(){
        console.log("setting new time")
        setTime()
    },60000)
}
start();
function setTime()
{
    const d = new Date();
    let _hour = d.getHours();
    let _min = d.getMinutes();
    _hour = _hour > 12 ? _hour - 12 : _hour
    let minDeg = (_min * 6) - 180
    let hrDeg = (_hour * 30) - 180
    let adj = Math.floor(.5 * _min)
    hrDeg += adj 
    min.style.rotate = minDeg+'deg' 
    hr.style.rotate = hrDeg+'deg' 
}