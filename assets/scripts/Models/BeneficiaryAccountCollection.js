define(
		[ 'jquery', 'underscore', 'backbone', 'Models/BeneficiaryAccountModel' ],
		function($, _, Backbone, BeneficiaryAccountModel) {

			var BeneficiaryAccountCollection = Backbone.Collection.extend({

				model : BeneficiaryAccountModel,
				localStorage :	new Backbone.LocalStorage("beneficiaryAccounts"),

				initialize : function() {
					this.on('add', this.added);
					this.fetch();
				},
				
				added : function(event) {
					
					/*if (localStorage.getItem('beneficiaryAccounts') != null)
						localStorage.removeItem('beneficiaryAccounts');
					// console.log(JSON.stringify(this));
					localStorage.setItem('beneficiaryAccounts',this.toJSON());
					
					// localStorage.setItem('beneficiaryAccounts',JSON.stringify(this));*/
					
					 console.log(JSON.stringify(this));					
				}

			});
			return BeneficiaryAccountCollection;

		});