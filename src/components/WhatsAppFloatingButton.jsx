import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_LINK } from "../data/whatsapp";
import { colors } from "../theme";

export default function WhatsAppFloatingButton() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedí por WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 1000,
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        background: hover ? colors.whatsappDark : colors.whatsapp,
        color: colors.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hover
          ? "0 10px 26px rgba(37, 211, 102, 0.55)"
          : "0 6px 18px rgba(37, 211, 102, 0.45)",
        transform: hover ? "translateY(-3px) scale(1.05)" : "translateY(0) scale(1)",
        transition: "all 0.25s ease",
      }}
    >
      <WhatsAppIcon size={32} />
    </a>
  );
}
