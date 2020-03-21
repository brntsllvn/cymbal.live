import React from 'react';
import NowPlaying from './NowPlaying';
import ComingUp from './ComingUp';

class ShowContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    _getUpcomingShows() {
        return ["hi","bye","moo"]
    }

    render () {
        const shows = this._getUpcomingShows();
        return (
            <div>
                <NowPlaying />
                <ComingUp />
            </div>
        ); 
    }
    
}

export default ShowContainer;