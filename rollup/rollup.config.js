import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import sass from 'rollup-plugin-sass';
// import serve from 'rollup-plugin-serve';

const typescriptConfig = {
  input: './index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    // serve('dist'),
  ],
};

const sassConfig = {
  input: './index.scss',
  output: {
    entryFileNames: 'dist/[name].css',
  },
  plugins: [
    sass({
      options: {
        includePaths: ['node_modules'],
      },
    }),
    // serve('dist'),
  ],
};

export default typescriptConfig;
