import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

/** @type {import('webpack').Configuration} */
export default {
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminGenerate,
                    options: {
                        plugins: [
                            ["imagemin-webp", { quality: 80 }]
                        ],
                    },
                    optimization: {
                        splitChunks: { chunks: "all" },
                        usedExports: true,
                        minimize: true,
                    }
                },
            }),
        ],
    },
};

