import React from "react";
import Wrapper from "./style";
import "../../main.css";
import { Link, useNavigate } from "react-router-dom";
import { services } from "../../services";

export const Header = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();

  const logout = (_) => {
    services.storage.clear();
    setLoggedInUser(null);
    navigate("/");
  };
  return (
    <Wrapper>
      <div className="inner">
        <h1>Marathon 2K23</h1>
        <input
          type="button"
          onClick={logout}
          value={
            loggedInUser?.name?.split(" ")[0][0] +
            loggedInUser?.name?.split(" ")[1][0]
          }
        />
      </div>
    </Wrapper>
  );
};
