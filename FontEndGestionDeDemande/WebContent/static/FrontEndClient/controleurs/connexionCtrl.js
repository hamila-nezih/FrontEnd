app.controller('connexionCtrl', [
		'$scope',
		'$location',
		'$window',
		function($scope, $location, $window) {

			
			 /* callback connexion
			 */
			$scope.connexion = function() {				
					$location.path('/page-accueil-connecter');
			};
			

		} ]);
