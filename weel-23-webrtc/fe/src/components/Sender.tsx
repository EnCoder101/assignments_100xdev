import { useEffect, useState } from "react";

export default function Sender() {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    async function sendVideo() {
        if (!socket) return;
        // create an offer
        const pc = new RTCPeerConnection();
        pc.onnegotiationneeded = async ()=>{
            console.log("onnegotiationneeded");
            const offer = await pc.createOffer() // sdp
            await pc.setLocalDescription(offer);
            // socket?.send(JSON.stringify({ type: "create-offer", offer: offer }))  // same as below
            socket?.send(JSON.stringify({ type: "create-offer", sdp: pc.localDescription }))
        }

        pc.onicecandidate = (e) => {
            // console.log(e);
            if (e.candidate) {
                socket.send(JSON.stringify({ type: "ice-candidate", candidate: e.candidate }))
            }
        }

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === "create-answer") {
                // revieve answer
                pc.setRemoteDescription(message.sdp);
            }else if(message.type === "ice-candidate"){
                pc.addIceCandidate(message.candidate);
            }
        }

        const stream = await navigator.mediaDevices.getUserMedia({video : true , audio : false});
        pc.addTrack(stream.getVideoTracks()[0]);
    }
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8080");
        socket.onopen = () => {
            socket.send(JSON.stringify({ type: "identify-as-sender" }));
        };
        setSocket(socket);
    }, []);
    return (
        <>
            <button onClick={sendVideo}>Send Video</button>
        </>
    );
}
