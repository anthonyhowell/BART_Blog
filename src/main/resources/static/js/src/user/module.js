define(

    [
        'angular',
        './controller-list'
    ],

    function (angular, ListController) {

        'use strict';


        return angular
            .module('app.users', ['ngRoute'])
            .config(['$routeProvider', function ($routeProvider) {
                console.log('user config');

                $routeProvider.when('/users', {
                    controller : ListController,
                    templateUrl: 'tpl-users'
                })
            }])
            .controller('UserListController', ListController);

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