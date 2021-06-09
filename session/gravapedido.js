fetch("https://uscloser.com/api/gravapedido", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
    "auth-token": "czBpWjNudWZKTUVSSnhyOXo4WEtnbVdMSWF2Rm1nYVpORmlMd0FVVE1aeWFvOWJMWGp4Kzh0WE1oeUlEcmM3Rg==",
    "content-type": "application/json",
    "origem": "App-web",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "security-token": "eHBiTWZvWVROc2RlQm04N2VGNWpzZz09"
  },
  "referrer": "https://minhaconta.uscloser.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\n  \"itens\": [\n    {\n      \"itemid\": \"809343\",\n      \"descricao\": \"Kepler FC65\",\n      \"valordeclarado\": 0,\n      \"qtdedeclarado\": 0,\n      \"qtde\": 1,\n      \"familia\": \"JJH\",\n      \"blockepacket\": \"0\",\n      \"image\": \"https://uscloser.com/media/produtos/2021_06_08_03_00_52_1453741622.jpg\"\n    },\n    {\n      \"itemid\": \"809341\",\n      \"descricao\": \"Keyboard Kit\",\n      \"valordeclarado\": 48,\n      \"qtdedeclarado\": 1,\n      \"qtde\": 1,\n      \"familia\": \"JJH\",\n      \"blockepacket\": \"0\",\n      \"image\": \"https://uscloser.com/media/produtos/2021_06_08_03_00_25_1523470039.jpg\"\n    }\n  ],\n  \"extras\": [\n    {\n      \"id\": 1,\n      \"title\": \"Seguro (3% do valor declarado)\",\n      \"extra\": false,\n      \"peso\": 0,\n      \"valor\": 0.03,\n      \"tipo\": 1\n    },\n    {\n      \"id\": 10,\n      \"title\": \"Seguro (10% do valor do frete)\",\n      \"extra\": \"\",\n      \"peso\": 0,\n      \"valor\": 0.1,\n      \"tipo\": 3\n    },\n    {\n      \"id\": 2,\n      \"title\": \"Retirar preços das etiquetas?\",\n      \"extra\": \"\",\n      \"peso\": 0,\n      \"valor\": 0,\n      \"tipo\": 2\n    },\n    {\n      \"id\": 3,\n      \"title\": \"Remover inserçoes, anúncios e extras da loja?\",\n      \"extra\": \"\",\n      \"peso\": 0,\n      \"valor\": 0,\n      \"tipo\": 2\n    },\n    {\n      \"id\": 4,\n      \"title\": \"Retirar produtos da caixa/embalagem original? Por exemplo tênis, brinquedos e acessórios de bebê.\",\n      \"extra\": \"\",\n      \"peso\": 0,\n      \"valor\": 0,\n      \"tipo\": 2\n    },\n    {\n      \"id\": 5,\n      \"title\": \"Enviar invoice/fatura original?\",\n      \"extra\": \"\",\n      \"peso\": 0,\n      \"valor\": 0,\n      \"tipo\": 2\n    },\n    {\n      \"id\": 7,\n      \"title\": \"Proteger produtos frágeis com plástico bolha.\",\n      \"extra\": false,\n      \"peso\": 0.2,\n      \"valor\": 1,\n      \"tipo\": 2\n    },\n    {\n      \"id\": 8,\n      \"title\": \"Fechar toda a caixa com fita para ter uma proteção extra?\",\n      \"extra\": \"\",\n      \"peso\": 0.1,\n      \"valor\": 1,\n      \"tipo\": 2\n    },\n    {\n      \"id\": 9,\n      \"title\": \"Caixa parede dupla\",\n      \"extra\": false,\n      \"peso\": 0,\n      \"valor\": 3,\n      \"tipo\": 2\n    }\n  ],\n  \"endereco\": \"bc348d3d7b5058b58098645fde58e7b16aff704fa827e6ce45118a38123fbade37eba64fd53dab40d63db6fe74dc0fbd7eb627c8189c0979afd91aa958997c22njNKP1zv6GTkTq0jxlMVqJXfYE40VouEiEVfL7B_XX4.\",\n  \"forma_envio\": \"6\",\n  \"comentarios\": \"\",\n  \"totaldeclarado\": 48,\n  \"tipoembalagem\": 1,\n  \"declararfrete\": false,\n  \"documento\": \"226.978.508-80\",\n  \"fotocaixa\": false\n}",
  "method": "POST",
  "mode": "cors"
});
