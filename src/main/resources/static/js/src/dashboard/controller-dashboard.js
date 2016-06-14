define(

    [

    ],

    function () {

        'use strict';

        var Controller = function ($scope) {
            console.log('dashboard controller');

            $scope.message = 'this is a dashboard';
        };

        Controller.$inject = ['$scope'];

        return Controller;
    }
);