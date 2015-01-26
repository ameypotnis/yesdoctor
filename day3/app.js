'use strict';

angular.module('yesdoctor', [])
    .controller('AppCtrl', ['$scope',
        function($scope) {
            $scope.addPatient = function() {
                console.log('call server api...');
                console.log('with ', $scope.newPatient);
                $scope.newPatient = {};
            }
        }
    ]);
