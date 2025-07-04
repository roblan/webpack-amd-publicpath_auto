export default {
    mode: 'development',
    devtool: false,
    output: {
        libraryTarget: 'amd',
        publicPath: 'auto',
    },
    devServer: {
        hot: false,
        liveReload: false,
        client: false,
        devMiddleware: {
            publicPath: '/eglebegle/',
        },
    },
    externals: {
        dependency: 'dependency',
    },
};
