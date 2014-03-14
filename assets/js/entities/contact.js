ContactManager.module("Entities", function (Entities, ContactManager, Backbone, Marionette, $, _) {

	Entities.Contact = Backbone.Model.extend({
		defaults: {
			firstName: "Jane",
			lastName: "Doe",
			phoneNumber: "No phone number!"
		}
	});

	Entities.ContactCollection = Backbone.Collection.extend({
		model: Entities.Contact,
		comparator: "lastName"
	});

	var contacts;

	var initializeContacts = function () {
		contacts = new Entities.ContactCollection([
			{
				firstName: "Bob",
				lastName: "Thornton"
			},
			{
				firstName: "John",
				lastName: "Johnson",
				phoneNumber: "000-0001"
			},
			{
				firstName: "Sally",
				lastName: "Sallerson"
			}
		]);
	};

	var API = {
		getContactEntities: function () {
			if (contacts === undefined) {
				initializeContacts();
			}
			return contacts;
		}
	};

	ContactManager.reqres.setHandler("contact:entities", function () {
		return API.getContactEntities();
	});

});
