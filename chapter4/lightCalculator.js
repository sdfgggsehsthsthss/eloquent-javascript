calculator = (...calculated) => {
  let acc = [];
  let operator = [];
  for (let index of calculated) {
    if (!isNaN(index)) {
      acc.push(Number(index));
    }
    if (isNaN(index)) {
      operator.push(index);
    }
  }
  for (let i = 0; i <= operator.length; i++) {
    if (operator[i] === `+`) {
      acc[i + 1] = acc[i] + acc[i + 1];
    }
    if (operator[i] === `-`) {
      acc[i + 1] = acc[i] - acc[i + 1];
    }
    if (operator[i] === `*`) {
      acc[i + 1] = acc[i] * acc[i + 1];
    }
    if (operator[i] === `/`) {
      acc[i + 1] = acc[i] / acc[i + 1];
    }
  }
  return acc[acc.length - 1];
};
console.log(calculator(1, `+`, 2, `-`, 7, `+`, `10`));
