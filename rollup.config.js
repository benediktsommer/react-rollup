import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';

import pkg from './package.json';

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

const extensions = ['.ts', '.tsx'];

export default {
  input: {
    main: 'src/index.ts',
  },
  output: [
    {
      dir: 'lib/es',
      format: 'es',
    },
    {
      dir: 'lib/cjs',
      format: 'cjs',
    },
  ],
  external,
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'runtime',
      include: ['src/**/*'],
    }),
    image(),
    terser(),
  ],
};
