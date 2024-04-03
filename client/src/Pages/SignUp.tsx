import {ChangeEvent, FormEvent, useContext, useState} from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

type credentialsType = {
  email: string;
  password: string;
};

function SignUp() {
  const {createUser} = useContext(AuthContext)
  const [credentials, setCredentials] = useState<credentialsType>(
    {} as credentialsType
  );
  const handleSignupForm = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(credentials.email,credentials.password)
  };
  return (
    <>
      <h3>Create Account</h3>

      <form onSubmit={submitSignup}>
        <input
          type="text"
          id="name"
          name="email"
          value={credentials.email}
          onChange={handleSignupForm}
        />
        <label htmlFor="">email</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleSignupForm}
        />
        <label htmlFor="password">password</label>
        <button>Create New Account</button>
      </form>
      <p>
        Already got an account? <Link to="/signin">sign in</Link> instead
      </p>
    </>
  );
}

export default SignUp;
