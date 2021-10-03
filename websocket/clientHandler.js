const WebSocket = require("ws");

module.exports = class ClientHandler {
    constructor(timer) {
        this.ids = [];
        this.wsById = {};
        this.mgsById = {};
        this.timer = timer;
        this._manageWs();
    }

    async _removeDisabledWs(id) {
        let wss = this.wsById[id];
        
        //filter
        wss = wss.filter((ws) => ws.readyStateState === WebSocket.OPEN);

        if (wss.length === 0) {
            this.removeClient(id);
        }
    }

    removeClient(id) {
        const index = this.ids.indexOf(id);
        if (index !== -1) {
            this.ids.splice(index, 1);
        }
    }

    _manageWs() {
        for (let id of this.ids) {
            this._removeDisabledWs(id);
        }
        setTimeout(() => this._manageWs(), this.timer);
    }

    addClient(newId, newWs) {
        if (this.ids.includes(newId)) {
            const ws = this.wsById[newId] || [];
            ws.push(newWs);
            this.wsById[newId] = ws;
        } else {
            const ws = [newWs];
            const msgs = [];
            
            this.ids.push(newId);
            this.wsById[newId] = ws;
            this.mgsById[newId] = msgs;
        }
        newWs.send(JSON.stringify({code: 'success', content: this.mgsById[newId]}));
        return this.mgsById[newId];
    }

    sendMessage(id, message) {
        if (!this.ids.includes(id))/* Throw error: ID does not exist */ return;

        const ws = this.wsById[id];

        const msgs = this.mgsById[id];
        msgs.unshift(message);
        this.mgsById[id] = msgs;

        for (const s of ws) {
            s.send(JSON.stringify({code: 'message', content: msgs}))
        }
    }
}