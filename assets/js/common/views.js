ContactManager.module("Common.Views", function (Views, ContactManager, Backbone, Marionette, $, _) {
	Views.Loading = Marionette.ItemView.extend({
		template: "#loading-view",

		initialize: function (options) {
			var options = options || {};
			this.title = options.title || "Loading Data!";
			this.message = options.message || "Please wait, data is loading...";
		},

		serializeData: function () {
			return {
				title: this.title,
				message: this.message
			};
		},

		onShow: function () {
			var options = {
				lines: 13,
				length: 20,
				width: 10,
				radius: 30,
				corners: 1,
				rotate: 0,
				direction: 1,
				color: "#000",
				speed: 1,
				trail: 60,
				shadow: false,
				hwaccel: false,
				className: "spinner",
				zIndex: 2e9,
				top: "120px",
				left: "auto"
			};
			$("#spinner").spin(options);
		}
	});
});
