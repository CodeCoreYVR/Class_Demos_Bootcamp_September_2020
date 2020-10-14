function Cipher(aKey, bKey) {
  this.aKey = aKey || 'abcdefghijklmnopqrstuvwxyz ';
  this.bKey = bKey;
}

Cipher.prototype.encode = function(str) {
  // We're given the string of "abc";
  let encodedString = '';
  for (let char of str) {
    const indexOfChar = this.aKey.indexOf(char); // index of charcter within A-Key
    const bKeyChar = this.bKey[indexOfChar]; // the character after it has been encoded 
    encodedString = encodedString + bKeyChar; // adding the encoded character to the encoded string
  }
  return encodedString;
}

Cipher.prototype.decode = function(str) {
  let decodedString = '';
  for (let char of str) {
    decodedString = `${decodedString}${this.aKey[this.bKey.indexOf(char)]}`
  }
  return decodedString;
}

const normalCipher = new Cipher(false, "etaoinshrdlucmfwypvbgkjqxz=");
console.log(normalCipher.encode("abc"));
const encodedString = normalCipher.encode("apples are my least favourite fruit")
console.log(encodedString);
console.log(normalCipher.decode(encodedString));
