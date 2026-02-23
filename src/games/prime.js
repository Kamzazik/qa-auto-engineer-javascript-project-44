import getRandomNumber from '../utils.js'

// Функция проверки на простоту
const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

// Основная функция игры простое число
const runPrimeGame = () => {
  const number = getRandomNumber(1, 50)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

export default runPrimeGame
