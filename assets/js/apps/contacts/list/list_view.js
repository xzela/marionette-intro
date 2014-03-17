ContactManager.module('ContactsApp.List', function (List, ContactManager, Backbone, Marionette, $, _) {

	List.Contact = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#contact-list-item",

		events: {
			"click": "highlightName",
			"click button.js-delete": "deleteContact"
		},

		highlightName: function (evnt) {
			// suppress the default event
			evnt.preventDefault();
			console.log($(evnt.target).html());
			this.$el.toggleClass("warning");
		},

		deleteContact: function (evnt) {
			evnt.stopPropagation();
			this.trigger("contact:delete", this.model);
			// this.model.collection.remove(this.model);
		},

		// fade out effect
		remove: function () {
			var self = this;
			this.$el.fadeOut(function () {
				Marionette.ItemView.prototype.remove.call(self);
			});
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
