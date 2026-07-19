import logo from "../assets/logo.webp";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "../data/whatsapp";
import { colors, fonts, layout } from "../theme";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: colors.white,
        boxShadow: "0 2px 12px rgba(11, 111, 176, 0.12)",
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: "0 auto",
          padding: "0.75rem 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem 1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0 }}>
          <img
            src={logo}
            alt="Helados Panda"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 62%",
              boxShadow: "0 2px 8px rgba(11, 111, 176, 0.25)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: "22px",
              color: colors.blue,
              letterSpacing: "0.2px",
              whiteSpace: "nowrap",
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
            gap: "0.5rem",
            background: colors.whatsapp,
            color: colors.white,
            padding: "0.6rem 1.1rem",
            borderRadius: "999px",
            textDecoration: "none",
            fontFamily: fonts.body,
            fontWeight: 600,
            fontSize: "14px",
            boxShadow: "0 4px 12px rgba(37, 211, 102, 0.35)",
            whiteSpace: "nowrap",
          }}
        >
          <WhatsAppIcon size={18} />
          Pedí por WhatsApp
        </a>
      </div>
    </header>
  );
}
