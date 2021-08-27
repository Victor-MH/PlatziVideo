/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config();

const { ENV, PORT } = process.env;

const app = express();

// eslint-disable-next-line space-infix-ops
if (ENV ==='development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(webpackConfig);
  const serverConfig = { publicPath: webpackConfig.output.publicPath, serverSideRender: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="bundle/app.css" type="text/css"></link>
            <title>Platzi Video</title>
        </head>
        <body>
            
            <div id="app"></div>
            <script src="bundle/app.js" type="text/javascript"></script>
        </body>
    </html>`,
  );
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${PORT}`);
});
