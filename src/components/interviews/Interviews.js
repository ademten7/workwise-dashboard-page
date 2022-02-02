import React, { useContext } from "react";
import { MyContext } from "../../Context/context";
import "./interviews.scss";

const Interviews = () => {
  const { interviews, setInterviews } = useContext(MyContext);
  console.log(interviews);
  return (
    <div className="interviews-container">
      <h1>Vorstellungsgespräch</h1>
      {interviews.map((application, index) => {
        return (
          <div className="interviews" key={index}>
            <h3>{application.firma_name}</h3>
            <h6>{application.berufsbezeichnung}</h6>
            <p>{application.status}</p>
            <div className="buttons-applications">
              <button type="button" class="btn btn-primary">
                Akzeptieren
              </button>
              <button type="button" class="btn btn-danger">
                Löschen
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Interviews;
