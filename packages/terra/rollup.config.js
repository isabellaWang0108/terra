import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

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
