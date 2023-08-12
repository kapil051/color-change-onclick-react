import React, { useState } from "react";
import  ReactDOM  from "react-dom";
 import './index.css'

function App(){

     const [color,update]=useState("#2bc8da");


       function btn_click(){
           update("pink");
       }

         
 


  return (
  <>
     
     <div className="outer" style={{
          backgroundColor:color,
     }}
     >

     <div className="inner">

          <button className="btn"
          onClick={btn_click}>Click Me</button>

     </div>

     </div>

  </>
  )

}

 export default App;