import { Navigate } from 'react-router-dom';

import { getWithExpiry } from './../util';

function PrivateRoute({ children }: any) {
    const auth = getWithExpiry("token");
    if (!auth) {
        // not logged in so redirect to login page with the return url
        return <Navigate to={{ pathname: '/signin' }} />
    }
    // authorized so return component
    return children;
}

export default PrivateRoute;