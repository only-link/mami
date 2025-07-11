# چک‌لیست دیپلوی مامی‌لند

## 🎯 قبل از دیپلوی

### ✅ بررسی کدها
- [ ] تمام فایل‌ها کامیت شدند
- [ ] تست‌های محلی انجام شد
- [ ] Environment variables تنظیم شدند
- [ ] Database schema آماده است

### ✅ تنظیمات هاست
- [ ] Node.js 18+ پشتیبانی می‌شود
- [ ] MySQL دسترسی دارد
- [ ] SSL Certificate فعال است
- [ ] Domain/Subdomain تنظیم شد

## 🚀 مراحل دیپلوی

### 1. آماده‌سازی
```bash
npm run build
zip -r mamiland.zip . -x "node_modules/*" ".next/*" ".git/*"
```

### 2. آپلود
- فایل zip را در public_html آپلود کنید
- Extract کنید

### 3. Node.js App
- Application Root: مسیر پروژه
- Startup File: server.js
- Node Version: 18+

### 4. Dependencies
```bash
npm install --production
```

### 5. Database
- دیتابیس بسازید
- فایل install.sql را اجرا کنید
- اطلاعات اتصال را در .env.local قرار دهید

### 6. تست
- [ ] صفحه اصلی لود می‌شود
- [ ] ثبت نام کار می‌کند
- [ ] ورود کار می‌کند
- [ ] چت کار می‌کند
- [ ] پنل ادمین کار می‌کند

## 🔧 تنظیمات بهینه‌سازی

### Performance
- [ ] Gzip فعال شد
- [ ] Static files cache شدند
- [ ] Database indexes بهینه شدند

### Security
- [ ] HTTPS فعال شد
- [ ] Security headers تنظیم شدند
- [ ] Database credentials امن هستند

## 🐛 عیب‌یابی

### مشکلات رایج:
1. **500 Error**: لاگ‌های Node.js را بررسی کنید
2. **Database Error**: اطلاعات اتصال را چک کنید
3. **404 Error**: .htaccess را بررسی کنید
4. **Permission Error**: مجوزهای فایل را تنظیم کنید

### فایل‌های مهم:
- `server.js` - سرور اصلی
- `.env.local` - متغیرهای محیطی
- `.htaccess` - تنظیمات Apache
- `database/install.sql` - ساختار دیتابیس

---
**موفق باشید! 🎉**