import getRandomNumber from '../utils.js'

// Создание арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

// Основная функция игры прогрессия
const runProgressionGame = () => {
  const progressionLength = getRandomNumber(5, 10)
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
