import React from 'react';

const VideoDetail = ({video}) =>{
	if(!video){
		return <div>Loading</div>;
	}
	
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}?modestbranding=0&rel=0&showinfo=0&playsinline=1`;
	
	return (
		<div className='video-detail col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url} allowFullScreen></iframe>
			</div>
			
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;