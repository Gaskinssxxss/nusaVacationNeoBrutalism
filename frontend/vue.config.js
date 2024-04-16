const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: path.resolve(__dirname, "../public"),
    configureWebpack: {
        resolve: {
            fallback: {
                "querystring": require.resolve("querystring-es3")
            }
        }
    }
});
