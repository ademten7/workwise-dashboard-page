import React, { useContext } from "react";
import { MyContext } from "../../Context/context";
import "./applications.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Applications = () => {
  const { applications, setApplications } = useContext(MyContext);
  const { interviews, setInterviews } = useContext(MyContext);

  console.log(applications);

  const addToInterviews = (id) => {
    let newApplicationAfterAdded = applications.map((item) => {
      if (item.id === id) {
        item.interview = !item.interview;
        return item;
      } else {
        return item;
      }
    });
    setApplications(newApplicationAfterAdded);
    console.log(applications);

    let updatedApplications = applications.filter((application) => {
      if (application.interview) {
        setInterviews([...interviews, application]);
      }
      return application.interview === false;
    });
    setApplications(updatedApplications);
  };

  const deleteApplication = (id) => {
    let newApplicationAfterDelete = applications.filter(
      (application) => application.id !== id
    );
    console.log(newApplicationAfterDelete);
    setApplications(newApplicationAfterDelete);
  };
  return (
    <div className="applications-container">
      <h1>Bewerbungen</h1>
      <Link to="createapplication">
        <i className="add-icon">
          <AiFillPlusCircle />
        </i>
      </Link>
      <div className="dashboard">
        {applications.map((application, index) => {
          return (
            <div className="applications" key={index}>
              <h3>{application.firma_name}</h3>
              <h6>{application.berufsbezeichnung}</h6>
              <p>{application.status}</p>
              <div className="buttons-applications">
                <button
                  onClick={() => addToInterviews(application.id)}
                  type="button"
                  class="btn btn-primary"
                >
                  Interview Hinzufüg
                </button>
                <button
                  onClick={() => deleteApplication(application.id)}
                  type="button"
                  class="btn btn-danger"
                >
                  Löschen
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Applications;
