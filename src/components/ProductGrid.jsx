import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { colors, fonts, layout } from "../theme";

export default function ProductGrid() {
  return (
    <section style={{ background: colors.white }}>
      <div style={{ maxWidth: layout.maxWidth, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: "clamp(26px, 4vw, 36px)",
              color: colors.ink,
              margin: "0 0 0.5rem",
            }}
          >
            Nuestros productos
          </h2>
          <p
            style={{
              fontFamily: fonts.body,
              color: colors.inkSoft,
              fontSize: "16px",
              margin: 0,
            }}
          >
            Alfajores, barquillos y helados, listos para tu punto de venta.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
