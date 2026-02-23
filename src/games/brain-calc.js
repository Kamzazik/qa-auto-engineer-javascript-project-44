import getRandomNumber from '../utils.js'

// Функция для вычисления результата
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    default: return null
  }
}

// Основная функция игры калькулятор
const runCalcGame = () => {
  const num1 = getRandomNumber(1, 20)
  const num2 = getRandomNumber(1, 20)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomNumber(0, operators.length - 1)]

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))

  return { question, correctAnswer }
}

export default runCalcGame
