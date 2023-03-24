const WebSocket = require("ws");
const validUrl = require("valid-url");
const isImg = require('../utils/is-image');
const PORT = 8081;


const ClientHandler = require("./clientHandler");

const CLIENT_TIMER = 1000 * 10; // Every 10 seconds

const clientHandler = new ClientHandler(CLIENT_TIMER);


const wss = new WebSocket.Server({
    port: PORT
});


wss.on("connection", (ws) => {
    
    ws.on("message", (data) => {
        if (data.toString() === 'ping') return ws.send('pong');

        let dataObj = JSON.parse(data);
        if (!("code" in dataObj && "message" in dataObj && "id" in dataObj && "sender" in dataObj)) return;

        const {code, message, id, sender} = dataObj;

        switch (code) {
            case "init": {
                clientHandler.addClient(id, ws);
                break;
            }
                
            case "message": {
                let endMessage = {};

                if (validUrl.isUri(message)) {
                    if (isImg(message)) {
                        endMessage = {type: 'img', message, sender};
                    } else {
                        endMessage = {type: "url", message, sender};
                    }
                    
                } else {
                    endMessage = {type: 'text', message, sender};
                }

                clientHandler.sendMessage(id, endMessage);
                break;
            }

            case "clear": {
                clientHandler.clearMessages(id);
                break;
            }
                
            default:
                break;
        }

    });
});
