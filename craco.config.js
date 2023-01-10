/* craco.config.js */
/* eslint-disable */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@config": path.resolve(__dirname, "src/config"),
      "@context": path.resolve(__dirname, "src/context"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@sections": path.resolve(__dirname, "src/sections"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@types": path.resolve(__dirname, "src/types"),
    },
  },
};
