import Phaser from '../phaser/lib.js';
import Game from './scenes/game.js';

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    scene: [Game],
})
// console.dir(Phaser);
// console.log('hello world');
