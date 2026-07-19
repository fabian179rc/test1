import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import PromoBanner from "./components/PromoBanner";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <Hero />
      <ProductGrid />
      <PromoBanner />
      <WhyUs />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
