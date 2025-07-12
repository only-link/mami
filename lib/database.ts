import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'rwyzdvfv_root',
  password: process.env.DB_PASSWORD || 'Avan1386',
  database: process.env.DB_NAME || 'rwyzdvfv_mami',
  charset: 'utf8mb4',
  timezone: '+00:00',
  connectTimeout: 60000,
  acquireTimeout: 60000,
  timeout: 60000,
};

let connection: mysql.Connection | null = null;

export async function getConnection() {
  if (!connection) {
    try {
      connection = await mysql.createConnection(dbConfig);
      console.log('✅ اتصال به دیتابیس MySQL برقرار شد');
    } catch (error) {
      console.error('❌ خطا در اتصال به دیتابیس:', error);
      throw error;
    }
  }
  return connection;
}

export async function executeQuery(query: string, params: any[] = []): Promise<any> {
  try {
    const conn = await getConnection();
    const [results] = await conn.execute(query, params);
    return results;
  } catch (error) {
    console.error('❌ خطا در اجرای کوئری:', error);
    throw error;
  }
}

export async function closeConnection() {
  if (connection) {
    await connection.end();
    connection = null;
    console.log('🔌 اتصال دیتابیس بسته شد');
  }
}