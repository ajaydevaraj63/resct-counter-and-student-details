import React, { useState } from 'react'

const Profile1 = () => {
      

      var[name,setName]=useState("rahul")
      var[age,setage]=useState('24')
      var[college,setcolge]=useState('musaliyar')
      const changeName=()=>{
          setName(
                name="john"
          )
          setage(
                age="34"
          )
          setcolge(
                college="mzc"
          )
         
      }
  return (
     
<div class="row">
            <div class="col col-12  col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div class="row g-3">
                        <div class="col col-6  col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> <label for="" classNameName="form-label">name</label><br/>
                                    <label for="" classNameName="form-label">{name}</label></div>
                        <div class="col col-12  col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" classNameName="form-label">age</label><br/>
                                    <label for="" classNameName="form-label">{age}</label></div>
                        
                        </div>
                        <div class="col col-12  col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" classNameName="form-label">college</label><br/>
                                    <label for="" classNameName="form-label">{college}</label></div>
                        
                        </div>
                        <div class="col col-12  col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <input type="button" value="change name" className="btn btn-success" onClick={changeName}/>

                        </div>
                  </div>
      
      


  );
}

export default Profile1