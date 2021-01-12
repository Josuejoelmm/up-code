import { useState, use } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { CgMenuLeftAlt } from 'react-icons/cg';
import DrawerComponent from '../Drawer';
import { spacing } from '@material-ui/system';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'red'
  },
  header: {
    backgroundColor: theme.myBestColor.black
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  loginButton: {
    marginLeft: '10px'
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar() {
  const [isDraweOpen, setIsDraweOpen] = useState(false)
  const classes = useStyles();

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
      
    setIsDraweOpen(!isDraweOpen);
  };

  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton onClick={toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <CgMenuLeftAlt />
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            UP CODE
          </Typography>
          <Button color="inherit" className={classes.menuButton}>Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
      <DrawerComponent
        isDraweOpen={isDraweOpen}
        toggleDrawerHandler={toggleDrawer}
      />
      asd
    </div>
  );
}
