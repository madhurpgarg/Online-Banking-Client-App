define([ 'jquery', 'underscore', 'backbone', 'Models/BeneficiaryAccountModel',
		'Models/BeneficiaryAccountCollection','Views/AddedAccountsTableView',
		'text!../templates/addAccountTemplate.html' ], function($, _, Backbone,
		BeneficiaryAccountModel, BeneficiaryAccountCollection,AddedAccountsTableView,
		addAccountTemplate) {
	var AddAccountView = Backbone.View.extend({

		el : '#add-account-form',

		template : _.template(addAccountTemplate),

		events : {
			'click #add-account-btn' : 'addAccount'
		},

		initialize : function(beneficiaryAccounts) {
			this.beneficiaryAccounts = beneficiaryAccounts; 
			
		},

		addAccount : function(event) {
			//console.log("Adding Account");
			event.preventDefault();

			var beneficiaryAccount = new BeneficiaryAccountModel({
								accountNumber : this.$el.find('#account-number', this.$el).val(),
								accountHolderName : this.$el.find('#account-holder-name',this.$el).val(),
								bankName : this.$el.find('#bank-name', this.$el).val(),
								ifscCode : this.$el.find('#ifsc-code', this.$el).val(),
			});

			//beneficiaryAccount.save();
			//this.beneficiaryAccounts.add(beneficiaryAccount);
			this.beneficiaryAccounts.create({
				accountNumber : this.$el.find('#account-number', this.$el).val(),
				accountHolderName : this.$el.find('#account-holder-name',this.$el).val(),
				bankName : this.$el.find('#bank-name', this.$el).val(),
				ifscCode : this.$el.find('#ifsc-code', this.$el).val()
			});
			//console.log(event.target);
			//console.log(this);
		},

		render : function() {
			this.$el.html(this.template);
		},
	});
	return AddAccountView;
});
