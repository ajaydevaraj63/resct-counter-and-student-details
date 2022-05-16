import React, { useState } from 'react'

const Counter = () => {
      var[num,setNum]=useState(0)
     
   const  Incounter=()=>{
setNum(num++)

      }
const Decreament=()=>{
      setNum(num--)
}



  return (
    <div><div className="row ">
    <div className="col col-12  col-sm-12 col-lg-12">
          <div className="row g-2">
                <div className="col col-12"><label for="" class="form-label">{num}</label></div>
                <div className="col col-12"><input type="button" value="increament" className="btn btn-success" onClick={Incounter}/></div>
      
          <div className="col col-12"><input type="button" value="decreament" className="btn btn-success" onClick={Decreament}/></div>
          </div>
          </div>
    </div>
</div> 
  )
}

export default Counter