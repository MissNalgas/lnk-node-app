const WebSocket = require("ws");
const validUrl = require("valid-url");
const PORT = 8081;


class Client {
    constructor(id, ws) {
        this.id = id;
        this.ws = ws;
    }
}

const wss = new WebSocket.Server({
    port: PORT
});

let clients = [];

function clearClients() {
    clients = [];

    setTimeout(() => {
        clearClients();
    }, 1000*60*60*24);
}

wss.on("connection", (ws, request, clt) => {
    
    ws.on("message", (data) => {

        dataObj = JSON.parse(data);
        if (!("code" in dataObj && "message" in dataObj && "id" in dataObj)) return;

        const {code, message, id} = dataObj;

        switch (code) {
            case "init":
                clients.push(new Client(id, ws));
                break;
            case "message":
                let endMessage = "";
                if (validUrl.isUri(message)) {
                    endMessage = JSON.stringify({type: "url", message});
                } else {
                    endMessage = JSON.stringify({type: "text", message});
                }

                clients.forEach((client) => {
                    if(client.ws.readyState === WebSocket.OPEN && client.id === id) {
                        client.ws.send(JSON.stringify({code: "message", id: client.id, endMessage}));
                    }
                });
                break;
        
            default:
                break;
        }

    });
});