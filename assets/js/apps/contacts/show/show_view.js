ContactManager.module('ContactsApp.Show', function (Show, ContactManager, Backbone, Marionette, $, _) {
	Show.Contact = Marionette.ItemView.extend({
		template: "#contact-view",

		events: {
			"click a.js-close": "closeClick"
		},

		closeClick: function (evnt) {
			evnt.preventDefault();
			evnt.stopPropagation();

			ContactManager.trigger("contact:list");
		}

	});
});
