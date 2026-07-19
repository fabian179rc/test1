import alfajoresMini from "../assets/products/alfajores-mini.webp";
import alfajorIndividual from "../assets/products/alfajor-individual.webp";
import barquillos from "../assets/products/barquillos.webp";
import heladosPotes from "../assets/products/helados-potes.webp";
import heladosPalito from "../assets/products/helados-palito.webp";
import conoChocolate from "../assets/products/cono-chocolate.webp";

export const products = [
  {
    id: "alfajores-mini",
    name: "Alfajores Mini",
    category: "Alfajores",
    tag: "Nuevo",
    description: "Caja x22 unidades. El tamaño ideal para tu felicidad.",
    image: alfajoresMini,
  },
  {
    id: "alfajor-individual",
    name: "Alfajor Panda Individual",
    category: "Alfajores",
    description:
      "40 g bañado en chocolate, relleno de dulce de leche. El de todas las tardes.",
    image: alfajorIndividual,
  },
  {
    id: "barquillos",
    name: "Barquillos Panda",
    category: "Barquillos",
    description: "Barquillos rellenos bañados en chocolate. Animate a probarlos.",
    image: barquillos,
  },
  {
    id: "helados-potes",
    name: "Helados en Pote 1L",
    category: "Helados",
    description: "Ananá Francés, Yogurt Griego con frutos rojos y Durazno.",
    image: heladosPotes,
  },
  {
    id: "helados-palito",
    name: "Helados Palito",
    category: "Helados",
    description: "Chocolate, Dulce de Leche, Blue Ice y Frutilla.",
    image: heladosPalito,
  },
  {
    id: "cono-chocolate",
    name: "Cono Relleno de Chocolate",
    category: "Helados",
    description: "Cucurucho relleno y bañado en chocolate, bien cremoso.",
    image: conoChocolate,
  },
];
