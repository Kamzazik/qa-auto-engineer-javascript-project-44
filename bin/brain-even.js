#!/usr/bin/env node

import runGame from '../src/index.js'
import runEvenGame from '../src/games/even.js'

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

runGame(gameDescription, runEvenGame)
