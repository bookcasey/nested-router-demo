import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Users() {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function getUsers() {
			// TODO: add AbortController and error handling
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();
			setUsers(data);
		}
		getUsers();
	}, [])

	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}

			</ul>
		</div>
	)
}

export default Users;