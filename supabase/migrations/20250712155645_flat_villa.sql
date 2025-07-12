-- تست اتصال دیتابیس
-- این فایل برای بررسی اتصال و وضعیت دیتابیس استفاده می‌شود

-- بررسی وجود دیتابیس
SHOW DATABASES LIKE 'rwyzdvfv_mami';

-- استفاده از دیتابیس
USE rwyzdvfv_mami;

-- نمایش جداول موجود
SHOW TABLES;

-- بررسی ساختار جدول کاربران
DESCRIBE users;

-- شمارش کاربران
SELECT COUNT(*) as total_users FROM users;

-- نمایش کاربران (بدون رمز عبور)
SELECT id, username, email, created_at FROM users LIMIT 5;

-- بررسی کدهای دسترسی فعال
SELECT COUNT(*) as active_codes FROM access_codes 
WHERE is_used = FALSE AND expires_at > NOW();

-- نمایش کدهای دسترسی فعال
SELECT code, created_at, expires_at FROM access_codes 
WHERE is_used = FALSE AND expires_at > NOW() 
ORDER BY created_at DESC;

-- بررسی ادمین‌ها
SELECT username, created_at, is_active FROM admins;

-- آمار کلی سیستم
SELECT 
    (SELECT COUNT(*) FROM users) as total_users,
    (SELECT COUNT(*) FROM access_codes WHERE is_used = FALSE AND expires_at > NOW()) as active_codes,
    (SELECT COUNT(*) FROM chat_sessions) as total_chat_sessions,
    (SELECT COUNT(*) FROM chat_messages) as total_messages;