import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {AuthContext} from "../contexts/AuthContext";

type credentialsType = {
  email: string;
  password: string;
};

function SignIn() {
  const {loginUser} = useContext(AuthContext)
  const [credentials, setCredentials] = useState<credentialsType>(
    {} as credentialsType
  );
  const handleLoginForm = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", typeof e.target.value);
    console.log("e.target.name", typeof e.target.name);
    // if (e.target.value.length < 3) {
    //   console.log("too short");
    // }
    // setCredentials({ ...credentials, [e.target.name]: [e.target.value] });
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(credentials.email,credentials.password)
  };

  return (
    <>
      <h3>Sign In</h3>

      <form onSubmit={submitLogin}>
        <input
          type="text"
          id="name"
          name="email"
          value={credentials.email}
          onChange={handleLoginForm}
        />
        <label htmlFor="">email</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleLoginForm}
        />
        <label htmlFor="password">password</label>
        <button>submit</button>
      </form>
    </>
  );
}

export default SignIn;
