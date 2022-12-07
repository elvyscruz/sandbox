/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = (options, webpack) => {
  const lazyImports = [
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
    '@nestjs/swagger',
    'swagger-ui-express',
    'fastify-swagger',
    'pg-native',
    'class-transformer/storage', // https://github.com/nestjs/mapped-types/issues/486#issuecomment-932715880
  ];

  return {
    ...options,
    externals: [],
    output: {
      ...options.output,
      libraryTarget: 'commonjs2',
    },
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
  };
};
