ContactManager.module('ContactsApp.Common.Views', function (Views, ContactManager, Backbone, Marionette, $, _) {
	Views.Form = Marionette.ItemView.extend({
		template: "#contact-form",

		events: {
			"click button.js-submit": "submitClick"
		},

		submitClick: function (evnt) {
			evnt.preventDefault();
			var data = Backbone.Syphon.serialize(this);
			this.trigger('form:submit', data);
		},

		onFormDataInvalid: function (errors) {
			var _this = this;
			var $view = _this.$el;
			var clearFormErrors = function () {
				var $form = $view.find("form");
				$form.find(".help-inline").each(function () {
					$(this).remove();
				});

				$form.find('.control-group.error').each(function () {
					$(this).removeClass('error');
				});
			};


			var markErrors = function (value, key) {
				var $controlGroup = _this.$el.find('#contact-' + key).parent();
				var $errorEl = $('<span>', {
					class: "help-inline error",
					text: value
				});
				$controlGroup.append($errorEl).addClass('error');
			};
			// remove the error messages
			clearFormErrors();
			_.each(errors, markErrors);
		}

	});
});
