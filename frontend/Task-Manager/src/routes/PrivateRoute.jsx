import { Outlet } from 'react-router-dom'

const PrivateRoute = ({ allowedRoles }) => {
    console.log(allowedRoles)
    return <Outlet />
}
export default PrivateRoute
