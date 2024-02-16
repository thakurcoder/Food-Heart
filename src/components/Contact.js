import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [completeMessage, setcompleteMessage] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Your submit logic here
    else{
        setcompleteMessage("Thanks for contacting us")
    }
  };

  return (
    <div className="flex">
      <div>
        <img className="w-8/12" src="https://drinkprime.in/images/desktop-character-contact-us.webp" alt="Contact Us" />
      </div>
      <div className="justify-center mt-30 mr-32 flex flex-col text-center">
        <h1 className="font-bold text-5xl text-slate-800">Contact Us</h1>
        <input
          type="text"
          placeholder="Name"
          className="h-10 w-96 border border-red-900 m-2 p-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="h-10 w-96 border border-red-900 m-2 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <textarea
          type="text"
          placeholder="Type Your Message..."
          className="h-20 w-96 border border-red-900 m-2 p-2"
        />
        <button
          className="bg-orange-500 w-28 h-11 font-bold text-2xl text-white flex justify-center mx-auto rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {completeMessage && <p className="text-green-900 font-bold text-2xl">{completeMessage}</p>}

      </div>
    </div>
  );
};

export default Contact;
