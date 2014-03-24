ContactManager.module("ContactsApp.Edit", function (Edit, ContactManager, Backbone, Marionette, $, _) {
	Edit.Contact = Marionette.ItemView.extend({
		template: "#contact-form",

		events: {
			"click button.js-submit": "submitClick"
		},

		submitClick: function (evnt) {
			evnt.preventDefault();
			var data = Backbone.Syphon.serialize(this);
			this.trigger('form:submit', data);
		},

		onFormDataInvalid: function (errors) {
			console.log("invalid form data:", errors);
		}

	});
});
