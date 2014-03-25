ContactManager.module('ContactsApp.Show', function (Show, ContactManager, Backbone, Marionette, $, _) {
	Show.Contact = Marionette.ItemView.extend({
		template: "#contact-view",

		events: {
			"click a.js-close": "closeClick",
			"click a.js-edit": "editClick"
		},

		closeClick: function (evnt) {
			evnt.preventDefault();
			evnt.stopPropagation();

			ContactManager.trigger("contact:list");
		},

		editClick: function (evnt) {
			evnt.preventDefault();

			this.trigger("contact:edit", this.model);
		}

	});

	Show.MissingContact = Marionette.ItemView.extend({
		template: "#missing-contact-view"
	});

});
