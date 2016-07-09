app
		.controller(
				'gererCompteCtrl',
				[
						'$scope',
						'GererCompteFactory',
						'ListeDemandeDisponibleFactory',
						'$location',
						'UpdateClientFactory',
						'ClientProperties',
						function($scope, GererCompteFactory,
								ListeDemandeDisponibleFactory, $location,
								UpdateClientFactory,ClientProperties) {

							/* recuperation nom et prenom*/
							$scope.ClientConnecterProperties ={
									nom : ClientProperties.getNom(),
									prenom : ClientProperties.getPrenom()
							};
							
							/*
							 * recuperation la liste de type de demande
							 * disponible
							 */
							$scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
									.select({}, function(data) {}, 
											function(status) {
										$location.path('/errors');
									});

							/* recuperation les information du client */
							$scope.client = GererCompteFactory
									.get(
											{
												id : ClientProperties.getId()
											},
											function(data) {
												// selectionner le bouton radio
												console.log(data);
												if (data.sex == 'homme') {
													document
															.getElementById("homme").checked = true;
												} else {
													document
															.getElementById("femme").checked = true;
												}

											}, function(status) {
												$location.path('/errors');

											});
							/* callback for ng-click 'modifier/enregistrer': */
							$scope.modifier = function(nom) {
								if (nom == 'nom') {
									if ($scope.formulaireNom == 'Modifier') {
										$scope.formulaireNom = 'Enregister';
										document.getElementById(nom).disabled = false;

									} else {
										$scope.formulaireNom = 'Modifier';
										document.getElementById(nom).disabled = true;
										if (document.getElementById(nom).value != '') {
											$scope.ClientConnecterProperties.nom =  document
											.getElementById(nom).value;
											ClientProperties.setNom(document
											.getElementById(nom).value);
											$scope.client.nom = document
													.getElementById(nom).value
											UpdateClientFactory.update(
													$scope.client, function() {
													}, function() {
														$location.path('/errors');
													});
										}
									}
								} else if (nom == 'prenom') {
									if ($scope.formulairePrenom == 'Modifier') {
										$scope.formulairePrenom = 'Enregister';
										document.getElementById(nom).disabled = false;

									} else {
										$scope.formulairePrenom = 'Modifier';
										document.getElementById(nom).disabled = true;
										if (document.getElementById(nom).value != '') {
											$scope.ClientConnecterProperties.prenom =  document
											.getElementById(nom).value;
											ClientProperties.setPrenom(document
											.getElementById(nom).value);
											$scope.client.prenom = document
													.getElementById(nom).value
											UpdateClientFactory.update(
													$scope.client, function() {
													}, function() {
														$location.path('/errors');
													});
										}
									}

								} else if (nom == 'date') {
									if ($scope.formulaireDate == 'Modifier') {
										$scope.formulaireDate = 'Enregister';
										document.getElementById(nom).disabled = false;
										document.getElementById(nom).type = "date";
									} else {
										$scope.formulaireDate = 'Modifier';
										document.getElementById(nom).disabled = true;
										if (document.getElementById(nom).value != '') {
											$scope.client.dateNaissance = document
													.getElementById(nom).value
											UpdateClientFactory.update(
													$scope.client, function() {
													}, function() {
														$location.path('/errors');
													});
										}
									}

								} else if (nom == 'sex') {
									if ($scope.formulaireSex == 'Modifier') {
										$scope.formulaireSex = 'Enregister';
										document.getElementById("femme").disabled = false;
										document.getElementById("femme").checked = true;
										document.getElementById("homme").disabled = false;
										document.getElementById("homme").checked = true;
										// document.getElementById(nom).type =
										// "date";

									} else {
										$scope.formulaireSex = 'Modifier';
										document.getElementById("femme").disabled = true;
										document.getElementById("homme").disabled = true;
									}
								} else if (nom == 'tel') {
									if ($scope.formulaireTel == 'Modifier') {
										$scope.formulaireTel = 'Enregister';
										document.getElementById(nom).disabled = false;
										} else {
										$scope.formulaireTel = 'Modifier';
										document.getElementById(nom).disabled = true;
										if (document.getElementById(nom).value != '') {
											$scope.client.tel = document
													.getElementById(nom).value
											UpdateClientFactory.update(
													$scope.client, function() {
													}, function() {
														$location.path('/errors');
													});
										}
									}

								} else if (nom == 'mail') {
									if ($scope.formulaireMail == 'Modifier') {
										$scope.formulaireMail = 'Enregister';
										document.getElementById(nom).disabled = false;
										
									} else {
										$scope.formulaireMail = 'Modifier';
										document.getElementById(nom).disabled = true;
										if (document.getElementById(nom).value != '') {
											$scope.client.mail = document
													.getElementById(nom).value
											UpdateClientFactory.update(
													$scope.client, function() {
													}, function() {
														$location.path('/errors');
													});
										}
									}

								} else if (nom == 'password') {
									if ($scope.formulairePassword == 'Modifier') {
										$scope.formulairePassword = 'Enregister';
										document.getElementById(nom).disabled = false;
										

									} else {
										$scope.formulairePassword = 'Modifier';
										document.getElementById(nom).disabled = true;
										if (document.getElementById(nom).value != '') {
											$scope.client.motsPasse = document
													.getElementById(nom).value
											UpdateClientFactory.update(
													$scope.client, function() {
													}, function() {
														$location.path('/errors');
													});
										}
									}

								}
							}
							$scope.formulairePassword = 'Modifier';
							$scope.formulaireMail = 'Modifier';
							$scope.formulaireTel = 'Modifier';
							$scope.formulaireSex = 'Modifier';
							$scope.formulaireDate = 'Modifier';
							$scope.formulaireNom = 'Modifier';
							$scope.formulairePrenom = 'Modifier';

						} ]);
