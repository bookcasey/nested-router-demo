import { useParams, useRouteMatch, NavLink } from "react-router-dom";

function UserNav() {
	const { userId } = useParams();
	const { url } = useRouteMatch();

	return (
		<>
			<div className='container'>
				<h1>User {userId}</h1>

				<ul className="nav nav-tabs">
					<li className="nav-item">
						<NavLink to={url} exact className='nav-link'>
							Profile
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to={`${url}/posts`} className='nav-link'>
							Posts
						</NavLink>
					</li>
				</ul>
			</div>
		</>)
}

export default UserNav;