import { Drawer, 
    Box, 
    Typography,
    IconButton,
    List,
    ListItem, ListItemText, ListItemIcon,
    AppBar, Toolbar, Button, Divider 
} from "@mui/material";

import { useState } from "react";
import { NavLink } from "react-router-dom";
//Icons
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';

import PersonIcon from '@mui/icons-material/Person';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import BadgeIcon from '@mui/icons-material/Badge';


function SideBAr({logoutUser, idRol}){
    //Función para ocultar sidebar
    const [isOpen, setIsOpern]=useState(false);

    return(
        <>
            {/*NavBar*/}           
            <AppBar position="static">
                <Toolbar> 
                    {/*Boton Hamburguesa*/}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={()=> setIsOpern(true)}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                    <Button 
                        color="inherit"
                        onClick={()=>{
                            logoutUser();
                        }}
                    >Cerrar Sesión
                    </Button>
                </Toolbar>
            </AppBar>
            {/*SideBar*/}
            <Drawer 
                anchor="left" 
                open={isOpen} onClose={()=> setIsOpern(false)}>
                <Box p={2} width="220px" textAlign='center' role='presentation'>
                    <Typography variant="h6" component='div'>
                        SGP
                    </Typography>
                </Box>
                {/*Links*/}
                <Divider />
                <List>
                    
                    <NavLink to="/inicio" className="nav-link">
                        <ListItem button>
                            <ListItemIcon><HomeIcon color="primary" ></HomeIcon></ListItemIcon>
                            <ListItemText primary="Inicio" />
                        </ListItem>
                    </NavLink>
                    {idRol===2?
                        <>
                        <NavLink to="/equipos" className="nav-link">
                            <ListItem button>
                                <ListItemIcon><GroupsIcon color="primary" ></GroupsIcon></ListItemIcon>
                                <ListItemText primary="Equipos" />
                            </ListItem>
                        </NavLink>
                        </>
                        :
                        <></>
                    }   
                    
                    {/* ADMIN LINKS */}
                    {idRol===1?
                        <>
                            <Divider />
                            <NavLink to="/usuarios" className="nav-link">
                                <ListItem button>
                                    <ListItemIcon><BadgeIcon color="primary" ></BadgeIcon></ListItemIcon>
                                    <ListItemText primary="Usuarios" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/areas" className="nav-link">
                                <ListItem button>
                                    <ListItemIcon><BusinessCenterIcon color="primary" ></BusinessCenterIcon></ListItemIcon>
                                    <ListItemText primary="Areas" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/actividad" className="nav-link">
                                <ListItem button>
                                    <ListItemIcon><WorkHistoryIcon color="primary" ></WorkHistoryIcon></ListItemIcon>
                                    <ListItemText primary="Log de actividades" />
                                </ListItem>
                            </NavLink>
                        </>
                        :
                        <></>
                    }
                    

                    <Divider />
                    <NavLink to="/perfil" className="nav-link">
                                <ListItem button>
                                    <ListItemIcon><PersonIcon color="primary"></PersonIcon></ListItemIcon>
                                    <ListItemText primary="Perfil" />
                                </ListItem>
                            </NavLink>
                    <NavLink to="login" className="nav-link">
                        <ListItem 
                            button
                            onClick={()=>{
                                logoutUser();
                            }}
                            >
                            <ListItemIcon><LoginIcon color="primary"></LoginIcon></ListItemIcon>
                            <ListItemText primary="Cerrar Sesión" />
                        </ListItem>
                    </NavLink>
                    

                </List>
            </Drawer>
        </>    
    );
}
export default SideBAr;