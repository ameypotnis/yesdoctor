'use strict';

angular.module('yesdoctor', [])
    .controller('AppCtrl', ['$scope', '$filter',
        function($scope, $filter) {
            $scope.date = $filter("date")(Date.now(), 'yyyy-MM-dd');
            $scope.appointments = [{
                id: 1,
                name: "Abc"
            }, {
                id: 2,
                name: "Def"
            }, {
                id: 3,
                name: "Ghi"
            }];

            $scope.getPatient = function(id) {
                $scope.patient = {
                    id: 1,
                    name: "Abc",
                    age: 20,
                    weight: 70,
                    cases: [{
                        date: "2015-01-18T12:19:37.602Z",
                        complaint: "headach",
                        diagnosis: "acidity",
                        treatment: "Antiacid",
                        days: 2,
                        fee: 100
                    }, {
                        date: "2015-01-22T12:19:37.602Z",
                        complaint: "cold",
                        diagnosis: "Cold",
                        treatment: "cold medicine",
                        days: 1,
                        fee: 50
                    }]
                }
            }
            $scope.addCase = function() {
                $scope.newCase.date = new Date().toJSON();
                $scope.patient.cases.push($scope.newCase);
                clearCaseObject();
            }

            var clearCaseObject = function() {
                $scope.newCase = {
                    complaint: '',
                    diagnosis: '',
                    treatment: '',
                    days: '',
                    fee: ''
                };
            };
            clearCaseObject();
        }
    ]);
