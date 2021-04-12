import React, { Component } from 'react';

/* COMPONENTS */
import Source from './components/Source';

/* STYLES */
import './styles.css';

/* SERVICES */
import FollowSourcesService from './services/FollowSourcesService';

class Sources extends Component{

    constructor(props){
        super(props);
        this.state = {
            hashtags : FollowSourcesService.getHashtags()
        };

        this.deleteHashtag = this.deleteHashtag.bind(this);
    }

    deleteHashtag(value){
        console.log(value + "DELETED!");
        FollowSourcesService.deleteHashtag(value); 
        this.setState( {hashtags : FollowSourcesService.getHashtags()} );
    }

    render(){
        const hashtags = this.state.hashtags;

        const hashtagsSourceProps = {elements : hashtags, title: 'Hashtags', 
            deleteElement : (value) => {this.deleteHashtag(value)}};

        return(
            <div className="sources">
                <h1>Fuentes</h1>

                <Source {...hashtagsSourceProps} />
            </div>
        );
    }
}

export default Sources;