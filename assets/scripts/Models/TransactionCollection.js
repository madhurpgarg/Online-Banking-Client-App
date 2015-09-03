define([ 'jquery', 'underscore', 'backbone', 'Models/TransactionModel' ],
		function($, _, Backbone, TransactionModel) {

			var TransactionCollection = Backbone.Collection.extend({

				model : TransactionModel,
				url : 'assets/scripts/data/transactions.json',
				//localStorage :	new Backbone.LocalStorage("transactions"),

				initialize : function() {
					this.on('add', this.added);
					this.fetch();
					console.log(JSON.stringify(this));	
				},

				added : function(event) {

				}

			});
			return TransactionCollection;

		});