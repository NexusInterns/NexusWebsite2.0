module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        email : {type: DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true}},
        password : {type: DataTypes.STRING, allowNull: false},
        package : {type: DataTypes.TEXT, allowNull: true, validate : {isIn: [['None', 'Beginner Package', 'Intermediate Package', 'Advanced Package']]}},
        courses : {type: DataTypes.TEXT, allowNull: false, validate: {is: ["\"(.*?)\"", 'i']}},
    });
    return Users;
}