-- اضافه کردن ستون گروه کاربری به جدول user_profiles
ALTER TABLE user_profiles 
ADD COLUMN user_group ENUM('elderly', 'child', 'pregnant_mother', 'postpartum_mother', 'breastfeeding_mother') DEFAULT NULL 
AFTER medical_conditions;

-- به‌روزرسانی پروفایل‌های موجود بر اساس اطلاعات فعلی
UPDATE user_profiles 
SET user_group = CASE 
    WHEN is_pregnant = TRUE THEN 'pregnant_mother'
    WHEN is_pregnant = FALSE THEN 'postpartum_mother'
    ELSE NULL 
END 
WHERE is_pregnant IS NOT NULL;