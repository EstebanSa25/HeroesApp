import {AuthContext} from "./AuthContext.jsx";
import {useReducer} from "react";
import {AuthReducer} from "./AuthReducer.js";
import {types} from "../types/types.js";
const init =() => {
    const user = JSON.parse(localStorage.getItem('user'));
    return{
        logged: !!user,
        user,
    }
}
export const AuthProvider = ({children}) => {
    const [authState,dispatch] = useReducer(AuthReducer, {},init);
    const login = (name='') => {
        const user={
            id:'ABC',
                name
        }
        const action={
            type:types.login,
            user
        }
        localStorage.setItem('user',JSON.stringify(user));
        dispatch(action);
    };

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({
            type:types.logout
        });
    };
    return (
        <AuthContext.Provider value={{
            ...authState,
            login:login
            ,logout:logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}
