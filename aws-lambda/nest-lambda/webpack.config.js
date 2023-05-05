var nodeExternals = require('webpack-node-externals');

/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = (options, webpack) => {
  return {
    ...options,
    target: 'node', // use require() & use NodeJs CommonJS style
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    externalsPresets: {
      node: true, // in order to ignore built-in modules like path, fs, etc.
    },
    output: {
      ...options.output,
      libraryTarget: 'commonjs2',
    },
    plugins: [...options.plugins],
  };
};
