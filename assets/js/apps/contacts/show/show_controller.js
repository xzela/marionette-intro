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
			var loadingView = new ContactManager.Common.Views.Loading({
				title: "Artificial Loading Delay",
				message: "Data loading is delayed to demonstrate using a loading view."
			});
			ContactManager.contactRegion.show(loadingView);

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
