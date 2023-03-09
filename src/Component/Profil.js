import React from 'react'
import PropTypes from "prop-types"; 
import img from './img.png';

function Profil(props) {
  return (
    <div>

     <h1 style={{color :"white" ,paddingTop:"50px" }}>FullName: {props.FullName}</h1>
     <h2 style={{color : "white" , }}>Bio: {props.Bio}</h2>
      <h3 style={{color : "white" }}>Profession : { props.Profession}</h3>
      <img src={img} style={{height:"100px", width:"100px"}}></img>
      <br></br>
      <button onClick={props.handleName} style={{color:"white" , backgroundColor:"blue" ,width:"70px", height:"30px" }}>click</button>
    </div>
  )

}



Profil.defaultProps = {
    FullName:"jamila guebli",
        Bio:"reactjs student",
        Profession:"front end developer",
       
  }



export default Profil
