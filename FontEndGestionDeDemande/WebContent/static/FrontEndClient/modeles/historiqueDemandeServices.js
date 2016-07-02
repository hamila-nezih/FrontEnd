app.factory('historiqueDemandeFactory', function($resource) {

	return $resource('http://localhost:8081/stage/demande/:verb/:id', {}, {
		"get" : {
			'method' : 'GET',
			isArray : true,
			'params' : {
				verb : 'getDemandeHistorique'
			}
		},
		"download" : {
			method : 'GET',
			responseType : 'arraybuffer',
			cache : false,
			params : {
				verb : 'downloadFile'
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

app.factory('historiquePrerequisFactory', function($resource) {

	return $resource('http://localhost:8081/stage/demande/:verb/:id', {}, {
		"get" : {
			'method' : 'GET',
			isArray : true,
			'params' : {
				verb : 'getPrerequisHistorique'
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

app.factory('historiqueDocumentsFactory', function($resource) {

	return $resource('http://localhost:8081/stage/demande/:verb/:id', {}, {
		"get" : {
			'method' : 'GET',
			isArray : true,
			'params' : {
				verb : 'getDocumentsHistorique'
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