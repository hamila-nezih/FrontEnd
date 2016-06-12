var app = angular.module('myApp', [ 'ngRoute' ]);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'PostCTRL'
	}).when('/comments/:id', {
		templateUrl : 'commentaires.html',
		controller : 'commentsCTRL'
	}).otherwise({
		redirectTo : '/'
	});
});

app.factory('PosteFactory', function() {

	var fuctory = {
		posts : [ {
			id : '0',
			name : 'pc',
			content : 'j aime l \'ordi',
			comments : [ {
				userName : 'hamila',
				city : 'msaken',
				content : 'je suis hamila',
				email : 'hamila@gmal.com'
			}, {
				userName : 'Marc',
				city : 'nice',
				content : 'je suis Marc',
				email : 'marc@gmal.com'
			}, {
				userName : 'Jean',
				city : 'paris',
				content : 'je suis Jean',
				email : 'jean@gmal.com'
			} ]
		}, {
			id : '1',
			name : 'cahier',
			content : 'j aime les cahiers de charges',
			comments : [ {
				userName : 'hamila',
				city : 'msaken',
				content : 'je suis hamila',
				email : 'hamila@gmal.com'
			}, {
				userName : 'Marc',
				city : 'nice',
				content : 'je suis Marc',
				email : 'marc@gmal.com'
			} ]
		} ],
		getPosts : function() {
			return fuctory.posts;
		},
		getPost : function(id) {
			angular.forEach(fuctory.posts, function(value, key) {
				  if(value.id == id){
					  post = value.comments
				  }
				});
			return post;
		}
	};
	return fuctory;
})

app.controller('PostCTRL', function($scope, PosteFactory) {

	$scope.posts = PosteFactory.getPosts();
});

app.controller('commentsCTRL', function($scope, PosteFactory, $routeParams) {

	$scope.comments = PosteFactory.getPost($routeParams.id);
});