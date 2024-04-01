import { useState} from "react";
import { useNavigate } from "react-router-dom";
import webDev from '../Images/FullStackWebDevelopment.png';
function RegistrationForm(){
    const [userName, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [rePass, setRePass] = useState("");
    const navigate = useNavigate();

    const handleRegistration = async (event) =>{
        event.preventDefault()
        console.log("userName: ", userName);
        console.log("pass: ", pass);
        console.log("rePass", rePass);
        navigate('/loginPage')

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12" id="title">
                        <h1 className="text-center">Registration Form</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <img src={webDev} className="img-fluid" style={{width: "70%"}} alt="Logo: Leroy's Favorite"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div
                    className="row">
                    <div className="col-md-3"></div>
                    <form method="GET" className="col-md-6" onSubmit={handleRegistration}>

                        <div className="form-group" id="userGroup">
                            <label className="form-control text-center" htmlFor="username">Username: </label>
                            <input
                                className="form-control text-center"
                                id="username"
                                type="text"
                                name="username"
                                value={userName}
                                placeholder="johndoe1234"
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </div>

                        <div id="passgroup">
                            <label htmlFor="password" className="form-control text-center">Password: </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control text-center"
                                name="password"
                                value={pass}
                                onChange={(e)=>setPass(e.target.value)}
                            />
                        </div>

                        <div id="retypegroup">
                            <label className="form-control text-center" htmlFor="retype">Retype Password: </label>
                            <input
                                className="form-control text-center"
                                id="retype"
                                name="retype"
                                value={rePass}
                                onChange={(e)=>setRePass(e.target.value)}
                            />
                        </div>

                        <button type="submit" id="submitBtn" className="btn btn-success btn-default">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RegistrationForm;