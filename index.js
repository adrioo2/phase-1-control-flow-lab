function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return 'This one is on me!'}
else if (distance > 400 && distance <= 2000) {return 'That will be twenty bucks.'}
  else if (distance > 2000 && distance <=2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else  {return 'No can do.'}
  }

  function ternaryCheckCity(location){
    return location === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  }

  function switchOnCharmFromTip(amount){
    switch(amount){
      case 'generous' :
         return 'Thank you so much.'
      case 'not as generous' :
        return 'Thank you.'
      default :
        return 'Bye.'
    }
  }