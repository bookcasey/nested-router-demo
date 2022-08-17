import { useParams } from 'react-router-dom';

function UserProfile() {
    const { userId } = useParams();
    return (
        <div className="col">
            <h2>Profile</h2>
            <p>User #{userId} is the best user. They are a very good user.</p>
        </div>
    )
}

export default UserProfile;