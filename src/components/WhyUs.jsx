import { colors, fonts, layout } from "../theme";

const points = [
  {
    icon: "🏆",
    title: "24 años de experiencia",
    text: "Una marca que crece con el respaldo de más de dos décadas en el mercado.",
  },
  {
    icon: "❄️",
    title: "Cadena de frío garantizada",
    text: "Distribución y almacenamiento pensados para que el producto llegue perfecto.",
  },
  {
    icon: "🚚",
    title: "Distribución a tu local",
    text: "Coordinamos la entrega directo a tu heladería, kiosco o comercio.",
  },
  {
    icon: "🐼",
    title: "Calidad Panda",
    text: "Recetas propias, ingredientes seleccionados y el sabor que fideliza clientes.",
  },
];

export default function WhyUs() {
  return (
    <section style={{ background: colors.white }}>
      <div style={{ maxWidth: layout.maxWidth, margin: "0 auto", padding: "1rem 1.5rem 4.5rem" }}>
        <h2
          style={{
            fontFamily: fonts.heading,
            fontWeight: 700,
            fontSize: "clamp(24px, 4vw, 32px)",
            color: colors.ink,
            textAlign: "center",
            margin: "0 0 2.5rem",
          }}
        >
          ¿Por qué elegir Helados Panda?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {points.map((point) => (
            <div
              key={point.title}
              style={{
                textAlign: "center",
                padding: "1.5rem 1rem",
                background: "#EAF8FF",
                borderRadius: "18px",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "0.75rem" }}>{point.icon}</div>
              <h3
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: "17px",
                  color: colors.blue,
                  margin: "0 0 0.5rem",
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  fontFamily: fonts.body,
                  fontSize: "14px",
                  color: colors.inkSoft,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
