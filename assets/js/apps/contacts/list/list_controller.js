ContactManager.module('ContactsApp.List', function (List, ContactManager, Backbone, Marionette, $, _) {
	List.Controller = {
		listController: function () {
			var contacts = ContactManager.request("contact:entities");

			var contactsListView = new List.Contacts({
				collection: contacts
			});

			contactsListView.on('itemview:contact:delete', function (childView, model) {
				contacts.remove(model);
			});

			contactsListView.on('itemview:contact:show', function (childView, model) {
				ContactManager.ContactsApp.Show.Controller.showContact(model);
			});

			ContactManager.contactRegion.show(contactsListView);
		}
	};
});


ContactManager.module('ContactsApp.Show', function (Show, ContactManager, Backbone, Marionette, $, _) {
	Show.Controller = {
		showContact: function (model) {
			console.log("showContact called for model ", model);
		}
	};
});
