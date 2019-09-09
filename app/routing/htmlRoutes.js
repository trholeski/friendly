// ===============================================================================
// DEPENDENCIES
var path = require("path");

module.exports = function(app) {


  app.get("/friend_result", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/friend_result.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

};
