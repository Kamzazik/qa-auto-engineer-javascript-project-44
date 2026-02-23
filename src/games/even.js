import getRandomNumber from '../utils.js'

// Функция проверки на чётность
const isEven = num => num % 2 === 0

// Основная функция игры чётность
const runEvenGame = () => {
  const number = getRandomNumber(1, 100) // <-- добавил аргументы
  const question = String(number)
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

export default runEvenGame
