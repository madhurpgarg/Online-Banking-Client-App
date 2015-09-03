define([ 'jquery', 'underscore', 'backbone',
		'text!../templates/contactusTemplate.html' ], function($, _, Backbone,
				contactusTemplate) {
	var ContactUsView  = Backbone.View.extend({
		el : '#contact-us-container',

		initialize : function() {
			template: _.template(contactusTemplate);
		},

		render : function() {
			this.$el.html(contactusTemplate);
		},
	});
	return ContactUsView;
});
