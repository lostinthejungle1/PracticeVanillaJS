
const colors = ["green", "red", "rgba(133,122,200)", "#f15025","#A6D0DD"];

const btn = document.querySelector('.change-btn');
const colorText = document.querySelector('.chosen-color');
const display = document.querySelector('.display-box');

btn.addEventListener('click',e=>{
    console.log('You clciked the btn')
    const newColor = colors[getRandomNum(0,colors.length-1)];
    display.style.backgroundColor = newColor;
    colorText.innerHTML = newColor;
})


const getRandomNum =  function(min,max){
    return Math.floor(Math.random()*(max-min+1));
}