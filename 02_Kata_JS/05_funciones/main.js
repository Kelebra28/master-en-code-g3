// Ejercicio 1
function sum(a, b) {
  return a + b;
}

// Ejercicio 2
function subs(a, b) {
  return a - b;
}

// Ejercicio 3
function mayorDeEdad(edad) {
  if (edad >= 18) {
    return "Mayor de edad";
  } else {
    return "Menor de edad";
  }
}

// Ejercicio 4
function evaluate(num) {
  if (num === 0) {
    return "Cero"
  } else if (num > 0) {
    return "Positivo"
  } else {
    return "Negativo"
  }
}

// Ejercicio 5
function letter(letra) {
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return "Vocal"
  } else {
    return "Consonante"
  }
}

// Ejercicio 6
function game(player1, player2) {
  if (player1 === "Papel" && player2 === "Papel" || player1 === "Tijeras" && player2 === "Tijeras" || player1 === "Piedra" && player2 === "Piedra") {
    return "Empate"
  } else if (player1 === "Papel" && player2 === "Piedra" || player1 === "Tijeras" && player2 === "Papel" || player1 === "Piedra" && player2 === "Tijeras") {
    return "J1"
  } else if (player2 === "Papel" && player1 === "Piedra" || player2 === "Tijera" && player1 === "Papel" || player2 === "Piedra" && player1 === "Tijeras") {
    return "J2"
  } else {
    return "Algo no salió como se esperaba"
  }
}