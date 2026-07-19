import { colors, fonts } from "../theme";

export default function ProductCard({ product }) {
  return (
    <div
      style={{
        background: colors.white,
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(11, 111, 176, 0.14)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "220px",
          background: "linear-gradient(160deg, #EAF8FF 0%, #CFEFFF 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxWidth: "88%",
            maxHeight: "88%",
            objectFit: "contain",
          }}
        />
        {product.tag && (
          <span
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              background: colors.red,
              color: colors.white,
              fontFamily: fonts.body,
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.4px",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "999px",
              boxShadow: "0 4px 10px rgba(230, 57, 70, 0.35)",
            }}
          >
            {product.tag}
          </span>
        )}
      </div>

      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <span
          style={{
            fontFamily: fonts.body,
            fontWeight: 600,
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            color: colors.skyDark,
            marginBottom: "0.4rem",
          }}
        >
          {product.category}
        </span>
        <h3
          style={{
            fontFamily: fonts.heading,
            fontWeight: 700,
            fontSize: "20px",
            color: colors.ink,
            margin: "0 0 0.6rem",
          }}
        >
          {product.name}
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
          {product.description}
        </p>
      </div>
    </div>
  );
}
