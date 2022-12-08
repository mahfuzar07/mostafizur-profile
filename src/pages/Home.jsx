import React from 'react';
import BlogSection from '../components/BlogSection';
import Quote from '../components/Quote';
import RightNav from '../components/RightNav';
import Video from '../components/Video';
// import Audio from '../components/Audio';
function Home() {
	return (
		<div className="content-area">
			<div className=" container">
				<div className="home-content row">
					<div className="col-lg-10">
						<BlogSection />
					</div>
					<div className="col-lg-2">
						<RightNav />
					</div>
				</div>

				{/* <Audio /> */}
			</div>
			<Video />
			<Quote />
		</div>
	);
}

export default Home;
