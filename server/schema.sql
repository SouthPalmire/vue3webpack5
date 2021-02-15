CREATE TABLE user (
    id int unsigned NOT NULL AUTO_INCREMENT,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    password varchar(40) NOT NULL,
    email varchar(255) NOT NULL,
    date_of_birth date NOT NULL,
    registration_date INT(11) unsigned NOT NULL,
    PRIMARY KEY (id)
);