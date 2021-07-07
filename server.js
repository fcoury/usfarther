const express = require('express');
const fetch = require('node-fetch');

require('express-async-errors');
const server = express();

const morgan = require('morgan');
const cors = require('cors');
const striptags = require('striptags');

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.static('public'));

async function post(path, params = {}) {
  const res = await fetch(`https://uscloser.com/api/${path}`, {
    method: 'POST',
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7',
      'Content-Type': 'application/json',
      'Auth-Token': process.env.TOKEN,
      'origem': 'App-web',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'security-token': 'eHBiTWZvWVROc2RlQm04N2VGNWpzZz09',
    },
    'referrer': 'https://minhaconta.uscloser.com/',
    'referrerPolicy': 'strict-origin-when-cross-origin',
    'mode': 'cors',
    'credentials': 'omit',
    body: JSON.stringify(params),
  });

  return await res.json();
}

server.get('/packages', async (req, res) => {
  const json = await post('getenviosweb');
  const packageData = json.items.slice(0, 20);
  const packages = await Promise.all(packageData.map(async p => {
    const tracking = await post('rastreio', { rastreio: p.rastreio });
    p.entregue = tracking.entregue;
    if (!tracking.error) {
      [p.detalhes] = tracking.track;
      p.rastreios = tracking.track.map(t => Object.assign({}, t, { track_description: striptags(t.track_description) }));
    }
    const detalhes = await post('getenviodetalhes', { id: p.id });
    if (detalhes.items) {
      p.itens = detalhes.items.map(p => ({ title: p.title, imagem: p.imagem }));
      p.pesototal = detalhes.pesototal;
    }
    return p;
  })); // .filter(p => !p.entregue);

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
