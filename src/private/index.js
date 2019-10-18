import React from "react";
import { withAuth } from "../auth";
import { Redirect } from "react-router-dom";
import { Button } from '@material-ui/core';
import './index.css';


export default withAuth(({ noAuthorize, isAuthorized }) => (

     isAuthorized ? (
           <div className="privatePage">
              <h1 className="heading">Private page</h1>
              <Button variant="outlined" onClick={noAuthorize}>LOGOUT</Button>
          </div>
        ) : (
        <Redirect to="/Login"/>
        )
  ));