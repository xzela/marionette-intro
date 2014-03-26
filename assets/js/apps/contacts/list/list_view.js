ContactManager.module('ContactsApp.List', function (List, ContactManager, Backbone, Marionette, $, _) {

	List.Layout = Marionette.Layout.extend({
		template: "#contact-list-layout",

		regions: {
			panelRegion: "#panel-region",
			contactsRegion: "#contacts-region"
		}
	});

	List.Panel = Marionette.ItemView.extend({
		template: "#contact-list-panel",

		triggers: {
			"click button.js-new": "contact:new"
		}
	});

	List.Contact = Marionette.ItemView.extend({
		tagName: "tr",
		template: "#contact-list-item",

		events: {
			"click": "highlightName",
			"click button.js-delete": "deleteContact",
			"click td a.js-show": "showClick",
			"click td a.js-edit": "editClick"
		},

		highlightName: function (evnt) {
			// suppress the default event
			evnt.preventDefault();
			console.log($(evnt.target).html());
			this.$el.toggleClass("warning");
		},

		deleteContact: function (evnt) {
			evnt.stopPropagation();

			// trigger event
			this.trigger("contact:delete", this.model);
		},

		showClick: function (evnt) {
			evnt.preventDefault();
			evnt.stopPropagation();

			// trigger event
			this.trigger("contact:show", this.model);
		},

		editClick: function (evnt) {
			evnt.preventDefault();
			evnt.stopPropagation();

			this.trigger("contact:edit", this.model);
		},

		// fade out effect
		remove: function () {
			var self = this;
			this.$el.fadeOut(function () {
				Marionette.ItemView.prototype.remove.call(self);
			});
		},

		flash: function (cssClass) {
			var $view = this.$el;
			$view.hide().toggleClass(cssClass).fadeIn(800, function () {
				setTimeout(function () {
					$view.toggleClass(cssClass);
				}, 500);
			});
		}
	});

	List.Contacts = Marionette.CompositeView.extend({
		tagName: "table",
		className: "table table-hover",
		template: "#contact-list",
		itemView: List.Contact,
		itemViewContainer: "tbody",

		initialize: function () {
			this.listenTo(this.collection, 'rest', function () {
				this.appendHtml = function (collectionView, itemView, index) {
					collectionView.$el.append(itemView.el);
				};
			});
		},

		onCompositeCollectionRendered: function () {
			this.appendHtml = function (collectionView, itemView, index) {
				collectionView.$el.prepend(itemView.el);
			};
		}
	});

});
