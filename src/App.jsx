import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import SecondBanner from './Components/SecondBanner/SecondBanner';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<SecondBanner />
		</div>
	);
}

export default App;
