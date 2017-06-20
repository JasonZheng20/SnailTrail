var Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;
	var ready = false;

	this.preload = function() {
		this.load.image('player','img/phaser-dude.png');
		this.load.image('platform','img/platform.png');
		// These are the assets we loaded in Boot.js
		// this.background = this.add.sprite(0, 0, 'preloaderBackground');
		//this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		// Scale a sprite's width from 0 to 100%
		//this.load.setPreloadSprite(this.preloadBar);

		//Here we load the rest of the assets our game needs.
		//this.load.image('titlepage', 'images/title.jpg');
		//this.load.atlas('playButton', 'images/play_button.png', 'images/play_button.json');
		//this.load.audio('titleMusic', ['audio/main_menu.mp3']);
		//this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');

	};

	this.create = function() {

		// Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		//this.preloadBar.cropEnabled = false;

		this.state.start('MainMenu');
	};

	this.update = function() {

		// You don't actually need to do this, but I find it gives a much smoother game experience.
		// Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		// You can jump right into the menu if you want and still play the music, but you'll have a few
		// seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		// it's best to wait for it to decode here first, then carry on.

		// If you don't have any music in your game then put the game.state.start line into the create function and delete
		// the update function completely.

		//if (this.cache.isSoundDecoded('titleMusic') && this.ready == false) {
			//this.ready = true;
			//this.state.start('MainMenu');
		//}

	};

};
