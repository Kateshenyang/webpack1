const game = new Game();
game.start();

import sum from './basic';

console.log('app worked');

console.log(sum([1, 2]));

import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';
