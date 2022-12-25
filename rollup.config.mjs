import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';

import packageJson from './package.json' assert { type: 'json' };

export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled'
    }),
    resolve(),
    alias({
      resolve: ['*', '.js', '.jsx'],
      entries: [
        { find: '@/components', replacement: 'src/components' },
        { find: '@/utils', replacement: 'src/utils' },
        { find: '@/styles', replacement: 'src/styles' },
        { find: '@/assets', replacement: 'src/assets' },
        { find: '@/hooks', replacement: 'src/hooks' },
        { find: '@/helpers', replacement: 'src/helpers' },
        { find: '@/constants', replacement: 'src/constants' }
      ]
    }),
    commonjs(),
    external(),
    terser()
  ],
  external: Object.keys(packageJson.peerDependencies || {}),
  globals: { 'styled-components': 'styled' }
};
