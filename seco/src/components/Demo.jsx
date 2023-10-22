import React, { useState } from "react";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    hasWhatsAppBusiness: false,
    bestCustomers: "",
    showVisibilityMessage: false,
    visibilityChoice: "", // New state to store visibility choice
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to an API or perform other actions.
    console.log("Form data submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppBusiness = (value) => {
    setFormData({ ...formData, hasWhatsAppBusiness: value });
  };

  const handleBestCustomers = (value) => {
    setFormData({ ...formData, bestCustomers: value });
  };

  const handleContinue = () => {
    setFormData({ ...formData, showVisibilityMessage: true });
  };

  const handleVisibilityChoice = (value) => {
    setFormData({ ...formData, visibilityChoice: value });
  };

  const answerStyle = {
    cursor: "pointer",
    padding: "10px",
    margin: "5px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    transition: "background-color 0.3s ease-in",
  };

  const radioContainerStyle = {
    marginBottom: "10px",
  };

  const continueButtonStyle = {
    backgroundColor: "#98ff98",
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const marginBottomStyle = {
    marginBottom: "10px",
  };

  const thankYouStyle = {
    backgroundColor: "#3EB489",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  };

  const displayThankYouMessage = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md" style={marginBottomStyle}>
       
        <p>----- Thanks for your help, we will reach out to you as soon as possible -----</p>
        <br></br> <br></br>
        <p>About SECO</p>
        <p>
          At SECO, our goal is to help you sell your products faster by giving your business visibility to thousands of customers who are interested in your products and services.
          We leverage our ecosystem to display your products to relevant customers who are willing to purchase your goods and services.
        </p>
      </div>
    );
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {!formData.hasWhatsAppBusiness ? (
          <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field with-border"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field with-border"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="text-gray-700">WhatsApp/Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="input-field with-border"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="text-gray-700">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="input-field with-border"
              />
            </div>

            <br />
            <p>Do you have a business on WhatsApp?</p>

            <div className="mb-4 flex justify-between">
              <button
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-1/2"
                onClick={() => handleWhatsAppBusiness(true)}
              >
                Yes
              </button>
              <button
                type="button"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-1/2"
                onClick={() => handleWhatsAppBusiness(false)}
              >
                No
              </button>
            </div>
          </form>
        ) : !formData.showVisibilityMessage ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">Who are your best customers?</p>
            <ul style={radioContainerStyle}>
              <li>
                <label>
                  <input
                    type="radio"
                    name="bestCustomers"
                    value="Friends & Family"
                    onClick={() => handleBestCustomers("Friends & Family")}
                  />
                  <span
                    style={formData.bestCustomers === "Friends & Family" ? { ...answerStyle, backgroundColor: "mintcream" } : answerStyle}
                    className="radio-label"
                  >
                    Friends & Family
                  </span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="bestCustomers"
                    value="Strangers From Referrals"
                    onClick={() => handleBestCustomers("Strangers From Referrals")}
                  />
                  <span
                    style={formData.bestCustomers === "Strangers From Referrals" ? { ...answerStyle, backgroundColor: "mintcream" } : answerStyle}
                    className="radio-label"
                  >
                    Strangers From Referrals
                  </span>
                </label>
              </li>
            </ul>
            <button style={continueButtonStyle} onClick={handleContinue}>
              Continue
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md" style={marginBottomStyle}>
            {displayThankYouMessage()}
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
