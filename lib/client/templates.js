import { Meteor } from "meteor/meteor";
import { Favorites } from "../both/collections.js";
import { TAPi18n } from "meteor/tap:i18n";

Template.favoriteButton.helpers({
	isFavorite: function (_id) {
		return Favorites.findOne({ doc: _id, owner: Meteor.userId() });
	},
});

Template.favoriteButtonNotFavorited.events({
	"click .favorite-button": function (e,t) {
		Favorites.insert({ doc: $(e.currentTarget).attr("doc"), owner: Meteor.userId() });
	},
});

Template.favoriteButtonFavorited.events({
	"click .favorite-button": function (e,t) {
		favorite = Favorites.findOne({ doc: $(e.currentTarget).attr("doc"), owner: Meteor.userId() });
		Favorites.remove({_id: favorite._id});
	}
});
