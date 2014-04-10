'use strict';

angular.module('gundamApp')
  .controller('UploadFileModalCtrl',['$scope','$modal','$log',function($scope,$modal,$log){
	 $scope.$on('onUploadFileClick', function(e, params) {
	    $scope.open();
	 });
    $scope.open = function () {
      var modalInstance = $modal.open({
        templateUrl: 'uploadFileModalContent.html',
        controller: ModalInstanceCtrl
      });
    };

    var ModalInstanceCtrl = function ($scope, $modalInstance) {
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    };
  }]);