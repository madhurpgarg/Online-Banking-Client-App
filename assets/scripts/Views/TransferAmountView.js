define([ 'jquery', 'underscore', 'backbone',
		'text!../templates/amountTransferTemplate.html' ], function($, _, Backbone,
				amountTransferTemplate) {
	var TransferAmountView  = Backbone.View.extend({
		el : '#transfer-amount-container',

		initialize : function() {
			template: _.template(amountTransferTemplate);
		},

		render : function() {
			this.$el.html(amountTransferTemplate);
		},
	});
	return TransferAmountView;
});
