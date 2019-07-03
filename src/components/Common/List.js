import React from 'react';
import {Link} from 'react-router-dom'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse'

// Constants
import typo from '../../constants/dictionaries'

const useStyles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    color: theme.palette.primary.main
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    color: theme.palette.primary.main
  },
  itemIcon: {

  }
});

class CustomizeList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user_list: false,
      decentralization_list: false,
      categories_list: false,
      business_list: false,
    }
  }
  handleClick = (type) =>  {
    switch (type) {
      case "user":
        this.setState((prev) => ({user_list: !prev.user_list}));
        break;
      case "decentralization":
        this.setState((prev) => ({decentralization_list: !prev.decentralization_list}));
        break;
      case "categories":
        this.setState((prev) => ({categories_list: !prev.categories_list}));
        break;
      case "business":
        this.setState((prev) => ({business_list: !prev.business_list}));
        break;
      default:
        return;
    }
  };
  render() {
    const {user_list, decentralization_list, categories_list, business_list} = this.state;
    const {classes} = this.props;

    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={() => this.handleClick('user')}>
          <ListItemIcon>
            <SendIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary={typo.drawer_user}/>
          {user_list ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={user_list} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to='/user/account'>
              <ListItemText primary={typo.drawer_user_account} />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/user'>
              <ListItemText primary={typo.drawer_user_info} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => this.handleClick('decentralization')}>
          <ListItemIcon>
            <DraftsIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary={typo.drawer_decentralization}/>
          {decentralization_list ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={decentralization_list} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to='/decentralize/application'>
              <ListItemText primary={typo.drawer_decentralization_application} />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/decentralize/user'>
              <ListItemText primary={typo.drawer_decentralization_user} />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/decentralize/user-management'>
              <ListItemText primary={typo.drawer_decentralization_user_management} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary={typo.drawer_application} />
        </ListItem>
        <ListItem button onClick={() => this.handleClick('categories')}>
          <ListItemIcon>
            <InboxIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary={typo.drawer_categories} />
          {categories_list ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={categories_list} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to='/categories/dbn'>
              <ListItemText primary={typo.drawer_categories_bdn} />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/categories/cqql'>
              <ListItemText primary={typo.drawer_categories_cqql} />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/categories/cqql'>
              <ListItemText primary={typo.drawer_categories_csdlkg} />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/categories/csdltt'>
              <ListItemText primary={typo.drawer_categories_csdltt} />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/categories/dvhc'>
              <ListItemText primary={typo.drawer_categories_dvhc} />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/categories/fpt'>
              <ListItemText primary={typo.drawer_categories_ftp} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => this.handleClick('business')}>
          <ListItemIcon>
            <InboxIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary={typo.drawer_business} />
          {business_list ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={business_list} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={Link} to='/business/license'>
              <ListItemText primary={typo.drawer_business_license} />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/business/management'>
              <ListItemText primary={typo.drawer_business_management} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary={typo.drawer_log} />
        </ListItem>
      </List>
    );
  }
}

export default withStyles(useStyles)(CustomizeList)
