import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';

export const SupervisorDataBar = [
    {
        key:'inicio',
        title: 'Inicio',
        path: 'inicio',
        icon:<HomeIcon color="primary" />,
    },
    {
        key:'equipos',
        title: 'Equipos',
        path: 'equipos',
        icon:<GroupsIcon color="primary" />,
    },
    { 
      key:'mis-equipos',
      title: 'Mis Equipos',
      path: 'mis-Equipos',
      icon:<WorkIcon color="primary" />,
    }
  ];