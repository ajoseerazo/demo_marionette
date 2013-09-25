var UserView = Backbone.Marionette.ItemView.extend({
	tagName: 'tr',
	template: JST['backbone/templates/users/user'],

	events: {
		'click .destroy': 'deleteUser'
	},

	deleteUser: function(){
		this.model.destroy();
		this.remove();
	}
});

var UsersView = Backbone.Marionette.CompositeView.extend({
	template: JST['backbone/templates/users/index'],
	
	itemView: UserView,

	itemViewContainer: 'tbody'	
});
