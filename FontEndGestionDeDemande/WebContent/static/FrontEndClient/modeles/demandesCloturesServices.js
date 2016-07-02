app.factory('DemandesCloturesFactory', function($resource) {

	return $resource('http://localhost:8081/stage/demande/:verb/:id', {}, {
		"get" : {
			'method' : 'GET',
			isArray : true,
			'params' : {
				verb : 'getDemandesClotures'
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