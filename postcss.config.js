// @vsc repo:vsc-project-298-frontend file:postcss.config.js task:f1-postcss-config-js module:frontend session:298
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
