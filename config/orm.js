const connection = require('./connection.js');

module.exports = {

    selectAll: (table) => {
        let query = "SELECT * FROM ?"
        connnection.query(query, [table], (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    // End selectAll method
    },


    insertOne: (tableForInsert, whatToInsert) => {
        let query = "INSERT INTO ? VALUE ?"
        connnection.query(query, [tableForInsert, whatToInsert], (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    // End insertOne method
    },


    updateOne: (tableToUpdate, whatToUpdate, itemId) => {
        let query = "UPDATE ? SET ? WHERE id = ?"
        connnection.query(query, [tableToUpdate, whatToUpdate, itemId], (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    // End updateOne method
    }




// End module.exports object
}