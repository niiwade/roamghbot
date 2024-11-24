import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { getData } from "./db/db";

function App() {
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceId: null
  });

  const [showForm, setShowForm] = useState(false);

  const handleContactClick = (serviceId) => {
    setLeadData(prev => ({ ...prev, serviceId }));
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to Telegram bot via webhook
    const telegramMessage = `
New Lead:
Service: ${getData().find(s => s.id === leadData.serviceId)?.title}
Name: ${leadData.name}
Email: ${leadData.email}
Phone: ${leadData.phone}
Company: ${leadData.company}
Message: ${leadData.message}
    `;

    // You'll need to set up your webhook URL
    const webhookUrl = 'YOUR_WEBHOOK_URL';
    
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: telegramMessage
      })
    });

    // Clear form and show success message
    setLeadData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      serviceId: null
    });
    setShowForm(false);
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="App">
      {!showForm ? (
        <div className="cards__container">
          {getData().map((item) => (
            <Card
              key={item.id}
              title={item.title}
              Image={item.Image}
              price={item.price}
              description={item.description}
              onContact={() => handleContactClick(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="form__container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={leadData.name}
              onChange={(e) => setLeadData(prev => ({ ...prev, name: e.target.value }))}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={leadData.email}
              onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={leadData.phone}
              onChange={(e) => setLeadData(prev => ({ ...prev, phone: e.target.value }))}
            />
            <input
              type="text"
              placeholder="Company Name"
              value={leadData.company}
              onChange={(e) => setLeadData(prev => ({ ...prev, company: e.target.value }))}
            />
            <textarea
              placeholder="Your Message"
              value={leadData.message}
              onChange={(e) => setLeadData(prev => ({ ...prev, message: e.target.value }))}
            />
            <div className="form__buttons">
              <button type="submit">Send Message</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
