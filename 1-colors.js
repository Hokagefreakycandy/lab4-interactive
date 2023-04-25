const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("colorChanger");
const colorTxt = document.querySelector(".color");
const infoSection = document.querySelector(".information");

btn.addEventListener('click',function(){
    console.log("Button Clicked");
    let randomIndex = getRandomNumber();

    let randomRGB = "rgba(" + getRandomNumber() + "," + getRandomNumber() + "," + getRandomNumber() + ")";
    infoSection.style.backgroundColor = randomRGB;
    colorTxt.textContent = randomRGB;
   // infoSection.style.backgroundColor = colors[randomIndex];
   // colorTxt.textContent = colors[randomIndex];
})

function getRandomNumber()
{
    //let result = Math.floor(Math.random()*colors.length);
    let result = Math.floor(Math.random()*256);
    console.log(result);
    return result;
}