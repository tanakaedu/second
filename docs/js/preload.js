/**
 * 準備処理
 * 画像の読み込みなどを行う
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
function preload() {

    game.load.baseURL = "https://tanakaedu.github.io/second/";
    game.load.crossOrigin = "anonymous";

    game.load.image('star', 'assets/images/star.png');
    game.load.spritesheet('dude', 'assets/images/dude.png', 32, 48);

}
