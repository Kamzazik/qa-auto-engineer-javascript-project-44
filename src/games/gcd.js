// Функция для нахождения НОД (алгоритм Евклида)
const findGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// Генерация случайного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Основная логика игры
const runGcdGame = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));

  return { question, correctAnswer };
};

export default runGcdGame;
