define(

    [

    ],

    function () {

        'use strict';

        var Controller = function ($scope) {
            console.log('project edit controller');

            $scope.message = 'this is project edit';
        };

        Controller.$inject = ['$scope'];

        return Controller;
    }
);