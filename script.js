function convert() {
  var inputNumber = document.getElementById("number").value.trim();
  var fromBase = parseInt(document.getElementById("fromBase").value);
  var toBase = parseInt(document.getElementById("toBase").value);
  
  if (isNaN(parseInt(inputNumber, fromBase))) {
    document.getElementById("output").innerHTML = "Invalid input number for selected base.";
    return;
  }
  
  var result = parseInt(inputNumber, fromBase).toString(toBase).toUpperCase();
  
  document.getElementById("output").innerHTML = "Result: " + result;
}