/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
s

   [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]

   1-10 = 1-10
   j q k = 10
   ace = 1 || 11

   for loop over array. If index is x then value += worth


*/

function handValue(hand) {
  let score = 0;
  let aCount = 0; //for detecting # of Aces and their appropriate value

  for(i=0; i<hand.length; i++){
    if (hand[i] == "A"){
        score += 11;
        aCount += 1;
    }
    else if (hand[i] == "J" || hand[i] == "Q" || hand[i] == "K"){
      score += 10;
    }
    else {
      let card = parseInt(hand[i], 10);
      score += card;
    }
  }
  if (score>21 && aCount == 1){
    score -= 10;
  } else if (score>21 && aCount ==2){
    score -= 20;
  }
  console.log(score);
  return score;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
