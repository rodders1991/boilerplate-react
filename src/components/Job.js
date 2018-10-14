import React from 'react';
import { Form, Text, TextArea } from "react-form";

const Job = () => {
  const vacancies = [

  ];

  return (
    <div>
      <h1 className="job__title">Job Vacancies</h1>
      <div className="job">
        <div className="job__article">
          <p> We always love to hear from enthusiastic people who want to join ruislip stars</p>
          { 
            vacancies && vacancies.length > 0 ?
              <p>Test</p> :
              <h3>We have no vacancies advertised but please do fill out the form if you are interested</h3>
          }
        </div>
        <Form render={({
          submitForm
        }) => (
          <form className="job__form">
              <h4>Name</h4>
              <Text className="job__input" field="name" placeholder='Name' />
              <h4>Email</h4>
              <Text className="job__input" field="email" placeholder='Email' />
              <h4>Phone</h4>
              <Text className="job__input" field="phone" placeholder='Phone' />
              <h4>Message</h4>
              <TextArea className="job__input" field="coverLetter" placeholder='Tell us about yourself' />
              <div className="job__fileContainer">
                <h4>Upload CV</h4>
                <input name="cv" type="file"></input>
              </div>
              <button type="submit" className="job__submit">Send</button>
          </form>
          )} />
        <div className="job__jobs">
        
        </div> 
      </div>
      
    </div>
  );
}

export default Job;
