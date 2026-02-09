// Функция проверки на чётность
const isEven = (num) => num % 2 === 0;

// Генерация случайного числа
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Основная функция игры чётность
const runEvenGame = () => {
  const number = getRandomNumber();
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

export default runEvenGame;
