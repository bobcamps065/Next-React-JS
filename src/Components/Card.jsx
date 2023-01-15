import React from "react";
// import imge from ".img/person.jpg";

function Card(){
    return(
      <div className="d-flex justify-content-center">
    
    <div className="card m-3 w-25">
     <div className="bg-primary text-center">Novidades 15/02/2023</div>
       <img src={require('./img/person.jpg')}  />
   <div>
      <h2 className="text-center">Home Office Dev.</h2>
       <p className="m-2 p-2">
        Está na hora de você começar aprender programação basica,
        Do zero(0) ao avançado, 6 meses de estudo.
       </p>
   </div>
     <div className="p-2 m-2 d-flex justify-content-center">
        <button className="btn btn-primary m-2" type="submit">Send</button>
        <button className="btn btn-primary m-2" type="submit">More</button>
     </div>
  </div>

  <div className="card m-3 w-25">
    <div className="bg-primary text-center">Novidades 13/02/2023</div>
   <img src={require('./img/js.jpeg')}  />
   <div>
      <h2 className="text-center">Home Office Dev.</h2>
       <p className="m-2 p-2">
        Está na hora de você começar aprender programação basica,
        Do zero(0) ao avançado, 6 meses de estudo.
       </p>
   </div>

     <div className="p-2 m-2 d-flex justify-content-center">
        <button className="btn btn-primary m-2" type="submit">Send</button>
        <button className="btn btn-primary m-2" type="submit">More</button>
     </div>
  </div>

  <div className="card m-3 w-25">
    <div className="bg-primary text-center">Novidades 10/02/2023</div>
   <img src={require('./img/react-1.jpeg')}  />
   <div>
      <h2 className="text-center">Home Office Dev.</h2>
       <p className="m-2 p-2">
        Está na hora de você começar aprender programação basica,
        Do zero(0) ao avançado, 6 meses de estudo.
       </p>
   </div>
     <div className="p-2 m-2 d-flex justify-content-center">
        <button className="btn btn-primary m-2" type="submit">Send</button>
        <button className="btn btn-primary m-2" type="submit">More</button>
     </div>
  </div>
      </div>
  
   )
}

export default Card;
