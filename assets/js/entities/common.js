ContactManager.module('Entities', function (Entities, ContactManager, Backbone, Marionette, $, _) {
	Entities.FilteredCollection = function (options) {
		var original = options.collection;
		var filtered = new original.constructor();
		filtered.add(original.models);
		filtered.filterFunction = options.filterFunction;


		var applyFilter = function (filterCriterion, filterStrategy) {
			var collection = original;
			var criterion;
			if (filterStrategy === 'filter') {
				criterion = filterCriterion.trim();
			} else {
				criterion = filterCriterion;
			}

			var items = [];
			if (criterion) {
				if (filterStrategy === 'filter') {
					if (!filtered.filterFunction) {
						throw ('no filter fuction found!');
					}
					var filterFunction = filtered.filterFunction(criterion);
					items = collection.filter(filterFunction);
				} else {
					items = collection.where(criterion);
				}
			} else {
				items = collection.models;
			}
			filtered._currentCriterion = criterion;

			return items;
		};


		return filtered;
	};
});
