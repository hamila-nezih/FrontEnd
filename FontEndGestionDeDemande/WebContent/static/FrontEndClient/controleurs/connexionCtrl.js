app.controller('connexionCtrl', [
		'$scope',
		'$location',
		'ListeDemandeDisponibleFactory',
		'ConnexionFactory',
		'MsgConfig',
		'ClientProperties',
		function($scope, $location, ListeDemandeDisponibleFactory,
				ConnexionFactory, MsgConfig,ClientProperties) {
			;

			/* recuperation la liste de type de demande disponible */
			$scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
					.select({}, function(data) {
					}, function(status) {
					});

			/* callback for 'message' */
			$scope.msg = MsgConfig;

			$scope.erreur = false;
			$scope.login = '';
			$scope.password = '';
			/*
			 * callback connexion
			 */
			$scope.connexion = function() {
				ConnexionFactory.get({
					login : $scope.login,
					password : $scope.password
				}, function(data) {
					if (data.length == 0) {
						$scope.erreur = true;
					} else{
						ClientProperties.setNom(data[0]['nom']);
						ClientProperties.setPrenom(data[0]['prenom']);
						ClientProperties.setId(data[0]['id']);
						$location.path('/page-accueil-connecter');
					}

				}, function(status) {
					$location.path('/errors');
				});
			};

		} ]);
