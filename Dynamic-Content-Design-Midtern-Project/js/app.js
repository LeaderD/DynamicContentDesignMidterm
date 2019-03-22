var background = document.querySelector("#bg"),
    previewArea = document.querySelector("#preview"),
    bg1 = document.querySelector("#thumb1"),
    bg2 = document.querySelector("#thumb2"),
    bg3 = document.querySelector("#thumb3"),
    bg4 = document.querySelector("#thumb4"),
    start = document.querySelector("#startimage");

bg1.addEventListener("click",function(){
    previewArea.style.backgroundImage = "url('img/bg_1.svg')"
})

bg2.addEventListener("click",function(){
    previewArea.style.backgroundImage = "url('img/bg_2.svg')"
})

bg3.addEventListener("click",function(){
    previewArea.style.backgroundImage = "url('img/bg_3.svg')"
})

bg4.addEventListener("click",function(){
    previewArea.style.backgroundImage = "url('img/bg_4.svg')"
})


if (previewArea.style.backgroundImage != "url(../img/bg_0.svg)"); {
    start.style.marginTop = "100%";
}

var nextBut = document.querySelector("#next"),
    prevBut = document.querySelector("#prev"),
    bgNum = 1;

nextBut.addEventListener("click",function(){
            
    bgNum1 = bgNum + 1; 
    bgNum2 = bgNum + 2; 
    bgNum3 = bgNum + 3; 
    bgNum4 = bgNum + 4; 

    bg1.style.backgroundImage = "url(img/bg_"+bgNum1+".svg";
    bg2.style.backgroundImage = "url(img/bg_"+bgNum2+".svg";
    bg3.style.backgroundImage = "url(img/bg_"+bgNum3+".svg";
    bg4.style.backgroundImage = "url(img/bg_"+bgNum4+".svg"; 
})

prevBut.addEventListener("click",function(){
            
    bgNum1 = bgNum - 1; 
    bgNum2 = bgNum - 2; 
    bgNum3 = bgNum - 3; 
    bgNum4 = bgNum - 4; 
    

    bg1.style.backgroundImage = "url(img/bg_"+bgNum1+".svg";
    bg2.style.backgroundImage = "url(img/bg_"+bgNum2+".svg";
    bg3.style.backgroundImage = "url(img/bg_"+bgNum3+".svg";
    bg4.style.backgroundImage = "url(img/bg_"+bgNum4+".svg"; 
})

