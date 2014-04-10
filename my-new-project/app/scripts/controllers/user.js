'use strict';

angular.module('gundamApp')
  .controller('UserCtrl',["$scope","$dataTable",function ($scope,$dataTable) {
  		$dataTable.dataTable({
  			element:'userTable',
	  		data : [
				[ "adm", "Default Admin", "super user" ],
				[ "andk", "Knut Andersson", "root" ],
				[ "andrz", "Anders Zetterström", "user" ]
			 ],
			 columns: [
				{ "sTitle": "User" },
				{ "sTitle": "Full Name" },
				{ "sTitle": "Admin Level" }
			 ]
  		});
  }]);
