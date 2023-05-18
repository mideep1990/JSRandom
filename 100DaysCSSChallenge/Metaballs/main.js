function loader(){
   let bubles = Array.from(document.getElementsByClassName('bubble'))
   bubles.forEach((element,index) => {
    let rotate = 10+Math.floor(Math.random()*100)
    element.style.transform = 'rotate('+rotate+'deg)';
   });
   let small = Array.from(document.getElementsByClassName('smallBalls'))
   small.forEach((element,index) => {
    let rotate = 300+Math.floor(Math.random()*100)
    element.style.transform = 'rotate('+rotate+'deg)';
    element.style.width = (index + 7)+'px';
    element.style.height = (index + 7)+'px';
   });
}