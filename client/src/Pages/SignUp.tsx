import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

type credentialsType = {
  email: string;
  password: string;
};

function SignUp() {
  const [credentials, setCredentials] = useState<credentialsType>(
    {} as credentialsType
  );
  const handleSignupForm = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", typeof e.target.value);
    console.log("e.target.name", typeof e.target.name);

    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("credentials", credentials);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", credentials.email);
    urlencoded.append("password", credentials.password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(
      "http://localhost:5049/api/user/register",
      requestOptions
    );
    const result = await response.json();
    console.log("result", result);
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
