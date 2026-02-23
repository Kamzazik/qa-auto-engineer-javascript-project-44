import getRandomNumber from '../utils.js'

// Функция для нахождения НОД
const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

// Основная функция игры НОД
const runGcdGame = () => {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)

  const question = `${num1} ${num2}`
  const correctAnswer = String(gcd(num1, num2))

  return { question, correctAnswer }
}

export default runGcdGame
