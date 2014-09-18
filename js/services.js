'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .factory('ProjectFactory',['$location','Restangular', function ($location, Restangular) {
        return {
            save: function (obj) {
                Restangular.all('projects').post(obj).then(function(project) {
                    $location.path('/list');
                });
            },
            getList: function () {
                return Restangular.all("projects").getList();
            },
            isClean: function (obj1, obj2) {
                return angular.equals(obj1, obj2);
            },
            destroy: function (obj) {
                obj.remove().then(function() {
                    $location.path('/list');
                });
            },
            edit: function (obj) {
                obj.put().then(function() {
                    $location.path('/');
                });
            }
        };
    }])
    .value('version', '0.1');
