export default function Home() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>HOTEL ROYAL EFE</h1>
          <p style={styles.subtitle}>
            İzmir Çankaya Şehir Oteli
          </p>

          <div style={styles.buttons}>
            <a href="https://wa.me/905000000000" style={styles.btnGreen}>
              WhatsApp
            </a>

            <a href="tel:+905000000000" style={styles.btnBlue}>
              Ara
            </a>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section style={styles.section}>
        <h2>Hizmetler</h2>
        <ul>
          <li>7/24 Sıcak Su</li>
          <li>Ücretsiz WiFi</li>
          <li>Temizlik Hizmeti</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © Hotel Royal Efe
      </footer>
    </main>
  );
}

const styles: any = {
  page: {
    fontFamily: "Arial",
  },

  hero: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb') center/cover",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "30px",
    color: "white",
    textAlign: "center",
    borderRadius: "10px",
  },

  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "20px",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },

  btnGreen: {
    background: "#25D366",
    padding: "10px 20px",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  },

  btnBlue: {
    background: "#0070f3",
    padding: "10px 20px",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  },

  section: {
    padding: "40px",
    textAlign: "center",
  },

  footer: {
    padding: "20px",
    textAlign: "center",
    background: "#111",
    color: "white",
  },
};