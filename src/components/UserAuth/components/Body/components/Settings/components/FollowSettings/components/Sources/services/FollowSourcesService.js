class FollowSourcesService {

    hashtags = ["happy", "sad", "something", "words", "books", "lol"];

    getHashtags(){
        return this.hashtags;
    }

    deleteHashtag(hashtagName){
        this.hashtags = this.hashtags.filter((value)=>{
            if(value !== hashtagName){
                return value;
            }
        });

        console.log(this.hashtags);
    }

}

export default new FollowSourcesService();