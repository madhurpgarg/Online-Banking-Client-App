define([ 'jquery', 'underscore', 'backbone',
		'text!../templates/transactionStatementTemplate.html' ], function($, _, Backbone,
				transactionStatementTemplate) {
	var TransactionStatementView  = Backbone.View.extend({
		el : '#check-balance-container',

		template: _.template(transactionStatementTemplate),
		
		initialize : function(transactionCollection) {
			
			_.bindAll(this);
			this.collection = transactionCollection;
			this.collection.bind('all', this.render, this);
			
		},

		render : function() {
			this.$el.html(this.template({ transactions: this.collection.toJSON() }));
		},
	});
	return TransactionStatementView;
});
