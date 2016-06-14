require.config({

    paths: {
        jquery   : '../../bower_components/jquery/dist/jquery',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
        angular  : '../../bower_components/angular/angular',
        ngRoute  : '../../bower_components/angular-route/angular-route'
    },

    shim: {
        jquery   : { exports: '$' },
        bootstrap: ['jquery'],
        angular  : { deps: ['jquery'], exports: 'angular' },
        ngRoute  : ['angular']
    },

    map: {
        '*': {
            'angular-route': 'ngRoute'
        }
    }

});