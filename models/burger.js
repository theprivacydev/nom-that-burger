const orm = require('../config/orm.js');

// Call orm functions here using burger specific input

const burgers = {


    selectAll: function(cb) {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.selectAll('burgers', objColVals, condition, (res) => {
            cb(res);
        });
    },
}


// Export burger.js
module.exports = burgers;