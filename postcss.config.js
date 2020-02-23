let functions = require('./src/styles/functions');
let mixins = require('./src/styles/mixins');

module.exports = function(context) {
  let { options } = context;

  let plugins = [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-functions')({
      functions,
    }),
    require('postcss-mixins')({
      mixins,
    }),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('cssnano'),
  ];
  return {
    plugins,
  };
};
