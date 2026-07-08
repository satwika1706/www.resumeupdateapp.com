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
const cutePopup = document.getElementById("cutePopup");

const photos = [
"images/IMG-20260706-WA0002.jpg",
"images/IMG-20260706-WA0006.jpg",
"images/IMG-20260706-WA0013.jpg",
"images/IMG-20260706-WA0014.jpg",
"images/IMG-20260706-WA0015.jpg",
"images/photo1.jpg.jpeg",
"images/photo2.jpg.jpeg",
"images/photo3.jpg.jpeg",
"images/photo4.jpg.jpeg",
"images/photo5.jpg.jpeg",
"images/photo6.jpg.jpeg",
"images/photo7.jpg.jpeg",
"images/photo8.jpg.jpeg",
"images/photo9.jpg.jpeg",
"images/photo10.jpg.jpeg",
"images/photo11.jpg.jpeg",
"images/photo12.jpg.jpeg",
"images/photo13.jpg.jpeg"
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

cutePopup.classList.add("show");

setTimeout(()=>{
cutePopup.classList.remove("show");
},4000);

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

for(let i=0;i<35;i++){
setTimeout(()=>{
createFlower();
},i*40);
}
   
window.scrollTo({
top:0,
behavior:"smooth"
});

},1200);

};

/* Slideshow */

/* Slideshow */

function startSlideshow(){

setInterval(()=>{

currentPhoto++;

if(currentPhoto>=photos.length){
currentPhoto=0;
}

const nextImage = new Image();
nextImage.src = photos[currentPhoto];

nextImage.onload = ()=>{

slideImage.style.opacity="0.4";

setTimeout(()=>{

slideImage.src = nextImage.src;
slideImage.style.opacity="1";

},200);

};

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

const flowers=[
"🌸","🌺","🌷","💐","🌹","🌼","🪷","🌻",
"🍫","🍫","🍫","🍫",
"🍬","🍬",
"🍭","🍭",
"🎀",
"💝",
"🎁",
"💖",
"✨"
];

function createFlower(){

const flower=document.createElement("div");

flower.className="flyingButterfly";

flower.innerHTML=
flowers[Math.floor(Math.random()*flowers.length)];

const rect=giftBox.getBoundingClientRect();

flower.style.left=
(rect.left+rect.width/2+(Math.random()*120-60))+"px";

flower.style.top=
(rect.top+rect.height/2)+"px";

flower.style.fontSize=
(35+Math.random()*35)+"px";

flower.style.setProperty("--x",(Math.random()*800-400)+"px");
flower.style.setProperty("--y",(-600-Math.random()*400)+"px");

flower.style.animationDuration=
(3+Math.random()*4)+"s";

document.body.appendChild(flower);

setTimeout(()=>{
flower.remove();
},7000);

}
