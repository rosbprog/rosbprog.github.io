window.addEventListener("load", function()
{
	var Q = window.Q = Quintus({development: true})
		.include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
		.setup(
		{
			width: 320,
			height: 180,
			scaleToFit: true
		}).controls().touch();


		Q.setImageSmoothing(false);


		//define scene
		Q.scene("level", function(stage)
		{
			Q.stageTMX("level_1.tmx", stage);
		});


		//load assets
		Q.loadTMX("level_1.tmx", function()
		{
			Q.stageScene("level");
		});

});