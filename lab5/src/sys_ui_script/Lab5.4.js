setupApp.controller('SetupController',  function($scope, integrationSetupService, $timeout) {
	$scope.usersWithRole = [];
	$scope.requiredPlugins = [];
	$scope.newUser = {username: "", password: "", displayName: ""};
	$scope.hasEvents = false;
	
	$scope.refreshContent = function(){
		integrationSetupService.state().then(function(d) {
			if(d.status == 0){
				$scope.usersWithRole = d.integrationUsers.users;
				$scope.requiredPlugins = d.plugins;
				$scope.hasEvents = d.hasEvents;
			}else{
				console.log(d);
			}
	  });	
	};
	
	$scope.refreshClick = function(){
		$scope.refreshContent();
	};
});