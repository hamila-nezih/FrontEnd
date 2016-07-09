var app = angular.module('myApp', [ 'ngRoute', 'ngResource', 'ngMessages','ngCookies', 'ngMaterial']);

// ------------------------ routage

app.config(function($routeProvider,$httpProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/page-accueil.html',
		controller : 'pageAccueilCtrl'
	}).when('/page-accueil-connecter', {
		templateUrl : 'views/page-accueil-connecter.html',
		controller : 'pageAccueilConnecterCtrl'
	}).when('/connexion', {
		templateUrl : 'views/connexion.html',
		controller : 'connexionCtrl'
	}).when('/creerDemande/:id', {
		templateUrl : 'views/creer-demande.html',
		controller : 'creerDemandeCtrl'
	}).when('/errors', {
		templateUrl : 'views/errors.html'
	}).when('/gerer-compte', {
		templateUrl : 'views/gerer-compte.html',
		controller : 'gererCompteCtrl'
	}).when('/demandes-en-cours', {
		templateUrl : 'views/demandes-en-cours.html',
		controller : 'DemandesEnCoursCtrl'
	}).when('/modifier-demande/:id/:idtype', {
		templateUrl : 'views/modifier-demande.html',
		controller : 'modifierDemandeCtrl'
	}).when('/demandes-clotures', {
		templateUrl : 'views/demandes-clotures.html',
		controller : 'demandesCloturesCtrl'
	}).when('/historique-demande/:id', {
		templateUrl : 'views/historique-demande.html',
		controller : 'historiqueDemandeCtrl'
	}).when('/inscription', {
		templateUrl : 'views/inscription.html',
		controller : 'inscriptionCtrl'
	}).otherwise({
		redirectTo : '/'
	});
});
