getEventsStatus: function(){
	var source = "MyApp";
	var grEvent = new GlideRecord("em_event");
	grEvent.addQuery("source", source);
	grEvent.query();
	if(grEvent.hasNext())
		return true;
	return false;
},