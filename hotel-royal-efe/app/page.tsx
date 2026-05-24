export default function Home() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>HOTEL ROYAL EFE</h1>
          <p style={styles.subtitle}>
            İzmir Çankaya • 20 Odalı Şehir Oteli • Premium Konfor
          </p>

          <div style={styles.buttons}>
            <a href="https://wa.me/905000000000" style={styles.whatsapp}>
              WhatsApp Rezervasyon
            </a>
            <a href="tel:+905000000000" style={styles.call}>
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Hizmetlerimiz</h2>

        <div style={styles.grid}>
          <div style={styles.card}>🚿 7/24 Sıcak Su</div>
          <div style={styles.card}>📶 Ücretsiz WiFi</div>
          <div style={styles.card}>🧹 Günlük Temizlik</div>
          <div style={styles.card}>🛎️ 24 Saat Resepsiyon</div>
        </div>
      </section>

      {/* ROOMS */}
      <section style={styles.sectionDark}>
        <h2 style={styles.h2White}>Odalarımız</h2>
        <p style={styles.centerText}>20 modern ve konforlu oda</p>

        <div style={styles.roomGrid}>
          <div style={styles.roomCard}>Standart Oda</div>
          <div style={styles.roomCard}>Deluxe Oda</div>
          <div style={styles.roomCard}>Aile Odası</div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Galeri</h2>

        <div style={styles.gallery}>
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
            style={styles.img}
          />
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            style={styles.img}
          />
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            style={styles.img}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Hotel Royal Efe • Tüm hakları saklıdır
      </footer>
    </main>
  );
}

const styles: any = {
  page: { fontFamily: "Arial" },

  hero: {
    height: "90vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    color: "white",
  },

  title: { fontSize: "50px", fontWeight: "bold" },
  subtitle: { fontSize: "18px", marginBottom: "20px" },

  buttons: { display: "flex", gap: "10px", justifyContent: "center" },

  whatsapp: {
    background: "#25D366",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
  },

  call: {
    background: "#0070f3",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
  },

  section: { padding: "60px 20px", textAlign: "center" },

  sectionDark: {
    padding: "60px 20px",
    background: "#111",
    color: "white",
    textAlign: "center",
  },

  h2: { fontSize: "32px", marginBottom: "20px" },
  h2White: { fontSize: "32px", marginBottom: "20px", color: "white" },

  centerText: { color: "#ccc" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
  },

  roomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  roomCard: {
    background: "#222",
    padding: "20px",
    borderRadius: "10px",
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "10px",
  },

  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  footer: {
    padding: "20px",
    background: "#000",
    color: "white",
    textAlign: "center",
  },
};