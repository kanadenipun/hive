var Api = new Restivus ({
  useDefaultAuth:false,
  prettyJson:true
});


Api.addRoute('register/', {

  post: function(){
  	device_name = this.bodyParams.name;
  	device_ip = this.bodyParams.ip;
  	date = new Date().valueOf();
  	Devices.update({'name': device_name},{$set:{ 'ip': device_ip, 'last_seen': date, 'ctr': 1}}, {upsert:true});
  	console.log(device_name + " : " + device_ip + " : " + date);
    return {'status': 'success'}
  }
});

Api.addRoute('addTweet/:tweetid', {

  post: function(){
  
  	tweetid = this.urlParams.tweetid;
  	text = this.bodyParams.text;
  	username = this.bodyParams.username;
  	if(Tweets.find({'tweetid':tweetid}).count() > 0)
  		return {'status': 'failure'}
  	else{
  		Tweets.insert({'tweetid':tweetid, 'text':text, 'username':username});
  		return {'status': 'success'}
  	}
  }
});

