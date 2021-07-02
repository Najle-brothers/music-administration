const path = require('path');
const express = require('express');
const app = express();
const httpProxy = require('express-http-proxy');
const PORT = process.env.PORT || 5000;

// Proxy deezer api
const apiProxy = httpProxy('https://api.deezer.com/', {
  proxyReqPathResolver: function (req, res) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        const uri = decodeURIComponent(req.url.split('uri=').pop().split('&token=').shift().split('&provider=').shift())
        const url= 'https://api.deezer.com' + uri.split('/api')[1];
        resolve(url);
      }, 200);
    });
  }
});
app.get(`${process.env.DIR || ''}/api/*`, apiProxy);

// Serve static files
app.use(express.static(__dirname + '/dist/music-administration'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/music-administration/index.html'));
});

// default Heroku port
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});