setupApp.controller('SetupController',  function($scope, integrationSetupService, $timeout) {
	$scope.usersWithRole = [];
	$scope.requiredPlugins = [];
	$scope.newUser = {username: "", password: "", displayName: ""};
	$scope.hasEvents = false;
	
	$scope.refreshClick = function(){
	
	};

});
