class ShiftCipher {

    constructor(num) {
      this.num = num;
    }
  
    encrypt(string) {
      string = string.toUpperCase();
      let result = '';
      for (let i = 0; i < string.length; i++) {
         const charCode = string.charCodeAt(i);
         const shiftCode = charCode + this.num;
         if(charCode < 65 || charCode > 122) {
          result += string[i];
         }
        else if(shiftCode > 90) {
           const newShiftCode = charCode - (26 - this.num);
           result += String.fromCharCode(newShiftCode);
         } 
        else {
          result += String.fromCharCode(shiftCode);
        } 
      } 
     return result;
    }
  
    decrypt(string) {
      string = string.toLowerCase();
      let result = '';
      for(let i=0; i < string.length; i++) {
        const charCode = string.charCodeAt(i);
         const shiftCode = charCode - this.num;
         if(charCode < 65 || charCode > 122) {
          result += string[i];
         }
        else if(shiftCode < 97) {
           const newShiftCode = charCode + (26 - this.num);
           result += String.fromCharCode(newShiftCode);
         } 
        else {
          result += String.fromCharCode(shiftCode);
        } 
      } 
     return result;
      }
    }
  
  const cipher = new ShiftCipher(3);
  console.log(cipher.encrypt('I love to code!'));
  console.log(cipher.decrypt('K <3 OA RWRRA'));
  console.log(cipher.decrypt('ABCDEFG'));
  //'xyzabcd'.