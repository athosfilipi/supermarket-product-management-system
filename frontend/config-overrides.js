const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@components": path.resolve(__dirname, "src/components"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@utils": path.resolve(__dirname, "src/utils"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@services": path.resolve(__dirname, "src/services"),
  };
  return config;
};
