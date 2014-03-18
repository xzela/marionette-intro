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
			var fetchingContact = ContactManager.request('contact:entity', id);
			$.when(fetchingContact).done(function (contact) {
				var contactView;
				if (contact !== undefined) {
					contactView = new Show.Contact({
						model: contact
					});
				} else {
					contactView = new Show.MissingContact();
				}
				ContactManager.contactRegion.show(contactView);
			});
		}
	};
});
