var Boot = function(game) {
	this.init = function() {

		// Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
		this.input.maxPointers = 1;

		// Pause if the browser tab or game is in loses focus.
		this.stage.disableVisibilityChange = true;

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		// Scale the width down to avoid vertical scrolling
		this.scale.windowConstraints.bottom = "visual";

		// Always center the game
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		if (this.game.device.desktop) {

		} else {
			// We're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
			this.scale.setMinMax(260, 130, 1024, 768);
			this.scale.forceLandscape = true;
			this.scale.pageAlignHorizontally = true;
		}

	};

	this.preload = function() {

		// Here we load the assets required for our preloader
		//this.load.image('preloaderBackground', 'images/preloader_background.jpg');
		//this.load.image('preloaderBar', 'images/preloadr_bar.png');

	};

	this.create = function() {

		// By this point the preloader assets have loaded to the cache, we've set the game settings
		// So now let's start the real preloader going
		this.state.start('Preloader');

	};
}
