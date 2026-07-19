import logo from "../assets/logo.webp";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from "../data/whatsapp";
import { colors, fonts, layout } from "../theme";

export default function Footer() {
  return (
    <footer style={{ background: colors.blueDark }}>
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          padding: "3rem 1.5rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img
            src={logo}
            alt="Helados Panda"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 62%",
            }}
          />
          <span
            style={{
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: "20px",
              color: colors.white,
            }}
          >
            Helados Panda
          </span>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            color: colors.white,
            textDecoration: "none",
            fontFamily: fonts.body,
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          <span
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: colors.whatsapp,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <WhatsAppIcon size={18} />
          </span>
          {WHATSAPP_DISPLAY}
        </a>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <p
          style={{
            maxWidth: layout.maxWidth,
            margin: "0 auto",
            padding: "1.25rem 1.5rem",
            fontFamily: fonts.body,
            fontSize: "13px",
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
          }}
        >
          © 2026 Helados Panda. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
