const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("colorChanger");
const colorTxt = document.querySelector(".color");
const infoSection = document.querySelector(".information");

function generateRandomHexColor() {
    const hexCharacters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += hexCharacters[randomIndex];
    }
    return color;
}

btn.addEventListener('click', function (){
const randomHexColor = generateRandomHexColor();
console.log(randomHexColor);
colorTxt.innerHTML=randomHexColor;
infoSection.style.backgroundColor=randomHexColor;
})




function getRandomNumber() {
    //let result = Math.floor(Math.random()*colors.length);
    let result = Math.floor(Math.random() * 256);
    console.log(result);
    return result;
}

