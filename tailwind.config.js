/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        // 'primary' is the main color used for elements like buttons and links
        primary: '#243c5a', // Deep navy blue

        // 'primaryHover' is the color when the mouse hovers over a primary element
        primaryHover: '#2b517a', // Softer navy blue

        // 'secondary' is used for less prominent elements needing differentiation
        secondary: '#eae2d6', // Soft beige

        // 'secondaryHover' is for hover states on secondary elements
        secondaryHover: '#d3cec4', // Deeper beige

        // 'background' is the general background color of the site
        background: '#f5f5f5', // Very light gray

        // 'text' is the main color for text content
        text: '#2b2d42', // Deep charcoal gray

        // 'accent' is a color used for drawing attention to specific elements
        accent: '#d8973c', // Muted gold
      }
    },
  },
  plugins: [],
}

