-- بررسی وضعیت دیتابیس
USE mami;

-- نمایش تمام جداول
SHOW TABLES;

-- بررسی ساختار جدول user_profiles
DESCRIBE user_profiles;

-- بررسی ساختار جدول users
DESCRIBE users;

-- بررسی تعداد رکوردهای موجود
SELECT 'users' as table_name, COUNT(*) as count FROM users
UNION ALL
SELECT 'user_profiles' as table_name, COUNT(*) as count FROM user_profiles
UNION ALL
SELECT 'access_codes' as table_name, COUNT(*) as count FROM access_codes
UNION ALL
SELECT 'admins' as table_name, COUNT(*) as count FROM admins
UNION ALL
SELECT 'chat_sessions' as table_name, COUNT(*) as count FROM chat_sessions
UNION ALL
SELECT 'chat_messages' as table_name, COUNT(*) as count FROM chat_messages;

-- نمایش کدهای دسترسی فعال
SELECT code, created_at, expires_at, is_used 
FROM access_codes 
WHERE expires_at > NOW() 
ORDER BY created_at DESC;

-- نمایش ادمین‌های فعال
SELECT username, email, created_at, is_active 
FROM admins 
WHERE is_active = TRUE;