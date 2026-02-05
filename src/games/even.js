const isEven = (num) => num % 2 === 0;

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const runEvenGame = () => {
  const number = getRandomNumber();
  const answer = isEven(number) ? 'yes' : 'no';

  return {
    question: String(number),
    correctAnswer: answer,
  };
};

export default runEvenGame;
