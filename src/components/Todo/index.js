import React, { Component } from "react";
import TODO_ACTIONS from "../../redux/actions/todoAction";
import { connect } from "react-redux";
import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField,
  Button,
  FormControl
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

class TodoComponent extends Component {
  state = {};

  generate = () => {
    const {todoStore} = this.props;
    return todoStore.items.map(item => (
      <ListItem key={item.id}>
        <ListItemText primary={item.description} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={this.handleDelete}
            value={item.id}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  handleSubmit = event => {
    // console.log(this.state.item);
    this.setState({ item: "" });
    if (this.state.item !== "") {
      // add the item to the store
      this.props.createItem(this.state.item);
    }
    event.preventDefault();
  };

  handleDelete = event => {
    // delete the item from the store
    this.props.deleteItem(event.target.value);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <FormControl>
              <TextField
                label="New Task"
                id="margin-dense"
                value={this.state.item}
                className={classes.textField}
                margin="dense"
                name="item"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl>
              <Button>Add</Button>
            </FormControl>
          </form>
        </div>
        <div>
          <Grid item container justify="space-evenly" alignItems="center">
            <div className={classes.demo}>
              <List dense={false}>{this.generate()}</List>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoStore: state.todoStore
});

const mapDispatchToProps = dispatch => ({
  createItem: todo => dispatch(TODO_ACTIONS.createItem(todo)),
  deleteItem: id => dispatch(TODO_ACTIONS.deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TodoComponent));
