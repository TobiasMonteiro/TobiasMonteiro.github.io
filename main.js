let num1 = Math.floor(Math.random() * 50) + 1;
let num2 = Math.floor(Math.random() * 50) + 1;
let num3 = Math.floor(Math.random() * 50) + 1;
let num4 = Math.floor(Math.random() * 50) + 1;
let num5 = Math.floor(Math.random() * 50) + 1;
let star1 = Math.floor(Math.random() * 12) + 1;
let star2 = Math.floor(Math.random() * 12) + 1;

document.getElementById("add").innerHTML=`<p>${num1} ${num2} ${num3} ${num4} ${num5} ${star1} ${star2}</p>`
document.getElementById("add").innerHTML+="<button class='btn btn-primary' onclick='randomAgain()'>Outra vez</button>"

function randomAgain() {
    num1 = Math.floor(Math.random() * 50) + 1;
    num2 = Math.floor(Math.random() * 50) + 1;
    num3 = Math.floor(Math.random() * 50) + 1;
    num4 = Math.floor(Math.random() * 50) + 1;
    num5 = Math.floor(Math.random() * 50) + 1;
    star1 = Math.floor(Math.random() * 12) + 1;
    star2 = Math.floor(Math.random() * 12) + 1;
    document.getElementById("add").innerHTML=`<p>${num1} ${num2} ${num3} ${num4} ${num5} ${star1} ${star2}</p>`
    document.getElementById("add").innerHTML+="<button class='btn btn-primary' onclick='randomAgain()'>Outra vez</button>"
}