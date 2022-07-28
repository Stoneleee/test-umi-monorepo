import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    // exclude: ['ui'],
  },
  // extraBabelIncludes: ['ui'],
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  chainWebpack: (config, { webpack }) => {
    // console.log('webpack', webpack);
    // console.log('=======', require.resolve('ui'));
    // 编译ui包
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, '../../packages/ui'))
      .end();

    // console.log(config.toString());
  },
});
