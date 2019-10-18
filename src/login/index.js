import React from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "../auth";
import { addUser } from '../actions/authAction'
import { connect } from "react-redux"
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import "./index.css";


const Forms = withAuth(class extends React.Component {
  state = { 
    name: '',
    password: '',
    error: false
  }

  handleNameChange = (e) => {
    this.setState({ name: e.currentTarget.value })
    this.setState({ error: false })
  }

  handlePasswordChange = (e) => { 
    this.setState({ password: e.currentTarget.value })
    this.setState({ error: false })
  }

  login = () => { 
    const { name, password } = this.state;
    const { authorize, addUser } = this.props;
    if (this.state.name && this.state.password) {
      addUser(name, password); 
      authorize();
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    const { isAuthorized } = this.props;
    const { error } = this.state

    return (
       isAuthorized ? (
            <Redirect to="/Private" />
          ) : (
             <div className="form">
              <FormControl className="inputName">
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" onChange={this.handleNameChange}/>
             </FormControl>
             <div className="inputPassword">
             <FormControl >
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" onChange={this.handlePasswordChange} />
             </FormControl>
             </div>
             { error && <div className="error">Fill in all the fields!</div>}
             <div className="buttonAuthorize" >
               <Button variant="outlined"  onClick={this.login}>Login</Button>
             </div>
            </div>
          )
    )
  }
});

const mapDispatchToProps = dispatch => {
  return {
    addUser: (name, password) => dispatch(addUser(name, password))
  }
}

export default connect( null , mapDispatchToProps)(Forms);