import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UserProfile from './UserProfile';
import UserPosts from './UserPosts';
import UserNav from './UserNav';

function User() {
  console.log(useRouteMatch())
  const { path } = useRouteMatch();

  return (
    <>
      <UserNav />

      <Switch>
        <Route path={`${path}/posts`}>
          <UserPosts />
        </Route>

        <Route path={path}>
          <UserProfile />
        </Route>
      </Switch>
    </>
  )
}

export default User;