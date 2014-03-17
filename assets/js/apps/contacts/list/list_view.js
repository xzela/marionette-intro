ContactManager.module('ContactsApp.List', function (List, ContactManager, Backbone, Marionette, $, _) {

	List.Contact = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#contact-list-item",

		events: {
			"click": "highlightName"
		},

		highlightName: function (event) {
			this.$el.toggleClass("warning");
		}
	});

	List.Contacts = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-hover",
		template: "#contact-list",
		itemView: List.Contact,
		itemViewContainer: "tbody"
	});
});
