var app = angular.module('myApp', [ 'ngRoute', 'ngResource', 'ngMessages','ngCookies' ]);

// ------------------------ routage

app.config(function($routeProvider,$httpProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/user-list.html',
		controller : 'UserListCtrl'
	}).when('/user-detail/:id', {
		templateUrl : 'views/user-detail.html',
		controller : 'UserDetailCtrl'
	}).when('/user-creation', {
		templateUrl : 'views/user-creation.html',
		controller : 'UserCreationCtrl'
	}).when('/login', {
		templateUrl : 'views/login.html',
		controller : 'login'
	}).when('/upload', {
		templateUrl : 'views/upload.html',
		controller : 'upload'
	}).when('/errors', {
		templateUrl : 'views/errors.html'
	}).otherwise({
		redirectTo : '/'
	});
	// $httpProvider.defaults.withCredentials = true ;
});
