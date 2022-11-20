import { useRef } from "react";

const SalaTabajo= ()=>{

    const videoRef = useRef(null)
    const camaraRef = useRef(null)
    const canvasRef = useRef(null)
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
            videoRef.current.play();
            //document.getElementById("local-video").srcObject = mediaStream;

        } catch (ex) {
            console.log("Error occurred", ex);
        }
    }
    async function abrirCamara(){
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
              facingMode: 'user'
            }
          })
            .then(stream => camaraRef.current.srcObject = stream)
            .catch(console.error);
    }
    function tomarFoto(){
        //Pausar reproducción



        let canvas = canvasRef.current;
        let video = videoRef.current;;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        let ctx = canvas.getContext('2d');
        video.pause();
        ctx.drawImage( video, 0, 0, canvas.width, canvas.height );

        let image = canvas.toDataURL('image/jpeg');
        /* video.pause();
        //videoRef.current.pause();
        //console.log(canvasRef.current.getContext("2d"))
        //console.log(videoRef.current.videoWidth)

        //Obtener contexto del canvas y dibujar sobre él
        let contexto = canvasRef.current.getContext("2d");
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        console.log(canvasRef.current.width)
        console.log(contexto.drawImage)

        let img=contexto.drawImage(video, 0, 0, camaraRef.current.width, canvasRef.current.height);

        let foto = canvasRef.current.toDataURL('image/png'); //Esta es la foto, en base 64
        console.log(foto);
        //console.log(img) */
        let enlace = document.createElement('a'); // Crear un <a>
        enlace.download = "foto_parzibyte.me.png";
        enlace.href = image;
        console.log(enlace.href)
        enlace.click();
        //Reanudar reproducción
        video.play();

    }


    return (
        <div className="container-fluid py-4 px-4">
            <div className="row">
                <div className="col-6">

                    
                    <p></p>
                    <button onClick={captureScreen}>
                    Compartir Pantalla
                    </button>
                    <button onClick={tomarFoto}>
                    Tomar Captura Pantalla
                    </button>


                    <video 
                        id="local-video" 
                        muted 
                        
                        className="w-100"
                        ref={videoRef}

                    ></video>

                    <br />
                    <br />
                </div>
                <div className="col-4">
                    
                    <button onClick={abrirCamara}>
                        Compartir Cámara
                    </button>

                    <button onClick={abrirCamara}>
                        Cerrar camara
                    </button>

                    <p></p>
                    <button onClick={captureScreen}>
                    Compartir Pantalla
                    </button>
                    <button onClick={tomarFoto}>
                    Tomar Captura Pantalla
                    </button>
                </div>
                <div className="col-4">

                    <video 
                        id="vid"
                        muted 
                        autoPlay 
                        className="w-100"
                        ref={camaraRef}
                    ></video>

                    <button onClick={abrirCamara}>
                        Compartir Cámara
                    </button>

                    <canvas id="canvas" ref={canvasRef} ></canvas>
                </div>
                <div className="col-2 bg-dark">

                </div>

                <h2>Usted estará siendo filmado</h2>

            </div>
        </div>
    );
}
export default SalaTabajo;