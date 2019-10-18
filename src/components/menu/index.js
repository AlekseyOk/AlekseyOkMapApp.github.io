import React from 'react';
import Button from '@material-ui/core/Button';
import { history } from '../../App.js';
import "./index.css";

export default function SimpleMenu() {

  return (
    <div className="menu">

      <div className="buttonPublicPage"> 
          <Button variant="outlined" onClick={() => history.push('/public')}>
            Public page
          </Button>
      </div>

      <div className="buttonPrivatePage"> 
          <Button variant="outlined" onClick={() => history.push('/private')}>
            Private page
          </Button>
      </div>

    </div>
  );
}
