app.controller('UserListCtrl', [ '$scope', 'UsersFactory', 'UserFactory',
		'$location','$window', function($scope, UsersFactory, UserFactory, $location, $window) {

			/* callback for ng-click 'editUser': */
			$scope.editUser = function(userId) {
				$location.path('/user-detail/' + userId);
			};

			/* callback for ng-click 'deleteUser': */
			$scope.deleteUser = function(userId) {
				UserFactory.supprimer({
					id : userId
				}, function() {
					$scope.users = UsersFactory.select();
					console.log($scope.users);

				}, function(status) {
					console.log(status);
					if (status.status == '0') {
						$location.path('/errors');
					} else if (status.status == '500') {
						$window.alert("Méthode Non Autorisée");
					} else {
						$location.path('/user-list');
					}

				});
			}
			/* callback for ng-click 'createUser': */
			$scope.createNewUser = function() {
				$location.path('/user-creation');
			};

			$scope.users = UsersFactory.select(
					function(status) {
						

				
			},
			function(status) {
//				$location.path('/login');
//				UsersFactory.create({'j_username' :"hamila",'j_password' :"hamila",'login' :"Envoyer"});
//				console.log(status);
				
			});
			console.log($scope.users);
		} ]);

app.controller('UserDetailCtrl', [ '$scope', '$routeParams', 'UserFactory',
		'$location', 'MsgConfig',
		function($scope, $routeParams, UserFactory, $location, MsgConfig) {

			/* callback for ng-click 'updateUser': */

			$scope.updateUser = function() {
				UserFactory.update({
					'id' : $routeParams.id
				}, $scope.user);
				$location.path(MsgConfig.urlListUtilisateur);
			};

			/* callback for ng-click 'cancel': */
			$scope.cancel = function() {
				$location.path('/user-list');
			};

			$scope.user = UserFactory.show({
				id : $routeParams.id
			},function(data){
				console.log(data);
			});
			
		} ]);

app.controller('UserCreationCtrl', [ '$scope', 'UsersFactory', '$location',
		'MsgConfig', '$window',
		function($scope, UsersFactory, $location, MsgConfig, $window) {

			/* callback for 'message' */
			$scope.msg = MsgConfig;

			/* callback for ng-click 'createNewUser': */
			$scope.createNewUser = function() {

				UsersFactory.create($scope.user, function() {
					$location.path('/user-list');
				}, function(status) {
					console.log(status);

					if (status.status == '0') {

						$location.path('/errors');
					} else if (status.status == '405') {
						$window.alert("Méthode Non Autorisée");
					} else {
						$location.path('/user-list');

					}

				});

			}
		} ]);


app.controller('login', [ '$scope', 'login', '$location',
                             		'MsgConfig', '$window','$http','$cookies',
                             		function($scope, login, $location, MsgConfig, $window,$http,$cookies) {

                             			/* callback for 'message' */
                             			
                             			/* callback for ng-click 'createNewUser': */
                             			$scope.login = function() {
                             				
                             				$http({
                   					          method  : 'POST',
                   					          url     : 'http://localhost:8081/stage/login',
                   					          data    : $.param({
                      							   name: 'hamila',
                     							    password: 'hamila'  
                     							 }),
                     							
                   					          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
                   						}).success(function(data, status, header) {
                   					        if("a"==="true"){
                   					            console.log("opa")
                   					        }else{
                   					           console.log(status.status);
                   					           console.log($cookies.JSESSIONID);
                   					           console.log(header);
                   					        }
                   					    });    

                             			}
                             		} ]);

app.controller('upload', [ '$scope', 'UploadFactory', '$location',
                             		'MsgConfig', '$window','$http',
                             		function($scope, UploadFactory,$http, $location, MsgConfig, $window) {

                             			/* callback for 'message' */
                             			$scope.msg = MsgConfig;

                             			/* callback for ng-click 'createNewUser': */
                             			$scope.envoyerUpload = function() {

                             				$http({
                     					          method  : 'POST',
                     					          url     : 'http://localhost:8081/stage/uploadFile',
                     					          data    : $.param({
                        							   name: 'hamila',
                        							   file: $scope.hoto  
                       							 }),
                       							
                     					          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
                     						}).success(function(data, status, header) {
                     					        if("a"==="true"){
                     					            console.log("opa")
                     					        }else{
                     					           console.log(status.status);
                     					           console.log($cookies.JSESSIONID);
                     					           console.log(header);
                     					        }
                     					    });    
                             				
                             				
//                             				UploadFactory.create($scope.upload, function() {
//                             					$location.path('/user-list');
//                             				}, function(status) {
//                             					console.log(status);
//
//                             					if (status.status == '0') {
//
//                             						$location.path('/errors');
//                             					} else if (status.status == '405') {
//                             						$window.alert("Méthode Non Autorisée");
//                             					} else {
//                             						$location.path('/user-list');
//
//                             					}
//
//                             				});

                             			}
                             		} ]);
