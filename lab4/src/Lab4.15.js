var respBody = {};
	try{
		//Get the data from the request body
		var userInfo = request.body.data;
		gs.info(userInfo);
		var rec = new GlideRecord("sys_user");
		rec.user_name = userInfo.username;
		rec.password = userInfo.password;
		rec.name = userInfo.displayName;
		rec.insert();

		var grRole = new GlideRecord("sys_user_role");
		grRole.get("name", "sn_k16_install.integration");
		
		//add the integration role
		var userRole = new GlideRecord("sys_user_has_role");
		userRole.user = rec.sys_id.toString();
		userRole.role = grRole.sys_id.toString();
		userRole.insert();
		//After inserting the new user and adding the role, return the current setup information.
		respBody = new SetupIntrospector().getCurrentSetup();
		respBody.status = 0;
	}catch(e){
		respBody.status = 1;
		respBody.error_message = e;
	}
	response.setBody(respBody);
