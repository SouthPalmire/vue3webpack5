CREATE TABLE IF NOT EXISTS gb (
    id_gb int unsigned NOT NULL AUTO_INCREMENT,
    user_id varchar(255) NOT NULL,
    theme varchar(255) NOT NULL,
    date_time datetime NOT NULL,
    text varchar(255) NOT NULL,
    PRIMARY KEY (id_gb)
);