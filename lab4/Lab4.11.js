var result = {hasUser: false, users: []};
try{
	var query = request.pathParams.query;		
	var rec = new GlideRecord("sys_user");
	rec.addEncodedQuery(query);
	rec.query();
	while(rec.next()){
		result.users.push({username: rec.user_name.toString(), sys_id: rec.sys_id.toString()});
	}
	if(result.users.length > 0)
		result.hasUser = true;
}catch(e){
	result.error = e;
}
response.setBody(result);
