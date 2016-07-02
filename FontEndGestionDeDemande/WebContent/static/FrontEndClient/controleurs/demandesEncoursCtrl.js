app.controller('DemandesEnCoursCtrl', [
                           		'$scope',
                           		'DemandeEncoursFactory',
                           		'ListeDemandeDisponibleFactory',
                           		'UpdateDemandeFactory',
                           		'$location',
                           		'$window',
                           		'$ionicPopup',
                           		function($scope, DemandeEncoursFactory,ListeDemandeDisponibleFactory, UpdateDemandeFactory, $location, $window,$ionicPopup) {
                           			
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
        							$scope.showConfirm = function(id) {
        								var confirmPopup = $ionicPopup
        										.confirm({
        											title : 'Annuler une demande',
        											template : 'Êtes-vous sûr vous voulez annuler la demande?'
        										});
        								confirmPopup.then(function(res) {
        									if (res) {
        										var demande = {
        											id : id ,
        											etat : "Annuler",
        											dateModification : $scope.today
        										};
        										UpdateDemandeFactory.update(demande,function(){
        											 window.location.reload();
        										});
        									} else {
        									}
        								});
        							};                          			
                           			
                           			
                           			/* recuperation la liste des demandes disponible*/
                                    $scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
                        			.select({}, function(data) {
                        			}, function(status) {

                        			});
                           			/* recuperation la liste  de demande creer par le client(id=idClient) */
                           			$scope.demandesEncours = DemandeEncoursFactory.get({
                        				id : "1"
                        			}, function(data) {
                        				// selectionner le bouton radio
                        				console.log(data);                        				
                        			}, function(status) {

                        			});
                           			
                           			/* callback for ng-click 'editDemande': */
                        			$scope.editDemande = function(DemandeId) {
                        				$location.path('/modifier-demande/' + DemandeId);
                        			};
                           			
                           				
                           			

                           		} ]);
