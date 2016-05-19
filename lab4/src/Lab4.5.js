var respBody = {};
try{
	respBody = new SetupIntrospector().getCurrentSetup();
	respBody.status = 0;
}catch(e){
	respBody.status = 1;
	respBody.error_message = e;
}

response.setBody(respBody);