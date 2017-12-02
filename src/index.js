import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC97dT2fXE7rgTzbY5xkHA74xpKfzeXjvU';

class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			videos: [],
			selectedVideo: null,
		};
		
		this.videoSearch('슈퍼윙스');
	}
	
	videoSearch(term){
		const max = 50;
		
		$.ajax({
			url: `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${term}&part=snippet&type=video&maxResults=${max}`,
			success: (videos) =>{
				this.setState({
					videos: videos.items,
					selectedVideo: videos.items[0]
				});
			}
		});
	}
	
	render(){
		const videoSearch = _.debounce((term) =>{
			console.log(term);
			this.videoSearch(term)
		}, 300);
		
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				
				<VideoDetail video={this.state.selectedVideo}/>
				
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));