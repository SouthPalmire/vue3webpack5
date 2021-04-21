CREATE TABLE IF NOT EXISTS gb (
    -> user_id varchar(255) NOT NULL,
    -> theme varchar(255),
    -> date_time datetime NOT NULL,
    -> text varchar(255) NOT NULL
);


mysql -u someone -p
insert into gb values(1, 'some', now(), 'qwerty');