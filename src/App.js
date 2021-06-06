import React, {useState} from 'react';
import './App.scss';
import ReactCardFlip from 'react-card-flip';
import {Form, Button} from 'react-bootstrap';
function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) =>{
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }
  const [formObject, setFormObject] =  useState({name: "Veeresh", company: "Test123"});

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
              {formObject.name}
            </div>
            <div className="col-md-6">
              <label>Company:</label>
            </div>
            <div className="col-md-6">
              {formObject.company}
            </div>
            
          </div>
          <button className="editButton" onClick={(e)=>handleClick(e)}>Edit</button>
        </div>

        <div className="backCard">
          <Form>
            <Form.Group >
              <Form.Label>Name</Form.Label>
              <input placeholder="Enter Name" value={formObject.name} type="text" className="form-control"/>
            </Form.Group>
            <Form.Group >
              <Form.Label>Company</Form.Label>
              <input placeholder="Enter Company" value={formObject.company} type="text" className="form-control"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div>
            <button className="backButton" onClick={(e)=>handleClick(e)}>Back</button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default App;
