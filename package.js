Package.describe({
  name: "aessig:meteor-favorites",
  summary: "Adds favoriting/liking functionality to any collection",
  version: "0.0.1",
  git: "http://github.com/aessig/meteor-favorites.git",
});

Package.onUse(function (api) {

  var both = ["client", "server"];

  api.versionsFrom("1.0");

  api.use(
    [
      "ecmascript@0.4.7",
      "templating",
      "aldeed:autoform@5.8.1",
      "aldeed:collection2@2.9.1",
    ],
  both);

  api.use("tap:i18n@1.8.0", both);
  api.imply("tap:i18n");

  api.add_files([
      "i18n/en.i18n.json",
      "i18n/fr.i18n.json",
    ], both);

  api.addFiles(
    [
      "lib/both/schemas.js",
      "lib/both/collections.js",
    ], both);

  api.addFiles(
    [
      "lib/client/templates.html",
      "lib/client/templates.js",
      "lib/client/helpers.js",
    ],
    "client");

  api.addFiles(
    [
      "lib/server/allow.js",
      "lib/server/publish.js",
    ],
    "server");

});
