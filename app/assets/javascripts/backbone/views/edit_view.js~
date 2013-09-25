var EditUserView = Backbone.Marionette.ItemView.extend({
	template: JST['backbone/templates/users/edit'],

	events: {
		'click #btn-edit': 'save'
	},

	save: function(event){
		event.preventDefault();
		MyApp.trigger('edit', this.model)
	}
});
