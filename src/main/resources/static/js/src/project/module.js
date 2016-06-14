define(

    [
        'angular',
        './controller-list',
        './controller-detail',
        './controller-edit'
    ],

    function (angular, ListController, DetailController, EditController) {

        'use strict';

        var Module, Config;

        Config = function ($routeProvider) {
            $routeProvider
                .when('/projects', {
                    controller : ListController,
                    templateUrl: 'tpl-projects-list'
                })
                .when('/projects/:projectId', {
                    controller : DetailController,
                    templateUrl: 'tpl-projects-detail'
                })
                .when('/projects/:projectId/edit', {
                    controller : EditController,
                    templateUrl: 'tpl-projects-edit'
                });
        };

        Config.$inject = ['$routeProvider'];

        Module = angular
            .module('app.projects', ['ngRoute'])
            .config(Config)
            .controller('ProjectListController',   ListController)
            .controller('ProjectDetailController', DetailController)
            .controller('ProjectEditController',   EditController);

        return Module;

    }
);