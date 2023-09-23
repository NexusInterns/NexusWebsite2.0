module.exports = (sequelize, DataTypes) => {
    const Subscribers = sequelize.define("Subscribers", {
        email : {type: DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true}},
    });
    return Subscribers;
}