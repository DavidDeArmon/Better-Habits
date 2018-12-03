DELETE FROM habits
WHERE user_id=$1 AND habit_id=$2;
DELETE FROM user_habits
WHERE id=$2;
SELECT * FROM user_habits
WHERE user_id=$1;