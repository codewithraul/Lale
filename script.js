/* =====================================================
   LALƏ ÜÇÜN SÜRPRİZ
   Author : Raul
===================================================== */


// ===============================
// LOADER
// ===============================

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },1000);

        },1800);

    }

});




// ===============================
// TYPING EFFECT
// ===============================

const typing=document.getElementById("typing");


if(typing){

const text=
"Lalə, sən özünü yaxşı hiss edəsən deyə bu balaca sürprizi hazırladım 😊";


let index=0;


function writeText(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(writeText,55);

    }

}


setTimeout(writeText,2200);

}




// ===============================
// START BUTTON + MUSIC
// ===============================


const startButton=document.getElementById("startButton");
const music=document.getElementById("music");


if(startButton){

startButton.onclick=()=>{


    if(music){

        music.volume=0.35;

        music.play().catch(()=>{});

    }


    document
    .querySelector(".gallery")
    .scrollIntoView({

        behavior:"smooth"

    });


};

}




// ===============================
// DOWN ARROW TO MESSAGE
// ===============================


const downArrow=
document.getElementById("downArrow");


if(downArrow){


downArrow.onclick=()=>{


    document
    .querySelector(".message")
    .scrollIntoView({

        behavior:"smooth"

    });


};


}




// ===============================
// REVEAL EFFECT
// ===============================


const reveal=
document.querySelectorAll(".reveal");


function revealAnimation(){


reveal.forEach(card=>{


let top=
card.getBoundingClientRect().top;


if(top < window.innerHeight-120){

card.classList.add("active");

}


});


}


window.addEventListener(
"scroll",
revealAnimation
);


revealAnimation();




// ===============================
// STAR SKY
// ===============================


const canvas=
document.getElementById("space");


if(canvas){


const ctx=
canvas.getContext("2d");


function resize(){

canvas.width=
window.innerWidth;

canvas.height=
window.innerHeight;

}


resize();


window.addEventListener(
"resize",
resize
);



let stars=[];


for(let i=0;i<180;i++){


stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

speed:Math.random()*0.5,

alpha:Math.random()

});


}



function drawStars(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



stars.forEach(star=>{


ctx.beginPath();


ctx.arc(
star.x,
star.y,
star.r,
0,
Math.PI*2
);



ctx.fillStyle=
`rgba(255,255,255,${star.alpha})`;


ctx.fill();



star.y+=star.speed;


if(star.y > canvas.height){

star.y=0;

}


});


requestAnimationFrame(drawStars);


}


drawStars();


}




// ===============================
// FINAL BUTTON
// ===============================


const finish=
document.getElementById("finishButton");


if(finish){


finish.onclick=()=>{


alert(
"Ümid edirəm bu kiçik sürpriz üzündə təbəssüm yaratdı 😊\n\n— Raul"
);


};


}
