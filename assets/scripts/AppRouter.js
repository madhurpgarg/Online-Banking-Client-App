// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'Views/HomeView',
  'Views/NavView'
], function($, _, Backbone, HomeView,NavView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
    	'index.html': 'home',
      'home-container': 'home',
     // '#add': 'add',

      // Default
    /*  '/': 'defaultHandler',*/
    	  
     '*actions': 'defaultHandler'
    },
    initialize : function() {
		console.log("App Router is getting initialized");
		var navView = new NavView();
		navView.render();
		var homeView = new HomeView();
		homeView.render();
	},
    
    home : function(){
    	console.log("home");
    },
    
    defaultHandler : function() {
    	console.log("Default");
	}
  });

 /* var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('add', function(){
      // Call render on the module we loaded in via the dependency array
      // 'Views/ListView'
      var homeView = new HomeView();
      homeView.render();
    });
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('list', function(){
      var listView = new ListView();
      listView.render();
    });
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };*/
  return AppRouter;
});