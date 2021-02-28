//$(document).ready(function() {
   // This is where our code will go
//});

function randomAdvice(){
  advice = ['Dont leave your water running', 'Use recycled bags while shopping', 'Ride your bike, walk, or use public transportation instead of driving a car', 'Recycle and compost', 'Use natural cleaning products', 'Switch off appliances when not in use', 'Unplug your charger when your device is fully charged', 'Wash your clothes at low temperature', 'Use short cycles for washing clothes', 'Fix leaks', 'Take short showers', 'Turn off the tap while brushing your teeth', 'Choose local seasonal produce', 'Reduce the amount of meals you eat containing meat', 'Avoid bottled water', 'Buy recycled paper', 'Grow food', 'Plant a tree', 'Dont litter'];

  randomValue = advice[Math.floor(Math.random() * advice.length)];
  
  console.log(randomValue);
  alert(randomValue);
}

dictionary = {
  'first':["Robert Goll", 4],
  'second':["Louis Sansevero", 3],
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