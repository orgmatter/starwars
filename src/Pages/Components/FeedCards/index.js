import React, { Component } from 'react';
import Characters from './Characters';
import Planets from './Planets';
import Starships from './Starships';

class FeedCards extends Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div className="feedcards-container">
                <Starships />
                <Planets />
                <Characters />
            </div>
        )
    }
}

export default (FeedCards);