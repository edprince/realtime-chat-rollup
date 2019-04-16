import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import css from 'rollup-plugin-css-porter';
import liveServer from 'rollup-plugin-live-server';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/js/bundle.min.js',
    format: 'iife',
    sourceMap: 'inline'
  },
  plugins: [
    liveServer({
      port: 8001,
      host: "0.0.0.0",
      root: "",
      file: "index.html",
      mount: [["./", "./"], ['/node_modules', './node_modules']],
      open: false,
      wait: 500
    }),
    nodeResolve({
      browser: true,
    }),
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
      dest: 'build/bundle.min.css'
    })
  ]
}
