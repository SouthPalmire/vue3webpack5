CREATE TABLE IF NOT EXISTS gb_comments (
    comment_id int unsigned NOT NULL AUTO_INCREMENT,
    gb_comment_id varchar(255) NOT NULL,
    gb_user_id varchar(255) NOT NULL,
    comment_date_time datetime NOT NULL,
    comment_text varchar(255) NOT NULL,
    PRIMARY KEY (comment_id)
); 