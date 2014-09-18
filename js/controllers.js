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

  controller('EditCtrl', ['$scope','project', 'Restangular','ProjectFactory', function ($scope,project, Restangular, ProjectFactory) {
    var original = project;
    $scope.project = Restangular.copy(original);

    $scope.isClean = function() {
      return ProjectFactory.isClean(original,$scope.project);
    };

    $scope.destroy = function() {
      return ProjectFactory.destroy(original);
    };

    $scope.edit = function() {
      return ProjectFactory.edit($scope.project);
    };
  }]);
