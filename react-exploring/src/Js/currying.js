// Currying is a technique to convert number of function arguments into function calls.

// Normal Function, because of closer inner function can access outer variables
function currySum(a) {
  return function (b) {
    console.log(a + b);
  };
}

currySum(5)(8);

// Arrow function
const currySum1 = (a) => (b) => console.log(a + b);
currySum1(5)(7);

// use case to reuse some function with fixed paramter
const currySum2 = (a) => (b) => console.log(a + b);
const currySumto8 = currySum2(8);
currySumto8(2);
