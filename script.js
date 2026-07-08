/* =========================================
   PREMIUM BIRTHDAY WEBSITE
   script.js (PART 1)
========================================= */

const startBtn = document.getElementById("startBtn");
const giftSection = document.getElementById("giftSection");
const cakeSection = document.getElementById("cakeSection");
const gallery = document.getElementById("gallery");
const messageSection = document.getElementById("messageSection");
const footer = document.getElementById("footer");
const giftBox = document.getElementById("giftBox");
const typewriter = document.getElementById("typewriter");
const slideImage = document.getElementById("slideImage");

const photos = [
"images/IMG-20260706-WA0002.jpg",
"images/IMG-20260706-WA0006.jpg",
"images/IMG-20260706-WA0013.jpg",
"images/IMG-20260706-WA0014.jpg",
"images/IMG-20260706-WA0015.jpg"
];

let currentPhoto = 0;

/* Start Button */

startBtn.onclick = () => {

document.querySelector(".hero").style.display="none";

giftSection.classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});

};

/* Gift Click */

giftBox.onclick = () => {

giftBox.classList.add("openGift");

confetti({
particleCount:250,
spread:180,
origin:{y:0.6}
});

setTimeout(()=>{

giftSection.classList.add("hidden");

cakeSection.classList.remove("hidden");

gallery.classList.remove("hidden");

messageSection.classList.remove("hidden");

footer.classList.remove("hidden");

startSlideshow();

typeMessage();

launchFireworks();

window.scrollTo({
top:0,
behavior:"smooth"
});

},1200);

};

/* Slideshow */

function startSlideshow(){

setInterval(()=>{

currentPhoto++;

if(currentPhoto>=photos.length){

currentPhoto=0;

}

slideImage.style.opacity="0";

setTimeout(()=>{

slideImage.src=photos[currentPhoto];

slideImage.style.opacity="1";

},500);

},3000);

}

/* Typewriter */

let i=0;

function typeMessage(){

function typing(){

if(i<birthdayMessage.length){

typewriter.innerHTML+=birthdayMessage.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();

}

           /* =========================================
   PREMIUM BIRTHDAY WEBSITE
   script.js (PART 2)
========================================= */

/* Floating Hearts */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},9000);

}

setInterval(createHeart,700);

/* Floating Balloons */

const balloonColors=[
"#ff4d6d",
"#ff85a2",
"#ffd166",
"#70e000",
"#00bbf9",
"#9b5de5",
"#f15bb5"
];

function createBalloon(){

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.style.left=Math.random()*100+"vw";

balloon.style.background=
balloonColors[Math.floor(Math.random()*balloonColors.length)];

balloon.style.animationDuration=
(10+Math.random()*5)+"s";

document.body.appendChild(balloon);

setTimeout(()=>{
balloon.remove();
},15000);

}

/* Every 5 Seconds */

setInterval(createBalloon,5000);

/* Sparkles */

function sparkle(){

const star=document.createElement("div");

star.className="sparkle";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);

setTimeout(()=>{
star.remove();
},3000);

}

setInterval(sparkle,350);

/* Fireworks */

function launchFireworks(){

let count=0;

const fire=setInterval(()=>{

confetti({

particleCount:180,

spread:150,

startVelocity:45,

origin:{
x:Math.random(),
y:Math.random()*0.5
}

});

count++;

if(count==8){

clearInterval(fire);

}

},700);

}

/* Welcome Confetti */

window.onload=()=>{

confetti({

particleCount:120,

spread:120,

origin:{y:0.4}

});

};

/* Smooth Image Fade */

slideImage.onload=()=>{

slideImage.style.transition="1s";

};

/* End ❤️ */
