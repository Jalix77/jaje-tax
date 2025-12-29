"use client";

import { useState } from "react";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Individual Tax Return");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  if (submitted) {
    return (
      <main style={{ maxWidth: 800, margin: "60px auto", fontFamily: "Arial, sans-serif", padding: "0 16px" }}>
        <h1>Appointment Request Received</h1>
        <p>Thank you. JAJE Business Services LLC received your request. We will contact you to confirm your appointment.</p>

        <div style={{ marginTop: 20, padding: 16, border: "1px solid #e5e7eb", borderRadius: 8 }}>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Service:</strong> {service}</p>
          <p><strong>Preferred Date:</strong> {date || "(not selected)"}</p>
          <p><strong>Notes:</strong> {notes || "(none)"}</p>
        </div>

        <p style={{ marginTop: 24 }}>
          <a href="/" style={{ color: "#111827" }}>← Back to Home</a>
        </p>

        <p style={{ marginTop: 40, fontSize: 12, color: "gray" }}>
          Disclaimer: This website does not provide legal advice. Clients are responsible for the accuracy of the information provided.
        </p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 800, margin: "60px auto", fontFamily: "Arial, sans-serif", padding: "0 16px" }}>
      <h1>Book an Appointment</h1>
      <p>Fill out this form to reserve a spot for tax preparation. We will contact you to confirm.</p>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <label>
          <div style={{ fontWeight: 600 }}>Full Name</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: 10, border: "1px solid #d1d5db", borderRadius: 6 }}
            placeholder="Your name"
          />
        </label>

        <label>
          <div style={{ fontWeight: 600 }}>Phone</div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: "100%", padding: 10, border: "1px solid #d1d5db", borderRadius: 6 }}
            placeholder="(317) 555-1234"
          />
        </label>

        <label>
          <div style={{ fontWeight: 600 }}>Email</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 10, border: "1px solid #d1d5db", borderRadius: 6 }}
            placeholder="you@email.com"
          />
        </label>

        <label>
          <div style={{ fontWeight: 600 }}>Service Needed</div>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={{ width: "100%", padding: 10, border: "1px solid #d1d5db", borderRadius: 6 }}
          >
            <option>Individual Tax Return</option>
            <option>Married Filing Jointly</option>
            <option>Self-Employed / 1099</option>
            <option>Small Business Taxes</option>
            <option>Amended Return</option>
          </select>
        </label>

        <label>
          <div style={{ fontWeight: 600 }}>Preferred Date</div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: "100%", padding: 10, border: "1px solid #d1d5db", borderRadius: 6 }}
          />
        </label>

        <label>
          <div style={{ fontWeight: 600 }}>Notes (optional)</div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{ width: "100%", padding: 10, border: "1px solid #d1d5db", borderRadius: 6 }}
            rows={4}
            placeholder="Anything you want us to know (documents, tax situation, etc.)"
          />
        </label>

        <button
          onClick={() => setSubmitted(true)}
          disabled={!name || !phone || !email}
          style={{
            padding: "12px 20px",
            fontSize: 16,
            backgroundColor: !name || !phone || !email ? "#9ca3af" : "#111827",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: !name || !phone || !email ? "not-allowed" : "pointer",
            marginTop: 10,
          }}
        >
          Reserve Spot
        </button>

        <p style={{ marginTop: 10 }}>
          <a href="/" style={{ color: "#111827" }}>← Back to Home</a>
        </p>
      </div>

      <p style={{ marginTop: 40, fontSize: 12, color: "gray" }}>
        Disclaimer: This website does not provide legal advice. Clients are responsible for the accuracy of the information provided.
      </p>
    </main>
  );
}
