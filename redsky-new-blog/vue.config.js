const { ModuleKind } = require("typescript");

module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production' ? '/redsky/cli4/' : '/',
};