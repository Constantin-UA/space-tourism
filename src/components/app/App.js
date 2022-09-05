import Home from '../home/Home';
import Destination from '../destination/Destination';
import Crew from '../crew/Crew';
import Technology from '../technology/Technology';
import NavigateMenu from '../navigateMenu/NavigateMenu';
import data from '../../data.json';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<Router>
				<NavigateMenu />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/destination/*" element={<Destination data={data} />} />
						<Route path="/crew" element={<Crew data={data} />} />
						<Route path="/technology" element={<Technology data={data} />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
