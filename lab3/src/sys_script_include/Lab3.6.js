//This allows us to use non-registered dependencies to show in the list
var requiredPlugins = [{id: "com.glideapp.itom.snac", name: "Event Management"}];

for(var i=0; i < requiredPlugins.length; i++){
	var ret = GlidePluginManager.isActive(requiredPlugins[i].id);
	plugins.push({name: requiredPlugins[i].name, id: requiredPlugins[i].id, status: ret});
}