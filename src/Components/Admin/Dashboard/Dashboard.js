import React from 'react';
import {
    Drawer as MIUDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText 
    } from "@material-ui/core"
import { makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
  drawer: {
    width: '160px',
 
  }
})



const Dashboard = (props) => {
  const {history} = props;
  const classes = useStyles();
  const itemsList = [
    {
     text: "Home",
     icon: <HomeIcon/>,
     onClick: () => history.push('/')
    },
    {
     text: "Manage Orders",
     icon: <DashboardIcon/>,
     onClick: () => history.push('/manageOrders')
    },
    {
      text: "Add Service",
      icon: <AddIcon/>,
      onClick: () => history.push('/addService')
    }
  ] 
  return (
      <MIUDrawer variant="permanent" className={classes.drawer}>
     <List style={{backgroundColor:'antiquewhite'}}>
          {itemsList.map((item, index) => {
            const {text, icon, onClick} = item;  
            return(
            <ListItem button key={text} onClick={onClick}>
             { icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          )})}
        </List>
    </MIUDrawer>
  );
};

export default withRouter(Dashboard);