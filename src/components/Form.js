import React, { Component } from 'react'
import firebase from '../firebase'

export default class Form extends Component {

    updateData(){
        this.props.updateData();
    }
    addContact = (e) => {
        e.preventDefault();

     
        let newContact = {
            prenom: e.target.prenom.value,
            nom: e.target.nom.value,
            email: e.target.email.value,
            compagnie: e.target.compagnie.value,
            notes: e.target.notes.value,
        }
        console.log(newContact);

         // init db
        const db = firebase.firestore();
        const settings = {timestampsInSnapshots: true};
        db.settings(settings);
        // store data
        db.collection('contacts').add(newContact);
        // reset formulaire
        document.getElementById("addContact").reset();
        // update data
        this.updateData();


    }

    render() {
        return (
            <div className="row">
                <form className="col s12" id="addContact" onSubmit={this.addContact.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input  id="prenom" type="text" className="validate" />
                            <label htmlFor="prenom">Prenom</label>
                        </div>
                        <div className="input-field col s6">
                            <input  id="nom" type="text" className="validate" />
                            <label htmlFor="nom">nom</label>
                        </div>
                    </div>
                    <div className="row">
                            <div className="input-field col s6">
                                 <input  id="email" type="text" className="validate" />
                                 <label htmlFor="email">email</label>
                             </div>
                            <div className="input-field col s6">
                                <input  id="compagnie" type="text" className="validate" />
                                <label htmlFor="compagnie">compagnie</label>
                            </div>
                    </div>
                    <div className="row">
                            <div className="input-field col s8">
                                 <input  id="notes" type="text" className="validate" />
                                 <label htmlFor="notes">notes</label>
                            </div>
                            <div className="input-field col s4">
                                    <button className="btn waves-effect waves-light" name="action" type="submit">
                                        Ajouter 
                                    </button>
                            </div>
                    </div>
                </form>
            </div>

        )
    }
}
