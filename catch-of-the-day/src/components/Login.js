/* eslint-disable react/no-this-in-sfc */
/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store's inventory.</p>
        <button
            type="submit"
            className="github"
            onClick={() => props.authenticate("Github")}
        >
            Log In With GitHub
        </button>
        <button
            type="submit"
            className="twitter"
            onClick={() => props.authenticate("Twitter")}
        >
            Log In With Twitter
        </button>
        <button
            type="submit"
            className="facebook"
            onClick={() => props.authenticate("Facebook")}
        >
            Log In With Facebook
        </button>
    </nav>
);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;
