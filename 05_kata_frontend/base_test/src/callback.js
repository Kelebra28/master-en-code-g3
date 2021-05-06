export const callBack = (funcion) => {
  // console.log('me estoy ejecutando', callBack)
  funcion('Hola a todos');
};

export const reverseString = (str, callback) => {
  let myString = str.split(" ");
  myString = myString.reverse();

  callback(myString);
};