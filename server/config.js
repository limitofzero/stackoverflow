module.exports = {
  development: {
    port: process.env.PORT || 3000,
    saltingRounds: 10,
    staticPath: '../dist/stackoverflow',
    indexFile: 'index.html'
  }
};
