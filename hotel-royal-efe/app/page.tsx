export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>HOTEL ROYAL EFE</h1>
      <p>İzmir Çankaya Şehir Oteli</p>
      <p>7/24 Sıcak Su • WiFi • Temizlik Hizmeti</p>

      <a
        href="https://wa.me/905000000000"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        WhatsApp Rezervasyon
      </a>
    </main>
  );
}