import { useParams, NavLink } from "react-router-dom";

function UserNav() {
	const { userId } = useParams();
	return (
		<>
			<div className='container'>
				<h1>User {userId}</h1>

				<ul className="nav nav-tabs">
					<li className="nav-item">
						<NavLink to={`/users/${userId}`} exact className='nav-link'>
							Profile
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={`/users/${userId}/posts`} className='nav-link'>
							Posts
						</NavLink>
					</li>
				</ul>
			</div>
		</>)
}

export default UserNav;