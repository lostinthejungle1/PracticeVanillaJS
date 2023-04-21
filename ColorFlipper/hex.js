
const getRandomNum =  function(min,max){
    return Math.floor(Math.random()*(max-min+1));
}

const convertDeciToHex = function(num){
    return (num).toString(16);
}

const getRandomColor = function(){
    let newColor = `#`;
    for(let i=0;i<6;i++){
        const randomDecimal = getRandomNum(0,15);
        newColor += convertDeciToHex(randomDecimal)
    }
    return newColor;
}

const btn = document.querySelector('.change-btn');
const colorText = document.querySelector('.chosen-color');
const display = document.querySelector('.display-box');

btn.addEventListener('click',e=>{
    console.log('You clciked the btn')
    const newColor = getRandomColor();
    display.style.backgroundColor = newColor;
    colorText.innerHTML = newColor;
})

//how can I improve
// why not just get random number from 0 to F?? Just put them in an array
//why did I get random decimal first then converted it?