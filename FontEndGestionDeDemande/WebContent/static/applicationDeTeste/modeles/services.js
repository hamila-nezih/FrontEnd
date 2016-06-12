app.factory('UsersFactory', function($resource) {

	return $resource('http://localhost:8081/stage/utilisateur/:verb', {}, {
		"select" : {
			'method' : 'GET',
			isArray : true,
			'params' : {
				verb : 'getAll'
			}
		},
		"create" : {
			'method' : 'POST',
			'params' : {
				verb : 'create'
			}
		}
	})
});

app.factory('login', function($resource) {

	return $resource('http://localhost:8081/stage/:verb', {}, {
		
		"create" : {
			'method' : 'POST',
			'params' : {
				verb : 'login'
			}
		}
	})
});

app.factory('UserFactory', function($resource) {

	return $resource('http://localhost:8081/stage/utilisateur/:verb/:id', {}, {
		"show" : {
			'method' : 'GET',
			'params' : {
				verb : 'get'
			}

		},
		"update" : {
			'method' : 'Put',
			'params' : {
				verb : 'update'
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


app.factory('UploadFactory', function($resource) {

	return $resource('http://localhost:8081/stage/:verb', {}, {
		"select" : {
			'method' : 'GET',
			isArray : true,
			'params' : {
				verb : 'getAll'
			}
		},
		"create" : {
			'method' : 'POST',
			'params' : {
				verb : 'upload'
			}
		}
	})
});
