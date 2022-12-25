import {getDiceRollArray, getDicePlaceholder , getPercentage} from "./dice.js";

class Character{

   constructor(data){
    Object.assign(this, data);
    this.maxHealth = this.health
    this.diceArray = getDicePlaceholder(this.diceCount)
   }
  

    getHealthBar (){
      const percent = getPercentage(this.health , this.maxHealth)
       const bar = document.createElement("div")
       bar.setAttribute("class", "health-bar-outer")
        const innerBar = document.createElement("div")
        innerBar.setAttribute("class", percent <= 25 ? "health-bar-inner danger" : 'health-bar-inner' )
       innerBar.style.width = `${percent}%` 
       bar.appendChild(innerBar);
      return bar;
    
    }

    takeDamage (data){
      
   let total = data.reduce( (total , current) => total + current)
 
    this.health -= total
    if(this.health <= 0){
      this.dead = true
      this.health = 0
    }
  
   

      console.log(this.name + " taken damage" + total);
    }
   
    getDice (diceCount){ 

      this.currentDiceScore = getDiceRollArray(this.diceCount)
   
      this.diceArray = this.currentDiceScore.map( dices => {
     const dice = document.createElement('div');
     dice.setAttribute('class', 'dice');
      dice.innerText= dices
      return dice ;

    })
   
  }
 
 renderCharacter (){ 
  const {id , name , avatar , health , diceCount} = this;

  const healthBar = this.getHealthBar();
  console.log(healthBar);
    
const container = document.createElement('div');
container.setAttribute('class', 'character-card');

 const names = document.createElement('h4');
 names.setAttribute('class', 'name');
   names.innerText = name;

   const image = document.createElement('img');
   image.setAttribute('class', 'avatar');
   image.setAttribute('src', avatar);

   const healths = document.createElement('p');
   healths.setAttribute('class', 'health');
    healths.innerText =`health: ${health}`;

    const diceConainer = document.createElement('div');
    diceConainer.setAttribute('class', 'dice-container');


  
 container.appendChild(names);
 container.appendChild(image);
 container.appendChild(healths);
 container.appendChild(healthBar);
 container.appendChild(diceConainer);

 this.diceArray.map( items =>{
  diceConainer.appendChild(items);
 })

 return container ;
}
}

export default Character ;