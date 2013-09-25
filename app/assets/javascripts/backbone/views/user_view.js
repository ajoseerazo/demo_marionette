var UserView = Backbone.Marionette.ItemView.extend({
	tagName: 'tr',
	template: JST['backbone/templates/users/user'],

	events: {
		'click .destroy': 'deleteUser'
	},
	deleteUser: function(){
		console.log('Eliminaremos');
	}
});


