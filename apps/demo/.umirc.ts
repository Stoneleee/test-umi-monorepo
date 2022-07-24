import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: ['ui']
  },
  extraBabelIncludes: ['ui'],
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  chainWebpack: (config) => {
    // 编译bl-ui包
    config.module.rule('ts').include.add(/node_modules\/ui/);
  },
});
