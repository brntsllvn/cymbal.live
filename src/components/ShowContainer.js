import React from 'react';
import NowPlaying from './NowPlaying';
import ComingUp from './ComingUp';
import ShowAPI from './ShowAPI';

class ShowContainer extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            nowPlaying: {},
            shows: []
        }
    }

    async _getUpcomingShows() {
        const api = new ShowAPI();
        const shows = await api.getShows();
        return shows;
    }

    async componentDidMount() {
        const shows = await this._getUpcomingShows(); 
        this.setState({ 
            nowPlaying: shows[0],
            shows: shows,
        })
    }

    render () {
        return (
            <div>
                <NowPlaying show={this.state.nowPlaying}/>
                <ComingUp shows={this.state.shows} />
            </div>
        ); 
    }
    
}

export default ShowContainer;