const mysql2 = require("mysql2");
const express = require("express");
//const { scheme } = require("mongoose");
var router = express.Router();

router.use(express.json());

var mysqlConnection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Minnu@123",
  database: "emplo",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

router.get("/", (req, res) => {
  mysqlConnection.query("select * from employeedet;", (err, rows, fields) => {
    if (!err) res.send(rows);
    //return res.console.log(rows);
    else console.log(err);
  });
});

//Router to GET specific item detail from the MySQL database
router.get("/:id", (req, res) => {
  mysqlConnection.query(
    "SELECT * from employeedet WHERE id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//add

router.get("/insert", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    //Insert a record in the "employeedet" table:
    var sql =
      "INSERT INTO employeedet (Emname, Designation, City, Salary) VALUES ('Rajeev','Docter', 'Trivandrum', 35000)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
});
//delete
router.get("/delete", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM myemployee WHERE Emname = 'Anna'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });
});

/*router.get("/model/update", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE myemployee SET empname = 'vishnu' WHERE empname= 'ani'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
});

module.exports = router;*/
