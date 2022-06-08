"use strict";
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const Collection = require('./lib/collection');
const foodModel = require('../models/food');

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;


// const clothes = require('../models/clothes');

let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl: { require: true, rejectUnauthorized: false       },
                native: true
            }
        } : {};
//const customerTable = customerModel(sequelize, DataTypes);
        let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
        const foodTable = foodModel(sequelize, DataTypes);

        let foodCollection =new Collection(foodTable);
      
        
        module.exports = {
            db: sequelize,
            foodCollection: foodCollection
        };