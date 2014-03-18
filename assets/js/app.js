var ContactManager = new Marionette.Application();

ContactManager.StaticView = Marionette.ItemView.extend({
	id: "static-view",
	tagName: "span",
	className: "instruction",
	template: "#static-template"
});


// Regions and Templates
ContactManager.addRegions({
	mainRegion: "#main-region",
	contactRegion: "#contact-region"
});

ContactManager.navigate = function (route, options) {
	options = options || {};
	Backbone.history.navigate(route, options);
};

ContactManager.getCurrentRoute = function () {
	return Backbone.history.fragement;
};



ContactManager.on("initialize:after", function () {
	if (Backbone.history) {
		Backbone.history.start();

		if (Backbone.history.fragement === '') {
			this.navigate("contacts");
			ContactManager.ContactsApp.List.Controller.listContacts();
		}
	}


	var staticView = new ContactManager.StaticView({
		template: "#different-static-template"
	});

	ContactManager.mainRegion.show(staticView);
});



