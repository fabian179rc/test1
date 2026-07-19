import logo from "../assets/logo.webp";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "../data/whatsapp";
import { colors, fonts, layout } from "../theme";

export default function Hero() {
  return (
    <section
      style={{
        background: colors.heroGradient,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          padding: "4rem 1.5rem 5rem",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "2.5rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        <div>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: colors.white,
              margin: "0 0 1rem",
              lineHeight: 1.15,
              textShadow: "0 4px 18px rgba(8, 88, 141, 0.35)",
            }}
          >
            El plan perfecto
            <br />
            siempre incluye helado
          </h1>
          <p
            style={{
              fontFamily: fonts.body,
              fontWeight: 600,
              fontSize: "20px",
              color: colors.white,
              margin: "0 0 2rem",
              opacity: 0.95,
            }}
          >
            24 años de experiencia 🍦
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: colors.whatsapp,
              color: colors.white,
              padding: "1rem 1.75rem",
              borderRadius: "999px",
              textDecoration: "none",
              fontFamily: fonts.body,
              fontWeight: 700,
              fontSize: "17px",
              boxShadow: "0 10px 24px rgba(37, 211, 102, 0.4)",
            }}
          >
            <WhatsAppIcon size={22} />
            Pedí por WhatsApp
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="Helados Panda"
            style={{
              width: "min(320px, 70vw)",
              height: "min(320px, 70vw)",
              objectFit: "contain",
              filter: "drop-shadow(0 18px 30px rgba(8, 88, 141, 0.35))",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding-top: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
