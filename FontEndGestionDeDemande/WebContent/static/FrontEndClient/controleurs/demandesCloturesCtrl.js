app.controller('demandesCloturesCtrl', [
		'$scope',
		'DemandesCloturesFactory',
		'ListeDemandeDisponibleFactory',
		'fileUpload',
		'$location',
		'ClientProperties',
		'$http',
		function($scope, DemandesCloturesFactory,ListeDemandeDisponibleFactory, fileUpload, $location,	ClientProperties, $http) {


			/* recuperation nom et prenom*/
			$scope.ClientConnecterProperties ={
					nom : ClientProperties.getNom(),
					prenom : ClientProperties.getPrenom()
			};
			
			/* recuperation la liste des demandes disponible*/
            $scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
			.select({}, function(data) {
			}, function(status) {

			});
			/* recuperation la liste de demande creer par le client(id=idClient) */
			$scope.demandesClotures = DemandesCloturesFactory.get({
				id : ClientProperties.getId()
			}, function(data) {
				// selectionner le bouton radio
				console.log(data);
			}, function(status) {

			});

			/* callback for ng-click 'editDemande': */
			$scope.historique = function(DemandeId) {
				console.log(DemandeId);
				$location.path('/historique-demande/' + DemandeId);
			};

		} ]);