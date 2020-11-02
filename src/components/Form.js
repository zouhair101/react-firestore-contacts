import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div class="row">
                <form class="col s12" id="addContact">
                    <div class="row">
                        <div class="input-field col s6">
                            <input  id="prenom" type="text" class="validate" />
                            <label htmlFor="prenom">Prenom</label>
                        </div>
                        <div class="input-field col s6">
                            <input  id="nom" type="text" class="validate" />
                            <label htmlFor="nom">nom</label>
                        </div>
                    </div>
                    <div class="row">
                            <div class="input-field col s6">
                                 <input  id="email" type="text" class="validate" />
                                 <label htmlFor="email">email</label>
                             </div>
                            <div class="input-field col s6">
                                <input  id="compagnie" type="text" class="validate" />
                                <label htmlFor="compagnie">compagnie</label>
                            </div>
                    </div>
                    <div class="row">
                            <div class="input-field col s8">
                                 <input  id="notes" type="text" class="validate" />
                                 <label htmlFor="notes">notes</label>
                            </div>
                            <div class="input-field col s4">
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
