app.controller('DemandesEnCoursCtrl', [
                           		'$scope',
                           		'DemandeEncoursFactory',
                           		'$location',
                           		'$window',
                           		function($scope, DemandeEncoursFactory, $location, $window) {

                           			/* recuperation la liste  de demande creer par le client(id=idC) */
                           			$scope.demandesEncours = DemandeEncoursFactory.get({
                        				id : "1"
                        			}, function(data) {
                        				// selectionner le bouton radio
                        				console.log(data);                        				
                        			}, function(status) {

                        			});
                           			
                           			/* callback for ng-click 'viderChampRecheche': */
                           			
                           				
                           			

                           		} ]);
