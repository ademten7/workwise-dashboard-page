import React, { useContext, useRef } from "react";
import { MyContext } from "../../Context/context";
import "./createApplication.scss";
import { useNavigate } from "react-router-dom";

const CreateApplication = () => {
  const navigate = useNavigate();
  const { applications, setApplications } = useContext(MyContext);
  const formRef = useRef();

  const getData = (e) => {
    e.preventDefault();
    const newApplication = {
      id: formRef.current.id.value,
      firma_name: formRef.current.firma.value,
      berufsbezeichnung: formRef.current.beruf.value,
      status: formRef.current.status.value,
    };
    setApplications([...applications, newApplication]);
    //  setApplications({ newApplication }, ...applications);
    navigate("/dashboard");
  };
  return (
    <div className="container">
      <form onSubmit={(e) => getData(e)} ref={formRef}>
        <div class="mb-3">
          <label for="exampleInputText3" class="form-label">
            Id
          </label>
          <input
            name="id"
            type="number"
            class="form-control"
            id="exampleInputText2"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputText1" class="form-label">
            Firma Name
          </label>
          <input
            name="firma"
            type="text"
            class="form-control"
            id="exampleInputText1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputText2" class="form-label">
            Berufsbezeichnung
          </label>
          <input
            name="beruf"
            type="text"
            class="form-control"
            id="exampleInputText3"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputText3" class="form-label">
            Status
          </label>
          <input
            name="status"
            type="text"
            class="form-control"
            id="exampleInputText2"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateApplication;
