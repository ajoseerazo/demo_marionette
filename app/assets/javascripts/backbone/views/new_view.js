var NewUserView = Backbone.Marionette.ItemView.extend({
	tagName: 'form',
	id: 'new-user',
	className: 'form',
	template: JST['backbone/templates/users/new'],

	events: {
		'click #btn-send': 'save'
	},

	save: function(event){
		event.preventDefault();
		MyApp.trigger('save', this.options.collection);
	}
});
