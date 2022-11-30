const routes = require('express').Router();
const {User} = require('./app/models');

User.create({
    name: "PSM",
    email: "psm@gmail.com",
    password_hash: "129032423345rsHTVBdf"
})

module.exports = routes;