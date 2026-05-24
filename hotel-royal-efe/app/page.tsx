export default function Home() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>HOTEL ROYAL EFE</h1>
          <p style={styles.subtitle}>
            İzmir Çankaya Şehir Oteli • Premium Konfor • 7/24 Hizmet
          </p>

          <div style={styles.buttons}>
            <a
              href="https://wa.me/905000000000"
              style={styles.whatsapp}
            >
              WhatsApp Rezervasyon
            </a>

            <a href="tel:+905000000000" style={styles.call}>
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>Hizmetlerimiz</h2>

        <div style={styles.grid}>
          <div style={styles.card}>🚿 7/24 Sıcak Su</div>
          <div style={styles.card}>📶 Ücretsiz WiFi</div>
          <div style={styles.card}>🧹 Günlük Temizlik</div>
          <div style={styles.card}>🛎️ 24 Saat Resepsiyon</div>
        </div>
      </section>

      {/* ROOMS */}
      <section style={styles.rooms}>
        <h2 style={styles.sectionTitle}>Odalarımız</h2>
        <p style={{ textAlign: "center", color: "#555" }}>
          20 adet modern ve konforlu oda
        </p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Hotel Royal Efe • Tüm hakları saklıdır
      </footer>
    </main>
  );
}

const styles: any = {
  page: {
    fontFamily: "Arial",
  },

  hero: {
    height: "90vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "40px",
    textAlign: "center",
    color: "white",
    borderRadius: "12px",
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },

  whatsapp: {
    backgroundColor: "#25D366",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
  },

  call: {
    backgroundColor: "#0070f3",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
  },

  features: {
    padding: "60px 20px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  card: {
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#f5f5f5",
    fontSize: "18px",
  },

  rooms: {
    padding: "60px 20px",
    backgroundColor: "#fafafa",
    textAlign: "center",
  },

  footer: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#111",
    color: "white",
  },
};