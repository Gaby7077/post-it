module.exports = function(sequelize, DataTypes) {
  var ShowTracks = sequelize.define("ShowTracks", {
    track: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    carrier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
  });
  return ShowTracks;
};
