function triangleTracker() {
  var a = parseInt(document.getElementById('A').value);
  var b = parseInt(document.getElementById('B').value);
  var c = parseInt(document.getElementById('C').value);
   if (a === b && a === c && b === c){
   alert("equilateral");
   }
else if ( a !== b && b !== c && c !== a) {
  alert("scalene");
}
else if ( a == b || a ===c || b ===c) {
  alert("isosceles");
}
else ( alert("this is not a triangle"));
}

