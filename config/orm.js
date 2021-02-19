const connection = require('./connection.js');

const orm = {

    selectAll: (table, cb) => {
        let query = "SELECT * FROM " + table + ";"
        console.log("select all orm.js: ", query)
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    // End selectAll method
    },


    insertOne: (table, cols, vals, cb) => {
        let query = "INSERT INTO " + table;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuesMarks(vals.length);
        query += ") ";

        console.log("in insert one:", query);


        connection.query(query, vals, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    // End insertOne method
    },


    updateOne: (table, objColVals, condition, cb) => {
        let query = "UPDATE " + table;

        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;

        console.log("update one: ", query);

        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res)
        });
    // End updateOne method
    }
// End orm
}


function printQuesMarks(number) {
    let arr = [];

    for (let i = 0; i < number; i++) {
        arr.push("?");
    }
    return arr.toString();
}


function objToSql(obj) {
    let arr = [];
    for (var key in obj) {
        let value = obj[key];
        if(Object.hasOwnProperty.call(obj, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}






// End module.exports object
module.exports = orm;