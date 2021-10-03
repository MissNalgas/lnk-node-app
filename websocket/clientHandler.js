const WebSocket = require("ws");

module.exports = class ClientHandler {
    constructor() {
        this.ids = [];
        this.wsById = {};
        this.mgsById = {};
        this._manageWs();
    }

    async _removeDisabledWs(id) {
        const wss = this.wsById[id];
        let dirty = false;
        for (let ws of wss) {
            if (ws.readyState === WebSocket.OPEN) {
                dirty = true;
                break;
            }
        }
        if (!dirty) {
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
        setTimeout(() => this._manageWs(), 5000);
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