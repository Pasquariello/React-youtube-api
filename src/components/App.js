import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component{
   
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount(){
        // start with default searchTerm
        this.onSearchTermSubmit('birds');
    }

    onSearchTermSubmit = async term => {
       const response = await youtube.get(`/search/`, {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
        console.log(this.state.videos)
        
    }

    onVideoSelect = (video) =>{
        console.log('From the App:', video)
        this.setState({selectedVideo: video})
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;