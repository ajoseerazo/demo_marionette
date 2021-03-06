var UsersRouter = Backbone.Marionette.AppRouter.extend({
	initialize: function(options){
		this.collection = new Users();
		this.collection.reset( options.users );
	},
	routes: {
		'': 'home',
		'new': 'addUser',
		'edit/:id': 'editUser'
	},
	home: function(){
		var usersView = new UsersView({
			collection: this.collection
		});
		MyApp.mainRegion.show(usersView);
	},
	addUser: function(){
		var newUserView = new NewUserView({collection: this.collection});
		MyApp.mainRegion.show(newUserView);
	},
	editUser: function(id){
		var user = this.collection.get(id);
		var editUserView = new EditUserView({model: user});
		MyApp.mainRegion.show(editUserView)
	}
});
