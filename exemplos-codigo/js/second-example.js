function SecondExampleController($scope) {

	$scope.name = "Nome setado via Controller";

	$scope.checkTwoWayDataBinding = function() {
		console.log($scope.name);
	}
}