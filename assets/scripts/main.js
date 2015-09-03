require.config({
    baseUrl: 'assets/scripts',
    paths: {
        'jquery' : 'libs/jquery',
		'underscore' : 'libs/underscore',
		'backbone' : 'libs/backbone',
		'localstorage' : 'libs/backbone.localStorage',
		'bootstrap' : 'libs/bootstrap'
    },
	 shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap:{
        	exports:'bootstrap'
        },
        localstorage : {
        	exports:'localstorage'
        }
    }
});


require(['app'], 
function(App){
    App.initialize();
});