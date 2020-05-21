import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import serve from 'rollup-plugin-serve';
import sass from 'sass';
import path from 'path';

const typescriptConfig = {
  input: './src/index.ts',
  output: {
    file: './public/dist/index.js',
    format: 'esm',
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    postcss({
      loaders: [
        {
          name: 'sass',
          test: /\.(sass|scss)$/,
          process: (ctx) => {
            const result = sass.renderSync({
              data: ctx.code,
              includePaths: [path.join(__dirname, 'node_modules')],
            });
            return {code: result.css.toString()};
          },
        },
      ],
      plugins: [
        autoprefixer,
      ],
      extract: true,
      extensions: ['.css', '.scss'],
    }),
    process.env.ROLLUP_WATCH && serve('public'),
  ],
};

export default [typescriptConfig];
