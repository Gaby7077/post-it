var db = require("../models");
var carriertrack = require("../utils/carriers.js")


module.exports = function(app) {

  // Api route to get all guides and its info. 
  app.get("/api/tracks", function(req, res) {
    db.showTracks.findAll({}).then(function(dbTracks) {
      res.json(dbTracks);
    });
  });
};

//Route to write new track and it current status
app.post("/api/authors", function(req, res) {
  carriertrack.status(req.Body.Paqueteria, req.Body.NoGuia);
  db.Track.create(req.body).then(function(dbTracks) {
    res.json(dbTracks);
  });
});