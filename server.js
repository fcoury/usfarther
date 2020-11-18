const express = require('express');
const fetch = require('node-fetch');

require('express-async-errors');
const server = express();

const morgan = require('morgan');
const cors = require('cors');

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.static('public'));

async function post(path, params={}) {
  const res = await fetch(`https://uscloser.com/api/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Auth-Token': process.env.TOKEN,
    },
    body: JSON.stringify(params),
  });

  return await res.json();
}

server.get('/packages', async (req, res) => {
  const json = await post('getenviosweb');
  const packageData = json.items.slice(1, 10);
  const packages = await Promise.all(packageData.map(async p => {
    const tracking = await post('rastreio', { rastreio: p.rastreio });
    if (!tracking.error) {
      [ p.rastreio ] = tracking.track;
    }
    return p;
  }));
  console.log('packages', packages);

  res.json({ packages });
});

server.use(express.static('public'));

server.use((error, req, res, next) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error', error);
    res.status(500).json({ error });
  }
  next();
});

module.exports = server;
