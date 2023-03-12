/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "LP-FeatureItem": "url('../img/LP-FeatureItem.webp')",
        "LP-HIghlightsItem1": "url('../img/LP-HIghlightsItem1.webp')",
        "LP-HIghlightsItem2": "url('../img/LP-HIghlightsItem2.webp')",
        "LP-HIghlightsItem3": "url('../img/LP-HIghlightsItem3.webp')",
        "LP-HIghlightsItem4": "url('../img/LP-HIghlightsItem4.webp')",
        "LP-CollectionItem1": "url('../img/LP-CollectionItem1.webp')",
        "LP-CollectionItem2": "url('../img/LP-CollectionItem2.webp')",
        "LP-CollectionItem3": "url('../img/LP-CollectionItem3.webp')",
        "LP-CollectionItem4": "url('../img/LP-CollectionItem4.webp')",
        "LP-CollectionItem5": "url('../img/LP-CollectionItem5.webp')",
        "LP-Shopnow": "url('../img/LP-Shopnow.webp')",
        "BITS-item1-1": "url('../img/BITS-item1-1.webp')",
        "BITS-item1-2": "url('../img/BITS-item1-2.webp')",
        "BITS-item2-1": "url('../img/BITS-item2-1.webp')",
        "BITS-item2-2": "url('../img/BITS-item2-2.webp')",
        "BITS-item3-1": "url('../img/BITS-item3-1.webp')",
        "BITS-item3-2": "url('../img/BITS-item3-2.webp')",
        "BITS-item4-1": "url('../img/BITS-item4-1.webp')",
        "BITS-item4-2": "url('../img/BITS-item4-2.webp')",
        "clothes-bg": "url('../img/clothes-bg.webp')",
        "gallery-bg1": "url('../img/gallery-item1.webp')",
      },
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
      colors:{
        'bg':'#FBFBFB'
      }
    },
  },
  plugins: [],
};
