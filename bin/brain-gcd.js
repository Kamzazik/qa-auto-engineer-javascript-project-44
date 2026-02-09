#!/usr/bin/env node

import runGame from '../src/index.js';
import runGcdGame from '../src/games/gcd.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

runGame(gameDescription, runGcdGame);
