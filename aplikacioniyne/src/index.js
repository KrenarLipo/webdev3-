import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = "Active";
  }

  render(){
    return(
      <div>
      <h2> Hello</h2>
      <h2>Eshte {this.state}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />, <Clock/>,
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
