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
            }
        };
    }])
    .value('version', '0.1');
