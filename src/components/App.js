import React,{Component} from 'react';
import './App.css';
import firebase from 'firebase';
import data from '../data.json'
import Grid from './Grid';
import Form from './Form';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {data};
  }

  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyBVMMPnjMBlayMrPUcnDWyl3DFyUrWNV44",
        authDomain: "crm-linkedin2020.firebaseapp.com",
        databaseURL: "https://crm-linkedin2020.firebaseio.com",
        projectId: "crm-linkedin2020",
        storageBucket: "crm-linkedin2020.appspot.com",
        messagingSenderId: "595142768449",
        appId: "1:595142768449:web:310d9b06957859d8abd3c0",
        measurementId: "G-9XMJB3ZP6G"
    })
  }

  render(){
    return (
      <div className="App">
          <div className="navbar-fixed">
            <nav className="blue-lighten-2">
                <div className="nav-wrapper">
                  <a href="/" className="brand-logo center"> Contacts</a>
                </div>
            </nav>
          </div>
          <div>
            <Form />
            <Grid items={this.state.data} />
          </div>
      </div>
    );
  }
}

export default App;
