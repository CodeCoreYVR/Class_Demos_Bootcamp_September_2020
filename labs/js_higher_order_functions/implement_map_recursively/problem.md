Write the higher-order function, `reduce`, from scratch using **recursion**. It
takes 3 arguments in order:

- An array
- A callback that will be called with 3 arguments:
  - The result of the previous callback call (or the initial value for the first
    one)
  - The current value of the array
- An initial value

`reduce` example:

```
const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

reduce(numbers, plus, 0); // 15
reduce(numbers, (a, b) => a * b, 1); // 120
```

The following is a step-by-step demonstration of what is happening inside reduce
for the example, `reduce(arr, plus)`, above:

```
plus(0, 1)
      👇
  plus(1, 2) // first arg. is the result of last call, 1
        👇
    plus(3, 3) // first arg. is the result of last call, 3
          👇
      plus(6, 4) // first arg. is the result of last call, 6
            👇
        plus(10, 5) // first arg., result of last call, 10
               👇
               15 //Done! Returns 15
```

To learn more, visit
[MDN's documention on Javascript's Array reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
