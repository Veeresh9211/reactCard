import React from 'react';

export const FrontSide = ({formik, handleClickRef, showBack}) =>{
  let showL = !showBack ? "frontCardShow" : "frontCardAni";
    return(
        <div className={`frontCard ${showL}`}>
          <div className="row">
            <div className="col-sm-6">
              <b><label>Name:</label></b>
            </div>
            <div className="col-sm-6">
             {formik.values.name}&nbsp;
            </div>
            <div className="col-sm-6">
              <b><label>Company:</label></b>
            </div>
            <div className="col-sm-6">
              {formik.values.company}&nbsp;
            </div>
          </div>
          <div className="flipButtonFront">
            {formik.values.name.length > 0 ?
              <button className="editButton" onClick={(e)=>handleClickRef(e)}>Edit Details</button> :
              <button className="editButton" onClick={(e)=>handleClickRef(e)}>Add Details</button>
            }
          </div>
        </div>
    )
}