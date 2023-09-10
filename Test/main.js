const el = document.getElementsByTagName("div")[0]
el.addEventListener(
    'pointerdown',function(){
        console.log("Pointer Down")
    }
)
el.addEventListener(
    'pointerup',function(){
        console.log("Pointer Up")
    }
)