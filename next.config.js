const LiveReloadPlugin = require('webpack-livereload-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    future: {
        webpack5: true,
    },
    webpack: (config, { dev }) => {
        if (dev)
            config.plugins.push(
                new LiveReloadPlugin({
                    port: 2999,
                    hostname: 'localhost',
                }),

                new ESLintPlugin({
                    extensions: ['ts', 'tsx'],
                    failOnError: true,
                }),
            );

        return config;
    },
};
