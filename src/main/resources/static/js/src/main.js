'use strict';

require(['config/config-require'], function () {


    require(

        [
            'jquery',
            'bootstrap',
            'angular',
            'angular-route',
            './app'
        ],

        function ($, bootstrap, angular, App) {


            angular.element().ready(function() {
                angular.bootstrap(document, ['app']);
            });

        }
    );


});