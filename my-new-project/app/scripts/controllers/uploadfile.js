'use strict';

angular.module('gundamApp')
.controller('UploadfileCtrl',[ '$scope', '$http', '$timeout', '$upload','$log',  function($scope, $http, $timeout, $upload,$log) {
	$scope.max = 100;
	$scope.fileReaderSupported = window.FileReader != null;
	$scope.uploadRightAway = false;
	$scope.httpOptions = ['GET','POST'];
	$scope.httpOption = $scope.httpOptions[0];
	$scope.changeAngularVersion = function() {
		window.location.hash = $scope.angularVersion;
		window.location.reload(true);
	}
	$scope.hasUploader = function(index) {
		return $scope.upload[index] != null;
	};
	$scope.onCancel = function(){
		$scope.onUploadAnotherFile();
	};
	$scope.onUploadAnotherFile = function(){
		$scope.selectedFiles = null;
		$scope.progress[0] = 0;
		$scope.uploadResult = [];
	};
	$scope.abort = function(index) {
		$scope.selectedFiles = null;
		$scope.upload[index].abort(); 
		$scope.upload[index] = null;
	};
	$scope.angularVersion = window.location.hash.length > 1 ? window.location.hash.substring(1) : '1.2.0';
	$scope.onFileSelect = function($files) {
		$scope.selectedFiles = [];
		$scope.progress = [];
		if ($scope.upload && $scope.upload.length > 0) {
			for (var i = 0; i < $scope.upload.length; i++) {
				if ($scope.upload[i] != null) {
					$scope.upload[i].abort();
				}
			}
		}
		$scope.upload = [];
		$scope.uploadResult = [];
		$scope.selectedFiles = $files;
		$scope.dataUrls = [];
		for ( var i = 0; i < $files.length; i++) {
			var $file = $files[i];
			if (window.FileReader && $file.type.indexOf('image') > -1) {
				var fileReader = new FileReader();
				fileReader.readAsDataURL($files[i]);
				var loadFile = function(fileReader, index) {
					fileReader.onload = function(e) {
						$timeout(function() {
							$scope.dataUrls[index] = e.target.result;
						});
					}
				}(fileReader, i);
			}
			$scope.progress[i] = -1;
			if ($scope.uploadRightAway) {
				$scope.start(i);
			}
		}
	}
	
	$scope.onStart = function(index) {
		$scope.progress[index] = 0;
		$scope.uploadResult
		$scope.type = 'info';
		$scope.upload[index] = $upload.upload({
			url : '/upload/index.php',
			method: $scope.httpMethod,
			headers: {'my-header': 'my-header-value'},
			data : {
				myModel : $scope.myModel
			},
			file: $scope.selectedFiles[index],
			fileFormDataName: 'myFile'
		}).then(function(response) {
			$scope.uploadResult.push(response.data);
		}, null, function(evt) {
			$scope.progress[index] = parseInt(100.0 * evt.loaded / evt.total);
			$log.info('progress: ' + $scope.progress[index] );
			$scope.dynamic = $scope.progress[index];
		}).xhr(function(xhr){
			xhr.upload.addEventListener('abort', function(){console.log('aborted complete')}, false);
		});
	}
} ]);
