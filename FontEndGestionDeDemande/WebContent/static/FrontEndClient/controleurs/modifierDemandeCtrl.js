app
		.controller(
				'modifierDemandeCtrl',
				[
						'$scope',
						'TypeDemandeFactory',
						'CreerDemandeFactory',
						'CreerPrerequisFactory',
						'PrerequisFactory',
						'fileUpload',
						'$location',
						'$window',
						'$http',
						function($scope, TypeDemandeFactory,
								CreerDemandeFactory, CreerPrerequisFactory,
								PrerequisFactory, fileUpload, $location, $window, $http) {
							
							/*******************/
							$scope.code = {
									myFile1 : 'vide',
									myFile2 : 'vide',
									myFile3 : 'vide',
									myFile4 : 'vide',
									myFile5 : 'vide'
								};
							
							
							/*
							 * recuperation les prerequis de type de la demande
							 * 
							 */
							$scope.prerequisDemande = PrerequisFactory.get({
								idDmd : 1
							},function(data) {
								console.log(data);
							}, function(status) {
							});

						
							/*
							 * recuperation la liste de type de demande
							 * disponible
							 */
							$scope.typeDemande = TypeDemandeFactory.get({
								id : 1
							}, function(data) {
								console.log(data);

							}, function(status) {
							});
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
									etat : "En cours",
									dateCreation : $scope.today,
									dateModification : null,
									typeDemande : {
										id : $scope.typeDemande.id
									},
									client : {
										id : 1
									}
								};

								CreerDemandeFactory
										.creer(
												demande,
												function(data) {

													// apres l'enregistrement de
													// la demande on registre
													// les prerequis et les
													// documents

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
															CreerPrerequisFactory
																	.creer(
																			prerequis,
																			function() {
																				console
																						.log("success");
																			},
																			function() {
																				console
																						.log("erreur");
																			});

														}
													}
													// enregistrement des
													// documents
													for (typeDocument in $scope.typeDemande.documentsTypeDemandes) {
														if ($scope.code['myFile'
																+ ((+typeDocument) + (+'1'))] != "vide") {
															var file = $scope.code['myFile'
																	+ ((+typeDocument) + (+'1'))];
															console.dir(file);
															var uploadUrl = "http://localhost:8081/stage/document/create";
															fileUpload
																	.uploadFileToUrl(
																			file,
																			uploadUrl,
																			data.id,
																			$scope.typeDemande.documentsTypeDemandes[typeDocument].id);

														}

													}

												}, function(status) {
													console.log("$erreur");
												});

							}

						} ]);