import React from 'react';
import PropTypes from 'prop-types';

class ComingUp extends React.Component {
    render() {
        const shows = this.props.shows
        return (
            <div>
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