import React, { Component } from 'react'
import  Single from './Single'

export default class Grid extends Component {

    renderList() {
        return this.props.items.map((item,i) => (
            <Single key={i} item={item} />
        ));
    }



    render() {
        return (
            <div>
                <div className="row">
                        <ul>
                            {this.renderList()}
                        </ul>
                </div>    
            </div>
        )
    }
}
