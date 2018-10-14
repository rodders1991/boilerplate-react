import React from 'react';
import { Form, Text, TextArea } from "react-form";

const {
	GOOGLE_MAP_ID,
} = process.env;

const Contact = () => (
	<div>
		<h1 className="contact__title">Contact us</h1>
		<div className="contact">
			<Form render={({
				submitForm
			}) => (
				<form className="contact__form">
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
			<iframe
				className="contact__map"
				src={`https://www.google.com/maps/embed/v1/place?q=Ruislip%20Stars%20Nursery&key=${GOOGLE_MAP_ID}`}
			/>
		</div>
	</div>
);

export default Contact;

// https://www.google.com/maps/embed/v1/place?q=Ruislip%20Stars%20Nursery&key=