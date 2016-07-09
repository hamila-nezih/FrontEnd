app
		.controller(
				'modifierDemandeCtrl',
				[
						'$scope',
						'TypeDemandeFactory',
						'CreerDemandeFactory',
						'CreerPrerequisFactory',
						'PrerequisFactory',
						'DocumentsFactory',
						'fileUpload',
						'CreerHistoriqueDemandeFactory',
						'CreerHistoriquePrerequisFactory',
						'CreerHistoriqueDocumentFactory',
						'ListeDemandeDisponibleFactory',
						'$routeParams',
						'$location',
						'ClientProperties',
						'$http',
						function($scope, TypeDemandeFactory,
								CreerDemandeFactory, CreerPrerequisFactory,
								PrerequisFactory, DocumentsFactory, fileUpload,
								CreerHistoriqueDemandeFactory,
								CreerHistoriquePrerequisFactory,
								CreerHistoriqueDocumentFactory,
								ListeDemandeDisponibleFactory, $routeParams,
								$location, ClientProperties, $http) {

							/*
							 * recuperation la liste de type de demande
							 * disponible
							 */
							$scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
									.select({}, function(data) {
									}, function(status) {
										$location.path('/errors');
									});

							/* recuperation nom et prenom */
							$scope.ClientConnecterProperties = {
								nom : ClientProperties.getNom(),
								prenom : ClientProperties.getPrenom()
							};

							/* recuperation la liste des demandes disponible */
							$scope.typeDemande = TypeDemandeFactory.get({
								id : $routeParams.idtype
							}, function(data) {
							}, function(status) {
							});

							/** ****** id demande********** */
							$scope.idDemande = $routeParams.id;
							// $scope.idDemande = '1';
							/** **************** */
							$scope.options = [ 'homme', 'femme' ];

							/** ******document************ */
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
								idDmd : $scope.idDemande
							}, function(data) {
								console.log("prerequis")
								console.log(data);
								if (data[0][1] == 'homme') {
									$scope.selected = 'homme';
								} else {
									$scope.selected = 'femme';
								}
							}, function(status) {
							});

							/*
							 * recuperation les Documents
							 * 
							 */
							$scope.DocumentsDemande = DocumentsFactory.get({
								idDmd : $scope.idDemande
							}, function(data) {
								console.log(data)
							}, function(status) {
							});

							/*
							 * Download //
							 */
							$scope.download = function(idDocument, nameFile) {
								var url = 'http://localhost:8081/stage/demande/downloadFile/'
										+ idDocument;
								$http
										.get(url, {
											responseType : 'arraybuffer'
										})
										.success(
												function(data, status, headers,
														config) {
													var ieEDGE = navigator.userAgent
															.match(/Edge/g);
													var ie = navigator.userAgent
															.match(/.NET/g); // IE
													// 11+
													var oldIE = navigator.userAgent
															.match(/MSIE/g);
													var name = nameFile;
													var blob = new window.Blob(
															[ data ],
															{
																type : 'application/pdf'
															});
													if (ie || oldIE || ieEDGE) {
														var fileName = name;
														window.navigator
																.msSaveBlob(
																		blob,
																		fileName);
													} else {
														var file = new Blob(
																[ data ],
																{
																	type : 'application/pdf'
																});
														var fileURL = URL
																.createObjectURL(file);
														var a = document
																.createElement('a');
														a.href = fileURL;
														a.target = '_blank';
														a.download = name;
														document.body
																.appendChild(a);
														a.click();
													}
												});
							};
							/*
							 * modifier document
							 */
							$scope.modifierFonction = function(number) {
								$scope.modifier['m' + number] = true;
							};

							$scope.modifier = {
								m1 : false,
								m2 : false,
								m3 : false,
								m4 : false,
								m5 : false
							};
							/*
							 * enregistrement la modification de la demande
							 */
							$scope.modifierDemande = function() {
								console
										.log(document.getElementById("Nom").value);

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

								// preparation objet historiqueDemande

								var historiqueDemande = {
									dateHist : $scope.today,
									typeHist : "modification",
									demande : {
										id : $scope.idDemande
									}
								};
								$scope.idHistoriqueDemande = CreerHistoriqueDemandeFactory
										.creer(
												historiqueDemande,
												function(data) {

													for (var typePrerequis = 0; typePrerequis < $scope.prerequisDemande.length; typePrerequis++) {
														console
																.log(document
																		.getElementById("Nom").value);
														if (($scope.prerequisDemande[typePrerequis][2] != 'Civilite')
																&& (document
																		.getElementById($scope.prerequisDemande[typePrerequis][2]).value != "")) {

															console
																	.log(document
																			.getElementById($scope.prerequisDemande[typePrerequis][2]).value);
															console
																	.log($scope.prerequisDemande[typePrerequis][5]);

															var HistoriquePrerequis = {
																historiqueDemande : {
																	id : data.id
																},
																prerequisDeDemande : {
																	id : $scope.prerequisDemande[typePrerequis][0]
																}

															};
															CreerHistoriquePrerequisFactory
																	.creer(
																			HistoriquePrerequis,
																			function() {
																				console
																						.log("success");
																			},
																			function() {
																				console
																						.log("erreur");
																			});
															var prerequis = {
																libelle : document
																		.getElementById($scope.prerequisDemande[typePrerequis][2]).value,
																dateCreation : $scope.today,
																prerequisTypeDemande : {
																	id : $scope.prerequisDemande[typePrerequis][6]
																},
																demande : {
																	id : $scope.idDemande
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
														} else if ((document
																.getElementById('homme').checked)
																&& ($scope.prerequisDemande[typePrerequis][2] == 'Civilite')
																&& ($scope.prerequisDemande[typePrerequis][1] != 'homme')) {
															var HistoriquePrerequis = {
																historiqueDemande : {
																	id : data.id
																},
																prerequisDeDemande : {
																	id : $scope.prerequisDemande[typePrerequis][0]
																}

															};
															CreerHistoriquePrerequisFactory
																	.creer(
																			HistoriquePrerequis,
																			function() {
																				console
																						.log("success");
																			},
																			function() {
																				console
																						.log("erreur");
																			});
															var prerequis = {
																libelle : "homme",
																dateCreation : $scope.today,
																prerequisTypeDemande : {
																	id : $scope.prerequisDemande[typePrerequis][6]
																},
																demande : {
																	id : $scope.idDemande
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

														} else if ((document
																.getElementById("femme").checked)
																&& ($scope.prerequisDemande[typePrerequis][2] == 'Civilite')
																&& ($scope.prerequisDemande[typePrerequis][1] != 'femme')) {
															var HistoriquePrerequis = {
																historiqueDemande : {
																	id : data.id
																},
																prerequisDeDemande : {
																	id : $scope.prerequisDemande[typePrerequis][0]
																}

															};
															CreerHistoriquePrerequisFactory
																	.creer(
																			HistoriquePrerequis,
																			function() {
																				console
																						.log("success");
																			},
																			function() {
																				console
																						.log("erreur");
																			});
															var prerequis = {
																libelle : "femme",
																dateCreation : $scope.today,
																prerequisTypeDemande : {
																	id : $scope.prerequisDemande[typePrerequis][6]
																},
																demande : {
																	id : $scope.idDemande
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
													// // enregistrement des
													// documents
													for (var documentD = 0; documentD < $scope.DocumentsDemande.length; documentD++) {
														if ($scope.code['myFile'
																+ ((+documentD) + (+'1'))] != "vide") {
															/** ********* */
															var HistoriqueDocumentDemande = {
																historiqueDemande : {
																	id : data.id
																},
																documentDeDemande : {
																	id : $scope.DocumentsDemande[documentD][0]
																}

															};
															CreerHistoriqueDocumentFactory
																	.creer(
																			HistoriqueDocumentDemande,
																			function() {
																				console
																						.log("success");
																			},
																			function() {
																				console
																						.log("erreur");
																			});

															/** ********* */
															var file = $scope.code['myFile'
																	+ ((+documentD) + (+'1'))];
															console.log("e");
															console.dir(file);
															var uploadUrl = "http://localhost:8081/stage/document/create";
															fileUpload
																	.uploadFileToUrl(
																			file,
																			uploadUrl,
																			$scope.idDemande,
																			$scope.DocumentsDemande[documentD][6]);
															//														
														}
													}
													$location.path('/demandes-en-cours');
												}, function(status) {
													$location.path('/erruer');
												});
								
							};
						} ]);
