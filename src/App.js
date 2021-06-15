import React, {useState} from 'react';
import './App.scss';
import ReactCardFlip from 'react-card-flip';
import {useFormik} from 'formik';
import { FrontSide } from './components/frontSide';
import { BackSide } from './components/backSide';

function App() {
  const [formData, setFormData] = useState({});
  const [showBack, setShowBack] = useState(false);
  
  const handleClick = (e) =>{
    e.preventDefault();
    setShowBack(!showBack);
  }

 
  const handleBack = (e) =>{
    e.preventDefault();
    setShowBack(!showBack);
  }

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.company) {
      errors.company = 'Company Name is required';
    } else if (values.company.length > 20) {
      errors.company = 'Must be 20 characters or less';
    }
    return errors;
  };

  const setInitialValue=(name,company)=>{
    return{
      name,
      company
    }
  }
  const formik = useFormik({
    initialValues: setInitialValue('Veeresh','Test123'),
    validate,
    onSubmit: values => {
      setFormData(JSON.stringify(values));
      alert(JSON.stringify(values));
    },
  });
  console.log(formData);
  return (
    <div className="App">
     <h4>React Card Animation Example</h4>
        <div className="container">
          <FrontSide showBack = {showBack} formik={formik} handleClickRef={handleClick}/>
          <BackSide showBack = {showBack} formik={formik} handleBackRef={handleBack}/>
        </div>
    </div>
  );
}

export default App;
