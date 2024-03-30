import {Link, Outlet} from "react-router-dom";

const Layout = () => {
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
                        <a className="navbar-brand" href="./HomePage.html"><img src="../Logo.png" style="width:30px;"
                                                                                alt="logo"/></a> <!-- Link the homepage where the hashtag is -->
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="./HomePage.html">Home</a></li>
                            <li><a href="./Registration.html">Register an account</a></li>
                            <li><a href="./AccountFields.html">Account</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="./LoginPage.html"><span
                                className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}