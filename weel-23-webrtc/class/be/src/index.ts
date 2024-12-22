import { WebSocketServer } from "ws";
// signaling server

const wbs = new WebSocketServer({ port: 8080 });

let senderSocket: any = null;
let recieverSocket: any = null;

wbs.on("connection", function connection(ws) {
  ws.on("message", function message(data: any) {
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
    } else if (message.type === "identify-as-reciever") {
        console.log("reciever set");
        recieverSocket = ws;
    } else if (message.type === "create-offer") {
        console.log("offer recieved");
        recieverSocket?.send(
            JSON.stringify({ type: "create-offer", sdp: message.sdp })
        );
    } else if (message.type === "create-answer") {
        console.log("answer recieved");
      senderSocket?.send(
        JSON.stringify({ type: "create-answer", sdp: message.sdp })
      );
    } else if (message.type === "ice-candidate") {
      if (ws === senderSocket) {
        recieverSocket.send(
          JSON.stringify({
            type: "ice-candidate",
            candidate: message.candidate,
          })
        );
      } else if (ws === recieverSocket) {
        senderSocket.send(
          JSON.stringify({
            type: "ice-candidate",
            candidate: message.candidate,
          })
        );
      }
    }
  });
  ws.on("error", console.error);
});
