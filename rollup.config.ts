import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
const config = {
  build_dir: 'build',
};

export default {
  input: './src/index.ts', // 入口文件
  output: [
    {
      file: `./${config.build_dir}/bundle.cjs.js`,
      format: 'cjs', // CommonJS 格式
      sourcemap: true,
    },
    {
      file: `./${config.build_dir}/bundle.esm.js`,
      format: 'esm', // ES Module 格式
      sourcemap: true,
    },
    {
      file: `./${config.build_dir}/bundle.umd.js`,
      format: 'umd', // UMD 格式
      name: 'EPS', // 库的全局变量名
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json', // 配置 TypeScript 插件
      check: true, // 开启类型检查
    }),
    resolve({ browser: true, preferBuiltins: true, mainFields: ['browser'] }), // 允许 Rollup 查找外部模块
    commonjs(), // 将 CommonJS 模块转换为 ES6 模块
    terser(), // 压缩代码
  ],
};
