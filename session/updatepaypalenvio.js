fetch("https://uscloser.com/api/updatepaypalenvio", {
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
  "body": "{\n  \"id\": \"9c27bcf4cbbb4343d92a2bd443d458f2de26c159ce72bb2181e667794c218513ce196c61b907d577dc7bee936deec213515a6ea5e14529fb9b24251929e20d32hJawHkOgxuUNZHAb7DtFsqgYMsxw9Hnal46wBZL0Y_M.\",\n  \"detalhes\": {\n    \"create_time\": \"2021-06-09T21:05:17Z\",\n    \"update_time\": \"2021-06-09T21:06:28Z\",\n    \"id\": \"43V653833X681941F\",\n    \"intent\": \"CAPTURE\",\n    \"status\": \"COMPLETED\",\n    \"payer\": {\n      \"email_address\": \"felipe.coury+us@gmail.com\",\n      \"payer_id\": \"ESJETZMLWES78\",\n      \"address\": {\n        \"country_code\": \"US\"\n      },\n      \"name\": {\n        \"given_name\": \"Felipe\",\n        \"surname\": \"Coury\"\n      }\n    },\n    \"purchase_units\": [\n      {\n        \"description\": \"Frete\",\n        \"reference_id\": \"default\",\n        \"soft_descriptor\": \"PAYPAL *USCLOSER\",\n        \"amount\": {\n          \"value\": \"128.77\",\n          \"currency_code\": \"USD\",\n          \"breakdown\": {\n            \"item_total\": {\n              \"value\": \"128.77\",\n              \"currency_code\": \"USD\"\n            },\n            \"shipping\": {\n              \"value\": \"0.00\",\n              \"currency_code\": \"USD\"\n            },\n            \"handling\": {\n              \"value\": \"0.00\",\n              \"currency_code\": \"USD\"\n            },\n            \"insurance\": {\n              \"value\": \"0.00\",\n              \"currency_code\": \"USD\"\n            },\n            \"shipping_discount\": {\n              \"value\": \"0.00\",\n              \"currency_code\": \"USD\"\n            }\n          }\n        },\n        \"payee\": {\n          \"email_address\": \"contato@uscloser.com\",\n          \"merchant_id\": \"TN7B9FAYS9QV4\"\n        },\n        \"items\": [\n          {\n            \"name\": \"Frete\",\n            \"unit_amount\": {\n              \"value\": \"115.00\",\n              \"currency_code\": \"USD\"\n            },\n            \"tax\": {\n              \"value\": \"0.00\",\n              \"currency_code\": \"USD\"\n            },\n            \"quantity\": \"1\",\n            \"description\": \"Frete\",\n            \"sku\": \"freteus\"\n          },\n          {\n            \"name\": \"Serviços\",\n            \"unit_amount\": {\n              \"value\": \"7.99\",\n              \"currency_code\": \"USD\"\n            },\n            \"tax\": {\n              \"value\": \"0.00\",\n              \"currency_code\": \"USD\"\n            },\n            \"quantity\": \"1\",\n            \"description\": \"Serviço UsCloser\",\n            \"sku\": \"servicous\"\n          },\n          {\n            \"name\": \"Taxas\",\n            \"unit_amount\": {\n              \"value\": \"5.78\",\n              \"currency_code\": \"USD\"\n            },\n            \"tax\": {\n              \"value\": \"0.00\",\n              \"currency_code\": \"USD\"\n            },\n            \"quantity\": \"1\",\n            \"description\": \"Taxas Cambiais (4,7%)\",\n            \"sku\": \"impus\"\n          }\n        ],\n        \"shipping\": {\n          \"name\": {\n            \"full_name\": \"Felipe Coury\"\n          },\n          \"address\": {\n            \"address_line_1\": \"2844 S 1030 W\",\n            \"address_line_2\": \"Suite 53867\",\n            \"admin_area_2\": \"South Salt Lake\",\n            \"admin_area_1\": \"UT\",\n            \"postal_code\": \"84119-2476\",\n            \"country_code\": \"US\"\n          }\n        },\n        \"payments\": {\n          \"captures\": [\n            {\n              \"status\": \"COMPLETED\",\n              \"id\": \"2WG16503FY509905E\",\n              \"final_capture\": true,\n              \"create_time\": \"2021-06-09T21:06:28Z\",\n              \"update_time\": \"2021-06-09T21:06:28Z\",\n              \"amount\": {\n                \"value\": \"128.77\",\n                \"currency_code\": \"USD\"\n              },\n              \"seller_protection\": {\n                \"status\": \"ELIGIBLE\",\n                \"dispute_categories\": [\n                  \"ITEM_NOT_RECEIVED\",\n                  \"UNAUTHORIZED_TRANSACTION\"\n                ]\n              },\n              \"links\": [\n                {\n                  \"href\": \"https://api.paypal.com/v2/payments/captures/2WG16503FY509905E\",\n                  \"rel\": \"self\",\n                  \"method\": \"GET\",\n                  \"title\": \"GET\"\n                },\n                {\n                  \"href\": \"https://api.paypal.com/v2/payments/captures/2WG16503FY509905E/refund\",\n                  \"rel\": \"refund\",\n                  \"method\": \"POST\",\n                  \"title\": \"POST\"\n                },\n                {\n                  \"href\": \"https://api.paypal.com/v2/checkout/orders/43V653833X681941F\",\n                  \"rel\": \"up\",\n                  \"method\": \"GET\",\n                  \"title\": \"GET\"\n                }\n              ]\n            }\n          ]\n        }\n      }\n    ],\n    \"links\": [\n      {\n        \"href\": \"https://api.paypal.com/v2/checkout/orders/43V653833X681941F\",\n        \"rel\": \"self\",\n        \"method\": \"GET\",\n        \"title\": \"GET\"\n      }\n    ]\n  }\n}",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});