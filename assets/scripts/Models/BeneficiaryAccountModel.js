define([ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
	
	var BeneficiaryAccountModel = Backbone.Model.extend({
		
		url:'/',
		
	defaults: {
		accountNumber : '00000',
		accountHolderName : 'Default',
		bankName : 'default',
		ifscCode : 'default'
	},
		
	initialize : function() {
			
			
		}
	
		
	});
	return BeneficiaryAccountModel;
	
});