const express = require('express'),
    axios = require('axios'),
    redis = require('redis'),
    responseTime = require('response-time'),
    app = express();

app.use(responseTime());
