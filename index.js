let sum = 0;

const calculateSum = (n) => {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

const printFibonacciSeries = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    const c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
};

const appendNStars = (n) => {
  let str = "* ";
  for (let i = 1; i <= n; i++) {
    str += "* ";
  }

  return str;
};

const printPyramid = (rows) => {
  for (let i = 0; i < rows; i++) {
    console.log(appendNStars(i));
  }
};

const printCenterPyramid = (n) => {
  for(var i = 0; i<n-1;i++) {
    var string = "";

    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }

    for (let k = 0; k <= n - i - 1; k++) {
      string += "@";
    }

    console.log(string)
  }
}

printCenterPyramid(7)