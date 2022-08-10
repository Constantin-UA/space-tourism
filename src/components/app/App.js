import Home from '../home/Home';
import Destination from '../destination/Destination';
import NavigateMenu from '../navigateMenu/NavigateMenu';
import { Component } from 'react';
class App extends Component {
	state = {
		select: 0,
		pages: [<Home />, <Destination />, <Home />, <Home />],
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
}

export default App;
