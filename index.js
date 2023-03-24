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
    // Write your code here!
    if (location === 'NYC') {
      return 'Ok, sounds good.'
    }
    else {return 'No go.'}
  }

  function switchOnCharmFromTip(amount){
    // Write your code here!
    if (amount === 'generous') {
      return 'Thank you so much.'
    }
    else if (amount === 'not as generous') {
      return 'Thank you.'
    }
    else if (amount === 'thanks for everything') {
      return 'Bye.'
    }
  }