import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
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
      format: 'es',
      exports: "named"
    }
  ],
  plugins: [
    external(),
    resolve({ extensions: ['.mjs', '.js', '.jsx', '.json', '.node'] }),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      exclude: './node_modules/**',
      presets: ['@babel/preset-react']
    }),
    commonjs(),
    terser(),
    svgr(),
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
