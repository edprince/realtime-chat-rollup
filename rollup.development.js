import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import css from 'rollup-plugin-css-porter';
import server from 'rollup-plugin-live-server';

// This config will allow you to work on the app and optimize for development
// experience. It will not produce optimized bundles, so don't use it for
// benchmarking!

let framework = process.env.framework || "react";

export default {
  input: `src/${framework}/index.js`,
  output: {
    file: 'build/js/bundle.js',
    format: 'iife',
    sourceMap: 'inline'
  },
  plugins: [
    server({
      port: 5000,
      host: '0.0.0.0',
      root: './build',
      file: 'index.html',
      open: false,
      wait: 500
    }),

    resolve({ browser: true }),

    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),

    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
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
      dest: 'build/css/bundle.css'
    })
  ]
}
