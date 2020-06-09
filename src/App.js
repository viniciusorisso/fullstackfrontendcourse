import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Routes from './routes';

export default class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </div>
    )
  }
}
