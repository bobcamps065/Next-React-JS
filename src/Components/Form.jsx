import React from "react";

export default function Icons(){
    return(
      <div className="d-flex justify-content-center w-125">
        <form className="w-25">
          <label  className="fs-4 text-light" htmlFor="">Nome:</label><br />
            <input className="form-control" type="text" name="" id="" /><br />
          <br /><label className="fs-4 text-light" htmlFor="">Email:</label><br />
            <input className="form-control" type="email" name="" id="" /><br />
              
              <div className="">
                <button className="btn btn-primary w-25  m-1 p-1" type="submit">Enviar</button>
                <button className="btn btn-danger w-25  m-1 p-1" type="reset">Reset</button>
              </div>
        </form>
      </div>
  ); 
}