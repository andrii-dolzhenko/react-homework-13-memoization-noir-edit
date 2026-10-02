import arcoMiniBag from '../assets/products/arco-mini-bag.webp'
import lineaClutch from '../assets/products/linea-clutch.webp'
import formaCrossbody from '../assets/products/forma-crossbody.webp'
import no07Sunglasses from '../assets/products/no07-sunglasses.webp'
import contourOpticalFrames from '../assets/products/contour-optical-frames.webp'
import monolithWatch from '../assets/products/monolith-watch.webp'
import index02Watch from '../assets/products/index-02-watch.webp'
import aureliaStatementRing from '../assets/products/aurelia-statement-ring.webp'
import atelierCuff from '../assets/products/atelier-cuff.webp'
import voltHeeledSandals from '../assets/products/volt-heeled-sandals.webp'
import formaDerbyShoes from '../assets/products/forma-derby-shoes.webp'
import studioSneakers from '../assets/products/studio-sneakers.webp'

export const categories = [
  'All',
  'Bags',
  'Eyewear',
  'Watches',
  'Accessories',
  'Footwear',
]

export const products = [
  {
    id: 1,
    name: 'Arco Mini',
    category: 'Bags',
    material: 'Sculpted black leather',
    hardware: 'Polished gold-tone face detail',
    dimensions: '27 × 22 × 11 cm',
    weight: '0.7 kg',
    price: 1850,
    year: 2026,
    inStock: true,
    image: arcoMiniBag,
    description:
      'A sculptural top-handle bag shaped around a precise asymmetric silhouette. Deep black leather is finished with a polished gold-tone face detail for a surreal but controlled statement.',
  },
  {
    id: 2,
    name: 'Linea Clutch',
    category: 'Bags',
    material: 'Smooth black leather',
    hardware: 'Fluid gold-tone frame',
    dimensions: '29 × 16 × 5 cm',
    weight: '0.5 kg',
    price: 2400,
    year: 2026,
    inStock: true,
    image: lineaClutch,
    description:
      'A sharply reduced evening clutch traced by a fluid metallic contour. The black leather body keeps the object restrained while the gold-tone frame supplies its sculptural signature.',
  },
  {
    id: 3,
    name: 'Forma Crossbody',
    category: 'Bags',
    material: 'Smooth calfskin',
    hardware: 'Sculpted gold-tone clasp',
    dimensions: '25 × 17 × 8 cm',
    weight: '0.6 kg',
    price: 1680,
    year: 2025,
    inStock: false,
    image: formaCrossbody,
    description:
      'A compact saddle-shaped crossbody with softened geometry and a sculptural clasp. Its restrained black surface keeps the surreal gold detail visually precise.',
  },
  {
    id: 4,
    name: 'N°07 Sunglasses',
    category: 'Eyewear',
    material: 'Black acetate',
    hardware: 'Gold-tone temple detail',
    dimensions: '52–19–145 mm',
    weight: '32 g',
    price: 920,
    year: 2026,
    inStock: true,
    image: no07Sunglasses,
    description:
      'Bold black acetate frames refined by small sculptural gold details at the temples. N°07 balances graphic presence with a timeless, wearable profile.',
  },
  {
    id: 5,
    name: 'Contour Optical',
    category: 'Eyewear',
    material: 'Black acetate and metal',
    hardware: 'Gold-tone face hinge',
    dimensions: '50–20–145 mm',
    weight: '27 g',
    price: 760,
    year: 2025,
    inStock: true,
    image: contourOpticalFrames,
    description:
      'A lighter optical frame built around clean black lines and miniature gold-tone face hinges. The result is architectural without becoming severe.',
  },
  {
    id: 6,
    name: 'Monolith Watch',
    category: 'Watches',
    material: 'Black leather and sapphire',
    hardware: 'Polished gold-tone case',
    dimensions: '38 mm case',
    weight: '82 g',
    price: 2390,
    year: 2026,
    inStock: true,
    image: monolithWatch,
    description:
      'A fluid gold-tone watch case frames an intentionally quiet dial and black leather strap. The organic contour turns a minimal timepiece into a small sculptural object.',
  },
  {
    id: 7,
    name: 'Index 02 Watch',
    category: 'Watches',
    material: 'Black leather and sapphire',
    hardware: 'Gold-tone sculpted case',
    dimensions: '39 mm case',
    weight: '86 g',
    price: 3290,
    year: 2025,
    inStock: true,
    image: index02Watch,
    description:
      'A darker interpretation of the collection watch, pairing a black dial with a molten gold-tone case. Fine indices preserve clarity inside the asymmetric silhouette.',
  },
  {
    id: 8,
    name: 'Aurelia Statement Ring',
    category: 'Accessories',
    material: 'Polished metal',
    hardware: 'Mirror gold-tone finish',
    dimensions: 'Adjustable sculptural band',
    weight: '24 g',
    price: 680,
    year: 2026,
    inStock: true,
    image: aureliaStatementRing,
    description:
      'A single continuous metallic form folded into an oversized statement ring. Its mirror-polished surface is intentionally dramatic against the otherwise monochrome collection.',
  },
  {
    id: 9,
    name: 'Atelier Cuff',
    category: 'Accessories',
    material: 'Polished metal',
    hardware: 'Mirror gold-tone finish',
    dimensions: 'Open cuff, 62 mm',
    weight: '78 g',
    price: 840,
    year: 2025,
    inStock: true,
    image: atelierCuff,
    description:
      'A wide open cuff with a fluid, almost fabric-like surface translated into polished metal. Designed as a singular gold accent rather than layered jewellery.',
  },
  {
    id: 10,
    name: 'Volt Heeled Sandals',
    category: 'Footwear',
    material: 'Black leather',
    hardware: 'Sculpted gold-tone heel',
    dimensions: 'EU 36–42',
    weight: '0.7 kg / pair',
    price: 1690,
    year: 2026,
    inStock: true,
    image: voltHeeledSandals,
    description:
      'Minimal black leather straps are set against a molten sculptural heel. The contrast gives the sandal a couture presence while keeping the upper deliberately spare.',
  },
  {
    id: 11,
    name: 'Forma Derby',
    category: 'Footwear',
    material: 'Polished black leather',
    hardware: 'Gold-tone sculpted heel detail',
    dimensions: 'EU 36–45',
    weight: '0.9 kg / pair',
    price: 1190,
    year: 2025,
    inStock: true,
    image: formaDerbyShoes,
    description:
      'A formal derby stripped back to essential geometry, then interrupted by a sculptural gold heel detail. The polished upper keeps the pair precise rather than ornamental.',
  },
  {
    id: 12,
    name: 'Studio Sneaker',
    category: 'Footwear',
    material: 'Black leather',
    hardware: 'Gold-tone heel insert',
    dimensions: 'EU 36–45',
    weight: '0.8 kg / pair',
    price: 890,
    year: 2024,
    inStock: true,
    image: studioSneakers,
    description:
      'A monochrome leather sneaker with deliberately reduced detailing and a single sculptural gold heel insert. Built as the most casual object in the edit without losing its visual discipline.',
  },
]
