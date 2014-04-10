'use strict';

angular.module('gundamApp')
  .factory('$dataTable',["$rootScope","$compile",function($rootScope,$compile){
  	   var $dataTable = {};
  	   $dataTable.dataTable = function(dataTableOptions){
  	      var containerDomEl = angular.element('#'+dataTableOptions.element);
  		  var tableScope = $rootScope.$new(true);
  		  tableScope.data = dataTableOptions.data;
		    tableScope.columns = dataTableOptions.columns;
          var dataTableDomEl = $compile('<div my-data-table></div>')(tableScope);
          containerDomEl.append(dataTableDomEl);
      };
  	   return $dataTable;
  }]);
