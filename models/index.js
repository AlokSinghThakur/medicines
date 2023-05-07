const { Sequelize } = require('sequelize');

const medicineModel = require('./medicine')
const inventoryModel = require('./inventory')
const userModel = require('./users')

exports.db_config = new Sequelize(
  'medical',
    // 'dummy',
    // 'root',
    'root',
    // 'password',
    'password',
    {
      host:  'localhost',
      // host :'localhost',
      dialect: 'mysql',
      operatorsAliases: 0,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      timezone: '+05:30',
      logging: false,
    }
  );

  

exports.medicineModel = medicineModel(exports.db_config);
exports.inventoryModel = inventoryModel(exports.db_config);
exports.userModel = userModel(exports.db_config)