export default function Home() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "60px auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
        padding: "0 16px",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        JAJE Business Services LLC
      </h1>

      <h2 style={{ color: "#1f2937", marginBottom: "20px" }}>
        Professional Tax Preparation You Can Trust
      </h2>

      <p style={{ fontSize: "16px" }}>
        Serving individuals, families, and small businesses with accurate,
        confidential, and reliable tax preparation services.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h3>Our Services</h3>
      <ul>
        <li>Individual Tax Returns</li>
        <li>Married Filing Jointly</li>
        <li>Self-Employed / 1099</li>
        <li>Small Business Taxes</li>
        <li>Amended Returns</li>
      </ul>

      <hr style={{ margin: "30px 0" }} />

      <h3>Book an Appointment</h3>
      <p>Click below to request an appointment for tax preparation.</p>

      <a href="/book" style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            backgroundColor: "#111827",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Book Appointment
        </button>
      </a>

      <hr style={{ margin: "40px 0" }} />

      <p>
        📞 <strong>Phone:</strong> (XXX) XXX-XXXX <br />
        📧 <strong>Email:</strong> info@yourdomain.com
      </p>

      <p style={{ marginTop: "40px", fontSize: "12px", color: "gray" }}>
        Disclaimer: This website does not provide legal advice. Clients are
        responsible for the accuracy of the information provided.
      </p>
    </main>
  );
}
