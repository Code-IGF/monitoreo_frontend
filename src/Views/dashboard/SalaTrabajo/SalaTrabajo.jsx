import { useRef } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab"
import ButtonGroup from '@mui/material/ButtonGroup';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MessageIcon from '@mui/icons-material/Message';
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../../components/CardUser";
import AuthUser from "../../../components/AuthUser";
import Bienvenida from "./Bienvenida";
import { useEffect } from "react";
import Echo from "laravel-echo";
//socket
import "pusher-js";

const SalaTabajo= ({baseURL})=>{

    const videoRef = useRef(null)
    const camaraRef = useRef(null)
    const canvasRef = useRef(null)
    const [mediaStream, setMediaStream]=useState([]);
    const [camaraStream, setCamaraStream]=useState([]);
    const [camaraEncendida, setCamaraEncendida]=useState(false);
    const [equipoData, setEquipoData]=useState([]);
    const [open, setOpen]=useState(true);
    const {user}=AuthUser();
    const {idSala}=useParams();

    const {http}=AuthUser();

    //Socket conexión
    useEffect(() => {
        // 3
        const echo = new Echo({
            broadcaster: 'pusher',
            key: "ASDASD2222",
            cluster: "mt1",
            forceTLS: false,
            wsHost: "code-rm.tk",
            auth: {
                headers: {
                  // Authorization: `Bearer ${token}`,
                  Accept: 'application/json',
                },
              },
            wsPort:443,
            disableStats: true,
            encrypted: false,
        });
        // 4
        echo
            .channel(`usuario-${user.id}`)
            .subscribed(() => {
            console.log('You are subscribed');
        })
        // 5
        .listen('NuevoLog', (data) => {
        // 6
            console.log(data);
        });
        // eslint-disable-next-line 

        //consultando datos de la sala
        consultarDatos()

    }, []);

    const consultarDatos = ()=>{
        http.get(`sala/datales/${idSala}`).then((data)=>{
            setEquipoData(data.data)
        })
    }

    const hacerLog=(descripcion, imagen, tipo, nombreImagen)=>{
        const formData=new FormData();
        formData.append('descripcion', descripcion)
        formData.append('tipo', tipo)
        imagen?
            formData.append('imagen', imagen, "imagen.jpeg")
            :
            formData.append('imagen','')
        http.post(`/log`,formData).then((data)=>{
            //console.log(data.data)
            //Toma foto del usuario
            if(data.data.tipo===2){
                //console.log(imagen)
                setTimeout(() => {
                    tomarFoto(camaraRef, 2); 
                }, 5000);
            }
            //Toma captura de pantalla 
            if(data.data.tipo===3){

                    setTimeout(() => {
                        tomarFoto(videoRef, 3); 
                    }, 6000)       
            }
        }).then(()=>{
            http.post('/new-log', {
                tipo: "user",
                nombreChannel: `usuario-${user.id}`,
             });
        });
    }
    
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
    //Camara
    async function abrirCamara(){
        await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
              facingMode: 'user'
            }
        }).then(
            (camara)=>{
                setOpen(false);
                setCamaraEncendida(true);
                setCamaraStream(camara);
                camaraRef.current.srcObject=camara;
                //1=texto, 2=foto, 3=captura  
                hacerLog("Entro en la sala.",null,1) 
            }
        )
    }
    async function cerrarCamara(){
        const tracks = camaraStream.getTracks();
        tracks.forEach((track) => {
            track.stop();
        });
        camaraRef.current.srcObject=null;
        setCamaraEncendida(false);
    }
    function tomarFoto(element, tipoDeAccion){
        //Pausar reproducción
        let canvas = canvasRef.current;
        let video = element.current;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        let ctx = canvas.getContext('2d');
        video.pause();
        ctx.drawImage( video, 0, 0, canvas.width, canvas.height );

        //let image = canvas.toDataURL('image/jpeg');
        
        canvas.toBlob(function(blob){
            hacerLog("Imagen", blob, tipoDeAccion, "imagen");
            console.log("nuevo log")
          }, 'image/jpeg');

        //let enlace = document.createElement('a'); // Crear un <a>
        //enlace.download = "foto_parzibyte.me.png";
        //enlace.href = image;

        //enlace.click();
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
                            <ButtonGroup className="bg-white" variant="contained" aria-label="outlined primary button group">
                                <Tab 
                                    icon={<ScreenShareIcon color="primary"/>} 
                                    onClick={captureScreen}
                                    value={1}
                                    label="Compartir Pantalla" />
                                <Tab 
                                    icon={<StopScreenShareIcon color="primary"/>} 
                                    onClick={dejarDeCompartir}
                                    value={1}
                                    label="Dejar de Compartir" />
                                <Tab 
                                    icon={<PersonPinIcon color="primary"/>} 
                                    value={1}
                                    label="Equipo" />
                                <Tab 
                                    icon={<MessageIcon color="primary"/>} 
                                    onClick={tomarFoto}
                                    value={1}
                                    label="Chat" />
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
                        <div className="border-top">
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                aria-label="Vertical  example"
                                sx={{ borderRight: 1, borderColor: 'divider', height:"50vh" }}
                                value={0}
                            >
                                {
                                    equipoData.usuarios?
                                        equipoData.usuarios.map((userEquipo)=>(
                                            
                                            <CardUser 
                                                key={userEquipo.id} 
                                                baseURL={baseURL} 
                                                user={userEquipo}
                                                currentUser={user}
                                            ></CardUser>
                                        ))
                                        :
                                        <></>
                                }
                            </Tabs>
                        </div>
                    </div>
  
                    
                </div>
                
                <canvas id="canvas" ref={canvasRef} className="d-none"></canvas>
            </div>
            <Bienvenida
                open={open}
                idSala={idSala}
                abrirCamara={abrirCamara}
                captureScreen={captureScreen}
            >
            </Bienvenida>

        </div>
    );
}
export default SalaTabajo;