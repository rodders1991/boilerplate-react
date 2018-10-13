import React from 'react';
import { Form, Text, TextArea, S } from "react-form";
import Map from "google-map-react";

const Contact = () => (
	<div>
		<h1 className="contact__title">Contact us</h1>
		<div className="contact">
			<Form render={({
				submitForm
			}) => (
				<form className="contact__form">
					{/* <h1>Contact us</h1> */}
						<h4>Name</h4>
						<Text className="contact__input" field="name" placeholder='Name' />
						<h4>Email</h4>
						<Text className="contact__input" field="email" placeholder='Email' />
						<h4>Phone</h4>
						<Text className="contact__input" field="phone" placeholder='Phone' />
						<h4>Message</h4>
						<TextArea className="contact__input" field="message" placeholder='Send us a message' />
						<button type="submit" className="contact__submit">Send</button>
				</form>
			)} />
			<div className="contact__map">
				<Map 
					defaultCenter={{lat: 59.95, lng: 30.33}}
					defaultZoom={11}
				/>
			</div>
		</div>
	</div>
);

export default Contact;
