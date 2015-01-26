'use strict';

angular.module('yesdoctor', [])
    .factory('Window', function () {
        var gui = require('nw.gui');
        return gui.Window.get()
    })
    .controller('WindowToolbar', ['$scope', 'Window', function ($scope, Window) {
        $scope.windowClose = function () {
            Window.close();
        };
    }])
    .controller('AppCtrl',
        function ($scope, $http) {
            $scope.addPatient = function () {
                $http.post('/api/patient', $scope.newPatient)
                .success(function() { console.log('sucess')})
                .error(function() { console.log('error')});
                $scope.newPatient = {};
            }
        }
    );