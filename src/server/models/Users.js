module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        email : {type: DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true}},
        password : {type: DataTypes.STRING, allowNull: false},
        promos : {type: DataTypes.TEXT, allowNull: false, validate: {is: ["\"(.*?)\"", 'i']}},
        package : {type: DataTypes.TEXT, allowNull: true, validate : {isIn: [['Beginner Package', 'Intermediate Package', 'Advanced Package']]}},
    });
    return Users;
}