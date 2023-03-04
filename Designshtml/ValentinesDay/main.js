let intID = null
window.onload = function()
{
    intID = setInterval(ShowBeats,1000)   
}
let count = 0
var ShowBeats = function ()
{
    const audio1 = document.querySelector("#hbt");
    audio1.play()
    if(count<=71)
    {
        count++;
        document.getElementById("beats").innerHTML = count
    }
    else {
        count++;
        if(count<=73){
            document.getElementById("heartWrap").style.display = "none"
            clearInterval(intID)
            writeQuote()
            audio1.pause()
        }
    }
}

function writeQuote()
{
    const audio2 = document.querySelector("#lovemusic");
    audio2.play()
    document.getElementById("textWrap").style.display = 'flex'
    let quote = "Life may be edgy sometimes, that may force you to crawl... \n But nothing in life has the power to force me to stop loving you... neither can i... Love You baby..."
    let arr = Array.from(quote)
    let i = 0;
    let id = null;
    id = setInterval(function(){
        console.log(i+" - ",arr[i])
        document.getElementById("textWrap").innerHTML += arr[i]
        i++;
        if(i == arr.length)
        {
            clearInterval(id)
            audio2.pause()
            document.getElementById("textWrap").style.display = 'none'
            showVid()
        }
    },200)    
}


function showVid()
{
    const vid = document.querySelector("#vid");
    document.querySelector('#vid').style.display = "flex"
    vid.play()
    let id = null;
    let i = 0;
    id = setInterval(function(){
        i++;
        if(i == 90)
        {
            clearInterval(id)
            vid.pause()
            showPics()
        }
    },200) 
}

function showPics()
{
    const audio2 = document.querySelector("#last");
    audio2.play()
    document.querySelector('#vid').style.display = "none"
    document.querySelector('#PicWrap img').style.display = "flex"
    
}