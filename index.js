function theBeatlesPlay(musicians, instruments){
  var temp=[]

  for( var i= 0; i < musicians.length; i++){
    temp.push( musicians[i] + " plays " + instruments[i] )
  }
  return temp

}

function johnLennonFacts(facts){
  var i =0;
  var temp = [];
  while (i<facts.length){
    temp.push (facts[i] + "!!!");
    i++;
  }
  return temp

}


function iLoveTheBeatles(n){
  var temp =[];
  var i =0;
  do{
    temp.push("I love the Beatles!")
    i++
  }while(n<15 && i<n+1)
  return temp

}



// //////before
// 
// function theBeatlesPlay(musicians, instruments){
//   var i =0;
//   var result =[];
//   for(;musicians[i];i++){
//     result[i] =musicians[i] + " plays " + instruments[i];
// 
//   }
//   //console.log(result);
//   return result;
// }
// 
// 
// function johnLennonFacts (facts){
//   var result = [];
//   var i =0;
//   while(facts[i]){
//     result[i] = facts[i] + "!!!";
//     i++;
//   }
//   return result;
// }
// 
// 
// function iLoveTheBeatles(deep){
//   var result =[];
//   var i =0;
//   do{
//     result[i] = "I love the Beatles!";
//     i++;
//   }while(i <= deep && deep < 15);
//   return result;
// 
// }
