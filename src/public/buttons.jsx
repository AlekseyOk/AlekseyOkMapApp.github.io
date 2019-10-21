import React from 'react';
import './buttons.css';
import Button from '@material-ui/core/Button';

const Buttons = ({ endpoint, changeCenter }) => (
    <div className='buttonsWrapper'>
       
        {endpoint.map(({ name, coodrs }) => (
            <div className='button' key={name}>
                <Button 
                variant="outlined"
                onClick={()=>{changeCenter(coodrs.split(',').map((item) => Number(item.trim())))}}
                > {name} 
                </Button>
            </div>
        ))}   
        
    </div>
  );

  export default Buttons;