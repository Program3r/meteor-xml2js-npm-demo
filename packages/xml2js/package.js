Package.describe({
  summary: "Parse XML into JSON"
});

Npm.depends({xml2js: "0.2.6"});

Package.on_use(function (api) {
  if (api.export) // ensure backwards compatibility with Meteor pre-0.6.5
    api.export('XML2JS');

  api.add_files("xml2js.js", "server");
});