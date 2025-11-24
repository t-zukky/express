var express = require('express');
var router = express.Router();
const request = require('request');

// https://spec.api.metro.tokyo.lg.jp/spec/t000003d2000000390-7f373b44e80b017ea4dc7d81b3363199-0
const url = 'https://service.api.metro.tokyo.lg.jp/api/t000003d2000000390-7f373b44e80b017ea4dc7d81b3363199-0/json?limit=1';

router.get('/', async (req, res) => {
    request(
        {
            url: url,
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        },
        (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const data = JSON.parse(body);
                res.json(data);
            } else {
                console.log('status code:', response.statusCode);
                console.log('response:', response.body);
                res.json('error!');
            }
        }
    );
})

module.exports = router;
