
import characterData from "./data.js";
import Character from "./Character.js";
import { result , getPercentage } from "./dice.js";

let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false
function getNewMonster() {
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : {}
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster();


function render (){
   document.querySelector('#hero').innerText = '' ;
   document.querySelector('#monster').innerText = '' ;
   document.querySelector('#hero').appendChild(wizard.renderCharacter())  ;
   document.querySelector('#monster').appendChild(monster.renderCharacter())  ;
}

render();

document.getElementById('attack-button').addEventListener('click' , attack)

function attack() {
   if(!isWaiting){
   wizard.getDice()
   monster.getDice()
   wizard.takeDamage(monster.currentDiceScore);
   monster.takeDamage(wizard.currentDiceScore);
   getPercentage(wizard.health , wizard.maxHealth)
   console.log(getPercentage(wizard.health , wizard.maxHealth));
   getPercentage(monster.health , monster.maxHealth)
   render();

   if(wizard.dead){
      endGame()
  }
  else if(monster.dead){
   isWaiting = true
      if(monstersArray.length > 0){
          setTimeout(()=>{
              monster = getNewMonster()
              render()
              isWaiting = false
          },1000)
      }
      else{
          endGame()
      }
  }
}
}



function endGame() {
   isWaiting = true
   let message =  wizard.dead && monster.dead ? 'Both dead' : wizard.dead ? 'wizard died' : monster.dead ? `monsters dead` : ''
   let endEmoji = wizard.health && monster.health ? '☠️' : wizard.dead ? '☠️' : monster.dead ? '🔮' : ''

   setTimeout(()=>{
     document.body.append(result(message , endEmoji))
   }, 1500)
}

