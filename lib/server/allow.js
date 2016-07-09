import { Favorites } from "../both/collections.js";

Favorites.allow({
	insert: function(userId, doc) {
		return doc.owner == userId;
	},

	remove: function (userId, doc) {
		return doc.owner == userId;
	},
});
