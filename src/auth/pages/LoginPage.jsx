import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../index.js";

export const LoginPage = () => {
    const navigate=useNavigate();
    const {login}  = useContext(AuthContext);
   const onLogin = () => {
        login('Fernando Herrera');
        const lastPath=localStorage.getItem('lastPath') || '/';
        navigate(lastPath, {replace: true});
    }
    return (
        <>
            <h1>LoginPage</h1>
            <hr/>
          <div className="container mt-5">
              <button onClick={onLogin} className="btn btn-primary" >Login</button>

          </div>
        </>
    )
}
