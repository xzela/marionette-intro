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

			ContactManager.contactRegion.show(contactsListView);
		}
	};
});
