const express = require('express')
const Rollbar = require('rollbar');

const app = express()
const port = process.env['PORT'] || 3000;

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: process.env.ROLLBAR_ENV || 'development',
  nodeSourceMaps: true,
  payload: {
    code_version: process.env.CODE_VERSION || 'unknown_version',
  },
  server: {
    root: 'webpack:///./'
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/boom', (req, res) => {
  throw new Error("Test source maps");
})

app.use(rollbar.errorHandler());

app.listen(port, () => {
  console.log(`Miniguard app listening at http://localhost:${port}`)
})
