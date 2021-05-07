SELECT id_gb, date_time, gb_comment_id, theme, text, firstname, lastname, 
    COUNT(comment_id) AS number_comments, MAX(comment_date_time) AS last_time 
    FROM user JOIN gb ON id = user_id 
    LEFT JOIN gb_comments ON id_gb = gb_comment_id 
    GROUP BY id_gb
    ORDER BY id_gb
    LIMIT 5 OFFSET 8
;

SELECT comment_id, gb_comment_id, gb_user_id, comment_text, firstname, lastname
    FROM gb_comments
    JOIN user ON gb_user_id = id
    WHERE gb_comment_id = 21
;