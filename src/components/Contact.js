import React from 'react';
import { Form, Text } from "react-form";

const Contact = () => (
  <div className="contact">
  	 <Form render={({
    	submitForm
  	}) => (
	  	<form className="contact__form">
	  		<h1>Contact us</h1>
	  			<Text field="firstName" placeholder='First Name' />
      			<Text field="lastName" placeholder='Last Name' />
	  	</form>
  	 )} />
  </div>
);

export default Contact;
