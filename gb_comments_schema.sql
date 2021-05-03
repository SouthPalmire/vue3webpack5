CREATE TABLE IF NOT EXISTS gb_comments (
    comment_id int unsigned NOT NULL AUTO_INCREMENT,
    gb_comment_id varchar(255) NOT NULL,
    comment_date_time datetime NOT NULL,
    comment_text varchar(255) NOT NULL,
    PRIMARY KEY (comment_id)
);




SELECT id_gb, date_time, gb_comment_id, theme, text, firstname, lastname, 
    COUNT(comment_id) AS number_comments, MAX(comment_date_time) AS last_time 
    FROM user JOIN gb ON id = user_id 
    LEFT JOIN gb_comments ON id_gb = gb_comment_id 
    GROUP BY id_gb
    ORDER BY id_gb
    LIMIT 5 OFFSET 8
;