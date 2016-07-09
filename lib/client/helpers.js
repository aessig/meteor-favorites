Template.registerHelper('Favorites', function (collection) {
  var Favorites, favorites;
  if (typeof window['Favorites'] !== 'undefined') {
    Favorites = [];
    favorites = window['Favorites'].find({
      owner: Meteor.userId()
    }, {
      sort: {
        createdAt: -1
      }
    }).fetch();
    collection = window[collection];
    _.each(favorites, function (favorite) {
      if (collection.findOne({
        _id: favorite.doc,
      })) {
        return Favorites.push(collection.findOne({
          _id: favorite.doc,
        }));
      }
    });
    return Favorites;
  }
});

Template.registerHelper('favoriteCount', function(_id) {
  if (typeof window['Favorites'] !== 'undefined') {
    return Favorites.find({
      doc: _id
    }).fetch().length;
  }
});

Template.registerHelper('orderByFavorites', function(docs) {
  if (typeof window['Favorites'] !== 'undefined' && typeof docs !== 'undefined') {
    return _.sortBy(docs, function(doc) {
      return -1 * Favorites.find({
        doc: doc._id
      }).fetch().length;
    });
  }
});
