app.controller('pageAccueilConnecterCtrl', [
		'$scope',
		'ListeDemandeDisponibleFactory',
		'$location',
		'$window',
		function($scope, ListeDemandeDisponibleFactory, $location, $window) {

			/* recuperation la liste de type de demande disponible */
			$scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
					.select({}, function(data) {
						console.log(data);

					}, function(status) {

					});
			/* callback for ng-click 'viderChampRecheche': */
			$scope.viderChampRecheche = function() {
				document.getElementById("champRechecher").value = "";
			}

		} ]);
