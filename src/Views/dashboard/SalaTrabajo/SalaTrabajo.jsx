import { useRef } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import { useState } from "react";

const SalaTabajo= ()=>{

    const videoRef = useRef(null)
    const camaraRef = useRef(null)
    const canvasRef = useRef(null)
    const [mediaStream, setMediaStream]=useState([]);
    const [camaraStream, setCamaraStream]=useState([]);
    const [camaraEncendida, setCamaraEncendida]=useState(false);
    async function captureScreen() {
        let media = null;
        try {
            media = await navigator.mediaDevices.getDisplayMedia({
                video: {
                    cursor: "always"
                },
                audio: false
            });
            setMediaStream(media)
            videoRef.current.srcObject=media;
            videoRef.current.play();
            //document.getElementById("local-video").srcObject = mediaStream;

        } catch (ex) {
            console.log("Error occurred", ex);
        }
    }
    function dejarDeCompartir(){
        const tracks = mediaStream.getTracks();
        tracks.forEach((track) => {
            track.stop();
        });
        videoRef.current.srcObject=null;
    }
    async function abrirCamara(){
        let camara = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
              facingMode: 'user'
            }
        })
        setCamaraEncendida(true);
        setCamaraStream(camara);
        camaraRef.current.srcObject=camara;
    }
    async function cerrarCamara(){
        const tracks = camaraStream.getTracks();
        tracks.forEach((track) => {
            track.stop();
        });
        camaraRef.current.srcObject=null;
        setCamaraEncendida(false);
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
        let enlace = document.createElement('a'); // Crear un <a>
        enlace.download = "foto_parzibyte.me.png";
        enlace.href = image;
        console.log(enlace.href)
        enlace.click();
        //Reanudar reproducción
        video.play();

    }


    return (
        <div className="container-fluid pt-3 px-3">
            <div className="row">
                <div className="col-9">
                    <div style={{ position:"relative"}}>
                    <div className="d-flex justify-content-center align-items-end w-100" style={{height:"80vh",position: "absolute", zIndex:"1"}}>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button
                                    startIcon={<ScreenShareIcon/>}
                                    onClick={captureScreen}
                                >
                                    Compartir Pantalla
                                </Button>
                                <Button
                                    startIcon={<StopScreenShareIcon/>}
                                    onClick={dejarDeCompartir}
                                >Dejar de Compartir</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <video 
                        id="local-video" 
                        muted 
                        className="rounded w-100 border bg-light"
                        style={{height:"85vh", position:"initial"}}
                        ref={videoRef}

                    >
                    </video>
                    
                    </div>                
                </div>
                {/**Camara */}
                <div className="col-3">
                    {/**Controles */}
                    <div className="border rounded" style={{height:"85vh"}}>
                        <div className="m-0 p-0" style={{ position:"relative"}}>
                            <div className="d-flex justify-content-center align-items-end w-100" style={{height:"30vh",position: "absolute", zIndex:"1"}}>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                        {
                                            camaraEncendida?
                                            <Button
                                                disabled
                                                startIcon={<VideocamIcon/>}
                                                onClick={abrirCamara}
                                            ></Button>
                                            :
                                            <Button
                                                startIcon={<VideocamIcon/>}
                                                onClick={abrirCamara}
                                            ></Button>
                                        }
                                        <Button
                                            startIcon={<VideocamOffIcon/>}
                                            onClick={cerrarCamara}
                                        ></Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                        {/**Video */}  
                        <video 
                            id="vid"
                            muted 
                            autoPlay 
                            className="rounded w-100 bg-light p-0 m-0"
                            style={{height:"33vh"}}
                            ref={camaraRef}
                        ></video>
                        {/**Extras */}
                        <div className="bg-dark">
                        
                        </div>
                    </div>
  
                    
                </div>
                
                <div className="col-2 bg-dark">

                </div>
            </div>

        </div>
    );
}
export default SalaTabajo;