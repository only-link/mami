# حل مشکلات سرور cPanel

## 🚨 مشکلات شناسایی شده:

### 1. مشکل Build (Rust/Rayon Error)
- **علت**: محدودیت منابع سرور
- **حل**: کاهش memory usage و تغییر تنظیمات

### 2. Port در حال استفاده (EADDRINUSE)
- **علت**: پورت 3000 اشغال است
- **حل**: تغییر پورت به 3001

### 3. تنظیمات next.config.js
- **علت**: CUSTOM_KEY مشخص نشده
- **حل**: حذف تنظیمات اضافی

## 🔧 مراحل حل مشکل:

### مرحله 1: توقف پروسه‌های قبلی
```bash
# پیدا کردن پروسه‌های Node.js
ps aux | grep node

# کشتن پروسه‌های مشکوک
kill -9 [PID]

# یا استفاده از pkill
pkill -f node
```

### مرحله 2: پاک کردن cache
```bash
# حذف فولدر .next
rm -rf .next

# حذف node_modules و نصب مجدد
rm -rf node_modules
npm install --production
```

### مرحله 3: Build با تنظیمات جدید
```bash
# Build با memory محدود
NODE_OPTIONS='--max-old-space-size=1024' npm run build
```

### مرحله 4: اجرا با پورت جدید
```bash
PORT=3001 npm start
```

## 🗄️ تنظیم دیتابیس:

### ایجاد دیتابیس در cPanel:
1. MySQL Databases → Create New Database
2. نام: `rwyzdvfv_mami`
3. User: `rwyzdvfv_root`
4. Password: `Avan.1386`

### اجرای SQL:
```sql
-- در phpMyAdmin اجرا کنید:
USE rwyzdvfv_mami;

-- کپی کنید محتوای database/install.sql
```

## 🔄 اگر باز مشکل داشت:

### گزینه 1: Build محلی
```bash
# روی کامپیوتر محلی:
npm run build
zip -r build.zip .next

# آپلود فولدر .next به سرور
```

### گزینه 2: استفاده از PM2
```bash
npm install -g pm2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### گزینه 3: تغییر Node.js Version
- در cPanel Node.js App
- Version را به 18.x تغییر دهید

## 📞 اگر مشکل ادامه داشت:
1. لاگ‌های کامل را بفرستید
2. نسخه Node.js را چک کنید: `node -v`
3. Memory سرور را بررسی کنید: `free -h`