#!/usr/bin/env node

import runGame from '../src/index.js'
import runProgressionGame from '../src/games/progression.js'

const gameDescription = 'What number is missing in the progression?'

runGame(gameDescription, runProgressionGame)
