import React from 'react';
import PropTypes from 'prop-types';

class ComingUp extends React.Component {
    render() {
        const shows = this.props.shows
        return (
            <div>
                <h1>Coming up...</h1>
                {
                    shows.map(show => {
                        return (
                            <p key={show.hashCode}>
                                {show.time} 
                                {show.artist}
                                <a href={show.link} target='_blank'>link</a>
                            </p>
                        )
                    })
                }
            </div>
        );
    }

}

ComingUp.propTypes = {
    shows: PropTypes.any.isRequired
}

export default ComingUp;