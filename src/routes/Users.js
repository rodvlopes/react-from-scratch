import React, { Fragment } from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

export default function Users () {
  const route = useRouteMatch()
  console.log(route.path, route.url)

  return (
    <Fragment>
      <h2>Users</h2>
      <Link to={`${route.url}/rodrigo`}>Rodrigo</Link>,&nbsp;
      <Link to={`${route.url}/lopes`}>Lopes</Link>

      <Switch>
        <Route path={`${route.path}/:userId`}>
          <User />
        </Route>
        <Route path={route.path}>
          <p>Select a User</p>
        </Route>
      </Switch>
    </Fragment>
  )
}

function User () {
  const { userId } = useParams()
  return <h3>Hi {userId}</h3>
}
