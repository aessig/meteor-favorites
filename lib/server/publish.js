import { Meteor } from "meteor/meteor";
import { Favorites } from "../both/collections.js";

Meteor.publish("favorites", function () {
	return Favorites.find({});
});

Meteor.publish("favoritesByUser", function (_id) {
	check(_id, String);

	return Favorites.find({ owner: _id });
});
