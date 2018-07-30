var db = require("../models");
var carriertrack = require("../utils/carriers.js")


module.exports = function(app) {

  // Api route to get all guides and its info from the database
  app.get("/api/tracks", function(req, res) {
    db.ShowTracks.findAll({}).then(function(dbTracks) {
      res.json(dbTracks);
    });
  });


//Route to write new track and it current status
app.post("/api/tracks", function(req, res) {
 var status = carriertrack.Status(req.body.carrier, req.body.track)
    console.log("el status es " +status);

  db.ShowTracks.create(req.body).then(function(dbTracks) {
    res.json(dbTracks);
  });
});


// Route to delete a record from the database
app.delete("/api/tracks/:track", function(req, res) {
  db.ShowTracks.destroy({
    where: {
      track: req.params.track
    }
  }).then(function(dbTracks) {
    res.json(dbTracks);
  });
});


};