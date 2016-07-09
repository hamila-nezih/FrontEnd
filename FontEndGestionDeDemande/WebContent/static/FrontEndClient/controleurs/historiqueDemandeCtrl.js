app.controller('historiqueDemandeCtrl', [
		'$scope',
		'historiqueDemandeFactory',
		'historiquePrerequisFactory',
		'historiqueDocumentsFactory',
		'ListeDemandeDisponibleFactory',
		'$routeParams',
		'fileUpload',
		'$location',
		'$window',
		'$http',
		'ClientProperties',
		function($scope, historiqueDemandeFactory, historiquePrerequisFactory,
				historiqueDocumentsFactory, ListeDemandeDisponibleFactory, $routeParams, fileUpload,
				$location, $window, $http,ClientProperties) {
			
			/* recuperation nom et prenom*/
			$scope.ClientConnecterProperties ={
					nom : ClientProperties.getNom(),
					prenom : ClientProperties.getPrenom()
			};
			
			$scope.listeDemandeDisponible = ListeDemandeDisponibleFactory
			.select({}, function(data) {
				console.log(data);

			}, function(status) {

			});

			/* recuperation la demande (id=idDemande) */
			$scope.demandeHistorique = historiqueDemandeFactory.get({
				id : $routeParams.id
			}, function(data) {

			}, function(status) {

			});

			/* recuperation les prerequis (id=idDemande) */
			$scope.prerequisHistorique = historiquePrerequisFactory.get({
				id : $routeParams.id
			}, function(data) {
				console.log(data);
			}, function(status) {

			});

			/* recuperation les documents (id=idDemande) */
			$scope.documentsHistorique = historiqueDocumentsFactory.get({
				id : $routeParams.id
			}, function(data) {
				console.log(data);
			}, function(status) {

			});
			/* fonction affichier/chaher prerequis */
			$scope.affichierPrerequis = true;
			$scope.affichierPrerequisFonction = function() {
				$scope.affichierPrerequis = false;

			};
			$scope.cacherPrerequisFonction = function() {
				$scope.affichierPrerequis = true;

			};
			/* fonction affichier/chaher prerequis */
			$scope.affichierDocument = true;
			$scope.affichierDocumentFonction = function() {
				$scope.affichierDocument = false;

			};
			$scope.cacherDocumentFonction = function() {
				$scope.affichierDocument = true;

			};
			/*
			 * Download //
			 */
			$scope.download = function(idDocument, nameFile) {
				var url = 'http://localhost:8081/stage/demande/downloadFile/'
						+ idDocument;
				$http.get(url, {
					responseType : 'arraybuffer'
				}).success(function(data, status, headers, config) {
					var ieEDGE = navigator.userAgent.match(/Edge/g);
					var ie = navigator.userAgent.match(/.NET/g); // IE
					// 11+
					var oldIE = navigator.userAgent.match(/MSIE/g);
					var name = nameFile;
					var blob = new window.Blob([ data ], {
						type : 'application/pdf'
					});
					if (ie || oldIE || ieEDGE) {
						var fileName = name;
						window.navigator.msSaveBlob(blob, fileName);
					} else {
						var file = new Blob([ data ], {
							type : 'application/pdf'
						});
						var fileURL = URL.createObjectURL(file);
						var a = document.createElement('a');
						a.href = fileURL;
						a.target = '_blank';
						a.download = name;
						document.body.appendChild(a);
						a.click();
					}
				});
			};

		} ]);