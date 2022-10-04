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
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BadgeIcon from '@mui/icons-material/Badge';

function SideBAr(){
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
                    <Button color="inherit">Login</Button>
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
                    <NavLink to="/" className="text-body">
                        <ListItem button>
                            <ListItemIcon><LoginIcon color="primary"></LoginIcon></ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/equipos" className="text-body">
                        <ListItem button>
                            <ListItemIcon><GroupsIcon color="primary" ></GroupsIcon></ListItemIcon>
                            <ListItemText primary="Equipos" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/inicio" className="text-body">
                        <ListItem button>
                            <ListItemIcon><HomeIcon color="primary" ></HomeIcon></ListItemIcon>
                            <ListItemText primary="Inicio" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/areas" className="text-body">
                        <ListItem button>
                            <ListItemIcon><BusinessCenterIcon color="primary" ></BusinessCenterIcon></ListItemIcon>
                            <ListItemText primary="Areas" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/usuarios" className="text-body">
                        <ListItem button>
                            <ListItemIcon><BadgeIcon color="primary" ></BadgeIcon></ListItemIcon>
                            <ListItemText primary="Usuarios" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/gestionDeEquipo" className="text-body">
                        <ListItem button>
                            <ListItemIcon><GroupsIcon color="primary" ></GroupsIcon></ListItemIcon>
                            <ListItemText primary="GestionDeEquipo" />
                        </ListItem>
                    </NavLink>
                    
                </List>
            </Drawer>
        </>    
    );
}
export default SideBAr;