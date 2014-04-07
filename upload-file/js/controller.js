'use strict';
 
var uploadFileApp = angular.module('uploadFileApp', ['ui.bootstrap','angularFileUpload']);
var ModalController = function ($scope, $modal, $log) {
  $scope.open = function () {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        items: function () {
        }
      }
    });
  };
};
var ModalInstanceCtrl = function ($scope, $modalInstance, items) {
  $scope.ok = function () {
    $modalInstance.close();
  };
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
