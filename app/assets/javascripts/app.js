'use strict';


/**
 * Security Service 
 */
var securityService = angular.module('myApp.securityService', ['ngRoute'])

securityService.factory('UserService', [function() {    
  var user = {
    isLoggedIn: false,
    username: ''
  };
  
  return user;
}]);

securityService.constant('RouteAuthorisation', {
  checkUserIsAuthorised: ['$q', '$route', 'UserService', function($q, $route, user) {
    var deferred = $q.defer();
    
    if ($route.current.access.isPublic || user.isLoggedIn) {
      deferred.resolve();
    } else {
      deferred.reject();
    }
    
    return deferred.promise;
  }]
});

securityService.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(e, next, current) {
    $location.path("/login");
  })
}]);



/**
 * Home module shows the main application page post login + it controls the header and the footer. 
 */
var home = angular.module('myApp.home', ['ngRoute', 'myApp.securityService']);
  
home.config(['$routeProvider', '$locationProvider', 'RouteAuthorisation', 
    function($routeProvider, $locationProvider, routeAuthorisation) {
  
  $locationProvider.html5Mode(true);
  
  $routeProvider
    .when('/', {
      controller:'HomeCtrl',
      templateUrl:'/assets/templates/main/home.html',
      access: {
        isPublic: false
      },
      resolve: routeAuthorisation
    })
    .otherwise({
      templateUrl:'/assets/templates/main/notFound.html',
      access: {
        isPublic: true
      },
      resolve: routeAuthorisation
    });
}]);

home.controller('HomeCtrl', ['$scope', 'UserService', function($scope, userService) {}]);



/**
 * Login module is responsible for the sign in process.  
 */
var login = angular.module('myApp.login', ['ngRoute', 'myApp.securityService']);
  
login.config(['$routeProvider', '$locationProvider', 'RouteAuthorisation',
    function($routeProvider, $locationProvider, routeAuthorisation) {
  
  $locationProvider.html5Mode(true);
  
  $routeProvider
    .when('/login', {
      controller:'LoginCtrl',
      templateUrl:'/assets/templates/login/login.html',
      access: {
        isPublic: true
      },
      resolve: routeAuthorisation
    });
}]);

login.controller('LoginCtrl', ['$scope', 'UserService', function($scope, user) {}]);



/**
 * The primary application module 
 */
var project = angular.module('myApp', ['myApp.home', 'myApp.login'])
