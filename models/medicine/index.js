const {DataTypes} = require('sequelize');


module.exports = (db_config) => {
    const medicines = db_config.define(
        'medicines',{
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            code:{
                type: DataTypes.STRING,
                allowNull:false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true
            },
            desc: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            price: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: true
            },
            is_available: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_medicine :{
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue : true
            },
            deleted_at: {
                type: DataTypes.DATE,
                defaultValue: null
            },
    });

    return medicines;
}