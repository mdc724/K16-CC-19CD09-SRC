getCurrentSetup: function(){
	var result = {};
	result.integrationUsers = this.getIntegrationUsers();
	result.plugins = this.getRequiredPluginsStatus();
	result.hasEvents = this.getEventsStatus();
	return result;
},