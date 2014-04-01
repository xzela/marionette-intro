var ContactManager = new Marionette.Application();

ContactManager.StaticView = Marionette.ItemView.extend({
	id: "static-view",
	tagName: "span",
	className: "instruction",
	template: "#static-template"
});


// Regions and Templates
ContactManager.addRegions({
	headerRegion: "#header-region",
	mainRegion: "#main-region",
	contactRegion: "#contact-region",
	dialogRegion: Marionette.Region.Dialog.extend({
		el: "#dialog-region"
	})
});

/**
 * Naviagtes the browser to a specified route
 *
 * @param  {String} route   Name of route
 * @param  {Object} options Optional options to pass along
 *                          with the route
 *
 * @return null
 */
ContactManager.navigate = function (route, options) {
	options = options || {};
	Backbone.history.navigate(route, options);
};

/**
 * Returns the current Route
 *
 * @return {String} current route
 */
ContactManager.getCurrentRoute = function () {
	return Backbone.history.fragment;
};



ContactManager.on("initialize:after", function () {
	// initializing the router
	if (Backbone.history) {
		Backbone.history.start();

		if (this.getCurrentRoute() === '') {
			ContactManager.trigger("contact:list");
		}
	}

	// Adding static view
	var staticView = new ContactManager.StaticView({
		template: "#different-static-template"
	});

	ContactManager.mainRegion.show(staticView);
});



