import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'lib/index.ts',
  output: [
    {
      dir: 'cjs/',
      format: 'cjs',
      exports: 'auto',
    },
    {
      dir: 'esm/',
      format: 'esm',
      exports: 'auto',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      modules: true,
      plugins: [],
    }),
  ],
  external: ['react'],
}
