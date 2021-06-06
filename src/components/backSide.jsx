import React from 'react';

export const BackSide = ({formik, handleBackRef}) =>{
    return(
        <div className="backCard">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="form-control"
            />
            {formik.touched.name && formik.errors.name ? <div className="errors">{formik.errors.name}</div> : null}
            
            <label htmlFor="lastName">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company}
              className="form-control"
            />
            {formik.touched.company && formik.errors.company ? <div className="errors">{formik.errors.company}</div> : null}
            <button className="formSubmit" type="submit">Submit</button>
          </form>
          <div className="flipButtonBack">
            <button className="backButton" onClick={(e)=>handleBackRef(e)}>Back</button>
          </div>
        </div>
    )
}