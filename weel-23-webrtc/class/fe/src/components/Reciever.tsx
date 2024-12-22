import { useEffect, useRef } from "react";

export default function Reciever() {
    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8080");
        const pc = new RTCPeerConnection();

        socket.onopen = () => {
            socket.send(JSON.stringify({ type: "identify-as-reciever" }));

        };
        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);

            if (message.type === "create-offer") {
                // create answer
                pc.setRemoteDescription(message.sdp);

                pc.onicecandidate = (e) => {
                    console.log(e);
                    if (e.candidate) {
                        socket.send(JSON.stringify({ type: "ice-candidate", candidate: e.candidate }))
                    }
                };

                pc.ontrack = (event) => {
                    console.log(event);
                    console.log("ontrack inside");
                    if(videoRef.current){
                        videoRef.current.srcObject = new MediaStream([event.track]);
                        videoRef.current.play();
                    }
                }

                const answer = await pc.createAnswer(message.sdp);
                await pc.setLocalDescription(answer);
                socket.send(JSON.stringify({ type: 'create-answer', sdp: answer }))
            } else if (message.type === "ice-candidate") {
                // 
                pc.addIceCandidate(message.candidate);
            }
        }
    });
    return (
        <>
        reciever
            <video ref={videoRef} muted = {true} ></video>
        </>
    );
}