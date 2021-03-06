import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import baseroute from '../../baseroute';

const Header = () => (
	<header class={style.header}>
		<h1>Wp Archive</h1>
		<nav>
			<Link activeClassName={style.active} href={`${baseroute}/page/1`}>Home</Link>
		</nav>
	</header>
);

export default Header;
