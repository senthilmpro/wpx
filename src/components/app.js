import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Page from '../routes/page';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Page path="/page/:page" />
		</Router>
	</div>
)

export default App;
