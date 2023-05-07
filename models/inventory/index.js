const {DataTypes} = require('sequelize');


module.exports = (db_config) => {
    const inventories = db_config.define(
        'inventories',{
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true
            },
            medicine_id: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            amount: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: true
            },
            is_inventory :{
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue : true
            },
            deleted_at: {
                type: DataTypes.DATE,
                defaultValue: null
            },
    });

    return inventories;
}