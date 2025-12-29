import { pgPool } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, service, date, notes } = body ?? {};

  if (!name || !phone || !email) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  await pgPool.query(`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      service TEXT NOT NULL,
      preferred_date TEXT,
      notes TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  const result = await pgPool.query(
    `INSERT INTO bookings (name, phone, email, service, preferred_date, notes)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING id, created_at`,
    [name, phone, email, service ?? "Individual Tax Return", date ?? "", notes ?? ""]
  );

  return new Response(JSON.stringify({ ok: true, booking: result.rows[0] }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
