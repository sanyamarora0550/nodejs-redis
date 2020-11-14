const express = require('express'),
    axios = require('axios'),
    redis = require('redis'),
    responseTime = require('response-time'),
    app = express(),
    { promisify } = require('util');

app.use(responseTime()); // set time in headers

const client = redis.createClient();

const getFromCache = promisify(client.get).bind(client);
const setToCache = promisify(client.set).bind(client);

app.get('/get-rockets', async (req, res, next) => {
    try {
        const cachedData = await getFromCache('get-data');
        if (cachedData) {
            console.log('Getting Data from Cache!!');
            res.send(JSON.parse(cachedData));
            return;
        }
        const response = await axios.get('https://api.spacexdata.com/v3/rockets');
        await setToCache('get-data', JSON.stringify(response.data), 'EX', 30); //EX is expiration time in seconds..
        console.log('Getting from API');
        res.send(response.data);
    } catch (err) {
        res.send(err.message);
    }
});

app.listen(3000, () => {
    console.log('Server Started..');
});