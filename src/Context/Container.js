import React, { useEffect, useState } from "react";
import { MyContext } from "./context";
// import jobOffers from "../api/homePageData";

const dataHomePage = [
  "Werkstudentstelle",
  "Traineeship",
  "Abschlussarbeit",
  "Duales Studium",
  "Festanstellung",
  "Aushilfstätigkeit",
  "Pflichtpraktikum",
  "Projektarbeit",
  "Freiwilliges Praktikum",
  "Berufliche Ausbildung",
];

const applicationsData = [
  {
    id: 1,
    firma_name: "Workwise",
    berufsbezeichnung: "Frontend Entwickler - IT Beratung / Remote (w/m/d)",
    status: "Deine Bewerbung ist unvollständig.",
    interview: false,
  },

  {
    id: 2,
    firma_name: "smark GmbH",
    berufsbezeichnung: "Frontend Entwickler - IT Beratung / Remote (w/m/d)",
    status: "Deine Bewerbung ist unvollständig.",
    interview: false,
  },
  {
    id: 3,
    firma_name: "IT Beratung Schmoldt",
    berufsbezeichnung: "Full Stack Entwickler - IT Beratung / Remote (w/m/d)",
    status: "Deine Bewerbung ist vollständig.",
    interview: false,
  },

  {
    id: 4,
    firma_name: "myposter GmbH",
    berufsbezeichnung: "Frontend Entwickler - IT Beratung / Remote (w/m/d)",
    status: "Deine Bewerbung ist unvollständig.",
    interview: false,
  },
];

const Container = (props) => {
  const [jobOffers, setJobOffers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    setJobOffers([...dataHomePage]);
    setApplications([...applicationsData]);
  }, []);
  console.log(jobOffers);
  console.log(applications);

  return (
    <MyContext.Provider
      value={{
        jobOffers,
        setJobOffers,
        applications,
        setApplications,
        interviews,
        setInterviews,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Container;
