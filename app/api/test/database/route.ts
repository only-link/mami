import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/database';

export async function GET() {
  try {
    console.log('🔍 شروع تست اتصال دیتابیس...');
    
    // تست اتصال ساده
    const testQuery = 'SELECT 1 as test';
    await executeQuery(testQuery);
    console.log('✅ اتصال پایه موفق');

    // بررسی جداول
    const tables = await executeQuery('SHOW TABLES');
    console.log('📊 جداول موجود:', tables);

    // شمارش کاربران
    const userCount: any = await executeQuery('SELECT COUNT(*) as count FROM users');
    const totalUsers = userCount[0]?.count || 0;
    console.log('👥 تعداد کاربران:', totalUsers);

    // شمارش کدهای فعال
    const activeCodesCount: any = await executeQuery(
      'SELECT COUNT(*) as count FROM access_codes WHERE is_used = FALSE AND expires_at > NOW()'
    );
    const activeCodes = activeCodesCount[0]?.count || 0;
    console.log('🔑 کدهای فعال:', activeCodes);

    // شمارش جلسات چت
    const chatSessionsCount: any = await executeQuery('SELECT COUNT(*) as count FROM chat_sessions');
    const totalSessions = chatSessionsCount[0]?.count || 0;
    console.log('💬 جلسات چت:', totalSessions);

    // شمارش پیام‌ها
    const messagesCount: any = await executeQuery('SELECT COUNT(*) as count FROM chat_messages');
    const totalMessages = messagesCount[0]?.count || 0;
    console.log('📝 کل پیام‌ها:', totalMessages);

    // بررسی ادمین‌ها
    const admins: any = await executeQuery('SELECT username, is_active FROM admins');
    console.log('👨‍💼 ادمین‌ها:', admins);

    const result = {
      status: 'success',
      message: 'اتصال دیتابیس موفق',
      data: {
        connection: 'برقرار',
        tables: tables.length,
        users: totalUsers,
        activeCodes: activeCodes,
        chatSessions: totalSessions,
        messages: totalMessages,
        admins: admins.length,
        timestamp: new Date().toISOString()
      },
      details: {
        tables: tables,
        admins: admins
      }
    };

    console.log('🎉 تست دیتابیس کامل شد:', result);
    return NextResponse.json(result);

  } catch (error: any) {
    console.error('❌ خطا در تست دیتابیس:', error);
    
    return NextResponse.json({
      status: 'error',
      message: 'خطا در اتصال دیتابیس',
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}