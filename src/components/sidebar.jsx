import { Drawer, 
    Box, 
    Typography,
    IconButton,
    List,
    ListItem, ListItemText, ListItemIcon 
} from "@mui/material";

import { useState } from "react";
import { NavLink } from "react-router-dom";
//Icons
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

function SideBAr(){
    //Función para ocultar sidebar
    const [isOpen, setIsOpern]=useState(false);

    return(
        <>
            {/*Boton Hamburguesa*/}
            <IconButton
                size="large" edge='start'
                color="inherit" aria-label="logo" 
                onClick={()=> setIsOpern(true)}
            >
                <MenuIcon></MenuIcon>
            </IconButton>
            {/*SideBar*/}
            <Drawer anchor="left" open={isOpen} onClose={()=> setIsOpern(false)}>
                <Box p={2} width="250px" textAlign='center' role='presentation'>
                    <Typography variant="h6" component='div'>
                        SGP
                    </Typography>
                </Box>
                {/*Links*/}
                <List>
                    <NavLink to="/">
                        <ListItem button>
                            <ListItemIcon><LoginIcon></LoginIcon></ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/equipos">
                        <ListItem button>
                            <ListItemIcon><GroupsIcon></GroupsIcon></ListItemIcon>
                            <ListItemText primary="Equipos" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/inicio">
                        <ListItem button>
                            <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
                            <ListItemText primary="Inicio" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/perfil">
                        <ListItem button>
                            <ListItemIcon><PersonIcon></PersonIcon></ListItemIcon>
                            <ListItemText primary="Perfil" />
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
        </>    
    );
}
export default SideBAr;