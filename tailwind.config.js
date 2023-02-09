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
        "LP-FeatureItem": "url('../img/LP-FeatureItem.jpg')",
        "LP-HIghlightsItem1": "url('../img/LP-HIghlightsItem1.jpg')",
        "LP-HIghlightsItem2": "url('../img/LP-HIghlightsItem2.jpg')",
        "LP-HIghlightsItem3": "url('../img/LP-HIghlightsItem3.jpg')",
        "LP-HIghlightsItem4": "url('../img/LP-HIghlightsItem4.jpg')",
        "LP-CollectionItem1": "url('../img/LP-CollectionItem1.jpg')",
        "LP-CollectionItem2": "url('../img/LP-CollectionItem2.jpg')",
        "LP-CollectionItem3": "url('../img/LP-CollectionItem3.jpg')",
        "LP-Shopnow": "url('../img/LP-Shopnow.jpg')",
        "BITS-item1-1": "url('../img/BITS-item1-1.jpg')",
        "BITS-item1-2": "url('../img/BITS-item1-2.jpg')",
        "BITS-item2-1": "url('../img/BITS-item2-1.jpg')",
        "BITS-item2-2": "url('../img/BITS-item2-2.jpg')",
        "BITS-item3-1": "url('../img/BITS-item3-1.jpg')",
        "BITS-item3-2": "url('../img/BITS-item3-2.jpg')",
        "BITS-item4-1": "url('../img/BITS-item4-1.jpg')",
        "BITS-item4-2": "url('../img/BITS-item4-2.jpg')",
      },
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
