import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Datepickerform({ onDateChange }) {
  const [disable, setDisable]= useState(true);
  const [todate, setTodate]= useState([]);
  const [fromdate, setFromdate]= useState([]);

  const [todateformat, setTodateformat]= useState('');
  const [fromdateformat, setFromdateformat]= useState('');
    
  const handletodate= (e)=>{
    const gettodatevalue= e.target.value;
    const setdateformat= gettodatevalue.split('-');
    const settoyear= setdateformat[0];
    const settomonth= setdateformat[1];
    const settodate= setdateformat[2];
    const settodateformat= settoyear + "" + settomonth + "" + settodate;
    setTodate(gettodatevalue);
    setTodateformat(settodateformat);
    setDisable(false);
  }

  const handlefromdate= (e)=>{
    const getfromdatevalue= e.target.value;
    const setfromformat= getfromdatevalue.split("-");
    const setfromyear= setfromformat[0];
    const setfrommonth= setfromformat[1];
    const setfromdate= setfromformat[2];
    const setfromformatdate= setfromyear + "" + setfrommonth + "" + setfromdate;   
    setFromdate(getfromdatevalue);
    setFromdateformat(setfromformatdate);
  }

  const handleSubmit= (e)=>{
    e.preventDefault();

    if(todateformat > fromdateformat) {
      alert("Por favor selecciona una fecha válida");
    } else {
      onDateChange(todate, fromdate);
      //alert("¡Éxito! Por favor configura la URL de la API");
    }
  }

  return(
    <React.Fragment>
      <Container>
        <div className="row fthight">
          <div className="col-sm-8  mt-3">
            <h4 className="mb-4">Por favor seleccione las fechas para la consulta </h4>
            
            <form onSubmit={handleSubmit}>
              <div className="row mb-4 ">
                <label className="col-sm-2 col-form-label">Desde<span className="astriccolor">*</span></label>
                <div className="col-sm-5">
                  <input type="date" className="form-control" name="todate" placeholder="dd-mm-yyyy" onChange={handletodate} />
                  <span className="text-danger"> </span>
                </div>
              </div>

              <div className="row mb-4 ">
                <label className="col-sm-2 col-form-label">Hasta<span className="astriccolor">*</span></label>
                <div className="col-sm-5">
                  <input type="date" className="form-control" name="fromdate" placeholder="dd-mm-yyyy" disabled={disable} onChange={handlefromdate} />
                </div>
              </div>   

              <div className="row mb-4 ">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-5">
                  <button className="btn btn-success"> Consultar </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Datepickerform;
