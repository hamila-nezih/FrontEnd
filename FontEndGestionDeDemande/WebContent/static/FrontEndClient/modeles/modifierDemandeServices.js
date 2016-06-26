app.factory('TypeDemandeFactory', function($resource) {

	return $resource('http://localhost:8081/stage/typeDemande/:verb/:id', {}, {
		"get" : {
			'method' : 'GET',
			'params' : {
				verb : 'getTypeDemand'
			}

		},
		"creer" : {
			'method' : 'POST',
			'params' : {
				verb : 'create'
			}
		},
		"supprimer" : {
			'method' : 'DELETE',
			isArray : true,
			'params' : {
				verb : 'supprimer',
				id : '@id'
			}
		}
	})
});
app.factory('PrerequisFactory', function($resource) {

	return $resource('http://localhost:8081/stage/demande/:verb/:idDmd', {}, {
		"get" : {
			'method' : 'GET',
			isArray:true , 
			'params' : {
				verb : 'getPrerequis'
			}

		},
		"creer" : {
			'method' : 'POST',
			'params' : {
				verb : 'create'
			}
		},
		"supprimer" : {
			'method' : 'DELETE',
			isArray : true,
			'params' : {
				verb : 'supprimer',
				id : '@id'
			}
		}
	})
});
app.factory('CreerDemandeFactory', function($resource) {

	return $resource('http://localhost:8081/stage/demande/:verb', {}, {
		"get" : {
			'method' : 'GET',
			isArray : true,
			'params' : {
				verb : 'getTypeDemand'
			}
		},
		"creer" : {
			'method' : 'POST',
			'params' : {
				verb : 'create'
			}
		},
		"supprimer" : {
			'method' : 'DELETE',
			isArray : true,
			'params' : {
				verb : 'supprimer',
				id : '@id'
			}
		}
	})
});

app.factory('CreerPrerequisFactory', function($resource) {

	return $resource('http://localhost:8081/stage/prerequis/:verb', {}, {
		"get" : {
			'method' : 'GET',
			isArray:true ,
			'params' : {
				verb : 'getTypeDemand'
			}

		},
		"creer" : {
			'method' : 'POST',
			'params' : {
				verb : 'create'
			}
		},
		"supprimer" : {
			'method' : 'DELETE',
			isArray : true,
			'params' : {
				verb : 'supprimer',
				id : '@id'
			}
		}
	})
});

app.service('fileUpload', ['$http','$location', function ($http,$location) {
    this.uploadFileToUrl = function(files, uploadUrl, idD, idTypeDocument){
         var file = new FormData();
         console.log(files.name);
        file.append('file', files);
        file.append('name', files.name);  
     $http.post(uploadUrl,file, {
            transformRequest: angular.identity,
            headers: {'Content-Type':undefined}
        })
        .success(function(){
        })
        .error(function(){
      	 
        }); 
    }
}]);
app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);