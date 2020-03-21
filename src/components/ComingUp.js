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
                            <p>
                                {
                                    `${show.time}
                                 ${show.artist} 
                                 ${show.link}`
                                }
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