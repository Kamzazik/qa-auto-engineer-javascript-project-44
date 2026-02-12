#!/usr/bin/env node

import runGame from '../src/index.js'
import runBrainCalcGame from '../src/games/brain-calc.js'

const gameDescription = 'What is the result of the expression?'

runGame(gameDescription, runBrainCalcGame)
