'use strict';

/* Controllers */

angular.module('Summarizr.controllers', [])
  .controller('GiveCtrl', '$scope', [function($scope) {

  }])
  .controller('NeedCtrl', ['$scope', function($scope) {

  }])
  .controller('UserCtrl', ['$scope' , '$rootScope','$routeParams', '$location', 'User', 'Auth',
    function($scope, $rootScope, $routeParams, $location, User, Auth) {
    if(Auth.isLoggedIn()) $location.path('/getting-started');
    $scope.signup = function(user) {
      User.save(user, function(data) {
        Auth.login();
        $location.path('/getting-started');
      }, function(data) {
        $('form').append('something went wrong, please try again.');
      });
    }
  }])
  .controller('StartCtrl', [function() {

  }])
  ;

