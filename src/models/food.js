"use strict";

// Our table schema
const food = (sequelize, DataTypes) =>
    sequelize.define("food", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

module.exports = food;
