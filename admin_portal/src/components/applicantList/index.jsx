import React, { useEffect, useState } from "react";
import Wrapper from "./style";
import { services } from "../../services";
import noContent from "./not-found.png";

export const ApplicantList = () => {
  const [applicants, setApplicants] = useState([]);
  const [unApproved, setUnApproved] = useState(
    applicants.filter((user) => !user.accepted)
  );

  const approve = (id) => {
    services.user
      .approve(id)
      .then((res) => {
        window.location.reload(false);
      })
      .catch(console.log);
  };

  useEffect(() => {
    services.user
      .getApplicants()
      .then((res) => {
        setApplicants(res.data);
        setUnApproved(res.data.filter((user) => !user.accepted));
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
          {unApproved.length ? (
            <input type="search" placeholder="Filter" />
          ) : null}

          {unApproved.length ? (
            unApproved.map((user) => (
              <div className="user">
                <div className="initials">
                  {user.name.split(" ")[0][0] + user.name.split(" ")[1][0]}
                </div>
                <div className="info">
                  <h2>{user.name}</h2>
                  <p>{user.address}</p>
                </div>
                {!user.accepted && (
                  <input
                    type="button"
                    value="Approve"
                    onClick={(e) => approve(user.id)}
                  />
                )}
              </div>
            ))
          ) : (
            <img className="placeholder" src={noContent} alt="No Content" />
          )}
        </div>
      </Wrapper>
    </>
  );
};
