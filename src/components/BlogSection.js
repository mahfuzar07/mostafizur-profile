import React from 'react';
import { blogInfo } from '../data';
function BlogSection() {
	return (
		<div className="blog-area">
			<div className="container">
				<div className="section-title">
					<h1>My Created Video</h1>
				</div>
				<div className="row">
					{blogInfo.map((item, index) => (
						<div className="col-lg-4 col-md-6 single-blog-box" key={index}>
							<div className="blog-image-wrapper">
								<img src={item.image} alt="" />
							</div>
							<div className="blog-info-wrapper">
								<div className="blog-info">
									<span className="blog-author">{item.author}</span>
									<span className="blog-date">{item.time}</span>
								</div>
								<h1 className="blog-title">{item.title}</h1>
								<p className="blog-short-des">{item.des}</p>
								<button className="gradient-button-blog mb-3">See More</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BlogSection;
