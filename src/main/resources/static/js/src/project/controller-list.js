define(

    [

    ],

    function () {

        'use strict';

        var Controller = function ($scope) {
            console.log('project list controller');

            $scope.message = 'this is project list';
        };

        Controller.$inject = ['$scope'];

        return Controller;
    }
);