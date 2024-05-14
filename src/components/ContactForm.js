import React, { useState } from 'react';
import '../App.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    address: '',
    phone: ''
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add current form data to submitted data list
    setSubmittedData([...submittedData, formData]);
    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: '',
      address: '',
      phone: ''
    });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="submitted-data">
        <h2>Submitted Data:</h2>
        {submittedData.map((data, index) => (
          <div key={index} className="submitted-data-item">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Address:</strong> {data.address}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Message:</strong> {data.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactForm;
