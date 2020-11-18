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
  const packageData = json.items.slice(1, 10);
  const packages = await Promise.all(packageData.map(async p => {
    const tracking = await post('rastreio', { rastreio: p.rastreio });
    if (!tracking.error) {
      [p.detalhes] = tracking.track;
    }
    console.log('p.id', p.id);
    const detalhes = await post('getenviodetalhes', { id: p.id });
    console.log('detalhes', detalhes);
    if (detalhes.items) {
      p.itens = detalhes.items.map(p => ({ title: p.title, imagem: p.imagem }));
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
