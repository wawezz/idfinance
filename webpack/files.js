module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    },
                },
                {
                    test: /\.(woff|woff2|ttf|eot|svg)$/,
                    loader: "file-loader",
                    options: {
                        name: "files/fonts/[name].[ext]"
                    }
                },
            ],
        },
    };
};