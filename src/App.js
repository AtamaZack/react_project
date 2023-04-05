import img1 from './assets/img1.jpg'
import './App.css';

function App() {
	return (
		<div className="App">
			<ul className='navbar'>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Products & Services</a></li>
				<li><a href="#">Contact Us</a></li>
			</ul>
			<img
				src={img1}
				alt="Image 1"
				className='main-img'
			/>
			<p
				className='paragraph1'
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
				molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
				numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
				optio, eaque rerum! Provident similique accusantium nemo autem.
				<br/>
				<br/>
			<hr/>
			</p>
		</div>
	);
}

export default App;
