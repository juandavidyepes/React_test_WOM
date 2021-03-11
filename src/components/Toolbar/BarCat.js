import React from 'react';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grupo637 from '../../assets/Desktop/Catalogo/Grupo 637.png';
import Grupo636 from '../../assets/Desktop/Catalogo/Grupo 636.png';
import { makeStyles } from '@material-ui/core/styles';
import './barcat.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  button: {
    margin: '0 0 0 auto',
  },
}));

function BarCat() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const classes = useStyles();

  return (
    <div className='bread'>
      <Breadcrumbs separator='' aria-label='breadcrumb'>
        <Link
          color='inherit'
          href='/'
          onClick={handleClick}
          className='breadcrumsElement'
        >
          TOP 10
        </Link>
        <Link
          color='inherit'
          href='/getting-started/installation/'
          onClick={handleClick}
          className='breadcrumsElement'
        >
          APPS
        </Link>
        <Link
          color='inherit'
          href='/components/breadcrumbs/'
          onClick={handleClick}
          aria-current='page'
          className='breadcrumsElement'
        >
          BONOS
        </Link>
        <Link
          color='inherit'
          href='/'
          onClick={handleClick}
          className='breadcrumsElement'
        >
          PAQUETES
        </Link>
        <Link
          color='inherit'
          href='/'
          onClick={handleClick}
          className='breadcrumsElement'
        >
          RECARGAS
        </Link>
      </Breadcrumbs>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        startIcon={<img src={Grupo637} alt='monedero'></img>}
      >
        $ 100.000
      </Button>
      <img src={Grupo636} alt='search' className='searchBtn'></img>
    </div>
  );
}

export default BarCat;
