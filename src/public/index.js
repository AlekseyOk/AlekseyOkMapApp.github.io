import React from 'react';
import  MapYandex  from './MapYandex.jsx';
import  Buttons  from './buttons.jsx';
import './index.css';

class App extends React.Component {

  constructor() {
    super();
    this.timerId = null;
  }
  
  state = {
    coodrs: '',
    data: []
  }

  componentDidMount() {
        fetch('http://localhost:3000/endpoint.json')
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.setState({ data: data })
          })
            
    this.timerId = setInterval(()=> {
        fetch('http://localhost:3000/endpoint.json')
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.setState({ data: data })
          })
    }, 3000);
  }

  componentWillUnmount() {
     clearInterval(this.timerId)
  }

  changeCenter = (coordinates) => {
    this.setState({
      coodrs: coordinates,
    })
  }
  
  render() {
    const { coodrs, data } = this.state
    
    return (
      <div className="App">
        <MapYandex endpoint={data} coodrs = {coodrs} />
        <Buttons endpoint={data} changeCenter = {this.changeCenter}/>
      </div>
    );
  }
}

export default App;