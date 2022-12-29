import { Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Gallery from '../routes/gallery';
import Post from '../routes/post';
import About from '../routes/about';
import Contact from '../routes/contact';
import ContactSuccess from '../routes/contact-success';
import NotFoundPage from '../routes/notfound';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](https://github.com/preactjs/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	handleRoute = e => {
		this.currentUrl = e.url;
		if (e.url.includes('?fbclid=')) {
			const newUrl = e.url.split('?fbclid=')[0];
			window.location
				.replace(newUrl);
		}
	};
	
	render(props) {
		return (
			<Provider value={props}>
				<div id="app">
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Gallery path="/gallery/" />
						<Post path="/gallery/:slug/" />
						<Contact path="/contact/" />
						<About path="/about/" />
						<ContactSuccess path="/contact/success/" />
						<NotFoundPage type="404" default />
					</Router>
				</div>
			</Provider>
		);
	}
}
