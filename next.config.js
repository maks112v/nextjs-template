const aliases = require('./aliases');

module.exports = {
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
  webpack: (config) => {
    const newConfig = { ...config };
    newConfig.resolve.extensions = [
      '.scss',
      '.js',
      '.json',
      '.jsx',
      '.ts',
      '.tsx',
      '.svg',
    ];
    newConfig.resolve.alias = {
      ...config.resolve.alias,
      ...aliases.absoluteAliases,
    };
    return newConfig;
  },
  serverRuntimeConfig: {},
  env: {},
};
