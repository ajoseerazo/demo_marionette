var User = Backbone.Model.extend({
	defaults: {
		firstname: 'Amilcar',
		lastname: 'Erazo',
		age: '24'
	},

	urlRoot: '/users'
});

var Users = Backbone.Collection.extend({
	model: User,	
	url: '/users'
});
