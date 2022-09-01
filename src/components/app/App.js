import Home from '../home/Home';
import Destination from '../destination/Destination';
import Crew from '../crew/Crew';
import Technology from '../technology/Technology';
import NavigateMenu from '../navigateMenu/NavigateMenu';
import data from '../../data.json';
import { useState } from 'react';

function App() {
	const [selectPage, setSelectPage] = useState(0);
	const onPageSelected = (id) => setSelectPage(id);
	const pages = [
		<Home onPageSelected={onPageSelected} />,
		<Destination data={data} />,
		<Crew data={data} />,
		<Technology data={data} />,
	];
	return (
		<div className="app">
			<NavigateMenu onPageSelected={onPageSelected} />
			{pages[selectPage]}
		</div>
	);
}

export default App;
