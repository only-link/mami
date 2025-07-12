import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const systemInfo = {
      status: 'online',
      timestamp: new Date().toISOString(),
      environment: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        domain: process.env.DOMAIN,
        protocol: process.env.PROTOCOL
      },
      database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        name: process.env.DB_NAME,
        // رمز عبور را نمایش نمی‌دهیم
      },
      apis: {
        langchain: process.env.LANGCHAIN_API_URL
      },
      server: {
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        version: process.version
      }
    };

    return NextResponse.json({
      message: 'سیستم آنلاین است',
      data: systemInfo
    });

  } catch (error: any) {
    return NextResponse.json({
      status: 'error',
      message: 'خطا در سیستم',
      error: error.message
    }, { status: 500 });
  }
}