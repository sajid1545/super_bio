import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Gamer from './Components/Gamer/Gamer';
import Navbar from './Components/Navbar/Navbar';
import SecondBanner from './Components/SecondBanner/SecondBanner';
import UseIt from './Components/UseIt/UseIt';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<SecondBanner />
			<UseIt />
			<About />
			<Gamer />
		</div>
	);
}

export default App;
