import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from './components/Home/Home';

function App() {
	return (
		<div className="App">
			<Sidebar />
			<Home />
		</div>
	);
}

export default App;
