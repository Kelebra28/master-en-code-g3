const timer = (otraFuncion, time) => {
  console.log('funcion', otraFuncion);
  console.log('time', time);
  for (let index = 0; index <= time; index++) {
    if (index === time) {
      otraFuncion();
    }
  }
};

const saludo = () => {
    console.log('Hola a todos')
};

timer(saludo, 300000000);

const suma = () => console.log(2+3);

timer(suma, 300000000);

timer(() => {
  console.log('hey yo soy el callback')
}, 300000000)
