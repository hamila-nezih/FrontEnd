app.factory('ClientFactory', function($resource) {

	return $resource('http://localhost:8081/stage/client/:verb', {}, {
		"select" : {
			'method' : 'GET',
			isArray : true,
			'params' : {
				verb : 'getAll'
			}
		},
		"create" : {
			'method' : 'POST',
			isArray : true,
			'params' : {
				verb : 'create'
			}
		}
	})
});

app.directive('validPasswordC',['$parse',function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.createClientForm.password.$viewValue	   
                ctrl.$setValidity('noMatch', !noMatch)
            })
        }
    }
}]);