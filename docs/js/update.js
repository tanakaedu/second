/**
 * 更新処理
 * 1フレームごとに実行される更新処理
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
function update() {
    // dudeとstarsグループ内のすべての星が衝突するようになる
    // let hit = game.physics.arcade.collide(dude, stars);

    // dudeと星が重なったら、その星を消す処理(pickStar)を呼び出す
    game.physics.arcade.overlap(dude, stars, pickStar, null, this);

    //  only move when you click
    if (game.input.mousePointer.isDown || game.input.pointer1.isDown)
    {
        //  400 is the speed it will move towards the mouse
        game.physics.arcade.moveToPointer(dude, 400);

        //  if it's overlapping the mouse, don't move any more
        if (Phaser.Rectangle.contains(dude.body, game.input.x, game.input.y))
        {
            dude.body.velocity.setTo(0, 0);
        }
    }
    else
    {
        dude.body.velocity.setTo(0, 0);
    }

    
    if (dude.body.velocity.x > 0) {
        dude.animations.play("right");
    }
    else {
        dude.animations.play("left");
    }
}

// dudeに、最初に設定したスプライト、starに、次に設定したグループ内のスプライトが渡される
function pickStar(dude, star) {
    star.kill();
}
