app.controller(
				'inscriptionCtrl',[
						'$scope',
						'MsgConfig',
						'ClientFactory',
						'ListeDemandeDisponibleFactory',
						'$location',
						'ClientProperties',
						function($scope, MsgConfig, ClientFactory, ListeDemandeDisponibleFactory, $location,
								ClientProperties) {
							
							/* recuperation la liste de type de demande disponible */
							$scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
									.select({}, function(data) {}, function(status) {
										$location.path('/errors');
									});


							/* callback for 'message' */
							$scope.msg = MsgConfig;

							/*
							 * callback for create new client
							 */
							$scope.createNewClient = function() {
								console.log($scope.client.dateNaissance);
								ClientFactory.create($scope.client, function(data) {
									ClientProperties.setNom($scope.client.nom);
									ClientProperties.setPrenom($scope.client.prenom);
									ClientProperties.setId(data[0]['id']);
									$location.path('/page-accueil-connecter');
								}, function(status) {
									$location.path('/errors');
								});
							}
							/* recuperation le date du systeme */
							var today = new Date();
							var dd = today.getDate();
							var mm = today.getMonth() + 1; // January is 0!

							var yyyy = today.getFullYear();
							if (dd < 10) {
								dd = '0' + dd
							}
							if (mm < 10) {
								mm = '0' + mm
							}
							$scope.today = yyyy + '-' + mm + '-' + dd;
							/**/

							
							/**/
						} ]);
