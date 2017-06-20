var Game = function (game) {
    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    var add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    var camera;    //  a reference to the game camera (Phaser.Camera)
    var cache;     //  the game cache (Phaser.Cache)
    var input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    var load;      //  for preloading assets (Phaser.Loader)
    var math;      //  lots of useful common math operations (Phaser.Math)
    var sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    var stage;     //  the game stage (Phaser.Stage)
    var time;      //  the clock (Phaser.Time)
    var tweens;    //  the tween manager (Phaser.TweenManager)
    var state;     //  the state manager (Phaser.StateManager)
    var world;     //  the game world (Phaser.World)
    var particles; //  the particle manager (Phaser.Particles)
    var physics;   //  the physics manager (Phaser.Physics)
    var rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

	this.init = function(){
        // var text = "I changed it!";
        // var style = { font: "24px Arial", fill: "#fff", align: "center" };
        // var t = game.add.text(this.world.centerX, this.world.centerY, text, style);
        // t.anchor.setTo(0.5, 0.5);
        game.stage.backgroundColor = '#85b5e1';
        game.load.image('player', 'img/phaser-dude.png');
        game.load.image('platform', 'img/platform.png');
	}

	this.create = function () {
        player = game.add.sprite(100, 200, 'player');

        game.physics.arcade.enable(player);

        player.body.collideWorldBounds = true;
        player.body.gravity.y = 100;

        platforms = game.add.physicsGroup();

        platforms.create(500, 150, 'platform');
        platforms.create(-200, 300, 'platform');
        platforms.create(400, 450, 'platform');

        platforms.setAll('body.immovable', true);

        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        console.log('success');
    };

  this.update = function () {
        game.physics.arcade.collide(player, platforms);

        player.body.velocity.x = 0;

        if (cursors.left.isDown)
        {
            player.body.velocity.x = -250;
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 250;
        }

        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
        {
            player.body.velocity.y = -400;
        }
  };

  this.quitGame = function (pointer) {

        this.state.start('MainMenu');
  };

};
