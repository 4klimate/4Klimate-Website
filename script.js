//$(document).ready(function() {
   // This is where our code will go
//});


function randomAdvice(advice){
  randomValue = advice[Math.floor(Math.random() * advice.length)];
  if (advice.length >= 1){
    alert(randomValue);
  }
  else{
    alert('congrats you have completed every challenge!')
  }
  advice = advice.splice(advice.indexOf(randomValue), 1);
  console.log(advice);

}

dictionary = {
  'first':["Louis Sansevero", 4],
  'second':["Robert Goll", 3],
  'third':["Simone Zabid", 2],
  'fourth':["Cyrus Kottmeier", 1]
};

var Robert_Goll = 4;
console.log(Robert_Goll);
console.log(dictionary);
console.log(dictionary.first[0])
//var x = document.createElement("P");
//var t = document.createTextNode(dictionary.first[0]);
//x.appendChild(t);
//document.body.appendChild(x);

function adding(){
  CC++;
  console.log(CC);
}