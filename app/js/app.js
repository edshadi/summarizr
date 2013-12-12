'use strict';


// Declare app level module which depends on filters, and services
angular.module('Summarizr', [
  'ngRoute',
  'Summarizr.filters',
  'Summarizr.services',
  'Summarizr.directives',
  'Summarizr.controllers'
]).
config(function($httpProvider) {
  $httpProvider.interceptors.push(function($rootScope, $location, $q) {
    return {
      'request': function(request) {
        // if we're not logged-in to the AngularJS app, redirect to login page
        $rootScope.isLoggedIn = $rootScope.isLoggedIn || $rootScope.username;
        if (!$rootScope.isLoggedIn && $location.path() != '/signup') {
          $location.path('/signup');
        }
        return request;
      },
      'responseError': function(rejection) {
        // if we're not logged-in to the web service, redirect to signup page
        if (rejection.status === 401 && $location.path() != '/signup') {
          $rootScope.isLoggedIn = false;
          $location.path('/signup');
        }
        return $q.reject(rejection);
      }
    };
  });
}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {templateUrl: 'partials/signup.html', controller: 'UserCtrl'});
  $routeProvider.when('/getting-started', {templateUrl: 'partials/getting-started.html', controller: 'StartCtrl'});
  $routeProvider.when('/give-summary', {templateUrl: 'partials/give-summary.html', controller: 'GiveCtrl'});
  $routeProvider.when('/need-summary', {templateUrl: 'partials/need-summary.html', controller: 'NeedCtrl'});
  $routeProvider.otherwise({redirectTo: '/signup'});
}]);
