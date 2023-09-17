module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("Courses", {
        courseID : {type: DataTypes.INTEGER, allowNull: false, unique: true},
        title : {type: DataTypes.STRING, allowNull: false, validate : {isIn: [[
            'Windows 2019 Server Administration',
            'AWS Cloud Practitioner CLF-C01',
            'Microsoft Certified: Azure Fundamental',
            'MS-900T01 Microsoft 365 Fundamentals',
            'AZ-104T00 Microsoft Azure Administrator',
            'AWS Certified Solutions Architect',
            '5-Day Cisco Certified Network Associate',
            'VMware vSphere 6.7 ICM']]}},
        users : {type: DataTypes.INTEGER, allowNull: false},
    });
    return Courses;
}