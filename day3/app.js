'use strict';

angular.module('yesdoctor', [])
  .controller('AppointmentCtrl', ['$scope', '$filter', function($scope, $filter) {
      $scope.date = $filter("date")(Date.now(), 'yyyy-MM-dd');
      $scope.appointments = [{
          id : 1,
          name : 'Abc'
      },{
          id : 2,
          name : 'Def'
      },{
          id : 3,
          name : 'Ghi'
      }];

  }])
  .controller('PatientCtrl', ['$scope', function($scope) {

  }]);

