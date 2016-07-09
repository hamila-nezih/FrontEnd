app
		.controller(
				'creerDemandeCtrl',
				[
						'$scope',
						'TypeDemandeFactory',
						'CreerDemandeFactory',
						'CreerPrerequisFactory',
						'fileUpload',
						'ListeDemandeDisponibleFactory',
						'$routeParams',
						'$location',
						'ClientProperties',
						'$http',
						function($scope, TypeDemandeFactory,
								CreerDemandeFactory, CreerPrerequisFactory,
								fileUpload,ListeDemandeDisponibleFactory, $routeParams, $location, ClientProperties, $http) {
							

							/* recuperation nom et prenom*/
							$scope.ClientConnecterProperties ={
									nom : ClientProperties.getNom(),
									prenom : ClientProperties.getPrenom()
							};
							
							/* recuperation la liste de type de demande disponible */
							$scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
									.select({}, function(data) {}, function(status) {});
							
							/*
							 * recuperation  type de demande 
							 * 
							 */
							$scope.typeDemande = TypeDemandeFactory.get({
								id : $routeParams.id
							}, function(data) {
								console.log(data);

							}, function(status) {
							});
							
							/*
							 * 
							 */
							
							$scope.code = {									
									myFile1 : 'vide',
									myFile2 : 'vide',
									myFile3 : 'vide',
									myFile4 : 'vide',
									myFile5 : 'vide',
									myFile6 : 'vide',
									myFile7 : 'vide',
									myFile8 : 'vide'
								};
							/*
							 * callback for create new demande
							 */
							$scope.createNewDemande = function() {
								
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
								
								var demande = {
									commentaire : null,
									etat : "En attente",
									dateCreation : $scope.today,
									dateModification : null,
									typeDemande : {
										id : $scope.typeDemande.id
									},
									client : {
										id : ClientProperties.getId()
									}
								};
								

								CreerDemandeFactory
										.creer(
												demande,
												function(data) {

													// apres l'enregistrement de
													// la demande on registre
													// les prerequis et les documents
					

													for (typePrerequis in $scope.typeDemande.prerequisTypeDemandes) {

														if ((document
																.getElementById($scope.typeDemande.prerequisTypeDemandes[typePrerequis].libelle).value != "")
																&& ($scope.typeDemande.prerequisTypeDemandes[typePrerequis].libelle != 'Civilite')) {
															var prerequis = {
																libelle : document
																		.getElementById($scope.typeDemande.prerequisTypeDemandes[typePrerequis].libelle).value,
																dateCreation : $scope.today,
																prerequisTypeDemande : {
																	id : $scope.typeDemande.prerequisTypeDemandes[typePrerequis].id
																},
																demande : {
																	id : data.id
																}
															};
															CreerPrerequisFactory.creer(prerequis,function() {
																				console.log("success");
																			},function() {
																				console.log("erreur");
																			});

														}else if ((document
																.getElementById("homme").checked )
																&& ($scope.typeDemande.prerequisTypeDemandes[typePrerequis].libelle == 'Civilite')) {
															var prerequis = {
																libelle : "homme",
																dateCreation : $scope.today,
																prerequisTypeDemande : {
																	id : $scope.typeDemande.prerequisTypeDemandes[typePrerequis].id
																},
																demande : {
																	id : data.id
																}
															};
															CreerPrerequisFactory.creer(prerequis,function() {
																				console.log("success");
																			},function() {
																				console.log("erreur");
																			});

														}else if ((document
																.getElementById("femme").checked)
																&& ($scope.typeDemande.prerequisTypeDemandes[typePrerequis].libelle == 'Civilite')){
															var prerequis = {
																	libelle : "femme",
																	dateCreation : $scope.today,
																	prerequisTypeDemande : {
																		id : $scope.typeDemande.prerequisTypeDemandes[typePrerequis].id
																	},
																	demande : {
																		id : data.id
																	}
																};
																CreerPrerequisFactory.creer(prerequis,function() {
																					console.log("success");
																				},function() {
																					console.log("erreur");
																				});

														}
													}
											     	// enregistrement des documents											
													for (typeDocument in $scope.typeDemande.documentsTypeDemandes) {
														if($scope.code['myFile'+ ((+typeDocument)+(+'1'))]!="vide" ){
															var file = $scope.code['myFile'+ ((+typeDocument)+(+'1'))];
															console.dir(file);
															var uploadUrl = "http://localhost:8081/stage/document/create";
															fileUpload.uploadFileToUrl(file, uploadUrl,data.id,
																	$scope.typeDemande.documentsTypeDemandes[typeDocument].id);
														
													}
													
													}
													$location.path('/demandes-en-cours');
												}, function(status) {
													$location.path('/erruer');			
													});

								

							
							}

						} ]);