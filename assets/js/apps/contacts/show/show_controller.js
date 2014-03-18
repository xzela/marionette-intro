ContactManager.module('ContactsApp.Show', function (Show, ContactManager, Backbone, Marionette, $, _) {
	Show.Controller = {
		/**
		 * Show a contact by a given id
		 *
		 * @param  {Number} id Id of contact
		 *
		 * @return null
		 */
		showContact: function (id) {
			// fetches all contact entities
			var contacts = ContactManager.request('contact:entities');
			var model = contacts.get(id);
			var contactView = new Show.Contact({
				model: model
			});

			ContactManager.contactRegion.show(contactView);
		}

	};
});
