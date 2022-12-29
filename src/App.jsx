import './App.css';
import Banner from './Components/Banner/Banner';
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
		</div>
	);
}

export default App;
