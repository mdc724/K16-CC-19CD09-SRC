setupApp.service('integrationSetupService', function($http){
    var integrationSetupService = {
		state :function(){
			var url = "/api/sn_k16_install/setup";
			var promise = $http.get(url)
			  .then(function(response){ return response.data.result; });
			return promise;
		},
		queryUser: function(username){
			var url = "/api/sn_k16_install/setup/user/user_name=" + username;
			var promise = $http.get(url)
			  .then(function(response){ return response.data.result; });
			return promise;
		},
		createUser: function(newUser){
			var url = "/api/sn_k16_install/setup/user";
			var promise = $http.post(url, newUser)
			  .then(function(response){ return response.data.result; });
			return promise;
		}
	};
	return integrationSetupService;
});