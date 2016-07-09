app.controller('pageAccueilConnecterCtrl', [
		'$scope',
		'ListeDemandeDisponibleFactory',
		'$location',
		'ClientProperties',
		function($scope, ListeDemandeDisponibleFactory, $location, ClientProperties) {
			
			/* recuperation nom et prenom*/
			$scope.ClientConnecterProperties ={
					nom : ClientProperties.getNom(),
					prenom : ClientProperties.getPrenom()
			};

			/* recuperation la liste de type de demande disponible */
			$scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
					.select({}, function(data) {
						console.log(data);

					}, function(status) {
						$location.path('/errors');
					});
			/* callback for ng-click 'viderChampRecheche': */
			$scope.viderChampRecheche = function() {
				document.getElementById("champRechecher").value = "";
			}
			/*mes demandes*/
			$scope.mesDemandes = [
					{demande : 'Demandes En Cours', lien : '#/demandes-en-cours'},
					{demande : 'Demandes Cloturés', lien : '#/demandes-clotures'}
			]

		} ]);
