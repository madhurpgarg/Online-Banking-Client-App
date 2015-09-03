// Filename: app.js
define([ 'jquery', 'underscore', 'backbone', 'AppRouter','Views/NavView' // Request router.js
], function($, _, Backbone, AppRouter,NavView) {
	var initialize = function() {
		// Pass in our Router module and call it's initialize function
		console.log("Routing is getting started!!");
		var appRouter = new AppRouter();
		Backbone.history.start();
	};

	return {
		initialize : initialize
	};
});