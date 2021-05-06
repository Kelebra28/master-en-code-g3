import axios from 'axios';

export const getDataFromApi = (url) => {
  const peticion=  axios
              .get(url)
              .then( ({ data: {results} } ) => {
                return results;
              });

  return peticion;
};

export const reverseStringTwo = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) reject(Error('error'));
    resolve(str.split("").reverse().join(""));
  })
}