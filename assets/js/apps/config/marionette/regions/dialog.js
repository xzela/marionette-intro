Marionette.Region.Dialog = Marionette.Region.extend({
	onShow: function (view) {
		this.listenTo(view, 'dialog:close', this.closeDialog);

		var _this = this;
		this.$el.dialog({
			modal: true,
			title: view.title,
			width: "auto",
			close: function (evnt, ui) {
				_this.closeDialog();
			}
		});
	},

	closeDialog: function () {
		this.stopListening();
		this.close();
		this.$el.dialog('destroy');
	}
});
