define(
		[ 'jquery', 'underscore', 'backbone','text!../templates/homeScreenTemplate.html'],
		function($, _, Backbone,homeScreenTemplate) {
			var HomeView = Backbone.View.extend({
				el:"#home-container",
				// Cache the template function for a single item.
				template : _.template(homeScreenTemplate),
				
				render : function() {
					this.$el.html( homeScreenTemplate );
				},
			});
			return HomeView;
		});