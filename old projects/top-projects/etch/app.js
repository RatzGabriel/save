function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return b - a;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, numberOne, numberTwo) {
  switch (operator) {
    case 'add':
      return add(numberOne, numberTwo);

    case 'subtract':
      return subtract(numberOne, numberTwo);

    case 'multiply':
      return multiply(numberOne, numberTwo);

    case 'divide':
      return divide(numberOne, numberTwo);
    default:
      return;
  }
}

const main = () => {
  const div = document.getElementById('wrapper');
  let p = document.getElementById('p');
  let input = 0;
  p.innerText = input;

  for (let i = 1; i < 10; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    div.appendChild(button);
    button.addEventListener('click', function () {
      input += i;
      p.innerText = input;
    });
  }
};

main();
