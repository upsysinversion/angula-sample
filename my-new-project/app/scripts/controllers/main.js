'use strict';

angular.module('gundamApp')
  .controller('MainCtrl', function ($scope) {
      $scope.onUploadFileClick = function(){
          $scope.$broadcast('onUploadFileClick',{});
      }
  });