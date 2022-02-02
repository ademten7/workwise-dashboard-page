import React, { useContext } from "react";
import { MyContext } from "../../Context/context";
import "./home.scss";

const Home = () => {
  const { jobOffers } = useContext(MyContext);
  return (
    <div className="container">
      <h1>
        Finde genau den richtigen Job.
        <br /> Was suchst du?
        <div className="offers">
          {jobOffers.map((offer,index) => {
            return (
              <div key={index} className="offer">
                <p>{offer}</p>
              </div>
            );
          })}
        </div>
      </h1>
    </div>
  );
};

export default Home;
