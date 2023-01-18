import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRootDir = path.resolve(__dirname);

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.es.js',
      format: 'es'
    }
  ],
  plugins: [
    external(),
    resolve({ extensions: ['.mjs', '.js', '.jsx', '.json', '.node'] }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-transform-runtime'],
      presets: ['@babel/preset-react'],
      babelHelpers: 'runtime'
    }),
    commonjs(),
    terser(),
    svgr(),
    url(),
    image(),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src')
        },
      ]
    })
  ],
  external: ['react', 'react-dom', 'styled-components', 'nanoid']
};
