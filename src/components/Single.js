import React from 'react';

const Single = (props) => {
    return ( 
        <li className="col s12 l6">
            <div className="card">
                <div className="card-image">
                    <img src="./portrait.jpg" alt={props.item.title}/>
                    <span className="card-title">{props.item.prenom} {props.item.nom} - {props.item.compagnie}</span>
                </div>
                <div className="card-content">
                    <span className="card-title">{props.item.email}</span>
                    <div className="row">
                        <div className="col l6 center">
                            <blockquote><h5>{props.item.notes}</h5></blockquote>
                        </div>
                    </div>
                </div>
                <div className="card-action">
                    <button className="waves-effect waves-light btn red darken-4">Supprimer</button>
                </div>
            </div>
        </li>
     );
}
 
export default Single;
