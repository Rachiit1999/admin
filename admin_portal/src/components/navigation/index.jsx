import React from "react";
import Wrapper from "./style";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Wrapper>
      <div className="inner">
        <ul>
          <li>
            <Link to="/">Applicant</Link>
          </li>
          <li>
            <Link to="/registered">Registered</Link>
          </li>
          <li>
            <Link>Volunteer</Link>
          </li>
          <li>
            <Link>Accepted</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
