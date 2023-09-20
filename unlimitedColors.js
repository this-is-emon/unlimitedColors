//Generating random color
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}


let intervalId;
const startChangingColor = function () {
   if (!intervalId) {
    intervalId = setInterval(changeColor,1000)
   }
    function changeColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null
}

//Event handlers
document.querySelector('#start').addEventListener('click',startChangingColor,false)
document.querySelector('#stop').addEventListener('click',stopChangingColor,false)