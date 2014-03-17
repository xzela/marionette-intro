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


ContactManager.on("initialize:after", function () {

	ContactManager.ContactsApp.List.Controller.listController();

	var staticView = new ContactManager.StaticView({
		template: "#different-static-template"
	});

	ContactManager.mainRegion.show(staticView);
});



