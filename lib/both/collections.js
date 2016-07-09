import { Meteor } from "meteor/meteor";
import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { Mongo } from "meteor/mongo";

import { Schemas } from "./schemas.js";

export var Favorites = new Mongo.Collection("favorites");

Schemas.Favorites = new SimpleSchema({
	doc: {
		type:String,
		regEx: SimpleSchema.RegEx.Id,
	},
	owner: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
	},
	createdAt: {
		type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			}
		}
	},
});

Favorites.attachSchema(Schemas.Favorites);
