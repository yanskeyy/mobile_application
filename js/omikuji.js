"use strict";
window.addEventListener(
    "DOMContentLoaded",
    function(){

        this.setTimeout(function(){

            let popMessage = "いらっしゃい！　おおみくじ引いてって!";
            this.window.alert(popMessage);
        }, "3000");
    },
    false,

);
const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1.addEventListener("click", function(){
    let n = Math.floor(Math.random() * 3);
    switch(n){
        case 0:
            omikujiText.textContent = "Very Happy!!!";
            omikujiText.style.color = "green";
            omikujiText.style.fontSize = "38px";
            break;
        case 1:
            omikujiText.textContent = "Happy!!!";
            omikujiText.style.color = "yellow";
            omikujiText.style.fontSize = "30px";
            break;
        case 2:
            omikujiText.textContent = "Unhappy!!!";
            omikujiText.style.color = "white";
            omikujiText.style.fontSize = "30px";
            break;
    }
},
false,
);