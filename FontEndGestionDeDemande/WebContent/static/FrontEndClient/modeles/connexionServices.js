app.factory('ConnexionFactory', function($resource) {

	return $resource('http://localhost:8081/stage/client/:verb/:login/:password', {}, {
		"get" : {
			'method' : 'GET',
			isArray : true,
			'params' : { 
				verb : 'get'
			}
		}
	});
});

app.service('ClientProperties', function () {
    var nom = '';
    var prenom = '';
    var id = '';

    return {
        getNom: function () {
            return nom;
        },
        setNom: function(value) {
            nom = value;
        },
        getPrenom: function () {
            return prenom;
        },
        setPrenom: function(value) {
            prenom = value;
        },
        getId: function () {
            return id;
        },
        setId: function(value) {
            id = value;
        }
    };
});