function getName() {
  console.log(document.getElementById("myText").value);
  var firstName = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = firstName;
};

function suma() {
  var num1 = Number(document.getElementById('num1').value);
  var num2 = Number(document.getElementById('num2').value);
  var resultado = num1 + num2;

  return document.getElementById("resultado").innerHTML = resultado;
};