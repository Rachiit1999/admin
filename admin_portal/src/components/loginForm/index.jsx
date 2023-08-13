import React, { useState } from "react";
import Wrapper from "./style";
import { services } from "../../services";

export const LoginForm = ({ setLoggedInUser }) => {
  const [userContact, setUserContact] = useState();
  const [userPassword, setUserPassword] = useState();

  const login = () => {
    services.user
      .login({
        // Payload
        contact: userContact,
        password: userPassword,
      })
      .then((res) => {
        console.log(res.data);
        setLoggedInUser(res.data);
        services.storage.set("LOGGED_IN_USER", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Wrapper>
        <form action="">
          <h1>Login here </h1>
          <input
            type="text"
            placeholder="Contact Number"
            value={userContact}
            onChange={(e) => setUserContact(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <input id="button" type="button" value="Login" onClick={login} />
        </form>
      </Wrapper>
    </>
  );
};
