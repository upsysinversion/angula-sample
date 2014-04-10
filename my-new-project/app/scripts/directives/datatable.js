'use strict';

angular.module('gundamApp')
  .directive('myDataTable', ["$log",function ($log) {
    return {
      templateUrl: 'templates/dataTable.html',
      restrict: 'EA',
      replace:true,
      link: function postLink(scope, element, attrs) {
             $(element).dataTable( {
      		"aaData": scope.data,
      		"aoColumns": scope.columns
      	} );	
      }
    };
  }]);
