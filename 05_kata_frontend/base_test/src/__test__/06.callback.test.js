import { callBack, reverseString } from '../callback';

describe('Probando callback', () => {
  test('Callback', () => {
    function otherCallBack(data) {
      // console.log('dentro del test', data);
      expect(data).toBe('Hola a todos');
    };
    callBack(otherCallBack);
  });
  
  test('Probar callback', () => {
    reverseString('H o l a', (str) => {
      const joinStr = str.join("");
  
      expect(joinStr).toBe('aloH');
    });
  });
});
