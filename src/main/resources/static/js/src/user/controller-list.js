define(

    [

    ],

    function () {

        'use strict';

        var Controller = function ($scope) {
            console.log('user list controller');

            $scope.message = 'this is user list';
        };

        Controller.$inject = ['$scope'];

        return Controller;
    }
);