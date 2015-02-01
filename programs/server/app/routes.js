(function(){// Data context as a function
Router.route('/Home', function(){
	this.render('Home');
});



Router.route('ticker',{
	path: '/ticker'
});


Router.route('/api/post/:_lat/:_long', { where: 'server' })
  .get(function () {
    // GET /webhooks/stripe
  })
  .post(function () {
    // POST /webhooks/stripe
  })
  .put(function () {
    // PUT /webhooks/stripe
  })


//Default:
Router.route('/(.*)', function(){
	Router.go('/Home')
})

})();
