#!/usr/bin/env node
import readlineSync from 'readline-sync';
import runEvenGame from '../src/games/even.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const { question, correctAnswer } = runEvenGame();
  
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim();
  
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    process.exit(0);
  }
  
  console.log('Correct!');
}

console.log(`Congratulations, ${userName}!`);
