var marsIndex = require('./routes/index');
app.use('/nasa', nasaApi );
var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

router.Get('/', async function(req, res, next){
    try {
        const URI = 'https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0';
        const marsData = await fetch(URI);
        const json = await marsData.json();
        const [...numbers] = await json.result;
        await res.render('nasa', {
            result: numbers
        });
    } catch (error){
        console.log(error);
    }
});

router.get('/:id', async function(req, res, next){
    try {
        const URI = ' https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'
        const marsData = await fetch(URI);
        const json = await marsData.json();
        const todaysDate = await json.date;
        const todaysHigh = await json.sprites.back_default;
        const todaysLow = await json.sprites.back_default;
        await res.render('todays date',{
            date: todaysDate,
            high: todaysHigh,
            low: todaysLow
        });
    }catch (error){
        console.log(error);
    }
});

module.exports = router; 



