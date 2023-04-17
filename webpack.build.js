const path = require("path")

module.exports = {
    entry: {
        app: ["./src/js/app.js"],
    },
    mode: "production",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "src/dist/js")
    }
}