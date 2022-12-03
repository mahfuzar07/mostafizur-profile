import React from 'react';
import Quote from '../components/Quote';
import RightNav from '../components/RightNav';
import Video from '../components/Video';
import Audio from '../components/Audio';
function Home() {
	return (
		<div className="content-area">
			<div className="container">
				<div className="main-content">
					<div className="content-wrapper">
						<div className="content">
							<h1>Why You Should Forget the Past?</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, consectetur! Aspernatur, officiis dolor mollitia
								laboriosam hic assumenda iure quasi, a recusandae, delectus error libero! Maxime, ratione. Corporis porro deleniti,
								dolorum asperiores eum amet tempore laboriosam, rerum dignissimos nam perspiciatis nemo.
							</p>

							<h1>Why the Last Cookie in the Jar Makes Your Mouth Water?</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore deleniti corporis rem sapiente, quidem
								assumenda, soluta vitae ad ex maiores. Natus dolore laudantium minima! Optio eos vero maxime aspernatur distinctio,
								odio sit, quis tenetur cupiditate voluptatum voluptates ab ut veritatis expedita tempore accusamus similique quas!
								Adipisci laboriosam nemo eveniet, magni sed id excepturi eius omnis cupiditate unde mollitia voluptatum iusto
								consequatur accusantium provident culpa, libero eaque impedit eum facere molestiae. Cum similique velit ipsam eveniet
								odit commodi earum repudiandae?
							</p>

							<h1>Don't Accept Free Drinks</h1>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore voluptas unde nobis, cumque nulla ipsa maxime
								excepturi possimus at porro eligendi, architecto repudiandae? Ab minima, alias quaerat rerum nihil consequatur
								molestias ad sed laudantium dolorem quia, eos quisquam blanditiis nostrum. Quia repellendus nesciunt alias tempore?
							</p>
						</div>
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
