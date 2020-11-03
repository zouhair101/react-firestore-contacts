import React,{Component} from 'react';
import './App.css';
import firebase from '../firebase';
import Grid from './Grid';
import Form from './Form';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts : []
    };
  }
  // updateData(){
  //   // init db
  //   const db = firebase.firestore();
  //   const settings = {timestampsInSnapshots: true};
  //   db.settings(settings);
  //   // select from db
  //   db.collection('contacts').get() // get la collection contacts
  //  .then( (snapshot) => {
  //    let contacts = [];
  //    snapshot.forEach( (doc) => {
  //      let contact = Object.assign({id: doc.id}, doc.data); // doc contient data
  //      contacts.push(contact);
  //    });
  //    // change state
  //    this.setState({
  //      contacts : contacts
  //    })
  //  }  )
  //   .catch(err => console.log('Erreur !',err));
  // }
  updateData() {
    const db = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);
  
    db.collection('contacts').get()
      .then((snapshot) => {
        let contacts = [];
        snapshot.forEach((doc) => {
          let contact = Object.assign({id: doc.id }, doc.data());
          contacts.push(contact);
        });
        this.setState({
          contacts: contacts
        });
      })
      .catch((err) => {
        console.log('Erreur!', err);
      });
    } 
  
  deleteData(docID){
    // init db
    const db = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);
    // delete data
    db.collection('contacts').doc(docID).delete();
     // update data
     this.updateData();
  }

  componentWillMount(){
    this.updateData();
    console.log("willMountttttttttttttttttttttttttttt")
  }

  render(){
    console.log("renderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    return (
      <div>
          <div className="navbar-fixed">
            <nav className="blue-lighten-2">
                <div className="nav-wrapper">
                  <a href="/" className="brand-logo center"> Contacts</a>
                </div>
            </nav>
          </div>
          <div>
            <Form  updateData={this.updateData.bind(this)} />
            <Grid items={this.state.contacts} deleteData={this.deleteData.bind(this)} />
          </div>
      </div>
    );
  }
}

export default App;
