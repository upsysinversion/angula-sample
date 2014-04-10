'use strict';

angular
  .module('gundamApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'angularFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
