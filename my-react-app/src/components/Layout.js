import {Link, Outlet} from "react-router-dom";
import Logo from "../Images/Logo.png";
import {useEffect} from "react";

const Layout = (props) => {
    const {isLoggedIn} = props;
    const {userId} = props;



    const handleAccountClick = async(event) => {
        try{
            event.preventDefault();
            const response = await fetch('http://localhost:8080/accounts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({userId}) //must put userId in the request thingy
            });



            const status = response.status;
            const responseJson = await response.json();
            console.log('ResponseJson is', responseJson);
            if(status === 200){
                console.log('firstName: ', responseJson.firstName);
                console.log('lastName: ', responseJson.lastName);
                console.log('address1: ', responseJson.address1);
                console.log('address2: ', responseJson.address2);
                console.log('city: ', responseJson.city);
                console.log('state: ', responseJson.state);
                console.log('zipCode: ', responseJson.zipCode);
                console.log('phoneNumber: ', responseJson.phoneNumber);
                console.log('email: ', responseJson.email);
            }
            else if(status === 204){
                console.log('There is no data for the account with userId', userId);
            }
        } catch(e){
            alert(`Error: ${e.message}`);
        }
    }




    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/"><img src={Logo} style={{width: 30}} alt="logo"/></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            {!isLoggedIn &&
                                <li><Link to="/registration">Register an account</Link></li>
                            }
                            {isLoggedIn &&
                                <li><Link to="/accountFields" onClick={handleAccountClick}>Account</Link></li>
                            }

                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {isLoggedIn &&
                                <li><Link to="/logout">Logout</Link></li>

                            }
                            {!isLoggedIn &&
                                <li>
                                    <Link to="/loginPage" ><span className="glyphicon glyphicon-log-in"></span> Login</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}
export default Layout;