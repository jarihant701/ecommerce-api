const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./public/index.html'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
