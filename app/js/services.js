'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('Summarizr.services', ['ngResource']).
  factory('Auth', ['$http', '$rootScope', function($http, $rootScope) {
    return {
      login: function() {
        $rootScope.isLoggedIn = true;
      },
      logout: function() {
        // $http reset session on server
        return $rootScope.isLoggedIn = false;
      },
      isLoggedIn: function() {
        return $rootScope.isLoggedIn;
      }
    }
  }]).
  factory('User', ['$resource', function($resource) {
   return $resource('/signup', {});
  }])
  ;

