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
  $routeProvider.when('/give-summary', {templateUrl: 'partials/give-summary.html', controller: 'GiveCtrl'});
  $routeProvider.when('/need-summary', {templateUrl: 'partials/need-summary.html', controller: 'NeedCtrl2'});
  $routeProvider.otherwise({redirectTo: '/give-summary'});
}]);
