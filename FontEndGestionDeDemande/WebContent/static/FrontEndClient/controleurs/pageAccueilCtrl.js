app.controller('pageAccueilCtrl', [
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
				$scope.recherche='';
			}
			/*mes demandes*/
			$scope.mesDemandes = [
					{demande : 'Demandes En Cours'},
					{demande : 'Demandes Cloturés'}
			]


		} ]);
