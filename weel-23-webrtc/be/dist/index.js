"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
// signaling server
const wbs = new ws_1.WebSocketServer({ port: 8080 });
let senderSocket = null;
let recieverSocket = null;
wbs.on("connection", function connection(ws) {
    ws.on("message", function message(data) {
        const message = JSON.parse(data);
        // identify-as-sender
        // identify-as-reciever
        // create offer
        // create answer
        // add icecandidate
        // console.log(message);
        if (message.type === "identify-as-sender") {
            console.log("sender set");
            senderSocket = ws;
        }
        else if (message.type === "identify-as-reciever") {
            console.log("reciever set");
            recieverSocket = ws;
        }
        else if (message.type === "create-offer") {
            console.log("offer recieved");
            recieverSocket === null || recieverSocket === void 0 ? void 0 : recieverSocket.send(JSON.stringify({ type: "create-offer", sdp: message.sdp }));
        }
        else if (message.type === "create-answer") {
            console.log("answer recieved");
            senderSocket === null || senderSocket === void 0 ? void 0 : senderSocket.send(JSON.stringify({ type: "create-answer", sdp: message.sdp }));
        }
        else if (message.type === "ice-candidate") {
            if (ws === senderSocket) {
                recieverSocket.send(JSON.stringify({
                    type: "ice-candidate",
                    candidate: message.candidate,
                }));
            }
            else if (ws === recieverSocket) {
                senderSocket.send(JSON.stringify({
                    type: "ice-candidate",
                    candidate: message.candidate,
                }));
            }
        }
    });
    ws.on("error", console.error);
});
