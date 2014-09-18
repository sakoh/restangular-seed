'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).

  controller('ListCtrl', ['$scope','ProjectFactory', function ($scope, ProjectFactory) {
    $scope.projects = ProjectFactory.getList();
  }]).

  controller('CreateCtrl', ['$scope', 'ProjectFactory', function ($scope, ProjectFactory) {
    $scope.save = function() {
      return ProjectFactory.save($scope.project);
    }
  }]).

  controller('EditCtrl', ['$scope', '$location', 'Restangular', 'project', function ($scope, $location, Restangular, project) {
    var original = project;
    $scope.project = Restangular.copy(original);
    

    $scope.isClean = function() {
      return angular.equals(original, $scope.project);
    };

    $scope.destroy = function() {
      original.remove().then(function() {
        $location.path('/list');
      });
    };

    $scope.save = function() {
      $scope.project.put().then(function() {
        $location.path('/');
      });
    };
  }]);
