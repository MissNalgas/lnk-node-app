const WebSocket = require("ws");
const validUrl = require("valid-url");
const PORT = 8081;


const ClientHandler = require("./clientHandler");

const CLIENT_TIMER = 1000*60*30; // Every 30 minutues

const clientHandler = new ClientHandler(CLIENT_TIMER);


const wss = new WebSocket.Server({
    port: PORT
});


wss.on("connection", (ws) => {
    
    ws.on("message", (data) => {

        let dataObj = JSON.parse(data);
        if (!("code" in dataObj && "message" in dataObj && "id" in dataObj)) return;

        const {code, message, id} = dataObj;

        switch (code) {
            case "init": {
                clientHandler.addClient(id, ws);
                break;
            }
                
            case "message": {
                let endMessage = "";
                if (validUrl.isUri(message)) {
                    endMessage = {type: "url", message};
                } else {
                    endMessage = {type: 'text', message};
                }

                clientHandler.sendMessage(id, endMessage);
                break;
            }
                
            default:
                break;
        }

    });
});