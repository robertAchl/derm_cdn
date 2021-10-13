const body = document.querySelector('body');

body.style.transition = "background-color 0.5s";

setInterval(()=>{
    let red = Math.floor(50 + Math.random()*200);
    let green = Math.floor(50 + Math.random()*200);
    let blue = Math.floor(50 + Math.random()*200);
    let colorString = `rgb(${red},${green},${blue})`;
    console.log(colorString);
    body.style.backgroundColor = colorString;
},1000)
