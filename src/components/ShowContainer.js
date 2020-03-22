import React from 'react';
import NowPlaying from './NowPlaying';
import ComingUp from './ComingUp';
import ShowFileParser from './ShowFileParser';

class ShowContainer extends React.Component {    
    _getUpcomingShows() {
        const parser = new ShowFileParser();
        const blah = parser.parse();
        
        
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
        const show = shows[1];
        return (
            <div>
                <NowPlaying show={show}/>
                <ComingUp shows={shows} />
            </div>
        ); 
    }
    
}

export default ShowContainer;