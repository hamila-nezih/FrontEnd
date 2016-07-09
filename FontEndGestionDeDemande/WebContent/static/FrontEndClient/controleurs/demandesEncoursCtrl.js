app.controller('DemandesEnCoursCtrl', [
                           		'$scope',
                           		'DemandeEncoursFactory',
                           		'ListeDemandeDisponibleFactory',
                           		'UpdateDemandeFactory',
                           		'$location',
                           		'ClientProperties',
                           		'$mdDialog', '$mdMedia',
                           		function($scope, DemandeEncoursFactory,ListeDemandeDisponibleFactory, 
                           				UpdateDemandeFactory, $location, ClientProperties,$mdDialog, $mdMedia) {
                           			
                           			
                           			/* recuperation nom et prenom*/
        							$scope.ClientConnecterProperties ={
        									nom : ClientProperties.getNom(),
        									prenom : ClientProperties.getPrenom()
        							};
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
                           			// A confirm dialog  
									$scope.showConfirm = function(id,ev) {

										var confirm = $mdDialog
												.confirm()
												.title('Annuler une demande.')
												.textContent('Êtes-vous sûr vous voulez annuler cette demande?')
												.ariaLabel('Lucky day')
												.targetEvent(ev)
												.cancel('Cancel')
												.ok('Ok');
												
										$mdDialog
												.show(confirm)
												.then(function() {
															var demande = {
				        											id : id ,
				        											etat : "Annulée",
				        											dateModification : $scope.today
				        										};
				        										UpdateDemandeFactory.update(demande,function(){
				        											/* mettre à jourla liste  des demandes encours  */
				        		                           			$scope.demandesEncours = DemandeEncoursFactory.get({
				        		                        				id : ClientProperties.getId()
				        		                        			}, function(data) {
				        		                        				console.log(data);                        				
				        		                        			}, function(status) {

				        		                        			});
				        										});													
				        										},
														function() {}
				        							);
									};                       			
                           			
                           			/* recuperation la liste des demandes disponible*/
                                    $scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
                        			.select({}, function(data) {
                        				
                        			}, function(status) {

                        			});
                           			/* recuperation la liste  de demande creer par le client(id=idClient) */
                           			$scope.demandesEncours = DemandeEncoursFactory.get({
                        				id : ClientProperties.getId()
                        			}, function(data) {
                        				console.log(data);                        				
                        			}, function(status) {

                        			});
                           			
                           			/* callback for ng-click 'editDemande': */
                        			$scope.editDemande = function(DemandeId,typeDemandeID) {
                        				console.log(typeDemandeID);
                        				$location.path('/modifier-demande/' + DemandeId +'/'+typeDemandeID);
                        			};
                           			
                           				
                           			

                           		} ]);
