module.exports = {
  apps: [{
    name: "site-laysa",
    script: "serve",
    env: {
      PM2_SERVE_PATH: '.',
      PM2_SERVE_PORT: 3040,
      PM2_SERVE_SPA: 'true',
      PM2_SERVE_HOMEPAGE: '/index.html'
    }
  }]
}
