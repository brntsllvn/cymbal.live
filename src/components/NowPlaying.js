import React from 'react';

class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: props.name}
    }
    
    render () {
        return (
            <h1>Now playing: {this.state.name}</h1>
        ); 
    }
    
}

export default NowPlaying;