'use strict';


// Declare app level module which depends on filters, and services
angular.module('jsPatterns', [
  'ngRoute',
  'jsPatterns.filters',
  'jsPatterns.services',
  'jsPatterns.directives',
  'jsPatterns.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'UserCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
