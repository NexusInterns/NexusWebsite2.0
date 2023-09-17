module.exports = (sequelize, DataTypes) => {
    const Messages = sequelize.define("Messages", {
        firstName : {type: DataTypes.STRING, allowNull: false},
        lastName : {type: DataTypes.STRING, allowNull: false},
        email : {type: DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true}},
        phone : {type: DataTypes.STRING, allowNull: true},
        message : {type: DataTypes.TEXT, allowNull: true},
    });
    return Messages;
}