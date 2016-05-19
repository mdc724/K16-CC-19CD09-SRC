var gr = new GlideRecord("sys_user_has_role");
gr.addQuery("role.name", role);
gr.addQuery("state", "active")
gr.query();
while(gr.next())
	result.users.push({sys_id: gr.user.sys_id.toString(), username: gr.user.user_name.toString()});