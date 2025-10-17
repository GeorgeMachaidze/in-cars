// ContactPage.jsx
import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields");
      return;
    }

    // Here you would send the data to your backend or API
    console.log("Form submitted:", formData);
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </Label>
        <Label>
          Message
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
        </Label>
        <Button type="submit">Send Message</Button>
        {status && <Status>{status}</Status>}
      </Form>
    </Container>
  );
};

export default Contact;

// Styled-components
const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  margin-top: 5px;
  resize: vertical;
  min-height: 100px;
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

const Status = styled.div`
  margin-top: 10px;
  color: green;
  font-weight: 600;
`;
