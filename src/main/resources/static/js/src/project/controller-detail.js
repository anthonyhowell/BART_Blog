define(

    [

    ],

    function () {

        'use strict';

        var Controller = function ($scope, $routeParams) {
            console.log('project detail controller');

            $scope.projectId = $routeParams.projectId || 'N/A';
            $scope.message = 'this is project detail';
        };

        Controller.$inject = ['$scope', '$routeParams'];

        return Controller;
    }
);