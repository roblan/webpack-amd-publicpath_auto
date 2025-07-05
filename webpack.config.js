const notImportant = {
    mode: 'development',
    devtool: false,
};

const devServer = {
    hot: false,
    liveReload: false,
    client: false,
    devMiddleware: {
        publicPath: '/eglebegle/',
    },
};

export default [
    {
        entry: {
            not_working: './src/not_working.js',
        },
        output: {
            libraryTarget: 'amd',
            publicPath: 'auto',
            chunkFilename: `not_working_[name].js`,
            chunkLoadingGlobal: `_not_working_webpackChunk`,
        },
        externals: {
            dependency: 'dependency',
        },
        ...notImportant,
    },
    {
        entry: {
            working: './src/working.js',
        },
        output: {
            libraryTarget: 'amd',
            publicPath: 'auto',
            chunkFilename: `working_[name].js`,
            chunkLoadingGlobal: `_working_webpackChunk`,
        },
        ...notImportant,
        devServer,
    },
];
