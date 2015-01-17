'use strict';

angular.module('yesdoctor', ['ngResource', 'ngAnimate'])
  .factory('AppointmentDB', function($resource) {
    return $resource('/appointment/:id',
      {id: '@id'}, {
        get: {method: 'GET', isArray: true },
        add: {method: 'POST'},
        delete: {method: 'DELETE'}
      }
    );
  })
  .factory('PatientDB', function($resource) {
    return $resource('/patient/:id',
      {id: '@id'}, {
        get: {method: 'GET', isArray: true },
        add: {method: 'POST'},
        delete: {method: 'DELETE'}
      }
    );
  })
  .controller('AppointmentCtrl', ['$scope', 'AppointmentDB', function($scope, ItemsDB) {
    ItemsDB.get(function(data) {
      $scope.items = data;
    });

    $scope.addItem = function() {
      var item = {
        name: $scope.newItem.name,
        description: $scope.newItem.description
      };
      ItemsDB.add(item, function(data) {
        item._id = data._id;
        $scope.items.push(item);
        $scope.newItem = {
          name: null,
          description: null
        }
      });
    };

    $scope.removeItem = function (item) {
      ItemsDB.delete({id:item._id}, function() {
        $scope.items.splice($scope.items.indexOf(item), 1);
      })
    };
  }]);

