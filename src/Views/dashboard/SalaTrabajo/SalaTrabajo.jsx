import { useRef } from "react";

const SalaTabajo= ()=>{

    const videoRef = useRef(null)


    async function captureScreen() {
        let mediaStream = null;
        try {
            mediaStream = await navigator.mediaDevices.getDisplayMedia({
                video: {
                    cursor: "always"
                },
                audio: false
            });
            videoRef.current.srcObject=mediaStream;
            //document.getElementById("local-video").srcObject = mediaStream;

        } catch (ex) {
            console.log("Error occurred", ex);
        }
    }

    return (
        <div className="container py-5">
            <button onClick={captureScreen}>
                Compartir Pantalla
            </button>
            <p></p>
            <video 
                id="local-video" 
                muted 
                autoPlay
                ref={videoRef}
                style={{
                    maxHeight:"60vh",

                }}
            ></video>
        </div>
    );
}
export default SalaTabajo;