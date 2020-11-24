import React from 'react';
import Gallery from './components/Gallery';
import Photo from './components/Photo';
import { Switch, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {history} from './index';

function App() {
	return (
		<ConnectedRouter history={history}>
				<Switch>
					<Route exact path="/" component={Gallery} />
					<Route path="/gallery/:id" component={Photo} />
				</Switch>
		</ConnectedRouter>
	);
}

export default App;
