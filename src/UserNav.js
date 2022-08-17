import { useParams, NavLink } from "react-router-dom";

function UserNav() {
    const { userId } = useParams();
    return (
        <>
            <div className='container'>
                <h1>User {userId}</h1>

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink exact className='nav-link' to={`/users/${userId}`}>Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to={`/users/${userId}/posts`}>Posts</NavLink>
                    </li>
                </ul>
            </div>
        </>)
}

export default UserNav;