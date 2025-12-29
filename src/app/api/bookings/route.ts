import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, service, preferredDate, notes } = body;

  await pool.query(
    `INSERT INTO bookings (name, phone, email, service, preferred_date, notes)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [name, phone, email, service, preferredDate, notes || null]
  );

  return NextResponse.json({ success: true });
}
