import { ChangeEvent, FormEvent, useState } from "react";

type credentialsType = {
  email: string;
  password: string;
};

function SignIn() {
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
    console.log("credentials", credentials);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", credentials.email);
    urlencoded.append("password", credentials.password);
    //   urlencoded.append("credentials", credentials);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    const response = await fetch(
      "http://localhost:5049/api/user/login",
      requestOptions
    );
    const result = await response.json();
    console.log("result", result);
    const { token, _id } = result;
    if (token) {
      console.log("setting token", token);
      localStorage.setItem("token", token);
    }
    if (_id) {
      setCredentials(_id);
    }
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
