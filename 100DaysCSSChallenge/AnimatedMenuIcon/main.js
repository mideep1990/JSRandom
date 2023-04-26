


const ele = document.getElementById('barWrapid')
ele.addEventListener('click',function(){
    console.log(ele.classList)
    if(!ele.classList.contains('active'))
    {
        ele.classList.remove('Notactive')
        ele.classList.add('active')
    }
    else
    {
        ele.classList.remove('active')
        ele.classList.add('Notactive')
    }
    
})