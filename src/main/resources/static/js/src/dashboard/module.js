define(

    [
        'angular',
        './controller-dashboard'
    ],

    function (angular, DashboardController) {

        'use strict';


        return angular
            .module('app.dashboard', ['ngRoute'])
            .config(['$routeProvider', function ($routeProvider) {
                console.log('dashboard config');

                $routeProvider.when('/', {
                    controller : DashboardController,
                    templateUrl: 'tpl-dashboard'
                })
            }])
            .controller('Dashboard', DashboardController);

        // var Module, Config;
        //
        // Module = function () {
        //     console.log('project module');
        // };
        //
        // Config = function ($routeProvider) {
        //     console.log('project module config');
        //
        //     $routeProvider
        //         .when('/projects', {
        //             controller : ListController,
        //             templateUrl: 'tpl-projects'
        //         });
        //
        // };
        //
        // Config.$inject = ['$routeProvider'];
        //
        // return angular
        //     .module('app.projects', Module)
        //     .config(Config);

    }
);