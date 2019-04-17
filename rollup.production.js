import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import css from 'rollup-plugin-css-porter';
import { uglify } from 'rollup-plugin-uglify';

// This config will produce optimized bundles that can be used for benchmarks.
// However it won't reload during development.

let framework = process.env.framework || "react";

export default {
  input: `src/${framework}/index.js`,
  output: {
    file: 'build/js/bundle.js',
    format: 'iife',
    sourceMap: 'inline'
  },
  plugins: [
    resolve({ browser: true }),

    babel({
      exclude: 'node_modules/**',
    }),

    replace({
      'process.env.NODE_ENV': JSON.stringify("production")
    }),

    commonjs({
      include: [
        'node_modules/**',
      ],
      exclude: [
        'node_modules/process-es6/**',
      ],
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
      }
    }),

    css({
      minified: 'build/css/bundle.css'
    }),

    uglify(),
  ]
}
