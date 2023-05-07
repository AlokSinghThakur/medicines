const {DataTypes} = require('sequelize');

module.exports = (db_config) => {
    const user = db_config.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                default:null,
            },
            mobile_number: {
                type: DataTypes.BIGINT,
                allowNull: true,
            },
            avatar: {
                type: DataTypes.STRING,
                defaultValue: '',  // Default Avatar
            },
            otp:{
                type: DataTypes.STRING,
                defaultValue:null
            },
            is_verified: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,  // Default Avatar
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: true
            },
            is_active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,  // Default Avatar
            },           
        },
    );
    return user;
}