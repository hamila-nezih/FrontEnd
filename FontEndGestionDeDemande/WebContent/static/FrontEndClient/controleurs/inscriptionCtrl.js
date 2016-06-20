app.controller(
				'inscriptionCtrl',[
						'$scope',
						'MsgConfig',
						'ClientFactory',
						'$location',
						'$window',
						function($scope, MsgConfig, ClientFactory, $location,
								$window) {

							/* callback for 'message' */
							$scope.msg = MsgConfig;

							/*
							 * callback for create new client
							 */
							$scope.createNewClient = function() {
								ClientFactory.create($scope.client, function() {
									$location.path('/page-accueil-connecter');
								}, function(status) {
									console.log($scope.client);
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
