var db = require("../models");


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
  
  db.Author.create(req.body).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});