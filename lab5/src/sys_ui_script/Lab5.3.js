setupApp.controller('SetupController',  function($scope, integrationSetupService, $timeout) {
	$scope.usersWithRole = [];
	$scope.requiredPlugins = [];
	$scope.newUser = {username: "", password: "", displayName: ""};
	$scope.hasEvents = false;
	
	$scope.refreshContent = function(){

	};

	$scope.refreshClick = function(){
		$scope.refreshContent();	
	};

});
