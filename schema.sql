CREATE TABLE IF NOT EXISTS user (
    id int unsigned NOT NULL AUTO_INCREMENT,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    password varchar(40) NOT NULL,
    email varchar(255) NOT NULL,
    date_of_birth date NOT NULL,
    registration_date INT(11) unsigned NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS post (
    id int unsigned NOT NULL AUTO_INCREMENT,
    user_id varchar(255) NOT NULL,
    theme varchar(255) NOT NULL,
    date_time datetime NOT NULL,
    text varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS comment (
    id int unsigned NOT NULL AUTO_INCREMENT,
    post_id varchar(255) NOT NULL,
    user_id varchar(255) NOT NULL,
    date_time datetime NOT NULL,
    text varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
