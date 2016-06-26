app.factory('GererCompteFactory', function($resource) {

	return $resource('http://localhost:8081/stage/client/:verb/:id', {}, {
		"get" : {
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

