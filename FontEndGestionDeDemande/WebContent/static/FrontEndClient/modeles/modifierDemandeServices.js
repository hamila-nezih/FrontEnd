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
app.factory('DocumentsFactory', function($resource) {
	return $resource('http://localhost:8081/stage/demande/:verb/:idDmd', {}, {
		"get" : {
			'method' : 'GET',
			isArray:true , 
			'params' : {
				verb : 'getDocuments'
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


/***********historique**************/
app.factory('CreerHistoriqueDemandeFactory', function($resource) {

	return $resource('http://localhost:8081/stage/demande/historiqueDemande', {}, {
		"creer" : {
			'method' : 'POST'		
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

app.factory('CreerHistoriquePrerequisFactory', function($resource) {

	return $resource('http://localhost:8081/stage/demande/historiquePrerequis', {}, {
		
		"creer" : {
			'method' : 'POST'			
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

app.factory('CreerHistoriqueDocumentFactory', function($resource) {

	return $resource('http://localhost:8081/stage/demande/historiqueDocument', {}, {
		"creer" : {
			'method' : 'POST'		
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