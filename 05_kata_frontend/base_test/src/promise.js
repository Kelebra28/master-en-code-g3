import axios from 'axios';

export const getDataFromApi = (url) => {
  return axios.get(url)
              .then( ({ data: {results} } ) => {
                return results;
              });

};

export const reverseStringTwo = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) reject(Error('error'));
    resolve(str.split("").reverse().join(""));
  })
}