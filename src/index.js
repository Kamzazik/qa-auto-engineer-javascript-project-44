import readlineSync from 'readline-sync'
import greetUser from './cli.js'

// Общая функция для запуска любой игры
const runGame = (gameDescription, getGameData) => {
  const userName = greetUser()
  console.log(gameDescription)

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getGameData()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default runGame
