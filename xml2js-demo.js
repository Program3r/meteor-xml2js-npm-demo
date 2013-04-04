var tryParse = function(xml) {
  console.log("Parsing: " + xml);

  try {
    // XML2JS is defined in packages/xml2js/xml2js.js
    var json = XML2JS.parse(xml);
    console.log("==> " + JSON.stringify(json));
  } catch (e) {
    console.log("*** Exception: " + e);
  }

  console.log();
};

if (Meteor.isServer) {
  console.log();
  console.log("=== XML2JS DEMO ===");
  console.log();

  tryParse('<bar><foo value="4"></foo></bar>');
  tryParse('<bar><foo value="4"></fooz></bar>'); // <foo> not closed
}
