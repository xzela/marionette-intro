ContactManager.module("Entities", function (Entities, ContactManager, Backbone, Marionette, $, _) {

	Entities.Contact = Backbone.Model.extend({
		urlRoot: "contacts",
		defaults: {
			firstName: "Jane",
			lastName: "Doe",
			phoneNumber: "No phone number!"
		}
	});
	// load local storage configuration for Contact
	Entities.configureStorage(Entities.Contact);

	Entities.ContactCollection = Backbone.Collection.extend({
		url: "contacts",
		model: Entities.Contact,
		comparator: "lastName"
	});
	// load local storage configuration for ContactCollections
	Entities.configureStorage(Entities.ContactCollection);

	var initializeContacts = function () {
		contacts = new Entities.ContactCollection([
			{
				id: 1,
				firstName: "Bob",
				lastName: "Thornton"
			},
			{
				id: 2,
				firstName: "John",
				lastName: "Johnson",
				phoneNumber: "000-0001"
			},
			{
				id: 3,
				firstName: "Sally",
				lastName: "Sallerson"
			}
		]);
	};

	var API = {
		getContactEntities: function () {
			var contacts = new Entities.ContactCollection();
			contacts.fetch();
			return contacts;
		}
	};

	ContactManager.reqres.setHandler("contact:entities", function () {
		return API.getContactEntities();
	});

});
