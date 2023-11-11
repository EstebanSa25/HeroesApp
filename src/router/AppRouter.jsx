import { Route, Routes} from "react-router-dom"
import {AuthContext, LoginPage} from "../auth";
import {HeroesRoutes} from "../heroes";
import {useContext} from "react";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {PublicRoute} from "./PublicRoute.jsx";


export const AppRouter = () => {
    const {logged}  = useContext(AuthContext);
    return (
        <>
            <Routes>
                <Route path="login/*" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }></Route>
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
                {/*<Route path="login" element={<LoginPage />} />*/}
            </Routes>
        </>
    )
}
