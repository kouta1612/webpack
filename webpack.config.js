module.exports = {
    entry: `./src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
    },
    mode: "production",
    devServer: {
        contentBase: "dist",
        open: true
    }
};
