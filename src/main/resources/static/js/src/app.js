define(

    [
        'angular',
        'dashboard/module',
        'project/module',
        'user/module'
    ],

    function (angular, Dashboard, Projects, Users) {

        'use strict';

        return angular
            .module('app', ['ngRoute', 'app.dashboard', 'app.projects', 'app.users'])
            .config(['$routeProvider', function ($routeProvider) {

                console.log('app config');
                $routeProvider.otherwise({ redirectTo: '/' });

            }]);

    }
);