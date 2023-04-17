const path = require("path")

module.exports = {
    entry: "./src/js/app.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "src/dist/js"),
        filename: "app.js"
    }
}