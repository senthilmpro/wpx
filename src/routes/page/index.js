import { h } from 'preact';
import { useEffect, useState } from "preact/hooks";
import style from './style.css';
import axios from 'axios';
import { route } from 'preact-router';
import parser from '../../services/parse-util';

// Note: `user` comes from the URL, courtesy of our router
const Page = ({ page }) => {
	const [posts, setPosts] = useState([]);

	const getPagePosts = async () => {
		let pageNumber = parseInt(page) || 1;
		let url = `https://public-api.wordpress.com/rest/v1.1/sites/archive1x.wordpress.com/posts?number=10&page=${pageNumber}&fields=title,content`;
		let data = await axios.get(url).then(res => res.data);
		if (data) {
			let posts = data.posts;
			posts = parser.parseContent(posts);
			console.log("POSTS: ", posts)
			setPosts(posts);
		}
	}

	const goToNextPage = () => {
		let newPageNumber = parseInt(page) + 1;
		route(`/page/${newPageNumber}`);
	}

	const goToPreviousPage = () => {
		if (page > 1) {
			let newPageNumber = parseInt(page) - 1;
			route(`/page/${newPageNumber}`);
		}
	}

	useEffect(() => {
		getPagePosts();
	}, [page]);

	return (
		<div class="container">
			<div class={style.LinkItemsContainer}>
				{
					posts && posts.map(x => <div class={style.LinkItem}>
						<span class={style.dot}></span>
						<a href={x.url} target="_blank">
							{x.title}
						</a>
					</div>)
				}
			</div>
			<div class={style.BtnContainer}>
				<button class="btn btn-primary" onClick={goToPreviousPage}>Previous</button>
				<button class="btn btn-primary" onClick={goToNextPage}>Next</button>
			</div>
		</div>
	);
}

export default Page;
