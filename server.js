const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;