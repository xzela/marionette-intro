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
		var contacts = new Entities.ContactCollection([
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
		console.log(contacts);
		contacts.forEach(function (contact) {
			contact.save();
		});

		return contacts.model;
	};

	var API = {
		getContactEntities: function () {
			var contacts = new Entities.ContactCollection(),
				defer = $.Deferred();
			contacts.fetch({
				success: function (data) {
					defer.resolve(data);
				}
			});
			var promise = defer.promise();
			$.when(promise).done(function (contacts) {

				if (contacts.length === 0) {
					// if we don't have contacts
					var models = initializeContacts();

					contacts.reset(models);
				}
			});
			return promise;
		},

		getContactEntity: function (contactId) {
			var contact = new Entities.Contact({id: contactId}),
				defer = $.Deferred();
			setTimeout(function () {
				contact.fetch({
					success: function (data) {
						defer.resolve(data);
					},
					error: function (data) {
						defer.resolve(undefined);
					}
				});
			}, 2000);
			return defer.promise();
		}
	};

	ContactManager.reqres.setHandler("contact:entities", function () {
		return API.getContactEntities();
	});

	ContactManager.reqres.setHandler("contact:entity", function (id) {
		return API.getContactEntity(id);
	});


});
