var Api = new Restivus ({
  useDefaultAuth:false,
  prettyJson:true
});


Api.addRoute('hello/:name', {

  get: function(){
    //console.log(this.request);
    return 'this is done' + this.urlParams.name;
  }
});