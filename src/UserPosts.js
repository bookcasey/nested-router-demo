import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserPosts() {

	const [posts, setPosts] = useState([]);

	const { userId } = useParams();

	useEffect(() => {
		async function getPosts() {
			// TODO: add AbortController and error handling
			const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
			const data = await response.json();
			setPosts(data);
		}
		getPosts();
	}, [userId]);

	return (
		<div className="col">
			<h2>Posts</h2>
			<ul>
				{posts.map(post => <li key={post.id}>{post.title}</li>)}
			</ul>
		</div>
	)
}

export default UserPosts;