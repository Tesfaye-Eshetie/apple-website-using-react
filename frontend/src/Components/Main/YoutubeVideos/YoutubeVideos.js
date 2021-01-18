import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./YoutubeVideos.css"

function YoutubeVideos() {

    const [videos, setVideos] = useState([])

    useEffect(()=>{
        axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDxZHC-_0fFeRHF9abSX1KBwvaE1dVGRHI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6")
        .then(response=>{
            console.log(response)
            setVideos(response.data.items)
        })
        .catch(error=>{
            console.log(error)
        })
    
        },[])
    
    return (
        <div className="allVideosWrapper">
				<div className="container">
					<div className="row justify-content-center text-center"> 
						<div className="col-12">
							<div className="title-wraper">
								<h2>Latest Six Videos of Apple from Youtube </h2> <br/><br/>
							</div>
						</div> 
						 {
							videos.map((singleVideo, i) => {
								let vidId = singleVideo.id.videoId; 
								let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
								let videoWrapper =
								<div key={i} className="col-sm-12 col-md-6 col-lg-4">
									<div className="singleVideoWrapper">
										<div className="videoThumbnail">
											<a href={vidLink} target="_blank">
												<img src={singleVideo.snippet.thumbnails.high.url} alt="/"/>
											</a>
										</div>
										<div className="videoInfoWrapper">
											<div className="videoTitle"><a href={vidLink} target="_blank">{singleVideo.snippet.title}</a></div>			
											<div className="videoDesc">{singleVideo.snippet.description}</div>
										</div>
									</div>
								</div>;
								return videoWrapper; 
							})
						}
						
					</div>
				</div>
			</div>

		);
    }


export default YoutubeVideos
