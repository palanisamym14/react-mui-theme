import { Navigate } from 'react-router-dom';


function PrivateRoute({ children }: any) {
    const auth = sessionStorage.getItem("token");
    if (!auth) {
        // not logged in so redirect to login page with the return url
        return <Navigate to={{ pathname: '/signin' }} />
    }
    // authorized so return component
    return children;
}

export default PrivateRoute;