const db = require(__dirname + '/db.js');

const CreateTables = () => {

    db.query('CREATE TABLE user ( '
        + 'id INT AUTO_INCREMENT PRIMARY KEY,'
        + 'name VARCHAR(150) NOT NULL,'
        + 'email VARCHAR(200) NOT NULL,'
        + 'password VARCHAR(200) NOT NULL,'
        + 'phone INT,'
        + 'role INT,'
        + 'createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,'
        + 'updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        + ')'
    );

    db.query('CREATE TABLE item ( '
        + 'id INT AUTO_INCREMENT PRIMARY KEY,'
        + 'userId INT NOT NULL,'
        + 'name VARCHAR(150) NOT NULL,'
        + 'description VARCHAR(MAX) NOT NULL,'
        + 'price INT NOT NULL,'
        + 'type INT,'
        + 'status INT,'
        + 'createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,'
        + 'updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        + ')'
    );

}

const InsertDummy = () => {

    //role 1 is admin
    //type 1 item is books (for now)
    //status 1 is available for sale

    db.query('INSERT INTO user SET id = 1,'
        + 'name = "admin1",'
        + 'email = "admin1@gmail.com",'
        + 'password = password,'
        + 'phone = 4150009999,'
        + 'role = 1'
        + ')'
    );

    db.query('INSERT INTO user SET id = 2,'
        + 'name = "admin2",'
        + 'email = "admin2@gmail.com",'
        + 'password = password,'
        + 'phone = 4150009991,'
        + 'role = 1'
        + ')'
    );

    db.query('INSERT INTO item SET id = 1,'
        + 'userId = 1,'
        + 'name = "CSC648 textbook",'
        + 'description = "Software Engineering",'
        + 'price = 20,'
        + 'type = 1,'
        + 'status = 1'
        + ')'
    );
}
