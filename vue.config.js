module.exports = {
  runtimeCompiler: true,
  outputDir: 'doc',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/trans'
    : '/',
}