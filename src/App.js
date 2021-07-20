import Navbar from './Navbar';
import SearchBar from './SearchBar'
import Home from './Home';
import Mod from './Mod';
import Tutorial from './tutorial';
import Bottom from './Bottom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
	<Router>
    <div className="App">
      <Navbar />
	  <SearchBar />
      <div className="content">
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/mod">
				<Mod />
			</Route>
			<Route path="/tutorial">
				<Tutorial />
			</Route>
		</Switch>
      </div>
	  <Bottom />
    </div>
	</Router>
  );
}

export default App;
