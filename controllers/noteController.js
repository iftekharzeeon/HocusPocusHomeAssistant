const mysql = require('mysql');
const fs = require('fs');

const addNote = async (req, res) => {

    var config =
    {
        host: 'hocuspocus.mysql.database.azure.com',
        user: 'blehadmin@hocuspocus',
        password: 'abcdEFG1234',
        database: 'notesdb',
        port: 3306,
        ssl: { ca: fs.readFileSync("BaltimoreCyberTrustRoot.crt.pem") }
    };

    const conn = new mysql.createConnection(config);

    conn.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
            }
        });

    let responses = {
        "responseCode" : 0,
        "responseURL" : ''
    };
    
    let noteDetails = req.body.noteDetails;

    const todayDate = new Date();

    await conn.query('INSERT INTO personal_notes(note, create_date) VALUES (?, ?);', [noteDetails, todayDate],
        function (err, results, fields) {
            if (err) throw err;
            else {
                console.log('Inserted ' + results.affectedRows + ' row(s).');
                responses.responseCode = 1;
                res.send(responses);
            }
        })

};

const allNotes = async (req, res) => {

    var config =
    {
        host: 'hocuspocus.mysql.database.azure.com',
        user: 'blehadmin@hocuspocus',
        password: 'abcdEFG1234',
        database: 'notesdb',
        port: 3306,
        ssl: { ca: fs.readFileSync("BaltimoreCyberTrustRoot.crt.pem") }
    };

    const conn = new mysql.createConnection(config);

    conn.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
            }
        });

    let responses = {
        "responseCode" : 0,
        "responseURL" : ''
    };
    

    await conn.query('SELECT * FROM personal_notes;',
        function (err, results, fields) {
            if (err) throw err;
            else {
                console.log(results);
                res.send(results);
            }
        })

};

const getNotesByDate = async (req, res) => {

    var config =
    {
        host: 'hocuspocus.mysql.database.azure.com',
        user: 'blehadmin@hocuspocus',
        password: 'abcdEFG1234',
        database: 'notesdb',
        port: 3306,
        ssl: { ca: fs.readFileSync("BaltimoreCyberTrustRoot.crt.pem") }
    };

    const conn = new mysql.createConnection(config);

    conn.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                throw err;
            }
            else {
                console.log("Connection established.");
            }
        });

    let responses = {
        "responseCode" : 0,
        "responseURL" : ''
    };

    let dateString = req.body.date;
    

    await conn.query('SELECT * FROM personal_notes WHERE SUBSTRING(create_date FROM 1 FOR 10) = ' + dateString,
        function (err, results, fields) {
            if (err) throw err;
            else {
                console.log(results);
                res.send(results);
            }
        })

};

module.exports = {
    addNote,
    allNotes,
    getNotesByDate
}