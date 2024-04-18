import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginForm(props) {
    const {setIsLoggedIn} = props;
    const navigate = useNavigate();
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setIsLoggedIn(true);
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userName: userName, password: password})
            });
            const status = response.status;
            const responseJson = await response.json();
            console.log('responseJson', responseJson);
            if (status === 200) {
                navigate('/');
            } else {
                alert('Incorrect credentials');
            }

        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    }

        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <h1 className="col-md-12 text-center">Login</h1>
                        <div className="col-md-3"></div>
                        <form method="POST" className="col-md-6" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={userName}
                                    id="username"
                                    onChange={(e)=>setUserName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="pwd" value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                />
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox"/> Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                            <button type="reset" className="btn btn-default">Reset</button>
                        </form>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </>
        );
}

export default LoginForm;