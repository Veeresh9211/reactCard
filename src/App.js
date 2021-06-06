import React, {useState} from 'react';
import './App.scss';
import ReactCardFlip from 'react-card-flip';
import {useFormik} from 'formik';
import { FrontSide } from './components/frontSide';
import { BackSide } from './components/backSide';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({});
  
  const handleClick = (e) =>{
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }

 
  const handleBack = (e) =>{
    e.preventDefault();
    setIsFlipped(!isFlipped);
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
     <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontSide formik={formik} handleClickRef={handleClick}/>
        <BackSide formik={formik} handleBackRef={handleBack}/>
      </ReactCardFlip>
    </div>
  );
}

export default App;
