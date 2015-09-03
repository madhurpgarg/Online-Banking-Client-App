define([ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
	
	var TransactionModel = Backbone.Model.extend({
		
		//url:'assets/scripts/data/transactions.json',
		
	defaults: {
		date : new Date(),
		amount : '00.00',
		type : 'DR',
		remark : 'default'
	},
		
	initialize : function() {
			
			
		}
	
		
	});
	return TransactionModel;
	
});