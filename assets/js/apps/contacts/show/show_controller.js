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
			var contacts = ContactManager.request('contact:entities'),
				model = contacts.get(id),
				contactView;

			if (model !== undefined) {
				contactView = new Show.Contact({
					model: model
				});
			} else {
				contactView = new Show.MissingContact();
			}
			ContactManager.contactRegion.show(contactView);
		}

	};
});
