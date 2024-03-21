import React from "react";
import { Link } from "react-router-dom";
type Props = {};

function SignIn({}: Props) {
  return (
    <>
      <h3>Sign In</h3>
      <p>
        No account? <Link to="/signup">sign up</Link> instead
      </p>
    </>
  );
}

export default SignIn;
