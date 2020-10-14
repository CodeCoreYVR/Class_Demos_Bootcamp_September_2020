// defining a constant `SPACE` which is used in many places
// to keep code DRY, readable, and maintainable (if we ever need to change SPACE we can do it in one place)
const SPACE = ' ';

// the keyword `this` within the object's methods refers to the owner object
// the methods `leftPad`, `rightPad`, and `pad` are owned by the object `StringExtras`
// so calling `this` within it refers to the `StringExtras` object
const StringExtras = {
  repeat: function(string, number) {
    let repeated_string = '';
    for (let index = 0; index < number; index++) {
      repeated_string += string;
    }
    return repeated_string;
  },
  
  leftPad: function(string, string_length_with_padding) {
    let ammount_of_padding = this.calculatePadding(string, string_length_with_padding);
    let left_pad_string = this.repeat(SPACE, ammount_of_padding);
    left_pad_string += string;
    return left_pad_string;
  },

  rightPad: function(string, string_length_with_padding) {
    let ammount_of_padding = this.calculatePadding(string, string_length_with_padding);
    let right_pad_string = this.repeat(SPACE, ammount_of_padding);
    right_pad_string = string += right_pad_string;
    return right_pad_string;
  },

  calculatePadding: function(string, number) {
    if (string.length < number) {
      return number - string.length;
    }
    return 0;
  },

  pad: function(string, string_length_with_padding) {
    let amount_of_padding = (this.calculatePadding(string, string_length_with_padding));
    let left_padding, right_padding;
    // check if the amount of padding is even
    if (amount_of_padding % 2 === 0) {
      // if it is then we can add even number of spaces to each side of the string
      const padding = amount_of_padding/2;
      left_padding = this.repeat(SPACE, padding);
      right_padding = this.repeat(SPACE, padding);
    } else {
      // if the number of padding needed is odd then we will add the extra space to the left side
      const padding = Math.floor(amount_of_padding/2)
      left_padding = this.repeat(SPACE, padding + 1);
      right_padding = this.repeat(SPACE, padding);
    }
    return left_padding += string += right_padding;
  },

  capitalize: function(string) {
    const first_letter = string.slice(0,1).toUpperCase();
    const remaining_letters = string.slice(1, string.length);
    return `${first_letter}${remaining_letters}`;
  }
};

let a = 'you';

console.log(StringExtras.repeat(a, 3)); // returns 'youyouyou'
console.log(StringExtras.repeat(' ', 6)); // returns '      '
console.log(StringExtras.leftPad(a, 5)); // returns '  you'
console.log(StringExtras.leftPad(a, 1)); // returns 'you'
console.log(StringExtras.leftPad(a, 3)); // returns 'you'
console.log(StringExtras.leftPad(a, 4)); // returns ' you'
console.log(StringExtras.rightPad(a, 6) + 'me'); // returns 'you   me'
console.log(StringExtras.pad(a, 5)); // returns ' you '
console.log(StringExtras.pad(a, 6)); // returns '  you '
console.log(StringExtras.pad(a, 10)); // returns '    you   '
console.log(StringExtras.capitalize(a)); // returns 'You'