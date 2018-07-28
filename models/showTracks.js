module.exports = function(sequelize, DataTypes) {
  var ShowTracks = sequelize.define("ShowTracks", {
    NoGuia: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    paqueteria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    estatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
  });
  return ShowTracks;
};
