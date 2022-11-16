import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HomeIcon from '@mui/icons-material/Home';

export const AdminDataBar = [
    {
        key:'inicio',
        title: 'Inicio',
        path: 'inicio',
        icon:<HomeIcon color="primary" />,
    },
    {
      key:'usuarios',
      title: 'Usuarios',
      path: 'usuarios',
      icon:<PersonIcon color="primary" />,
    },
    { 
      key:'areas',
      title: 'Areas',
      path: 'areas',
      icon:<BusinessCenterIcon color="primary" />,
    },
    {
      key:'log_actividades',
      title:'Actividades',
      path:'actividad',
      icon:<WorkHistoryIcon color="primary" />
    },
  ];
  