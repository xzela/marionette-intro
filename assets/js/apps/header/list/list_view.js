ContactManager.module("HeaderApp.List", function (List, ContactManager, Backbone, Marionette, $, _) {
	List.Header = Marionette.ItemView.extend({
		template: "#header-link",
		tagName: "li",

		onRender: function () {
			if (this.model.selected) {
				this.$el.addClass('active');
			}
		}

	});

	List.Headers = Marionette.CompositeView.extend({
		template: "#header-template",
		className: "navbar navbar-inverse navbar-fixed-top",
		itemView: List.Header,
		itemViewContainer: "ul",

		events: {
			"click a.brand": "brandClicked"
		},

		brandClicked: function (evnt) {
			evnt.preventDefault();
			this.trigger("brand:clicked");
			ContactManager.trigger("contact:new");
		}
	});
});
