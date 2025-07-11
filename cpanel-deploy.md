# راهنمای دیپلوی پروژه مامی‌لند روی cPanel

## 📋 پیش‌نیازها

### 1. هاست با پشتیبانی Node.js
- **Node.js version**: 18+ یا 20+
- **npm/yarn**: نصب شده
- **MySQL**: دسترسی به دیتابیس
- **SSL**: فعال باشد

### 2. دسترسی‌های مورد نیاز
- **File Manager** یا **FTP**
- **MySQL Databases**
- **Node.js App** (در cPanel)

## 🚀 مراحل دیپلوی

### مرحله 1: آماده‌سازی فایل‌ها
```bash
# بیلد پروژه
npm run build

# فشرده کردن فایل‌ها
zip -r mamiland-project.zip . -x "node_modules/*" ".next/*" ".git/*"
```

### مرحله 2: آپلود فایل‌ها
1. وارد **File Manager** شوید
2. به پوشه **public_html** بروید
3. فایل **mamiland-project.zip** را آپلود کنید
4. فایل را **Extract** کنید

### مرحله 3: تنظیم Node.js App
1. در cPanel به **Node.js App** بروید
2. **Create Application** کلیک کنید
3. تنظیمات:
   - **Node.js Version**: 18.x یا بالاتر
   - **Application Mode**: Production
   - **Application Root**: مسیر پروژه
   - **Application URL**: دامنه شما
   - **Application Startup File**: server.js

### مرحله 4: نصب Dependencies
```bash
# در Terminal cPanel
cd /path/to/your/project
npm install --production
```

### مرحله 5: تنظیم دیتابیس
1. در cPanel به **MySQL Databases** بروید
2. دیتابیس جدید بسازید: `your_username_mami`
3. کاربر جدید بسازید و به دیتابیس دسترسی دهید
4. از **phpMyAdmin** فایل `database/install.sql` را اجرا کنید

### مرحله 6: تنظیم متغیرهای محیطی
فایل `.env.local` را ویرایش کنید:
```env
# Database Configuration
DB_HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

# JWT Secret
JWT_SECRET=your_secure_jwt_secret_key

# LangChain API
LANGCHAIN_API_URL=https://mine-gpt-alpha.vercel.app/proxy

# Production Settings
NODE_ENV=production
```

### مرحله 7: راه‌اندازی نهایی
```bash
# بیلد نهایی
npm run build

# شروع اپلیکیشن
npm start
```

## 🔧 تنظیمات اضافی

### SSL Certificate
- از **SSL/TLS** در cPanel استفاده کنید
- **Let's Encrypt** رایگان است

### Domain Settings
- **Subdomain** یا **Main Domain** تنظیم کنید
- **DNS** را به سرور هاست متصل کنید

### Performance Optimization
- **Gzip** فعال کنید
- **Caching** تنظیم کنید
- **CDN** استفاده کنید (اختیاری)

## 🐛 عیب‌یابی

### مشکلات رایج:
1. **Node.js Version**: حتماً version 18+ باشد
2. **File Permissions**: 755 برای پوشه‌ها، 644 برای فایل‌ها
3. **Database Connection**: اطلاعات دیتابیس را بررسی کنید
4. **Environment Variables**: فایل .env.local را بررسی کنید

### لاگ‌ها:
- **Error Logs** در cPanel
- **Node.js App Logs**
- **MySQL Error Logs**

## 📞 پشتیبانی
اگر مشکلی داشتید:
- **Email**: Ahmadreza.Avandi@gmail.com
- **Documentation**: این فایل را مطالعه کنید
- **Host Support**: با پشتیبانی هاست تماس بگیرید

## ✅ چک‌لیست نهایی
- [ ] Node.js App ساخته شد
- [ ] فایل‌ها آپلود شدند
- [ ] Dependencies نصب شدند
- [ ] دیتابیس تنظیم شد
- [ ] Environment Variables تنظیم شدند
- [ ] SSL فعال شد
- [ ] اپلیکیشن اجرا شد
- [ ] تست کامل انجام شد

---
**تمامی حقوق محفوظ است مامی‌لند © 2025**
**Developed by Ahmadreza.Avandi@gmail.com**