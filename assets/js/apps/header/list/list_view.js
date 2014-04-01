ContactManager.module("HeaderApp.List", function (List, ContactManager, Backbone, Marionette, $, _) {
	List.Header = Backbone.ItemView.extend({
		template: "#header-link",
		tagName: "li"
	});

	List.Headers = Backbone.Compositeiew.extend({
		template: "#header-template",
		className: "navbar navbar-inverse navbar-fixed-top",
		itemView: List.Header,
		itemViewContainer: "ul"
	});
});
