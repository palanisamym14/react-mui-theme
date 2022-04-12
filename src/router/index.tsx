
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SignIn from '../pages/signin';
import DashBoard from '../pages/dashboard';
import PrivateRoute from './privateroute';

function AppRouter({ component: Component, ...rest }: any) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute >< DashBoard /> </PrivateRoute>} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
