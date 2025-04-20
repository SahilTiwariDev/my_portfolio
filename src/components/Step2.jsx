// Step2.jsx
import React from "react";

const Step2 = ({ formData, handleChange, handleNext }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-lg">Great. And your email?</label>
      <input
        required
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="p-3 rounded-lg bg-neutral-700 focus:outline-none"
      />
      <button
        onClick={handleNext}
        disabled={!/\S+@\S+\.\S+/.test(formData.user_email)}
        className={`mt-4 ${
          /\S+@\S+\.\S+/.test(formData.user_email)
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-gray-600 cursor-not-allowed"
        } px-6 py-2 rounded-lg transition`}
      >
        Next
      </button>
    </div>
  );
};

export default Step2;
