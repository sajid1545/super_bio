import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Gamer from './Components/Gamer/Gamer';
import Navbar from './Components/Navbar/Navbar';
import SecondBanner from './Components/SecondBanner/SecondBanner';
import TryForFree from './Components/TryForFree/TryForFree';
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
			<TryForFree />
			<Footer />
		</div>
	);
}

export default App;
