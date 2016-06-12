var app = angular.module('myApp', ['ngResource']);

app.controller('nouvelleDemande', function($scope, $resource) {

//	var getcl = $resource('http://localhost:8081/stage/client/getTypeDemand/:id');
//	$scope.typeDemande = getcl.get({'id':1});
//	methode delete
//	var getcl = $resource('http://localhost:8081/stage/utl/supprimer/:id',{},{
//		"delet":{ 'method':'DELETE', 'params':{id:'@id'}}
//	});
//	getcl.delet({'id':6});
	
	
	///utl/supprimer/{labelle}/{nom}/{prenom}
//	post marche 
//	var getcl = $resource('http://localhost:8081/stage/utl',{},{
//		"creer":{ 'method':'POST'}
//	});
	
	//getcl.creer({libelle:'Saimon', nom:'saimon', prenom:'rrrr'});
	var getcl = $resource('http://localhost:8081/stage/utilisateur/update/:id',{},{
	"update":{ 'method':'PUT'}
	});
    getcl.update({'id':11},{libelle:'Saimon', nom:'saimon', prenom:'rrrr'});

	
});

// var app = angular.module('myApp', []);
//
// app.controller('nouvelleDemande', function($scope, $http) {
// $http({
// method : "GET",
// url : 'http://localhost:8081/stage/client/getTypeDemand/1'
// }).then(function success(response) {
// $scope.typeDemande = response.data;
// }, function error(response) {
// $scope.erreur = response.statusText;
// });
//	
// /////////////////
//	
// // $scope.DeleteData = function () {
// //
// // var data = $.param({
// // firstName: 1
// //
// // });
// //
// // $http({
// // method : "DELETE",
// // url : 'http://localhost:8081/stage//utl/supprimer/'+data
// // }).then(function success(response) {
// // $scope.typeDemande = response.data;
// // }, function error(response) {
// // $scope.erreur = response.statusText;
// // });
// //
// //
// // };
//	
//	
//	
// });
//
// app.controller('PrerequisTypeDemande', function($scope, $http) {
// $http({
// method : "GET",
// url : 'http://127.0.0.1:8081/stage/client/getTPDmd/1'
// }).then(function success(response) {
// $scope.PrerequisTypeDemande = response.data;
// }, function error(response) {
// $scope.erreur = response.statusText;
// });
// });
