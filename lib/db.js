const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "apiproy",
    password: "",

});
connection.connect();
module.exports = connection;

/*
    nombre base de datos apiproy

    CREATE TABLE `users` (
	`id` VARCHAR(255) NOT NULL,
	`username` VARCHAR(255) NULL DEFAULT NULL,
	`password` VARCHAR(255) NULL DEFAULT NULL,
	`registered` DATETIME NULL,
	`last_login` DATETIME NULL,
	PRIMARY KEY (`id`)
    
)
COLLATE='latin1_swedish_ci'
;

*/