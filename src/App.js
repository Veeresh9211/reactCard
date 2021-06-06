import React, {useState} from 'react';
import './App.scss';
import ReactCardFlip from 'react-card-flip';
import {useFormik} from 'formik';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) =>{
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }

 
  const handleBack = (e) =>{
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }

  


  

  return (
    <div className="App">
     <h3>React Card Animation Example</h3>
     <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="frontCard">
          <div className="row">
            <div className="col-md-6">
              <label>Name:</label>
            </div>
            <div className="col-md-6">
              {formik.values.name}
            </div>
            <div className="col-md-6">
              <label>Company:</label>
            </div>
            <div className="col-md-6">
              {formik.values.company}
            </div>
            
          </div>
          {formik.values.name.length > 0 ?
          <button className="editButton" onClick={(e)=>handleClick(e)}>Edit Details</button> :
          <button className="editButton" onClick={(e)=>handleClick(e)}>Add Details</button>
}
        </div>

        <div className="backCard">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
            />
            {formik.errors.name ? <div className="errors">{formik.errors.name}</div> : null}
            <label htmlFor="lastName">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.company}
              className="form-control"
            />
            {formik.errors.company ? <div className="errors">{formik.errors.company}</div> : null}
            <button className="formSubmit" type="submit">Submit</button>
          </form>
          <div>
            <button className="backButton" onClick={(e)=>handleBack(e)}>Back</button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default App;
