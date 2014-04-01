ContactManager.module('HeaderApp.List', function (List, ContactManager, Backbone, Marionette, $, _) {
	List.Controller = {
		listHeader: function () {
			var links = ContactManager.request("header:entities");
			var headers = new List.Headers({
				collection: links
			});

			headers.on("brand:clicked", function () {
				ContactManager.trigger("contact:list");
			});

			ContactManager.headerRegion.show(headers);
		}
	};
});
