const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hey!');
});

const {DISCORD_TOKEN, API_KEY} = require('../../../secret/consts');
const { Client, Intents } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.DIRECT_MESSAGES]});

client.on('ready', () => console.log('discord ready'));
client.login(DISCORD_TOKEN);

router.post('/', (req, res) => {
    const { message, apiKey } = req.body;
    if (!message || !apiKey) {
        res.statusCode = 400;
        return res.send('Bad request');
    }
    if (apiKey !==  API_KEY) {
        res.statusCode = 403;
        return res.send('unathorized');
    }


    client.users.fetch('398910244442472448').then((usr) => {
        usr.send(message);
    })
    return res.send('success');

})


module.exports = router;