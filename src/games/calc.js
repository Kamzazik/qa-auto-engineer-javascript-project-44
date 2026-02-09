// Генерация случайного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Генерация случайного оператора (+, -, *)
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

// Вычисление результата
const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

// Основная функция игры калькулятор
const runCalcGame = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const operator = getRandomOperator();
  
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, operator, num2));
  
  return { question, correctAnswer };
};

export default runCalcGame;
