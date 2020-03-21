import React from 'react';

class ComingUp extends React.Component {
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
                {
                    shows.map(show => {
                        return <p>{show}</p>
                    })
                }
            </div>
        ); 
    }
    
}

export default ComingUp;