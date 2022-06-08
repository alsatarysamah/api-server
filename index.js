'use strict';
const server=require('./src/server')
require("dotenv").config(); 
let PORT = process.env.PORT || 3030;

// server.start(PORT);
const { db } = require("./src/models/index");


try {
     db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
db.sync()
    .then(() => {
        // start();
        server.start(PORT);
    })
    .catch(console.error);
