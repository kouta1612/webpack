const path = require("path");
module.exports = {
    mode: "production",
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
