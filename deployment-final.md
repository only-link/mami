# راهنمای نهایی دیپلوی مامی‌لند

## 🎯 دامنه: ahmadreza-avandi.ir

### 📋 چک‌لیست نهایی دیپلوی:

#### 1️⃣ **فایل‌های آماده:**
- ✅ `.env.local` - تنظیمات production
- ✅ `next.config.js` - بهینه برای دامنه
- ✅ `server.js` - سرور پورت 3001
- ✅ `.htaccess` - HTTPS و routing
- ✅ `database/install.sql` - اسکریپت دیتابیس
- ✅ همه خطاهای TypeScript حل شدند

#### 2️⃣ **مراحل دیپلوی:**

```bash
# 1. آپلود فایل‌ها
# 2. نصب dependencies
npm install --production

# 3. Build پروژه
npm run build

# 4. اجرای سرور
PORT=3001 npm start
```

#### 3️⃣ **تنظیم دیتابیس:**
```sql
-- در phpMyAdmin اجرا کنید:
USE rwyzdvfv_mami;
-- سپس محتوای database/install.sql را کپی کنید
```

#### 4️⃣ **تست سیستم:**

**تست اتصال دیتابیس:**
```
GET https://ahmadreza-avandi.ir/api/test/database
```

**تست سیستم:**
```
GET https://ahmadreza-avandi.ir/api/test/system
```

**تست صفحه اصلی:**
```
GET https://ahmadreza-avandi.ir/
```

#### 5️⃣ **ورود ادمین:**
- **URL**: `https://ahmadreza-avandi.ir/admin`
- **نام کاربری**: `admin`
- **رمز عبور**: `admin123`

#### 6️⃣ **کدهای دسترسی نمونه:**
- `ABC123`
- `XYZ789` 
- `DEF456`

### 🔧 **تنظیمات HTTPS:**
- ✅ Force HTTPS در .htaccess
- ✅ Security headers
- ✅ Gzip compression
- ✅ Static file caching

### 📊 **مانیتورینگ:**
- **لاگ‌های سرور**: در cPanel Node.js App
- **لاگ‌های دیتابیس**: در phpMyAdmin
- **تست API**: `/api/test/database` و `/api/test/system`

### 🚨 **عیب‌یابی:**
1. **500 Error**: چک کنید `.env.local`
2. **Database Error**: تست کنید `/api/test/database`
3. **404 Error**: بررسی کنید `.htaccess`
4. **Port Error**: مطمئن شوید پورت 3001 آزاد است

### ✅ **مشکلات حل شده:**
- ❌ TypeScript errors در `lib/auth.ts`
- ❌ Database type errors
- ❌ Build configuration issues
- ❌ ESLint errors
- ✅ همه فایل‌ها آماده دیپلوی

---
**🎉 پروژه کاملاً آماده دیپلوی است!**
**دامنه: https://ahmadreza-avandi.ir**