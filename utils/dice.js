
function getDiceRollArray(data){

    return new Array(data).fill(0).map( () =>{
      return Math.floor((Math.random() * 6) + 1) ;
     })    
 }

 function getDicePlaceholder(diceCount){
  return new Array(diceCount).fill(0).map(function(){
    const dice = document.createElement('div');
    dice.setAttribute('class', 'placeholder-dice');
     dice.innerText=  ''
     return dice ;
  })
}

function result(m , e) {
  document.body.innerText = ''
  const msgs = document.createElement('div')
  msgs.setAttribute('class', 'end-game')
  const gameOver = document.createElement('h2')
  gameOver.innerText = 'Game Over'
  const endMsg = document.createElement('h3')
  endMsg.innerText = m
  const emoji = document.createElement('p')
  emoji.innerText = e
   msgs.appendChild(gameOver)
   msgs.appendChild(endMsg)
   msgs.appendChild(emoji)
   return msgs
}
function getPercentage(remainingHealth , maximumHealth) {
  return Math.floor(( 100 * remainingHealth) / maximumHealth);
}

  
export {getDiceRollArray, getDicePlaceholder, result , getPercentage}