import promoLlegaron from "../assets/banners/promo-llegaron.webp";
import promoTardes from "../assets/banners/promo-tardes.webp";
import { colors, layout } from "../theme";

export default function PromoBanner() {
  return (
    <section style={{ background: "#EAF8FF" }}>
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          padding: "3rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
        }}
      >
        {[promoLlegaron, promoTardes].map((src, i) => (
          <div
            key={i}
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 14px 34px rgba(11, 111, 176, 0.18)",
              background: colors.white,
            }}
          >
            <img
              src={src}
              alt="Promoción Helados Panda"
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
