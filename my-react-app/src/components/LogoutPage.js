const LogoutPage = (props) => {
    const { setIsLoggedIn } = props;

    const handleClick = async(event) => {
        event.preventDefault();
        setIsLoggedIn(false);
    }
    return(
        <form>
            <button type="submit" className="btn btn-danger" onSubmit={handleClick}>
                Click Me if You Want to Logout!
            </button>
        </form>
    );
}

export default LogoutPage;