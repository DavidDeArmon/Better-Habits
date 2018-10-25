UPDATE user_habits 
SET habit_name = $2,
habit_desc = $3
WHERE id = $1;
SELECT * FROM user_habits WHERE user_id=$4;