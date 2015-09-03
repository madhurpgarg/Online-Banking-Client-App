define([ 'jquery', 'bootstrap', 'underscore', 'backbone', 'localstorage',
		'Views/AddAccountView', 'Views/AddedAccountsTableView',
		'Views/HomeView', 'Views/TransactionStatementView',
		'Views/TransferAmountView', 'Views/ContactUsView',
		'Models/BeneficiaryAccountCollection', 'Models/TransactionModel',
		'Models/TransactionCollection',
		'text!../templates/navigatorTemplate.html' ], function($, boot, _,
		Backbone, localstorage, AddAccountView, AddedAccountsTableView,
		HomeView, TransactionStatementView, TransferAmountView, ContactUsView,
		BeneficiaryAccountCollection, TransactionModel, TransactionCollection,
		navigatorTemplate) {
	var NavView = Backbone.View.extend({
		el : '#header',

		template : _.template(navigatorTemplate),
		events : {
			'click ul>li>a' : 'preShow',
			'click #home>a' : 'showHome',
			'click #add-account>a' : 'showAccountDetailsView',
			'click #check-balance>a' : 'showTransactionStatementView',
			'click #transfer-amount>a' : 'showtransferAmountView',
			'click #contact-us>a' : 'showContactUsView',
		},

		initialize : function() {

		},

		preShow : function() {
			// console.log('Pre Show');
			$('#header>ul>li.active').removeClass("active");
		},

		showHome : function(event) {
			// console.log('Home');
			var homeView = new HomeView();
			homeView.render();
			$(event.target).tab('show');
		},

		showAccountDetailsView : function(event) {
			event.preventDefault();
			// console.log("Showing Account Details Page");

			var beneficiaryAccounts = new BeneficiaryAccountCollection();

			var addAccountView = new AddAccountView(beneficiaryAccounts);
			addAccountView.render();

			var addedAccountsTableView = new AddedAccountsTableView(
					beneficiaryAccounts);
			addedAccountsTableView.render();

			// console.log(this);
			// console.log(event.target);

			$(event.target).tab('show');

		},

		showTransactionStatementView : function(event) {
			event.preventDefault();
			console.log('Transaction Statement');
			
			var transactionCollection = new TransactionCollection();
			
			/*transactionCollection.fetch({ 
				url : 'assets/scripts/data/transactions.json',
			    success: function() {
			          console.log("JSON file load was successful", transactionCollection);
			      },
			    error: function(){
			       console.log('There was some error in loading and processing the JSON file');
			    }
			  });*/
			var transactionStatementView = new TransactionStatementView(
					transactionCollection);
			transactionStatementView.render();
			$(event.target).tab('show');

		},

		showtransferAmountView : function(event) {
			event.preventDefault();
			console.log('Transfer');
			var transferAmountView = new TransferAmountView();
			transferAmountView.render();
			$(event.target).tab('show');
		},

		showContactUsView : function(event) {
			event.preventDefault();
			console.log('Contact');
			var contactUsView = new ContactUsView();
			contactUsView.render();
			$(event.target).tab('show');
		},

		render : function() {
			this.$el.html(navigatorTemplate);
		},
	});
	return NavView;
});
