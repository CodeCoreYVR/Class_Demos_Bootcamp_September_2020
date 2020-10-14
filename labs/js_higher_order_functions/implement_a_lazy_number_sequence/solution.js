let l = console.log;

function numberSeq(a = 0, b = 1) {
  let count = a - b;
  return function() {
    return (count += b);
  };
}

const numbers = numberSeq();
l(numbers()); // returns 0
l(numbers()); // returns 1
l(numbers()); // returns 2
l(numbers()); // returns 3
l(numbers()); // returns 4

const numbersSkip5 = numberSeq(10, 5);
l(numbersSkip5()); // returns 10
l(numbersSkip5()); // returns 15
l(numbersSkip5()); // returns 20
l(numbersSkip5()); // returns 25
l(numbersSkip5()); // returns 30
