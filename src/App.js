import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
	return (
		<div className="App">
			<header>
				<Header name={'Victor'} />
			</header>
			<nav>
				<Sidebar />
			</nav>
			<main>
				<Home />
			</main>
		</div>
	);
}

export default App;
