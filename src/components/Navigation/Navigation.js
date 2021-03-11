import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Trazado5 from '../../assets/Desktop/Catalogo/Trazado 5.png';
import Grupo18 from '../../assets/Desktop/Catalogo/Grupo 18.png';
import Grupo22 from '../../assets/Desktop/Catalogo/Grupo 22.png';
import Grupo23 from '../../assets/Desktop/Catalogo/Grupo 23.png';
import Grupo24 from '../../assets/Desktop/Catalogo/Grupo 24.png';
import Trazado19 from '../../assets/Desktop/Catalogo/Trazado 19.png';
import Trazado20 from '../../assets/Desktop/Catalogo/Trazado 20.png';
import Trazado21 from '../../assets/Desktop/Catalogo/Trazado 21.png';
import Trazado22 from '../../assets/Desktop/Catalogo/Trazado 22.png';
import Grupo25 from '../../assets/Desktop/Catalogo/Grupo 25.png';
import Grupo26 from '../../assets/Desktop/Catalogo/Grupo 26.png';
import Grupo658 from '../../assets/Desktop/Catalogo/Grupo 658.png';
import Logo from '../../assets/Desktop/Login/Grupo2.png';
import HamburgerIn from '../../assets/Mobile/Hamburguesain.png';
import HamburgerOut from '../../assets/Mobile/Hamburguesaout.png';

import './navigation.css';

const icons = [
  Trazado5,
  Grupo18,
  Grupo22,
  Grupo23,
  Grupo24,
  Grupo25,
  Trazado22,
  Trazado19,
  Trazado21,
  Trazado20,
  Grupo658,
  Grupo26,
];

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: '100%',
    height: '55px',
    padding: '0',
    margin: '0',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    height: '55px',
    alignItems: 'center',
    padding: ' theme.spacing(0, 1)',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  button: {
    margin: '0 0 0 25%',
  },
}));

function Navigation() {
  const classes = useStyles();

  const history = useHistory();
  const handleNavBtnClick = (key) => {
    let page = key;
    history.push(`/${page}`);
  };

  const isMobile = useMediaQuery('(max-width:1000px)');
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {isMobile ? (
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={`${classes.appBar} mainToolbar`}>
            <div className={classes.drawerHeader}>
              <button onClick={handleDrawerOpen} className='burgerBtn'>
                <img src={HamburgerIn} alt='Burger'></img>
              </button>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <></>
      )}

      <Drawer
        className={classes.drawer}
        variant={isMobile ? 'persistent' : 'permanent'}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={isMobile ? 'right' : 'left'}
        open={open}
      >
        {isMobile ? (
          <div className={classes.drawerHeader}>
            <button onClick={handleDrawerClose} className='burgerBtn'>
              <img src={HamburgerOut} alt='Burger'></img>
            </button>
          </div>
        ) : (
          <img src={Logo} alt='Logo' className='logo'></img>
        )}

        <List>
          {[
            'Oficina',
            'Catálogo',
            'Bonos',
            'Red',
            'Invitar',
            'Wonedero',
            'Notificaciones',
            'Recursos',
            'Legal',
            'Cuéntanos',
            'Historial',
            'Cerrar sesión',
          ].map((text, index) => (
            <ListItem button key={text} onClick={() => handleNavBtnClick(text)}>
              <img src={icons[index]} alt='icon' className='listIcons'></img>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Navigation;
