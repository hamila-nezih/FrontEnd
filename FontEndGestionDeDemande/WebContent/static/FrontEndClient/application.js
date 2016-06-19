var app = angular.module('myApp', [ 'ngRoute', 'ngResource', 'ngMessages','ngCookies' ]);

// ------------------------ routage

app.config(function($routeProvider,$httpProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/page-accueil.html',
		controller : 'pageAccueilCtrl'
	}).when('/page-accueil-connecter', {
		templateUrl : 'views/page-accueil-connecter.html',
		controller : 'pageAccueilConnecterCtrl'
	}).when('/gerer-compte', {
		templateUrl : 'views/gerer-compte.html',
		controller : 'gererCompteCtrl'
	}).when('/inscription', {
		templateUrl : 'views/inscription.html',
		controller : 'inscriptionCtrl'
	}).otherwise({
		redirectTo : '/'
	});
});
