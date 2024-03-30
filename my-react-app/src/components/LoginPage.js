
function LoginForm(props) {

    const {isLoggedIn} = props;
    const {setIsLoggedIn} = props;
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
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
                                <input type="text" className="form-control" name="username" id="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input type="password" className="form-control" id="pwd"/>
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