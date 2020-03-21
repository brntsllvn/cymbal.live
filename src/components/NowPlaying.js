import React from 'react';
import PropTypes from 'prop-types';

class NowPlaying extends React.Component {    
    render () {
        const show = this.props.show
        return (
            <h1>{
                    `LIVE: ${show.artist}`
                }
            </h1>
        ); 
    }
    
}

NowPlaying.propTypes = {
    show: PropTypes.any.isRequired
}

export default NowPlaying;