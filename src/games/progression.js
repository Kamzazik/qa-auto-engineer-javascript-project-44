// Генерация случайного числа в диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Создание арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

// Основная логика игры
const runProgressionGame = () => {
  const progressionLength = getRandomNumber(5, 10) // длина от 5 до 10
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(2, 10)
  const hiddenIndex = getRandomNumber(0, progressionLength - 1)

  const progression = generateProgression(start, step, progressionLength)
  const correctAnswer = String(progression[hiddenIndex])

  // Заменяем скрытый элемент на '..'
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return { question, correctAnswer }
}

export default runProgressionGame
