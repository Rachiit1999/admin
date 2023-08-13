import React, { useEffect, useState } from "react";
import Wrapper from "../applicantList/style";
import { services } from "../../services";

export const RegisteredList = () => {
  const [applicants, setApplicants] = useState([]);
  const [approved, setApproved] = useState(
    applicants.filter((user) => user.accepted)
  );

  useEffect(() => {
    services.user
      .getApplicants()
      .then((res) => {
        setApplicants(res.data);
        setApproved(res.data.filter((user) => user.accepted));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally block");
      });
  }, []);

  return (
    <>
      <Wrapper>
        <div className="inner">
          <h1>Applicant List</h1>
          <input type="search" placeholder="Filter" />
          {approved.map((user) => (
            <div className="user">
              <div className="initials">
                {user.name.split(" ")[0][0] + user.name.split(" ")[1][0]}
              </div>
              <div className="info">
                <h2>{user.name}</h2>
                <p>{user.address}</p>
              </div>
              <input type="button" value="Send" onClick={(e) => {}} />
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};
