
function orderFun()
{
    let btn =  document.getElementById('btn1')
    let openBox = document.getElementById('openBox')
    let closedBox =  document.getElementById('closedBox')
    let truck = document.getElementById('truck')
    let buttontext = document.getElementById('buttontext')
    btn.style.pointerEvents = 'none'
    openBox.style.backgroundImage = "url('https://img.icons8.com/ios-filled/50/null/empty-box.png')"
    openBox.style.display = 'block'
    buttontext.style.display = 'none'
    truck.style.display = 'block'
    truck.addEventListener('animationend',function(){
        openBox.style.display = 'none'
       closedBox.style.display = 'block'
       closedBox.style.animation = 'closedBox  2s forwards'
       closedBox.addEventListener('animationend',function(){
           closedBox.style.display = 'none'
            truck.style.animation = 'truckAdv  5s forwards'
            truck.addEventListener('animationend',function(){
                console.log("Complete")
                openBox.style.display = 'none'
               closedBox.style.display = 'none'
                truck.style.display = 'none'
                buttontext.innerHTML = "<span class='tick'><img src='https://img.icons8.com/color/48/null/checked--v1.png'/><i>Thanks for ordering.</i></span>"
                buttontext.style.display = "block"
            })
        })
    })
    
}