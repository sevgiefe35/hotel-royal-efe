export default function Home() {
  const phoneNumber = "905000000000"; // değiştirilecek

  return (
    <main
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid #222",
          position: "sticky",
          top: 0,
          backgroundColor: "#0b0b0b",
          zIndex: 1000,
        }}
      >
        <div style={{ color: "#c9a24e", fontWeight: "bold" }}>
          HOTEL ROYAL EFE
        </div>

        <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>Ana Sayfa</a>
          <a href="#rooms" style={{ color: "white", textDecoration: "none" }}>Odalar</a>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>Hizmetler</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>İletişim</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, #0b0b0b, #1a1a1a)",
        }}
      >
        <h1 style={{ fontSize: "70px", letterSpacing: "3px" }}>
          HOTEL ROYAL EFE
        </h1>

        <p style={{ fontSize: "20px", color: "#c9a24e" }}>
          Premium City Hotel in İzmir / Çankaya
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
          <a
            href={`tel:${phoneNumber}`}
            style={{
              padding: "14px 22px",
              backgroundColor: "#c9a24e",
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            📞 Ara
          </a>

          <a
            href={`https://wa.me/${phoneNumber}?text=Merhaba, otel hakkında bilgi almak istiyorum`}
            target="_blank"
            style={{
              padding: "14px 22px",
              backgroundColor: "#25D366",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* HİZMETLER */}
      <section id="services" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
          Hizmetlerimiz
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            "7/24 Sıcak Su",
            "Ücretsiz WiFi",
            "Günlük Temizlik",
            "Merkezi Konum",
            "Konforlu Odalar",
            "7/24 Resepsiyon",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "20px",
                width: "200px",
                backgroundColor: "#111",
                border: "1px solid #333",
                borderRadius: "10px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ODALAR */}
      <section id="rooms" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
          Odalarımız
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {["Standart", "Deluxe", "Aile"].map((room) => (
            <div
              key={room}
              style={{
                width: "260px",
                padding: "20px",
                backgroundColor: "#111",
                border: "1px solid #333",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#c9a24e" }}>{room} Oda</h3>
              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                Modern tasarım ve konforlu yaşam alanı.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* İLETİŞİM */}
      <section id="contact" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
          İletişim
        </h2>

        <p style={{ color: "#aaa", marginBottom: "20px" }}>
          Telefon: {phoneNumber} | WhatsApp: 7/24 aktif
        </p>

        {/* HARİTA */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            src="https://www.google.com/maps?q=izmir&output=embed"
            width="80%"
            height="300"
            style={{ border: "0", borderRadius: "10px" }}
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          borderTop: "1px solid #222",
          color: "#888",
          fontSize: "14px",
        }}
      >
        © 2026 HOTEL ROYAL EFE - Tüm Hakları Saklıdır
      </footer>
    </main>
  );
}