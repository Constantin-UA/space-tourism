import Home from '../home/Home';
import Destination from '../destination/Destination';
import Crew from '../crew/Crew';
import Technology from '../technology/Technology';
import NavigateMenu from '../navigateMenu/NavigateMenu';
import data from '../../data.json';
import { Component } from 'react';

function App() {
	return (
		<div className="app">
			<NavigateMenu />
			<Home />
		</div>
	);
}

export default App;

/* class App extends Component {
	state = {
		select: 0,
		pages: [<Home />, <Destination data={data} />, <Crew />, <Technology />],
	};
	onPageSelected = (id) => this.setState({ select: id });
	render() {
		let { select, pages } = this.state;
		return (
			<div className="App" style={{ position: 'relative' }}>
				<NavigateMenu onPageSelected={this.onPageSelected} />
				{pages[select]}
			</div>
		);
	}
} */
