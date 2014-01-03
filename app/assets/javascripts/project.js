angular.module('project', ['ngRoute'])
  
.config(function($routeProvider, $locationProvider) {
  
  $locationProvider.html5Mode(true);
  
  $routeProvider
    .when('/', {
      controller:'HomeCtrl',
      templateUrl:'/assets/templates/main/home.html',
      access: {
        isPublic: false
      }
    })
    .when('/login', {
      controller:'LoginCtrl',
      templateUrl:'/assets/templates/login/login.html',
      access: {
        isPublic: true
      }
    })
    .otherwise({
      redirectTo:'/'
    });
})
 
.controller('HomeCtrl', function($scope) {})
.controller('LoginCtrl', function($scope) {});