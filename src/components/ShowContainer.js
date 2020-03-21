import React from 'react';
import NowPlaying from './NowPlaying';
import ComingUp from './ComingUp';

class ShowContainer extends React.Component {    
    _getUpcomingShows() {
        const shows = [
            { 
                'time': 1,
                'artist': 'pedrothelion',
                'link': 'example.com'
            },
            { 
                'time': 2,
                'artist': 'pedrothelion',
                'link': 'example.com'
            },
            { 
                'time': 3,
                'artist': 'pedrothelion',
                'link': 'example.com'
            }

        ]
        return shows
    }

    render () {
        const shows = this._getUpcomingShows();
        return (
            <div>
                <NowPlaying />
                <ComingUp shows={shows} />
            </div>
        ); 
    }
    
}

export default ShowContainer;