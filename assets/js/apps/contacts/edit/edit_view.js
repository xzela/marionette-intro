ContactManager.module("ContactsApp.Edit", function (Edit, ContactManager, Backbone, Marionette, $, _) {
	Edit.Contact = Marionette.ItemView.extend({
		template: "#contact-form",

		events: {
			"click button.js-submit": "submitClick"
		},

		submitClick: function (evnt) {
			evnt.preventDefault();
			console.log("contact edit submitted");
		}

	});
});
