cardsArray=
[
    `<img src="./src/images/Bat.png" alt="">`,
    `<img src="./src/images/Bones.png" alt="">`,
    `<img src="./src/images/Cauldron.png" alt="">`,
    `<img src="./src/images/Dracula.png" alt="">`,
    `<img src="./src/images/Eye.png" alt="">`,
    `<img src="./src/images/Ghost.png" alt="">`,
    `<img src="./src/images/Pumpkin.png" alt="">`,
    `<img src="./src/images/Skull.png" alt="">`
];
const n=cardsArray.length*2;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function card(i){
 return `<div class="flip-card">
 <div class="flip-card-inner">
     <div class="flip-card-front">
     <img src="./src/images/Question.jpg" alt="">
     </div>
     <div class="flip-card-back">
     ${cardsArray[i]}
     </div>
 </div>
 </div>`
}


let container=document.getElementsByClassName('container')[0];

shuffleArray(cardsArray);

for(let i=0;i<8;i+=1)
    {
    container.innerHTML+=card(i);
    }

shuffleArray(cardsArray);

for(let i=0;i<8;i+=1)
    {
    container.innerHTML+=card(i);
    }

// function a(){
// let div =document.querySelector('.a');
// console.log(div,"clicked");
// div.classList()
// }
