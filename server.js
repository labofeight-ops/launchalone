const path = require('path')

const express = require(path.join(__dirname, 'xgrowth', 'node_modules', 'express'))
const next = require(path.join(
  __dirname,
  'growth-engine-saa-s-landing-page',
  'node_modules',
  'next'
))

const { app: apiApp } = require('./xgrowth/server')

const dev = process.env.NODE_ENV !== 'production'
const port = Number(process.env.PORT || 3000)

const nextApp = next({
  dev,
  dir: path.join(__dirname, 'growth-engine-saa-s-landing-page'),
})

const handle = nextApp.getRequestHandler()

nextApp
  .prepare()
  .then(() => {
    const server = express()

    server.use(apiApp)
    server.all('*', (req, res) => handle(req, res))

    server.listen(port, () => {
      console.log(`🚀 App running on http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.error('Failed to start server:', error)
    process.exit(1)
  })
