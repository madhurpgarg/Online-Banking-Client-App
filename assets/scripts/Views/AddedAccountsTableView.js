define([ 'jquery', 'underscore', 'backbone',
		'text!../templates/addedAccountsTableTemplate.html' ], function($, _,
		Backbone, addedAccountsTableTemplate) {
	var AddedAccountsTableView = Backbone.View.extend({
		el : '#accounts-table',

		template : _.template(addedAccountsTableTemplate),
		initialize : function(benefitiaryAccounts) {
			_.bindAll(this);
			this.collection = benefitiaryAccounts;
			this.collection.bind('all', this.render, this);
		},

		render : function() {
			this.$el.html(this.template({ beneficiaryAccounts: this.collection.toJSON() }));
			return this;
		},
	});
	return AddedAccountsTableView;
});
