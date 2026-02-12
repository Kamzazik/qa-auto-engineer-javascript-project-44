// Генерация случайного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Проверка на простое число
const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

// Основная логика игры
const runPrimeGame = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

export default runPrimeGame
