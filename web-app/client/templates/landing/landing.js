Template.landing.helpers({
	'devices': function(){
		return Devices.find().fetch();
	}
});

Template.landing.events({
	'click .refresh': function(event){
		console.log("button pressed" + event.target.id);
		Devices.update({_id:event.target.id}, {$inc: {ctr: 1}});

	}
});

UI.registerHelper('formatTime', function(context, options) {
  if(context)
    return moment(context).fromNow();
});