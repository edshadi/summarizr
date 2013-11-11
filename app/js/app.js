'use strict';


// Declare app level module which depends on filters, and services
angular.module('Summarizr', [
  'ngRoute',
  'Summarizr.filters',
  'Summarizr.services',
  'Summarizr.directives',
  'Summarizr.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/give-summary', {templateUrl: 'partials/give-summary.html', controller: 'GiveCtrl'});
  $routeProvider.when('/need-summary', {templateUrl: 'partials/need-summary.html', controller: 'NeedCtrl'});
  $routeProvider.otherwise({redirectTo: '/give-summary'});
}]);
