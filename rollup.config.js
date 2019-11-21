import babel from 'rollup-plugin-babel';
// import { uglify } from 'rollup-plugin-uglify';
import commonJs from 'rollup-plugin-commonjs';

export default {
  input: 'client/main.js',
  output: {
    file: 'public/js/scripts.js',
    format: 'iife',
    name: '_uploaderDOMFunctions'
  },
  plugins: [
    babel(),
    commonJs(),
    // uglify()
  ],
  watch: {
    exclude: 'node_modules/**'
  }
};